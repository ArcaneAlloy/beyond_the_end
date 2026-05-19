LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .replaceLoot("minecraft:golden_apple", "minecraft:iron_apple", true)
        .replaceLoot("minecraft:enchanted_golden_apple", "minecraft:enchanted_iron_apple", true)
    });
LootJS.modifiers((event) => {
    // Remove enchanted books with unwanted enchantments from all loot
    event
        .addLootTypeModifier(LootType.CHEST, LootType.FISHING, LootType.ENTITY, LootType.BLOCK)
        .removeLoot(ItemFilter.hasEnchantment("dragonenchants:chain_lightning"))
        .removeLoot(ItemFilter.hasEnchantment("create:potato_recovery"))
        .removeLoot(ItemFilter.hasEnchantment("create:capacity"))
});
