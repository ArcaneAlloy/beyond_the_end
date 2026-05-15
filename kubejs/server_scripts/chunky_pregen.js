// priority: 0
// ============================================================
// Ender's Journey - Pregen Adaptativo y Progresivo del Overworld
// ============================================================
// FASE 1 — Todos en el Realm:
//   Chunky pregena radio 512 desde 0,0 (cubre spawn -250/+250)
//
// FASE 2 — Primer jugador llega al Overworld:
//   El mod ya escribió el spawn real en ej_spawn_x / ej_spawn_z.
//   KubeJS relanza Chunky desde ese centro real y continúa
//   los radios progresivos: 512 → 612 → ... → 5000 bloques.
//
// PAUSAS — Chunky para cuando alguien sale del Realm o del
//   Overworld a otra dimensión, y reanuda cuando vuelven.
//
// REQUISITOS: Chunky 1.3.38 · KubeJS 1902.6.2 · Forge 1.19.2
// UBICACIÓN: kubejs/server_scripts/chunky_pregen.js
// ============================================================

const OVERWORLD    = "minecraft:overworld";
const REALM        = "ender_journey:the_forgotten_realm";
const RADIUS_TAG   = "ej_pregen_radius";
const DONE_TAG     = "ej_pregen_done";
const CENTER_SET_TAG = "ej_pregen_center_set"; // flag: ya usamos el spawn real
const RADIUS_START = 512;
const RADIUS_STEP  = 100;
const RADIUS_MAX   = 5000;

let chunkyRunning         = false;
let currentRadius         = 0;
let stateLoaded           = false;
let pausedByUs            = false;
let consecutiveIdleChecks = 0;
let lastDimension         = {};

// ─── Scoreboard ───────────────────────────────────────────────

function getScore(server, tag) {
    let obj = server.scoreboard.getObjective(tag);
    if (obj === null) return 0;
    return server.scoreboard.getOrCreatePlayerScore("WORLD", obj).score;
}

function setScore(server, tag, value) {
    let obj = server.scoreboard.getObjective(tag);
    if (obj === null) {
        server.runCommandSilent("scoreboard objectives add " + tag + " dummy");
        obj = server.scoreboard.getObjective(tag);
    }
    if (obj !== null) {
        server.scoreboard.getOrCreatePlayerScore("WORLD", obj).score = value;
    }
}

function isPregenDone(server) {
    return getScore(server, DONE_TAG) >= 1;
}

function isCenterSet(server) {
    return getScore(server, CENTER_SET_TAG) >= 1;
}

function loadState(server) {
    if (stateLoaded) return;
    let saved = getScore(server, RADIUS_TAG);
    currentRadius = (saved > 0) ? saved : RADIUS_START;
    stateLoaded = true;
    console.info("[EJ-Pregen] Estado cargado. Radio: " + currentRadius + " bloques");
}

// ─── Centro del pregen ────────────────────────────────────────

function getCenter(server) {
    // Fase 2: usar spawn real escrito por el mod
    if (isCenterSet(server)) {
        let cx = getScore(server, "ej_spawn_x");
        let cz = getScore(server, "ej_spawn_z");
        return { x: cx, z: cz };
    }
    // Fase 1: centro 0,0 cubre rango de spawn -250/+250
    return { x: 0, z: 0 };
}

// ─── Dimensión ────────────────────────────────────────────────

function getPlayerDim(player) {
    try { return player.level.dimension.toString(); }
    catch (e) { return "unknown"; }
}

function allPlayersInRealm(server) {
    let players = server.playerList.players;
    if (players.length === 0) return false;
    return players.every(function(p) { return getPlayerDim(p) === REALM; });
}

function anyPlayerOutsideRealm(server) {
    return server.playerList.players.some(function(p) {
        return getPlayerDim(p) !== REALM;
    });
}

// ─── Control Chunky ───────────────────────────────────────────

function launchRadius(server, radius) {
    let center = getCenter(server);

    server.runCommandSilent("chunky cancel");
    server.runCommandSilent("chunky world " + OVERWORLD);
    server.runCommandSilent("chunky center " + center.x + " " + center.z);
    server.runCommandSilent("chunky radius " + radius);
    server.runCommandSilent("chunky start");

    setScore(server, RADIUS_TAG, radius);
    currentRadius         = radius;
    chunkyRunning         = true;
    pausedByUs            = false;
    consecutiveIdleChecks = 0;

    console.info("[EJ-Pregen] Radio " + radius + " bloques arrancado. Centro: " + center.x + "," + center.z);
}

function startOrResume(server) {
    if (chunkyRunning || isPregenDone(server)) return;
    loadState(server);

    if (pausedByUs) {
        server.runCommandSilent("chunky continue");
        chunkyRunning         = true;
        pausedByUs            = false;
        consecutiveIdleChecks = 0;
        console.info("[EJ-Pregen] Reanudado (radio " + currentRadius + " bloques)");
    } else {
        launchRadius(server, currentRadius);
    }
}

function pauseByUs(server) {
    if (!chunkyRunning) return;
    server.runCommandSilent("chunky pause");
    chunkyRunning         = false;
    pausedByUs            = true;
    consecutiveIdleChecks = 0;
    console.info("[EJ-Pregen] Pausado (jugador fuera del Realm/Overworld).");
}

function advanceToNextRadius(server) {
    let next = currentRadius + RADIUS_STEP;
    chunkyRunning         = false;
    pausedByUs            = false;
    consecutiveIdleChecks = 0;

    if (next > RADIUS_MAX) {
        setScore(server, DONE_TAG, 1);
        console.info("[EJ-Pregen] ¡Completado! Radio máximo " + RADIUS_MAX + " bloques.");
        return;
    }

    console.info("[EJ-Pregen] Radio " + currentRadius + " terminado → " + next + " bloques");
    launchRadius(server, next);
}

// ─── Actualizar centro cuando el jugador llega al Overworld ───

function onPlayerArrivedAtOverworld(player, server) {
    if (isCenterSet(server)) return; // ya lo hicimos

    // Leer spawn real escrito por el mod en BKPortalForcer
    let cx = getScore(server, "ej_spawn_x");
    let cz = getScore(server, "ej_spawn_z");

    if (cx === 0 && cz === 0) {
        // El mod aún no escribió las coordenadas — esperar al siguiente tick
        console.info("[EJ-Pregen] Spawn real aún no disponible, esperando...");
        return;
    }

    // Marcar que ya tenemos el centro real
    setScore(server, CENTER_SET_TAG, 1);
    console.info("[EJ-Pregen] Centro actualizado al spawn real: " + cx + "," + cz);

    // Relanzar Chunky desde el radio actual pero con el nuevo centro
    // Cancelamos la tarea anterior (estaba pausada) y relanzamos
    chunkyRunning = false;
    pausedByUs    = false;
    launchRadius(server, currentRadius);
}

function evaluateState(server) {
    if (isPregenDone(server)) return;
    let players = server.playerList.players;
    if (players.length === 0) { pauseByUs(server); return; }

    if (anyPlayerOutsideRealm(server)) {
        pauseByUs(server);
    } else if (allPlayersInRealm(server)) {
        startOrResume(server);
    }
}

// ─── Tick — detección de fin de Chunky ───────────────────────

ServerEvents.tick(function(event) {
    let server = event.server;
    if (server.tickCount % 100 !== 0) return;
    if (isPregenDone(server)) return;
    if (!allPlayersInRealm(server)) return;

    loadState(server);

    if (chunkyRunning && !pausedByUs) {
        consecutiveIdleChecks++;
        if (consecutiveIdleChecks >= 3) {
            consecutiveIdleChecks = 0;
            advanceToNextRadius(server);
        }
    } else if (!chunkyRunning && !pausedByUs) {
        consecutiveIdleChecks = 0;
        startOrResume(server);
    }
});

// ─── Eventos de jugador ───────────────────────────────────────

// Flag para saber qué jugadores ya llegaron al Overworld
let arrivedAtOverworld = {};

PlayerEvents.tick(function(event) {
    let player = event.player;
    let server = player.server;
    if (!server || isPregenDone(server)) return;

    let name   = player.username;
    let dim    = getPlayerDim(player);

    if (lastDimension[name] !== dim) {
        lastDimension[name]   = dim;
        consecutiveIdleChecks = 0;
        console.info("[EJ-Pregen] " + name + " → " + dim);

        // Detectar primera llegada al Overworld
        if (dim === OVERWORLD && !arrivedAtOverworld[name]) {
            arrivedAtOverworld[name] = true;
            loadState(server);
            // Pequeño delay — el mod escribe el scoreboard justo antes
            // del teletransporte, pero por seguridad esperamos 1 tick más.
            // Como evaluateState pausa Chunky al salir del Realm,
            // llamamos directamente a onPlayerArrivedAtOverworld.
            onPlayerArrivedAtOverworld(player, server);
        }

        evaluateState(server);
    }
});

PlayerEvents.loggedIn(function(event) {
    let player = event.player;
    lastDimension[player.username] = getPlayerDim(player);
    consecutiveIdleChecks = 0;
    // Si ya llegó al Overworld antes (mundo existente), marcarlo
    if (isCenterSet(event.server)) {
        arrivedAtOverworld[player.username] = true;
    }
});

PlayerEvents.loggedOut(function(event) {
    let server = event.player.server;
    delete lastDimension[event.player.username];
    consecutiveIdleChecks = 0;
    if (!server || isPregenDone(server)) return;

    if (chunkyRunning) {
        server.runCommandSilent("chunky pause");
        chunkyRunning = false;
        console.info("[EJ-Pregen] Pausado (jugador desconectado).");
    }
    pausedByUs = false;
});

// ============================================================
// VER RADIO ACTUAL:
//   /scoreboard players get WORLD ej_pregen_radius
//
// VER CENTRO ACTUAL:
//   /scoreboard players get WORLD ej_spawn_x
//   /scoreboard players get WORLD ej_spawn_z
//
// COMPLETAR MANUALMENTE:
//   /scoreboard players set WORLD ej_pregen_done 1
//
// RESETEAR TODO:
//   /scoreboard players reset WORLD ej_pregen_radius
//   /scoreboard players reset WORLD ej_pregen_done
//   /scoreboard players reset WORLD ej_pregen_center_set
//   (+ reiniciar servidor)
// ============================================================
