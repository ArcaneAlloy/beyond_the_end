LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .replaceLoot("minecraft:golden_apple", "minecraft:iron_apple", true)
        .replaceLoot("minecraft:enchanted_golden_apple", "minecraft:enchanted_iron_apple", true)
    });    