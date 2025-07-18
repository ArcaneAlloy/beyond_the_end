/////////////////////////////////////
// Complementary Shaders by EminGT //
// With Euphoria Patches by SpacEagle17 //
/////////////////////////////////////

//Common//
#if defined(THE_FORGOTTEN)
    #include "/lib/common_the_forgotten.glsl"
#elif defined(NEW_END)
    #include "/lib/common_new_end.glsl"
#else
    #include "/lib/common.glsl"
#endif
#include "/lib/shaderSettings/water.glsl"
#include "/lib/shaderSettings/shockwave.glsl"
#include "/lib/shaderSettings/emissionMult.glsl"
#define WAVING_WATER_VERTEX

//////////Fragment Shader//////////Fragment Shader//////////Fragment Shader//////////
#ifdef FRAGMENT_SHADER

flat in int mat;
flat in int blockLightEmission;

in vec2 texCoord;
in vec2 lmCoord;
in vec2 signMidCoordPos;
flat in vec2 absMidCoordPos;

flat in vec3 upVec, sunVec, northVec, eastVec;
in vec3 playerPos;
in vec3 normal;
in vec3 viewVector;
in vec3 atMidBlock;
in vec3 blockUV;

in vec4 glColor;

#if WATER_STYLE >= 2 || (RAIN_PUDDLES >= 1 || defined SPOOKY_RAIN_PUDDLE_OVERRIDE) && WATER_STYLE == 1 && WATER_MAT_QUALITY >= 2 || defined GENERATED_NORMALS || defined CUSTOM_PBR
    flat in vec3 binormal, tangent;
#endif

#ifdef POM
    in vec4 vTexCoordAM;
#endif

// #if SEASONS == 1 || SEASONS == 4 || defined MOSS_NOISE_INTERNAL || defined SAND_NOISE_INTERNAL
//     flat in ivec2 pixelTexSize;
// #endif

//Pipeline Constants//

//Common Variables//
float NdotU = dot(normal, upVec);
float NdotUmax0 = max(NdotU, 0.0);
float SdotU = dot(sunVec, upVec);
float sunFactor = SdotU < 0.0 ? clamp(SdotU + 0.375, 0.0, 0.75) / 0.75 : clamp(SdotU + 0.03125, 0.0, 0.0625) / 0.0625;
float sunVisibility = clamp(SdotU + 0.0625, 0.0, 0.125) / 0.125;
float sunVisibility2 = sunVisibility * sunVisibility;
float shadowTimeVar1 = abs(sunVisibility - 0.5) * 2.0;
float shadowTimeVar2 = shadowTimeVar1 * shadowTimeVar1;
float shadowTime = shadowTimeVar2 * shadowTimeVar2;

#ifdef OVERWORLD
    vec3 lightVec = sunVec * ((timeAngle < 0.5325 || timeAngle > 0.9675) ? 1.0 : -1.0);
#else
    vec3 lightVec = sunVec;
#endif

#if WATER_STYLE >= 2 || (RAIN_PUDDLES >= 1 || defined SPOOKY_RAIN_PUDDLE_OVERRIDE) && WATER_STYLE == 1 && WATER_MAT_QUALITY >= 2 || defined GENERATED_NORMALS || defined CUSTOM_PBR
    mat3 tbnMatrix = mat3(
        tangent.x, binormal.x, normal.x,
        tangent.y, binormal.y, normal.y,
        tangent.z, binormal.z, normal.z
    );
#endif

//Common Functions//
float GetLinearDepth(float depth) {
    return (2.0 * near) / (far + near - depth * (far - near));
}

//Includes//
#include "/lib/util/dither.glsl"
#include "/lib/util/spaceConversion.glsl"
#include "/lib/lighting/mainLighting.glsl"
#include "/lib/atmospherics/fog/mainFog.glsl"

#if defined OVERWORLD_BEAMS && defined OVERWORLD
    float vlFactor = 0.0;
#endif

#ifdef OVERWORLD
    #include "/lib/atmospherics/sky.glsl"
#endif

#if !defined ATMOSPHERIC_FOG && !defined BORDER_FOG
    #include "/lib/colors/skyColors.glsl"
#endif

#if defined AURORA_INFLUENCE || (WATER_REFLECT_QUALITY >= 0 && defined SKY_EFFECT_REFLECTION && defined OVERWORLD && AURORA_STYLE > 0)
    #include "/lib/atmospherics/auroraBorealis.glsl"
#endif

#if WATER_REFLECT_QUALITY >= 0
    #if defined SKY_EFFECT_REFLECTION && defined OVERWORLD
        #include "/lib/atmospherics/stars.glsl"
        #ifdef NIGHT_NEBULA
            #include "/lib/atmospherics/nightNebula.glsl"
        #endif

        #ifdef VL_CLOUDS_ACTIVE
            #include "/lib/atmospherics/clouds/mainClouds.glsl"
        #endif
    #endif

    #include "/lib/materials/materialMethods/reflections.glsl"
#endif

#ifdef TAA
    #include "/lib/antialiasing/jitter.glsl"
#endif

#if defined GENERATED_NORMALS || defined COATED_TEXTURES || WATER_STYLE >= 2
    #include "/lib/util/miplevel.glsl"
#endif

#ifdef GENERATED_NORMALS
    #include "/lib/materials/materialMethods/generatedNormals.glsl"
#endif

#if IPBR_EMISSIVE_MODE != 1
    #include "/lib/materials/materialMethods/customEmission.glsl"
#endif

#ifdef CUSTOM_PBR
    #include "/lib/materials/materialHandling/customMaterials.glsl"
#endif

#if defined ATM_COLOR_MULTS || defined SPOOKY
    #include "/lib/colors/colorMultipliers.glsl"
#endif
#ifdef MOON_PHASE_INF_ATMOSPHERE
    #include "/lib/colors/moonPhaseInfluence.glsl"
#endif

#ifdef COLOR_CODED_PROGRAMS
    #include "/lib/misc/colorCodedPrograms.glsl"
#endif

#ifdef PORTAL_EDGE_EFFECT
    #include "/lib/misc/voxelization.glsl"
#endif

#ifdef CONNECTED_GLASS_EFFECT
    #include "/lib/materials/materialMethods/connectedGlass.glsl"
#endif

#ifdef SS_BLOCKLIGHT
    #include "/lib/lighting/coloredBlocklight.glsl"
#endif

#if SEASONS > 0 || defined MOSS_NOISE_INTERNAL || defined SAND_NOISE_INTERNAL
    #include "/lib/materials/overlayNoise.glsl"
#endif

#if PIXEL_WATER > 0
    #include "/lib/materials/materialMethods/waterProcedureTexture.glsl"
#endif

#if SHOCKWAVE > 0
    #include "/lib/misc/shockwave.glsl"
#endif

//Program//
void main() {
    #if SHOCKWAVE > 0
        vec4 colorP = doShockwave(playerPos + relativeEyePosition, texCoord);
    #else
        vec4 colorP = texture2D(tex, texCoord);
    #endif
    vec4 color = colorP * vec4(glColor.rgb, 1.0);

    vec3 screenPos = vec3(gl_FragCoord.xy / vec2(viewWidth, viewHeight), gl_FragCoord.z);
    #ifdef TAA
        vec3 viewPos = ScreenToView(vec3(TAAJitter(screenPos.xy, -0.5), screenPos.z));
    #else
        vec3 viewPos = ScreenToView(screenPos);
    #endif
    float lViewPos = length(viewPos);

    float dither = Bayer64(gl_FragCoord.xy);
    #ifdef TAA
        dither = fract(dither + goldenRatio * mod(float(frameCounter), 3600.0));
    #endif

    #ifdef LIGHT_COLOR_MULTS
        lightColorMult = GetLightColorMult();
    #endif
    #if defined ATM_COLOR_MULTS || defined SPOOKY
        atmColorMult = GetAtmColorMult();
        sqrtAtmColorMult = sqrt(atmColorMult);
    #endif

    float overlayNoiseIntensity = 1.0;
    float snowNoiseIntensity = 1.0;
    float sandNoiseIntensity = 1.0;
    float mossNoiseIntensity = 1.0;
    float overlayNoiseTransparentOverwrite = 0.0;
    float overlayNoiseAlpha = 1.0;
    float overlayNoiseFresnelMult = 1.0;
    float IPBRMult = 1.0;
    bool isFoliage = false;
    vec3 dhColor = vec3(1.0);
    float purkinjeOverwrite = 0.0;

    #ifdef VL_CLOUDS_ACTIVE
        float cloudLinearDepth = texelFetch(gaux1, texelCoord, 0).r;

        if (pow2(cloudLinearDepth + OSIEBCA * dither) * renderDistance < min(lViewPos, renderDistance)) discard;
    #endif

    #if WATER_MAT_QUALITY >= 3
        float materialMask = 0.0;
    #endif

    vec3 nViewPos = normalize(viewPos);
    float VdotU = dot(nViewPos, upVec);
    float VdotS = dot(nViewPos, sunVec);
    float VdotN = dot(nViewPos, normal);
    vec3 worldPos = playerPos + cameraPosition;

    // Materials
    vec4 translucentMult = vec4(1.0);
    bool noSmoothLighting = false, noDirectionalShading = false, translucentMultCalculated = false, noGeneratedNormals = false;
    int subsurfaceMode = 0;
    float smoothnessG = 0.0, highlightMult = 1.0, reflectMult = 0.0, emission = 0.0;
    vec2 lmCoordM = lmCoord;
    vec3 normalM = VdotN > 0.0 ? -normal : normal; // Inverted Iris Water Normal Workaround
    vec3 geoNormal = normalM;
    vec3 worldGeoNormal = normalize(ViewToPlayer(geoNormal * 10000.0));
    vec3 shadowMult = vec3(1.0);
    float fresnel = clamp(1.0 + dot(normalM, nViewPos), 0.0, 1.0);
    #ifdef IPBR
        #include "/lib/materials/materialHandling/translucentMaterials.glsl"

        #ifdef GENERATED_NORMALS
            if (!noGeneratedNormals) GenerateNormals(normalM, colorP.rgb * colorP.a * 1.5);
        #endif

        #if IPBR_EMISSIVE_MODE != 1
            emission = GetCustomEmissionForIPBR(color, emission);
        #endif
    #else
        #ifdef CUSTOM_PBR
            float smoothnessD = 0.0;
            float materialMaskPh = 0.0;
            GetCustomMaterials(color, normalM, lmCoordM, NdotU, shadowMult, smoothnessG, smoothnessD, highlightMult, emission, materialMaskPh, viewPos, lViewPos);
            reflectMult = smoothnessD;
        #endif

        if (mat == 32000) { // Water
            #ifdef SHADER_WATER
                #include "/lib/materials/specificMaterials/translucents/water.glsl"
            #endif
            overlayNoiseIntensity = 0.0;
            overlayNoiseFresnelMult = 0.0;
            IPBRMult = 0.0;
            overlayNoiseAlpha = 0.0;
        } else if (mat == 30020) { // Nether Portal
            #ifdef SPECIAL_PORTAL_EFFECTS
                #include "/lib/materials/specificMaterials/translucents/netherPortal.glsl"
            #endif
            overlayNoiseIntensity = 0.0;
        } else if (mat == 32016) { // Beacon
            overlayNoiseAlpha = 0.8;
            mossNoiseIntensity = 0.5;
            sandNoiseIntensity = 0.5;
        }
    #endif

    #if WATER_MAT_QUALITY >= 3 && SELECT_OUTLINE == 4
        int materialMaskInt = int(texelFetch(colortex6, texelCoord, 0).g * 255.1);
        if (materialMaskInt == 252) {
            materialMask = OSIEBCA * 252.0; // Versatile Selection Outline
        }
    #endif
    
    #if defined MOSS_NOISE_INTERNAL || defined SAND_NOISE_INTERNAL
        #include "/lib/materials/overlayNoiseApply.glsl"
    #endif
    #if SEASONS > 0
        #include "/lib/materials/seasons.glsl"
    #endif

    #ifdef REFLECTIVE_WORLD
        smoothnessG = 1.0;
    #endif

    #if MONOTONE_WORLD > 0
        #if MONOTONE_WORLD == 1
            color.rgb = vec3(1.0);
        #elif MONOTONE_WORLD == 2
            color.rgb = vec3(0.0);
        #else
            color.rgb = vec3(0.5);
        #endif
    #endif

    // Blending
    if (!translucentMultCalculated)
        translucentMult = vec4(mix(vec3(0.666), color.rgb * (1.0 - pow2(pow2(color.a))), color.a), 1.0);

    translucentMult.rgb = mix(translucentMult.rgb, vec3(1.0), min1(pow2(pow2(lViewPos / far))));

    #ifdef SS_BLOCKLIGHT
        blocklightCol = ApplyMultiColoredBlocklight(blocklightCol, screenPos, playerPos, lmCoord.x);
    #endif

    #if defined SPOOKY && BLOOD_MOON > 0
        auroraSpookyMix = getBloodMoon(moonPhase, sunVisibility);
        ambientColor *= 1.0 + auroraSpookyMix * vec3(2.0, -1.0, -1.0);
    #endif
    #ifdef AURORA_INFLUENCE
        ambientColor = mix(AuroraAmbientColor(ambientColor, viewPos), ambientColor, auroraSpookyMix);
    #endif

    bool isLightSource = false;
    if (lmCoord.x > 0.99 || blockLightEmission > 0) { // Mod support for light level 15 (and all light levels with iris 1.7) light sources and blockID set by user
        if (mat == 0) {
            emission = DoAutomaticEmission(noSmoothLighting, noDirectionalShading, color.rgb, lmCoord.x, blockLightEmission, 0.0);
        }
        isLightSource = true;
        overlayNoiseIntensity = 0.0;
    }

    emission *= EMISSION_MULTIPLIER;

    // Lighting
    DoLighting(color, shadowMult, playerPos, viewPos, lViewPos, geoNormal, normalM, dither,
               worldGeoNormal, lmCoordM, noSmoothLighting, noDirectionalShading, false,
               false, subsurfaceMode, smoothnessG, highlightMult, emission, purkinjeOverwrite, isLightSource);

    #ifdef SS_BLOCKLIGHT
        vec3 normalizedColor = normalize(color.rgb);

        vec3 opaquelightAlbedo = texture2D(colortex8, screenPos.xy).rgb;
        opaquelightAlbedo *= normalizedColor;

        if (mat == 30012 || mat == 30016 || mat >= 31000 && mat < 32000 || mat == 32004 ) // Slime, Honey, Glass, Ice
            opaquelightAlbedo = mix(normalizedColor, opaquelightAlbedo, min1(GetLuminance(opaquelightAlbedo)));

        vec3 lightAlbedo = normalizedColor * min1(emission);

        lightAlbedo = mix(opaquelightAlbedo, lightAlbedo, color.a);
    #endif

    float skyLightFactor = pow2(max(lmCoordM.y - 0.7, 0.0) * 3.33333);
    // Reflections
    #if WATER_REFLECT_QUALITY >= 0
        #ifdef LIGHT_COLOR_MULTS
            highlightColor *= lightColorMult;
        #endif
        #ifdef MOON_PHASE_INF_REFLECTION
            highlightColor *= pow2(moonPhaseInfluence);
        #endif
        #ifdef SPOOKY
            highlightColor *= 0.3;
        #endif

        float fresnelM = (pow3(fresnel) * 0.85 + 0.15) * reflectMult;

        #if SHADOW_QUALITY > -1 && WATER_REFLECT_QUALITY >= 2 && WATER_MAT_QUALITY >= 2
            skyLightFactor = max(skyLightFactor, min1(dot(shadowMult, shadowMult)));
        #endif

        #ifdef PIXELATED_WATER_REFLECTIONS
        vec2 texelOffset = ComputeTexelOffset(tex, texCoord);
        vec4 reflection = GetReflection(normalM, viewPos.xyz, nViewPos, playerPos, lViewPos, -1.0,
                                        depthtex1, dither, skyLightFactor, fresnel,
                                        smoothnessG, geoNormal, color.rgb, shadowMult, highlightMult, texelOffset);
        #else
        vec4 reflection = GetReflection(normalM, viewPos.xyz, nViewPos, playerPos, lViewPos, -1.0,
                                        depthtex1, dither, skyLightFactor, fresnel,
                                        smoothnessG, geoNormal, color.rgb, shadowMult, highlightMult);
        #endif

        color.rgb = mix(color.rgb, reflection.rgb, fresnelM);
    #endif
    ////

    #ifdef COLOR_CODED_PROGRAMS
        ColorCodeProgram(color, mat);
    #endif

    float sky = 0.0;
    DoFog(color.rgb, sky, lViewPos, playerPos, VdotU, VdotS, dither);
    color.a *= 1.0 - sky;

    float waterSSBLAlpha = 1.0;
    #ifdef ENTITIES_ARE_LIGHT
        waterSSBLAlpha = 0.0;
    #endif

    /* DRAWBUFFERS:03 */
    gl_FragData[0] = color;
    gl_FragData[1] = vec4(1.0 - translucentMult.rgb, translucentMult.a);

    // supposed to be #if WATER_MAT_QUALITY >= 3 but optifine bad
    #if DETAIL_QUALITY >= 3
        /* DRAWBUFFERS:036 */
        gl_FragData[2] = vec4(0.0, materialMask, skyLightFactor, lmCoord.x + clamp01(purkinjeOverwrite) + clamp01(emission));

        #ifdef SS_BLOCKLIGHT
            /* DRAWBUFFERS:0368 */
            gl_FragData[3] = vec4(lightAlbedo, waterSSBLAlpha);
        #endif
    #elif defined SS_BLOCKLIGHT
        /* DRAWBUFFERS:038 */
        gl_FragData[2] = vec4(lightAlbedo, waterSSBLAlpha);
    #endif
}

#endif

//////////Vertex Shader//////////Vertex Shader//////////Vertex Shader//////////
#ifdef VERTEX_SHADER

flat out int mat;
flat out int blockLightEmission;

out vec2 texCoord;
out vec2 lmCoord;
out vec2 signMidCoordPos;
flat out vec2 absMidCoordPos;

flat out vec3 upVec, sunVec, northVec, eastVec;
out vec3 playerPos;
out vec3 normal;
out vec3 viewVector;
out vec3 atMidBlock;
out vec3 blockUV;

out vec4 glColor;

#if WATER_STYLE >= 2 || (RAIN_PUDDLES >= 1 || defined SPOOKY_RAIN_PUDDLE_OVERRIDE) && WATER_STYLE == 1 && WATER_MAT_QUALITY >= 2 || defined GENERATED_NORMALS || defined CUSTOM_PBR
    flat out vec3 binormal, tangent;
#endif

#ifdef POM
    out vec4 vTexCoordAM;
#endif

// #if SEASONS == 1 || SEASONS == 4 || defined MOSS_NOISE_INTERNAL || defined SAND_NOISE_INTERNAL
//     flat out ivec2 pixelTexSize;
// #endif

//Attributes//
attribute vec4 mc_Entity;
attribute vec4 at_midBlock;
attribute vec4 mc_midTexCoord;
attribute vec4 at_tangent;

//Common Variables//
#if WATER_STYLE >= 2 || (RAIN_PUDDLES >= 1 || defined SPOOKY_RAIN_PUDDLE_OVERRIDE) && WATER_STYLE == 1 && WATER_MAT_QUALITY >= 2 || defined GENERATED_NORMALS || defined CUSTOM_PBR
#else
    vec3 binormal;
    vec3 tangent;
#endif

//Common Functions//

//Includes//
#ifdef TAA
    #include "/lib/antialiasing/jitter.glsl"
#endif

#if defined MIRROR_DIMENSION || defined WORLD_CURVATURE
    #include "/lib/misc/distortWorld.glsl"
#endif

#if defined WAVE_EVERYTHING || defined WAVING_WATER_VERTEX
    #include "/lib/materials/materialMethods/wavingBlocks.glsl"
#endif

//Program//
void main() {
    texCoord = (gl_TextureMatrix[0] * gl_MultiTexCoord0).xy;
    #ifdef ATLAS_ROTATION
        texCoord += texCoord * float(hash33(mod(cameraPosition * 0.1, vec3(100.0))));
    #endif
    lmCoord  = GetLightMapCoordinates();

    glColor = gl_Color;

    mat = int(mc_Entity.x + 0.5);

    blockLightEmission = 0;
    #ifdef IRIS_FEATURE_BLOCK_EMISSION_ATTRIBUTE
        blockLightEmission = clamp(int(at_midBlock.w + 0.5), 0, 15);
    #endif

    normal = normalize(gl_NormalMatrix * gl_Normal);
    upVec = normalize(gbufferModelView[1].xyz);
    eastVec = normalize(gbufferModelView[0].xyz);
    northVec = normalize(gbufferModelView[2].xyz);
    sunVec = GetSunVector();
    atMidBlock = at_midBlock.xyz;
    blockUV = 0.5 - at_midBlock.xyz / 64.0;

    binormal = normalize(gl_NormalMatrix * cross(at_tangent.xyz, gl_Normal.xyz) * at_tangent.w);
    tangent  = normalize(gl_NormalMatrix * at_tangent.xyz);

    mat3 tbnMatrix = mat3(
        tangent.x, binormal.x, normal.x,
        tangent.y, binormal.y, normal.y,
        tangent.z, binormal.z, normal.z
    );

    viewVector = tbnMatrix * (gl_ModelViewMatrix * gl_Vertex).xyz;

    vec2 midCoord = (gl_TextureMatrix[0] * mc_midTexCoord).st;
    vec2 texMinMidCoord = texCoord - midCoord;
    signMidCoordPos = sign(texMinMidCoord);
    absMidCoordPos  = abs(texMinMidCoord);

    #ifdef POM
        vTexCoordAM.zw  = abs(texMinMidCoord) * 2;
        vTexCoordAM.xy  = min(texCoord, midCoord - texMinMidCoord);
    #endif

    vec4 position = gbufferModelViewInverse * gl_ModelViewMatrix * gl_Vertex;
    playerPos = position.xyz;
        
    #ifdef WAVING_WATER_VERTEX
        DoWave(position.xyz, mat);
    #endif
    
    #ifdef MIRROR_DIMENSION
        doMirrorDimension(position);
    #endif

    #ifdef WORLD_CURVATURE
        position.y += doWorldCurvature(position.xz);
    #endif

    #ifdef WAVE_EVERYTHING
        DoWaveEverything(position.xyz);
    #endif


    gl_Position = gl_ProjectionMatrix * gbufferModelView * position;

    #ifdef TAA
        gl_Position.xy = TAAJitter(gl_Position.xy, gl_Position.w);
    #endif
}

#endif