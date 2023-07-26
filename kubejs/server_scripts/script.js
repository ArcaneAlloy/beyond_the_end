// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

ServerEvents.recipes(event => {

// ====================================================================================================================
// =============================================== Remove Craft Recipes ===============================================
// ====================================================================================================================

	// Remove Cataclysm Ender Eyes craft recipes
	event.remove({output: 'cataclysm:mech_eye'})
	event.remove({output: 'cataclysm:flame_eye'})
	event.remove({output: 'cataclysm:monstrous_eye'})
	event.remove({output: 'cataclysm:abyss_eye'})
	event.remove({output: 'cataclysm:void_eye'})

// ====================================================================================================================
// =============================================== Create Craft Recipes ===============================================
// ====================================================================================================================

    // Witch Eye
	event.recipes.summoningrituals.altar("minecraft:ender_eye")
	.input(Ingredient.of('endrem:witch_pupil', 1))
	.itemOutput('1x endrem:witch_eye')

	//Exotic Eye
	event.recipes.summoningrituals.altar("minecraft:ender_eye")
	.input(Ingredient.of('minecraft:bubble_coral', 1))
	.input(Ingredient.of('minecraft:fire_coral', 1))
	.input(Ingredient.of('minecraft:horn_coral', 1))
	.input(Ingredient.of('minecraft:tube_coral', 1))
	.input(Ingredient.of('minecraft:conduit', 2))
	.input(Ingredient.of('minecraft:glow_ink_sac', 2))
	.itemOutput('1x endrem:exotic_eye')

	//Undead Eye
	event.recipes.summoningrituals.altar("endrem:undead_soul")
	.input(Ingredient.of('minecraft:bone', 1))
	.input(Ingredient.of('minecraft:phantom_membrane', 1))
	.input(Ingredient.of('minecraft:rotten_flesh', 1))
	.input(Ingredient.of('minecraft:ghast_tear', 1))
	.itemOutput('1x endrem:undead_eye')

	// Bottle o' Enchanting
	event.recipes.summoningrituals.altar("minecraft:glass_bottle")
	.input(Ingredient.of('minecraft:lapis_lazuli', 6))
	.input(Ingredient.of('minecraft:emerald', 3))
	.itemOutput('3x minecraft:experience_bottle')
	.recipeTime(25)

	// Enchanted Golden Apple
	event.recipes.summoningrituals.altar("minecraft:apple")
	.input(Ingredient.of('minecraft:experience_bottle', 6))
	.input(Ingredient.of('minecraft:gold_block', 8))
	.itemOutput('1x minecraft:enchanted_golden_apple')
	.recipeTime(25)

	// Transform Magma Creams into Slimeballs
	event.recipes.summoningrituals.altar("minecraft:magma_cream")
	.itemOutput('1x minecraft:slime_ball')
	.recipeTime(25)

	// Transform Warped Ender Pearls into Ender Pearls
	event.recipes.summoningrituals.altar("bygonenether:warped_ender_pearl")
	.itemOutput('1x minecraft:ender_pearl')
	.recipeTime(25)

	// Extract Materials from Vanilla Weapons & Armors

	// Leather
	event.recipes.summoningrituals.altar("minecraft:leather_helmet")
	.itemOutput('1x minecraft:leather')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:leather_chestplate")
	.itemOutput('1x minecraft:leather')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:leather_leggings")
	.itemOutput('1x minecraft:leather')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:leather_boots")
	.itemOutput('1x minecraft:leather')
	.recipeTime(25)

	// Chainmail
	event.recipes.summoningrituals.altar("minecraft:chainmail_helmet")
	.itemOutput('1x minecraft:iron_nugget')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:chainmail_chestplate")
	.itemOutput('1x minecraft:iron_nugget')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:chainmail_leggings")
	.itemOutput('1x minecraft:iron_nugget')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:chainmail_boots")
	.itemOutput('1x minecraft:iron_nugget')
	.recipeTime(25)

	// Iron
	event.recipes.summoningrituals.altar("minecraft:iron_helmet")
	.itemOutput('1x minecraft:iron_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:iron_chestplate")
	.itemOutput('1x minecraft:iron_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:iron_leggings")
	.itemOutput('1x minecraft:iron_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:iron_boots")
	.itemOutput('1x minecraft:iron_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:iron_sword")
	.itemOutput('1x minecraft:iron_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:iron_shovel")
	.itemOutput('1x minecraft:iron_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:iron_pickaxe")
	.itemOutput('1x minecraft:iron_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:iron_axe")
	.itemOutput('1x minecraft:iron_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:iron_hoe")
	.itemOutput('1x minecraft:iron_ingot')
	.recipeTime(25)

	// Golden
	event.recipes.summoningrituals.altar("minecraft:golden_helmet")
	.itemOutput('1x minecraft:gold_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:golden_chestplate")
	.itemOutput('1x minecraft:gold_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:golden_leggings")
	.itemOutput('1x minecraft:gold_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:golden_boots")
	.itemOutput('1x minecraft:gold_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:golden_sword")
	.itemOutput('1x minecraft:gold_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:golden_shovel")
	.itemOutput('1x minecraft:gold_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:golden_pickaxe")
	.itemOutput('1x minecraft:gold_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:golden_axe")
	.itemOutput('1x minecraft:gold_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:golden_hoe")
	.itemOutput('1x minecraft:gold_ingot')
	.recipeTime(25)

	// Diamond
	event.recipes.summoningrituals.altar("minecraft:diamond_helmet")
	.itemOutput('1x minecraft:diamond')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:diamond_chestplate")
	.itemOutput('1x minecraft:diamond')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:diamond_leggings")
	.itemOutput('1x minecraft:diamond')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:diamond_boots")
	.itemOutput('1x minecraft:diamond')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:diamond_sword")
	.itemOutput('1x minecraft:diamond')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:diamond_shovel")
	.itemOutput('1x minecraft:diamond')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:diamond_pickaxe")
	.itemOutput('1x minecraft:diamond')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:diamond_axe")
	.itemOutput('1x minecraft:diamond')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:diamond_hoe")
	.itemOutput('1x minecraft:diamond')
	.recipeTime(25)

// ====================================================================================================================
// ====================================================================================================================
// ====================================================================================================================
});