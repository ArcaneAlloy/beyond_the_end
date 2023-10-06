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

	// Remove Golden Apples craft recipe
	event.remove({output: 'minecraft:golden_apple'})

	// Remove Experience Obelisk items recipes
	event.remove({output: 'experienceobelisk:xpobelisk'})

	// Remove Target Dummy recipe
	event.remove({output: 'dummmmmmy:dummy_crafting'})

	// Remove Skinned Lanterns recipes
	event.remove({output: 'skinnedlanterns:pufferfish_lantern_block'})
	event.remove({output: 'skinnedlanterns:zombie_lantern_block'})
	event.remove({output: 'skinnedlanterns:creeper_lantern_block'})
	event.remove({output: 'skinnedlanterns:skeleton_lantern_block'})
	event.remove({output: 'skinnedlanterns:wither_skeleton_lantern_block'})
	event.remove({output: 'skinnedlanterns:bee_lantern_block'})
	event.remove({output: 'skinnedlanterns:jack_o_lantern_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_white_lantern_block'})
	event.remove({output: 'skinnedlanterns:ghost_lantern_block'})
	event.remove({output: 'skinnedlanterns:blinky_lantern_block'})
	event.remove({output: 'skinnedlanterns:pinky_lantern_block'})
	event.remove({output: 'skinnedlanterns:inky_lantern_block'})
	event.remove({output: 'skinnedlanterns:clyde_lantern_block'})
	event.remove({output: 'skinnedlanterns:pacman_lantern_block'})
	event.remove({output: 'skinnedlanterns:guardian_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_yellow_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_orange_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_blue_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_light_blue_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_cyan_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_lime_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_green_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_pink_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_brown_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_black_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_gray_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_light_gray_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_magenta_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_purple_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_red_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_blue_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_purple_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_lime_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_magenta_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_yellow_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_green_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_light_blue_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_cyan_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_pink_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_orange_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_brown_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_black_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_white_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_gray_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_light_gray_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_green_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_red_lantern_block'})
	event.remove({output: 'skinnedlanterns:snowman_lantern_block'})
	event.remove({output: 'skinnedlanterns:honey_lantern_block'})
	event.remove({output: 'skinnedlanterns:slime_lantern_block'})
	event.remove({output: 'skinnedlanterns:pufferfish_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:zombie_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:creeper_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:skeleton_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:wither_skeleton_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:bee_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:jack_o_lantern_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_white_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ghost_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:blinky_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:pinky_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:inky_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:clyde_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:pacman_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:guardian_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_yellow_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_orange_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_blue_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_light_blue_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_cyan_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_lime_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_green_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_pink_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_brown_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_black_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_gray_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_light_gray_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_magenta_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:paper_purple_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_red_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_blue_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_purple_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_lime_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_magenta_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_yellow_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_green_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_light_blue_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_cyan_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_pink_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_orange_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_brown_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_black_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_white_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_gray_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_light_gray_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_green_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:ornament_red_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:snowman_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:honey_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:slime_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:present_green_lantern_block'})
	event.remove({output: 'skinnedlanterns:present_green_soul_lantern_block'})
	event.remove({output: 'skinnedlanterns:present_red_lantern_block'})
	event.remove({output: 'skinnedlanterns:present_red_soul_lantern_block'})

	// Remove Paraglider recipes
	event.remove({output: 'vc_gliders:paraglider_wood'})
	event.remove({output: 'vc_gliders:paraglider_iron'})
	event.remove({output: 'vc_gliders:paraglider_gold'})
	event.remove({output: 'vc_gliders:paraglider_diamond'})
	event.remove({output: 'vc_gliders:paraglider_netherite'})
	event.remove({output: 'vc_gliders:copper_upgrade'})
	event.remove({output: 'vc_gliders:nether_upgrade'})
	event.remove({output: 'vc_gliders:reinforced_paper'})
	event.remove({output: 'vc_gliders:reinforced_paper_iron'})
	event.remove({output: 'vc_gliders:reinforced_paper_gold'})
	event.remove({output: 'vc_gliders:reinforced_paper_diamond'})
	event.remove({output: 'vc_gliders:reinforced_paper_netherite'})
	
	// Remove Supplementaries recipes
	event.remove({output: 'supplementaries:bamboo_spikes'})
	event.remove({output: 'supplementaries:slingshot'})

	// Remove Waystones recipes
	event.remove({output: 'waystones:waystone'})
	event.remove({output: 'waystones:mossy_waystone'})
	event.remove({output: 'waystones:sandy_waystone'})
	event.remove({output: 'waystones:sharestone'})
	event.remove({output: 'waystones:warp_plate'})
	event.remove({output: 'waystones:portstone'})
	event.remove({output: 'waystones:white_sharestone'})
	event.remove({output: 'waystones:orange_sharestone'})
	event.remove({output: 'waystones:magenta_sharestone'})
	event.remove({output: 'waystones:light_blue_sharestone'})
	event.remove({output: 'waystones:yellow_sharestone'})
	event.remove({output: 'waystones:lime_sharestone'})
	event.remove({output: 'waystones:pink_sharestone'})
	event.remove({output: 'waystones:gray_sharestone'})
	event.remove({output: 'waystones:light_gray_sharestone'})
	event.remove({output: 'waystones:cyan_sharestone'})
	event.remove({output: 'waystones:purple_sharestone'})
	event.remove({output: 'waystones:blue_sharestone'})
	event.remove({output: 'waystones:brown_sharestone'})
	event.remove({output: 'waystones:green_sharestone'})
	event.remove({output: 'waystones:red_sharestone'})
	event.remove({output: 'waystones:black_sharestone'})
	event.remove({output: 'waystones:return_scroll'})
	event.remove({output: 'waystones:bound_scroll'})
	event.remove({output: 'waystones:warp_scroll'})
	event.remove({output: 'waystones:warp_stone'})
	event.remove({output: 'waystones:warp_dust'})
	event.remove({output: 'waystones:attuned_shard'})

	// Remove Meet Your Fight recipes
	event.remove({output: 'meetyourfight:haunted_bell'})
	event.remove({output: 'meetyourfight:passages_toll'})
	event.remove({output: 'meetyourfight:devils_ante'})
	event.remove({output: 'meetyourfight:fossil_bait'})
	event.remove({output: 'meetyourfight:dusk_key'})
	event.remove({output: 'meetyourfight:haunted_bell'})

	// Remove Straw Statue recipes
	event.remove({output: 'strawstatues:straw_statue'})

	// Remove Banned Blocks GUI recipes
	event.remove({output: 'minecraft:anvil'})
	event.remove({output: 'minecraft:chipped_anvil'})
	event.remove({output: 'minecraft:damaged_anvil'})
	event.remove({output: 'minecraft:enchanting_table'})
	event.remove({output: 'minecraft:brewing_stand'})
	event.remove({output: 'minecraft:smithing_table'})
	event.remove({output: 'cataclysm:mechanical_fusion_anvil'})

	// Remove Monsters & Mushrooms recipes
	event.remove({output: 'monstersandmushrooms:bugsy_helmet'})
	event.remove({output: 'monstersandmushrooms:bugsy_chestplate'})
	event.remove({output: 'monstersandmushrooms:bugsy_leggings'})
	event.remove({output: 'monstersandmushrooms:bugsy_boots'})

	event.remove({output: 'monstersandmushrooms:shroomster_helmet'})
	event.remove({output: 'monstersandmushrooms:shroomster_chestplate'})
	event.remove({output: 'monstersandmushrooms:shroomster_leggings'})
	event.remove({output: 'monstersandmushrooms:shroomster_boots'})

	event.remove({output: 'monstersandmushrooms:maggart_helmet'})
	event.remove({output: 'monstersandmushrooms:maggart_chestplate'})
	event.remove({output: 'monstersandmushrooms:maggart_leggings'})
	event.remove({output: 'monstersandmushrooms:maggart_boots'})

	event.remove({output: 'monstersandmushrooms:bugsywand'})
	event.remove({output: 'monstersandmushrooms:shroomsterstaff'})
	event.remove({output: 'monstersandmushrooms:maggartstaff'})

	event.remove({output: 'monstersandmushrooms:rocky_moss'})
	event.remove({output: 'monstersandmushrooms:calcite_bricks'})
	event.remove({output: 'monstersandmushrooms:cobbled_coal'})
	event.remove({output: 'monstersandmushrooms:icy_deepslate_tiles'})
	event.remove({output: 'monstersandmushrooms:polished_amethyst'})

	// Remove Alexsmobs recipes
	event.remove({output: 'alexsmobs:transmutation_table'})
	event.remove({output: 'alexsmobs:tarantula_hawk_elytra'})
	event.remove({output: 'alexsmobs:tarantula_hawk_wing'})
	event.remove({output: 'alexsmobs:tattered_tarantula_hawk_wing'})
	event.remove({output: 'alexsmobs:endolocator'})

	// Remove Upgrade Aquatic unoobtainable item recipes
	event.remove({output: 'upgrade_aquatic:tongue_kelp'})
	event.remove({output: 'upgrade_aquatic:tongue_kelp_block'})
	event.remove({output: 'upgrade_aquatic:thorny_kelp_block'})
	event.remove({output: 'upgrade_aquatic:ochre_kelp_block'})
	event.remove({output: 'upgrade_aquatic:polar_kelp_block'})
	event.remove({output: 'upgrade_aquatic:tongue_kelpy_cobblestone'})
	event.remove({output: 'upgrade_aquatic:tongue_kelpy_cobblestone_stairs'})
	event.remove({output: 'upgrade_aquatic:tongue_kelpy_cobblestone_slab'})
	event.remove({output: 'upgrade_aquatic:tongue_kelpy_cobblestone_vertical_slab'})
	event.remove({output: 'upgrade_aquatic:tongue_kelpy_stone_bricks'})
	event.remove({output: 'upgrade_aquatic:tongue_kelpy_stone_brick_stairs'})
	event.remove({output: 'upgrade_aquatic:tongue_kelpy_stone_brick_slab'})
	event.remove({output: 'upgrade_aquatic:tongue_kelpy_stone_brick_vertical_slab'})
	event.remove({output: 'upgrade_aquatic:thorny_kelp'})
	event.remove({output: 'upgrade_aquatic:thorny_kelpy_cobblestone'})
	event.remove({output: 'upgrade_aquatic:thorny_kelpy_cobblestone_stairs'})
	event.remove({output: 'upgrade_aquatic:thorny_kelpy_cobblestone_slab'})
	event.remove({output: 'upgrade_aquatic:thorny_kelpy_cobblestone_vertical_slab'})
	event.remove({output: 'upgrade_aquatic:thorny_kelpy_stone_bricks'})
	event.remove({output: 'upgrade_aquatic:thorny_kelpy_stone_brick_stairs'})
	event.remove({output: 'upgrade_aquatic:thorny_kelpy_stone_brick_slab'})
	event.remove({output: 'upgrade_aquatic:thorny_kelpy_stone_brick_vertical_slab'})
	event.remove({output: 'upgrade_aquatic:polar_kelp'})
	event.remove({output: 'upgrade_aquatic:polar_kelpy_cobblestone'})
	event.remove({output: 'upgrade_aquatic:polar_kelpy_cobblestone_stairs'})
	event.remove({output: 'upgrade_aquatic:polar_kelpy_cobblestone_slab'})
	event.remove({output: 'upgrade_aquatic:polar_kelpy_cobblestone_vertical_slab'})
	event.remove({output: 'upgrade_aquatic:polar_kelpy_stone_bricks'})
	event.remove({output: 'upgrade_aquatic:polar_kelpy_stone_brick_stairs'})
	event.remove({output: 'upgrade_aquatic:polar_kelpy_stone_brick_slab'})
	event.remove({output: 'upgrade_aquatic:polar_kelpy_stone_brick_vertical_slab'})
	event.remove({output: 'upgrade_aquatic:ochre_kelp'})
	event.remove({output: 'upgrade_aquatic:ochre_kelpy_cobblestone'})
	event.remove({output: 'upgrade_aquatic:ochre_kelpy_cobblestone_stairs'})
	event.remove({output: 'upgrade_aquatic:ochre_kelpy_cobblestone_slab'})
	event.remove({output: 'upgrade_aquatic:ochre_kelpy_cobblestone_vertical_slab'})
	event.remove({output: 'upgrade_aquatic:ochre_kelpy_stone_bricks'})
	event.remove({output: 'upgrade_aquatic:ochre_kelpy_stone_brick_stairs'})
	event.remove({output: 'upgrade_aquatic:ochre_kelpy_stone_brick_slab'})
	event.remove({output: 'upgrade_aquatic:ochre_kelpy_stone_brick_vertical_slab'})
	
	

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
	.input(Ingredient.of('minecraft:gold_ingot', 8))
	.itemOutput('1x minecraft:golden_apple')
	.recipeTime(25)

	// Enchanted Golden Apple
	event.recipes.summoningrituals.altar("minecraft:apple")
	.input(Ingredient.of('minecraft:experience_bottle', 24))
	.input(Ingredient.of('minecraft:gold_block', 8))
	.itemOutput('1x minecraft:enchanted_golden_apple')
	.recipeTime(25)

	// Iron Apple
	event.recipes.summoningrituals.altar("minecraft:apple")
	.input(Ingredient.of('minecraft:iron_ingot', 8))
	.itemOutput('1x minecraft:iron_apple')
	.recipeTime(25)

	// Enchanted Iron Apple
	event.recipes.summoningrituals.altar("minecraft:apple")
	.input(Ingredient.of('minecraft:experience_bottle', 12))
	.input(Ingredient.of('minecraft:iron_block', 8))
	.itemOutput('1x minecraft:enchanted_iron_apple')
	.recipeTime(25)

	// Transform Magma Creams into Slimeballs
	event.recipes.summoningrituals.altar("minecraft:magma_cream")
	.itemOutput('1x minecraft:slime_ball')
	.recipeTime(25)

	// Transform Warped Ender Pearls into Ender Pearls
	event.recipes.summoningrituals.altar("bygonenether:warped_ender_pearl")
	.itemOutput('1x minecraft:ender_pearl')
	.recipeTime(25)

	// Fossil Bait
	event.recipes.summoningrituals.altar("minecraft:tropical_fish")
	.input(Ingredient.of('minecraft:rotten_flesh', 4))
	.input(Ingredient.of('minecraft:bone', 2))
	.input(Ingredient.of('minecraft:spider_eye', 2))
	.itemOutput('1x altar_of_summoning:fossilbait')

	// Haunted Bell
	event.recipes.summoningrituals.altar("minecraft:bell")
	.input(Ingredient.of('minecraft:soul_sand', 8))
	.itemOutput('1x altar_of_summoning:hauntedbell')

	// Devil's Ante
	event.recipes.summoningrituals.altar("alexsmobs:blood_sac")
	.input(Ingredient.of('minecraft:quartz', 8))
	.itemOutput('1x altar_of_summoning:devilsante')

	// Dusk Key
	event.recipes.summoningrituals.altar("mimic:mimic_key")
	.input(Ingredient.of('minecraft:amethyst_shard', 2))
	.input(Ingredient.of('minecraft:blackstone', 2))
	.input(Ingredient.of('minecraft:allium', 1))
	.itemOutput('1x altar_of_summoning:duskkey')

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