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

	// Remove Vanilla craft recipes
	event.remove({id: 'minecraft:netherite_sword_smithing'})
	event.remove({id: 'minecraft:netherite_axe_smithing'})
	event.remove({id: 'minecraft:netherite_pickaxe_smithing'})
	event.remove({id: 'minecraft:netherite_hoe_smithing'})
	event.remove({id: 'minecraft:netherite_shovel_smithing'})
	event.remove({id: 'minecraft:netherite_sword_smithing'})
	event.remove({id: 'minecraft:netherite_helmet_smithing'})
	event.remove({id: 'minecraft:netherite_chestplate_smithing'})
	event.remove({id: 'minecraft:netherite_leggings_smithing'})
	event.remove({id: 'minecraft:netherite_boots_smithing'})

	event.remove({id: 'minecraft:leather_helmet'})
	event.remove({id: 'minecraft:leather_chestplate'})
	event.remove({id: 'minecraft:leather_leggings'})
	event.remove({id: 'minecraft:leather_boots'})

	event.remove({id: 'minecraft:golden_sword'})
	event.remove({id: 'minecraft:golden_shovel'})
	event.remove({id: 'minecraft:golden_pickaxe'})
	event.remove({id: 'minecraft:golden_axe'})
	event.remove({id: 'minecraft:golden_hoe'})
	event.remove({id: 'minecraft:golden_helmet'})
	event.remove({id: 'minecraft:golden_chestplate'})
	event.remove({id: 'minecraft:golden_leggings'})
	event.remove({id: 'minecraft:golden_boots'})

	event.remove({id: 'minecraft:iron_sword'})
	event.remove({id: 'minecraft:iron_shovel'})
	event.remove({id: 'minecraft:iron_pickaxe'})
	event.remove({id: 'minecraft:iron_axe'})
	event.remove({id: 'minecraft:iron_hoe'})
	event.remove({id: 'minecraft:iron_helmet'})
	event.remove({id: 'minecraft:iron_chestplate'})
	event.remove({id: 'minecraft:iron_leggings'})
	event.remove({id: 'minecraft:iron_boots'})
	
	event.remove({id: 'minecraft:diamond_sword'})
	event.remove({id: 'minecraft:diamond_shovel'})
	event.remove({id: 'minecraft:diamond_pickaxe'})
	event.remove({id: 'minecraft:diamond_axe'})
	event.remove({id: 'minecraft:diamond_hoe'})
	event.remove({id: 'minecraft:diamond_helmet'})
	event.remove({id: 'minecraft:diamond_chestplate'})
	event.remove({id: 'minecraft:diamond_leggings'})
	event.remove({id: 'minecraft:diamond_boots'})

	event.remove({id: 'minecraft:bow'})
	event.remove({id: 'minecraft:crossbow'})

	event.remove({id: 'minecraft:shield'})
	event.remove({id: 'minecraft:shears'})

	event.remove({id: 'minecraft:carrot_on_a_stick'});
	event.remove({id: 'minecraft:diamond_horse_armor'});
	event.remove({id: 'minecraft:golden_horse_armor'});
	event.remove({id: 'minecraft:iron_horse_armor'});
	event.remove({id: 'minecraft:lead'});
	event.remove({id: 'minecraft:leather_horse_armor'});
	event.remove({id: 'minecraft:name_tag'});
	event.remove({id: 'minecraft:saddle'});
	event.remove({id: 'minecraft:warped_fungus_on_a_stick'});

	// Remove Bigextras recipes
	event.remove({id: 'bigextras:strong_bow'})
	event.remove({id: 'bigextras:strong_crossbow'})

	// Remove End Remastered Ender Eyes craft recipes
	event.remove({output: 'endrem:witch_eye'})
	event.remove({output: 'endrem:undead_eye'})
	event.remove({output: 'endrem:exotic_eye'})

	// Remove Cataclysm Ender Eyes craft recipes
	event.remove({output: 'cataclysm:mech_eye'})
	event.remove({output: 'cataclysm:flame_eye'})
	event.remove({output: 'cataclysm:monstrous_eye'})
	event.remove({output: 'cataclysm:abyss_eye'})
	event.remove({output: 'cataclysm:void_eye'})
	event.remove({output: 'cataclysm:desert_eye'})
	event.remove({output: 'cataclysm:cursed_eye'})

	// Remove Celestisynth craft recipes
	event.remove({id: 'celestisynth:supernal_netherite_ingot_smithing_from_core'})
	event.remove({id: 'celestisynth:supernal_netherite_ingot_smithing'})

	event.remove({output: 'celestisynth:celestial_core'})
	event.remove({output: 'celestisynth:celestial_core_heated'})
	event.remove({output: 'celestisynth:celestial_netherite_ingot'})
	event.remove({output: 'celestisynth:celestial_crafting_table'})
	event.remove({ id: 'celestisynth:rainfall_serenity' }),
	event.remove({ id: 'celestisynth:aquaflora' }),
	event.remove({ id: 'celestisynth:poltergeist' }),
	event.remove({ id: 'celestisynth:breezebreaker' }),
	event.remove({ id: 'celestisynth:crescentia' }),
	event.remove({ id: 'celestisynth:solaris' }),

	// Remove Golden Apples craft recipe
	event.remove({output: 'minecraft:golden_apple'})

	// Remove Experience Obelisk items recipes
	event.remove({output: 'experienceobelisk:experience_obelisk'})
	event.remove({output: 'experienceobelisk:cognitive_flux'})
	event.remove({output: 'experienceobelisk:cognitive_amalgam'})
	event.remove({output: 'experienceobelisk:cognitive_alloy'})
	event.remove({output: 'experienceobelisk:cognitive_crystal'})
	event.remove({output: 'experienceobelisk:astute_assembly'})
	event.remove({output: 'experienceobelisk:cognitive_sword'})
	event.remove({output: 'experienceobelisk:cognitive_shovel'})
	event.remove({output: 'experienceobelisk:cognitive_pickaxe'})
	event.remove({output: 'experienceobelisk:cognitive_axe'})
	event.remove({output: 'experienceobelisk:cognitive_hoe'})
	event.remove({output: 'experienceobelisk:attunement_staff'})
	event.remove({output: 'experienceobelisk:enlightened_amulet'})
	event.remove({output: 'experienceobelisk:experience_fountain'})
	event.remove({output: 'experienceobelisk:precision_dispeller'})
	event.remove({output: 'experienceobelisk:cognitive_alloy_block'})
	event.remove({output: 'experienceobelisk:cognitive_crystal_block'})
	event.remove({output: 'experienceobelisk:accelerator'})
	event.remove({output: 'experienceobelisk:linear_accelerator'})
	event.remove({output: 'experienceobelisk:whisperglass'})
	event.remove({output: 'experienceobelisk:cognitium'})
	event.remove({output: 'experienceobelisk:forgotten_dust_block'})
	event.remove({output: 'experienceobelisk:infected_archivers_bookshelf'})
	event.remove({output: 'experienceobelisk:infected_enchanted_bookshelf'})
	event.remove({output: 'experienceobelisk:infected_bookshelf'})
	event.remove({output: 'experienceobelisk:archivers_bookshelf'})
	event.remove({output: 'experienceobelisk:enchanted_bookshelf'})
	event.remove({output: 'experienceobelisk:molecular_metamorpher'})
	event.remove({output: 'experienceobelisk:metamorpher/experience_jelly'})
	event.remove({output: 'experienceobelisk:bibliophage'})
	event.remove({output: 'experienceobelisk:daydream_bottle'})
	event.remove({output: 'experienceobelisk:nightmare_bottle'})
	event.remove({output: 'experienceobelisk:forgotten_dust'})
	event.remove({output: 'experienceobelisk:primordial_assembly'})
	event.remove({output: 'experienceobelisk:calcarine_matrix'})
	event.remove({output: 'experienceobelisk:cognitive_helmet'})
	event.remove({output: 'experienceobelisk:cognitive_chestplate'})
	event.remove({output: 'experienceobelisk:cognitive_leggings'})
	event.remove({output: 'experienceobelisk:cognitive_boots'})
	event.remove({output: 'experienceobelisk:cognitive_rod'})
	event.remove({output: 'experienceobelisk:cognitive_shears'})
	event.remove({output: 'experienceobelisk:flask_of_poseidon'})
	event.remove({output: 'experienceobelisk:flask_of_hades'})
	event.remove({output: 'experienceobelisk:flask_of_chaos'})
	event.remove({output: 'experienceobelisk:transforming_focus'})
	event.remove({output: 'experienceobelisk:fluorescent_agar'})
	event.remove({output: 'experienceobelisk:nutrient_agar'})
	event.remove({output: 'experienceobelisk:insightful_agar'})
	event.remove({output: 'experienceobelisk:extravagant_agar'})

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
	event.remove({id: 'paraglider:cosmetic/goddess_statue'})
	event.remove({id: 'paraglider:cosmetic/kakariko_goddess_statue'})
	event.remove({id: 'paraglider:cosmetic/goron_goddess_statue'})
	event.remove({id: 'paraglider:cosmetic/rito_goddess_statue'})
	event.remove({id: 'paraglider:horned_goddess_statue'})
	
	// Remove Supplementaries recipes
	event.remove({output: 'supplementaries:bamboo_spikes'})
	event.remove({output: 'supplementaries:slingshot'})
	event.remove({id: 'supplementaries:wrench'})
	event.remove({id: 'supplementaries:safe'})
	event.remove({id: 'supplementaries:key'})
	event.remove({id: 'suppsquared:heavy_key'})
	event.remove({id: 'supplementaries:cage'});
	event.remove({id: 'supplementaries:doormat'});
	event.remove({id: 'supplementaries:doormat_2'});
	event.remove({id: 'supplementaries:flute'});
	event.remove({id: 'supplementaries:fodder'});
	event.remove({id: 'supplementaries:planter'});

	// Remove Quark recipes
	event.remove({id: 'quark:automation/crafting/feeding_trough'});
	event.remove({id: 'quark:tools/crafting/pickarang_heart'})
	event.remove({id: 'quark:tools/smithing/flamerang_smithing'})
	event.remove({id: 'quark:tools/smithing/echorang_smithing'})
	event.remove({id: 'quark:tools/crafting/seed_pouch'});

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

	// Remove Moving Elevators recipes
	event.remove({output: 'movingelevators:elevator_block'})
	event.remove({output: 'movingelevators:display_block'})
	event.remove({output: 'movingelevators:button_block'})
	
	// Remove Meet Your Fight recipes
	event.remove({output: 'meetyourfight:haunted_bell'})
	event.remove({output: 'meetyourfight:passages_toll'})
	event.remove({output: 'meetyourfight:devils_ante'})
	event.remove({output: 'meetyourfight:fossil_bait'})
	event.remove({output: 'meetyourfight:dusk_key'})
	event.remove({output: 'meetyourfight:haunted_bell'})
	event.remove({id: 'meetyourfight:depth_star'})
	event.remove({id: 'meetyourfight:cocktail_cutlass'})
	event.remove({id: 'meetyourfight:twilights_thorn'})

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
	event.remove({id: 'cataclysm:abyssal_sacrifice'})
	event.remove({id: 'cataclysm:abyssal_sacrifice2'})
	event.remove({output: 'cataclysm:ancient_metal_ingot'})
	event.remove({output: 'cataclysm:ancient_metal_block'})
	event.remove({id: 'cataclysm:black_steel_sword'})
	event.remove({id: 'cataclysm:black_steel_axe'})
	event.remove({id: 'cataclysm:black_steel_pickaxe'})
	event.remove({id: 'cataclysm:black_steel_axe'})
	event.remove({id: 'cataclysm:black_steel_hoe'})
	event.remove({id: 'cataclysm:black_steel_shovel'})
	event.remove({id: 'cataclysm:black_steel_targe'})
	event.remove({id: 'cataclysm:ancient_spear'})
	event.remove({id: 'cataclysm:soul_render'})
	event.remove({id: 'cataclysm:the_annihilator'})
	event.remove({id: 'cataclysm:cursed_bow'})
	event.remove({id: 'cataclysm:blazing_grips'})
	event.remove({id: 'cataclysm:smithing/ignitium_helmet'})
	event.remove({id: 'cataclysm:smithing/ignitium_chestplate'})
	event.remove({id: 'cataclysm:smithing/ignitium_leggings'})
	event.remove({id: 'cataclysm:smithing/ignitium_boots'})
	event.remove({id: 'cataclysm:smithing/monstrous_helm'})
	event.remove({id: 'cataclysm:meat_shredder'})
	event.remove({id: 'cataclysm:laser_gatling'})
	event.remove({id: 'cataclysm:wither_assault_shoulder_weapon'})
	event.remove({id: 'cataclysm:bulwark_of_the_flame'})
	event.remove({id: 'cataclysm:the_incinerator'})
	event.remove({id: 'cataclysm:bloom_stone_pauldrons'})
	event.remove({id: 'cataclysm:bone_reptile_helmet'})
	event.remove({id: 'cataclysm:bone_reptile_chestplate'})
	event.remove({id: 'cataclysm:smithing/cursium_helmet'})
	event.remove({id: 'cataclysm:smithing/cursium_chestplate'})
	event.remove({id: 'cataclysm:smithing/cursium_leggings'})
	event.remove({id: 'cataclysm:smithing/cursium_boots'})
	event.remove({id: 'cataclysm:the_immolator'})
	event.remove({id: 'cataclysm:gauntlet_of_maelstrom'})

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

	event.remove({id: 'monstersandmushrooms:meangreenwand'})
	event.remove({id: 'monstersandmushrooms:endwand'})
	event.remove({id: 'monstersandmushrooms:blazewand'})
	event.remove({id: 'monstersandmushrooms:magmacubestaff'})
	event.remove({id: 'monstersandmushrooms:straystaff'})
	event.remove({id: 'monstersandmushrooms:endstaff'})

	event.remove({id: 'monstersandmushrooms:avala_helmet'})
	event.remove({id: 'monstersandmushrooms:avala_chestplate'})
	event.remove({id: 'monstersandmushrooms:avala_leggings'})
	event.remove({id: 'monstersandmushrooms:avala_boots'})

	event.remove({id: 'monstersandmushrooms:end_helmet'})
	event.remove({id: 'monstersandmushrooms:end_chestplate'})
	event.remove({id: 'monstersandmushrooms:end_leggings'})
	event.remove({id: 'monstersandmushrooms:end_boots'})

	event.remove({id: 'monstersandmushrooms:evoker_helmet'})
	event.remove({id: 'monstersandmushrooms:evoker_chestplate'})
	event.remove({id: 'monstersandmushrooms:evoker_leggings'})
	event.remove({id: 'monstersandmushrooms:evoker_boots'})

	event.remove({id: 'monstersandmushrooms:gnome_helmet'})
	event.remove({id: 'monstersandmushrooms:gnome_chestplate'})
	event.remove({id: 'monstersandmushrooms:gnome_leggings'})
	event.remove({id: 'monstersandmushrooms:gnome_boots'})

	event.remove({id: 'monstersandmushrooms:goat_helmet'})
	event.remove({id: 'monstersandmushrooms:goat_chestplate'})
	event.remove({id: 'monstersandmushrooms:goat_leggings'})
	event.remove({id: 'monstersandmushrooms:goat_boots'})

	event.remove({id: 'monstersandmushrooms:guardian_helmet'})
	event.remove({id: 'monstersandmushrooms:guardian_chestplate'})
	event.remove({id: 'monstersandmushrooms:guardian_leggings'})
	event.remove({id: 'monstersandmushrooms:guardian_boots'})

	event.remove({id: 'monstersandmushrooms:wither_helmet'})
	event.remove({id: 'monstersandmushrooms:wither_chestplate'})
	event.remove({id: 'monstersandmushrooms:wither_leggings'})
	event.remove({id: 'monstersandmushrooms:wither_boots'})

	event.remove({id: 'monstersandmushrooms:warden_helmet'})
	event.remove({id: 'monstersandmushrooms:warden_chestplate'})
	event.remove({id: 'monstersandmushrooms:warden_leggings'})
	event.remove({id: 'monstersandmushrooms:warden_boots'})

	event.remove({id: 'monstersandmushrooms:avalasword'})
	event.remove({id: 'monstersandmushrooms:drownedsword'})
	event.remove({id: 'monstersandmushrooms:brutesword'})
	event.remove({id: 'monstersandmushrooms:chorussword'})
	event.remove({id: 'monstersandmushrooms:gnomesword'})
	event.remove({id: 'monstersandmushrooms:chorussword'})
	
	// Remove Alexsmobs recipes
	event.remove({output: 'alexsmobs:transmutation_table'})
	event.remove({output: 'alexsmobs:tarantula_hawk_elytra'})
	event.remove({output: 'alexsmobs:tarantula_hawk_wing'})
	event.remove({output: 'alexsmobs:tattered_tarantula_hawk_wing'})
	event.remove({output: 'alexsmobs:endolocator'})
	event.remove({output: 'alexsmobs:dimensional_carver'})
	event.remove({output: 'alexsmobs:shattered_dimensional_carver'})
	event.remove({id: 'alexsmobs:blood_sprayer' })
	event.remove({id: 'alexsmobs:hemolymph_blaster' })
	event.remove({id: 'alexsmobs:spiked_turtle_shell'})
	event.remove({id: 'alexsmobs:roadrunner_boots'})
	event.remove({id: 'alexsmobs:frontier_cap_alt'})
	event.remove({id: 'alexsmobs:frontier_cap'})
	event.remove({id: 'alexsmobs:crocodile_chestplate'})
	event.remove({id: 'alexsmobs:centipede_leggings'})
	event.remove({id: 'alexsmobs:pocket_sand'})
	event.remove({id: 'alexsmobs:straddleboard'})
	event.remove({id: 'alexsmobs:emu_leggings'})
	event.remove({id: 'alexsmobs:shield_of_the_deep'})
	event.remove({id: 'alexsmobs:froststalker_helmet'})
	event.remove({id: 'alexsmobs:rocky_chestplate'})
	event.remove({id: 'alexsmobs:squid_grapple'})
	event.remove({id: 'alexsmobs:flying_fish_boots'})
	event.remove({id: 'alexsmobs:tendon_whip'})
	event.remove({id: 'alexsmobs:moose_headgear'})
	event.remove({id: 'alexsmobs:chorus_on_a_stick'});
	event.remove({id: 'alexsmobs:falconry_glove'});
	event.remove({id: 'alexsmobs:falconry_hood'});
	event.remove({id: 'alexsmobs:falconry_hood_alt'});
	event.remove({id: 'alexsmobs:hummingbird_feeder'});
	event.remove({id: 'alexsmobs:maraca'});
	event.remove({id: 'alexsmobs:stink_ray'});
	event.remove({id: 'alexsmobs:straddle_saddle'});

	// Remove Jumbo Furnace Mod recipes
	event.remove({id: 'jumbofurnace:jumbo_furnace'})
	
	// Remove Illager Revolution Mod recipes
	event.remove({id: 'illagerrevolutionmod:flesh_undying_rune'})
	event.remove({id: 'illagerrevolutionmod:bone_undying_rune'})
	event.remove({id: 'illagerrevolutionmod:rune_table'})
	event.remove({id: 'illagerrevolutionmod:illagium_apple'})
	event.remove({id: 'illagerrevolutionmod:beast_staff'});
	event.remove({id: 'illagerrevolutionmod:raker_claw_diamond'});
	event.remove({id: 'illagerrevolutionmod:raker_claw_gold'});
	event.remove({id: 'illagerrevolutionmod:raker_claw_illagium'});
	event.remove({id: 'illagerrevolutionmod:raker_claw_iron'});
	event.remove({id: 'illagerrevolutionmod:raker_claw_netherite'});
	event.remove({id: 'illagerrevolutionmod:mauler_jaw_diamond'});
	event.remove({id: 'illagerrevolutionmod:mauler_jaw_gold'});
	event.remove({id: 'illagerrevolutionmod:mauler_jaw_illagium'});
	event.remove({id: 'illagerrevolutionmod:mauler_jaw_iron'});
	event.remove({id: 'illagerrevolutionmod:mauler_jaw_netherite'});
	event.remove({id: 'illagerrevolutionmod:raker_armor_diamond'});
	event.remove({id: 'illagerrevolutionmod:raker_armor_gold'});
	event.remove({id: 'illagerrevolutionmod:raker_armor_illagium'});
	event.remove({id: 'illagerrevolutionmod:raker_armor_iron'});
	event.remove({id: 'illagerrevolutionmod:raker_armor_netherite'});
	event.remove({id: 'illagerrevolutionmod:ravager_saddle_diamond'});
	event.remove({id: 'illagerrevolutionmod:ravager_saddle_gold'});
	event.remove({id: 'illagerrevolutionmod:ravager_saddle_illagium'});
	event.remove({id: 'illagerrevolutionmod:ravager_saddle_iron'});
	event.remove({id: 'illagerrevolutionmod:ravager_saddle_netherite'});
	event.remove({id: 'illagerrevolutionmod:scrounger_pouch'});
	
	// Remove Revamped Wolf Armor recipes
	event.remove({id: 'revampedwolf:diamond_wolf_armor'});
	event.remove({id: 'revampedwolf:golden_wolf_armor'});
	event.remove({id: 'revampedwolf:iron_wolf_armor'});
	event.remove({id: 'revampedwolf:leather_wolf_armor'});
	event.remove({id: 'revampedwolf:netherite_wolf_armor'});

	// Remove Full Turtle Armor recipes
	event.remove({id: 'minecraft:turtle_helmet'})
	event.remove({id: 'fullturtlearmor:turtle_chestplate'})
	event.remove({id: 'fullturtlearmor:turtle_leggings'})
	event.remove({id: 'fullturtlearmor:turtle_boots'})
	
	// Remove Savage and Ravage item recipes
	event.remove({id: 'savage_and_ravage:griefer_helmet'})
	event.remove({id: 'savage_and_ravage:griefer_chestplate'})
	event.remove({id: 'savage_and_ravage:griefer_leggings'})
	event.remove({id: 'savage_and_ravage:griefer_boots'})
	event.remove({id: 'savage_and_ravage:blast_proof_plating'})

	// Remove Mutant More item recipes
	event.remove({id: 'mutantmore:withered_scimitar'})
	event.remove({id: 'mutantmore:wither_bomb'})
	event.remove({id: 'mutantmore:mutant_wither_skeleton_rib_cage'})
	event.remove({id: 'mutantmore:mutant_wither_skeleton_arms'})
	event.remove({id: 'mutantmore:mutant_wither_skeleton_chestplate'})
	event.remove({id: 'mutantmore:mutant_wither_skeleton_leggings'})
	event.remove({id: 'mutantmore:mutant_wither_skeleton_boots'})
	event.remove({id: 'mutantmore:mutant_blaze_shields'})
	event.remove({id: 'mutantmore:mutant_shulker_shield'})
	event.remove({id: 'mutantmore:husk_hammer'})
	event.remove({id: 'mutantmore:sand_cannon'})
	event.remove({id: 'mutantmore:mutant_jungle_zombie_arm'})
	event.remove({id: 'mutantmore:sentry_vine'})
	event.remove({id: 'mutantmore:leafblower'})
	event.remove({id: 'mutantmore:adaptive_crossbow'})
	event.remove({id: 'mutantmore:icicle_ammo_charge'})
	event.remove({id: 'mutantmore:incomplete_formula_y'})
	event.remove({id: 'mutantmore:incomplete_compound_z'})

	// Remove Shieldexp item recipes
	event.remove({id: 'shieldexp:golden_shield'})
	event.remove({id: 'shieldexp:iron_shield'})
	event.remove({id: 'shieldexp:diamond_shield'})
	event.remove({id: 'shieldexp:netherite_shield_smithing'})
	event.remove({id: 'shieldexp:griefer_shield'})

	// Remove Upgrade Aquatic item recipes
	event.remove({id: 'upgrade_aquatic:trident'})

	// Remove Revised Phantom craft recipes
	event.remove({id: 'revised_phantoms:wings_recipe'})
	event.remove({id: 'revised_phantoms:phantom_knife_recipe'})

	// Remove Upgrade Aquatic unobtainable item recipes
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
	
	// Remove Create item recipes
	event.remove({output: 'create:schematicannon'})
	event.remove({output: 'create:schematic_table'})
	event.remove({output: 'create:shaft'})
	event.remove({output: 'create:cogwheel'})
	event.remove({output: 'create:large_cogwheel'})
	event.remove({output: 'create:gearbox'})
	event.remove({output: 'create:vertical_gearbox'})
	event.remove({output: 'create:clutch'})
	event.remove({output: 'create:gearshift'})
	event.remove({output: 'create:encased_chain_drive'})
	event.remove({output: 'create:adjustable_chain_gearshift'})
	event.remove({output: 'create:creative_motor'})
	event.remove({output: 'create:water_wheel'})
	event.remove({output: 'create:large_water_wheel'})
	event.remove({output: 'create:encased_fan'})
	event.remove({output: 'create:nozzle'})
	event.remove({output: 'create:turntable'})
	event.remove({output: 'create:hand_crank'})
	event.remove({output: 'create:cuckoo_clock'})
	event.remove({output: 'create:millstone'})
	event.remove({output: 'create:crushing_wheel'})
	event.remove({output: 'create:mechanical_press'})
	event.remove({output: 'create:mechanical_mixer'})
	event.remove({output: 'create:basin'})
	event.remove({output: 'create:empty_blaze_burner'})
	event.remove({output: 'create:blaze_burner'})
	event.remove({output: 'create:depot'})
	event.remove({output: 'create:weighted_ejector'})
	event.remove({output: 'create:chute'})
	event.remove({output: 'create:smart_chute'})
	event.remove({output: 'create:speedometer'})
	event.remove({output: 'create:stressometer'})
	event.remove({output: 'create:wooden_bracket'})
	event.remove({output: 'create:metal_bracket'})
	event.remove({output: 'create:fluid_pipe'})
	event.remove({output: 'create:mechanical_pump'})
	event.remove({output: 'create:smart_fluid_pipe'})
	event.remove({output: 'create:fluid_valve'})
	event.remove({output: 'create:copper_valve_handle'})
	event.remove({output: 'create:white_valve_handle'})
	event.remove({output: 'create:orange_valve_handle'})
	event.remove({output: 'create:magenta_valve_handle'})
	event.remove({output: 'create:light_blue_valve_handle'})
	event.remove({output: 'create:yellow_valve_handle'})
	event.remove({output: 'create:lime_valve_handle'})
	event.remove({output: 'create:pink_valve_handle'})
	event.remove({output: 'create:gray_valve_handle'})
	event.remove({output: 'create:light_gray_valve_handle'})
	event.remove({output: 'create:cyan_valve_handle'})
	event.remove({output: 'create:purple_valve_handle'})
	event.remove({output: 'create:blue_valve_handle'})
	event.remove({output: 'create:brown_valve_handle'})
	event.remove({output: 'create:green_valve_handle'})
	event.remove({output: 'create:red_valve_handle'})
	event.remove({output: 'create:black_valve_handle'})
	event.remove({output: 'create:fluid_tank'})
	event.remove({output: 'create:creative_fluid_tank'})
	event.remove({output: 'create:hose_pulley'})
	event.remove({output: 'create:item_drain'})
	event.remove({output: 'create:spout'})
	event.remove({output: 'create:portable_fluid_interface'})
	event.remove({output: 'create:steam_engine'})
	event.remove({output: 'create:steam_whistle'})
	event.remove({output: 'create:mechanical_piston'})
	event.remove({output: 'create:sticky_mechanical_piston'})
	event.remove({output: 'create:piston_extension_pole'})
	event.remove({output: 'create:gantry_carriage'})
	event.remove({output: 'create:gantry_shaft'})
	event.remove({output: 'create:windmill_bearing'})
	event.remove({output: 'create:mechanical_bearing'})
	event.remove({output: 'create:clockwork_bearing'})
	event.remove({output: 'create:rope_pulley'})
	event.remove({output: 'create:elevator_pulley'})
	event.remove({output: 'create:cart_assembler'})
	event.remove({output: 'create:controller_rail'})
	event.remove({output: 'create:linear_chassis'})
	event.remove({output: 'create:secondary_linear_chassis'})
	event.remove({output: 'create:radial_chassis'})
	event.remove({output: 'create:sticker'})
	event.remove({output: 'create:contraption_controls'})
	event.remove({output: 'create:mechanical_drill'})
	event.remove({output: 'create:mechanical_saw'})
	event.remove({output: 'create:deployer'})
	event.remove({output: 'create:portable_storage_interface'})
	event.remove({output: 'create:redstone_contact'})
	event.remove({output: 'create:mechanical_harvester'})
	event.remove({output: 'create:mechanical_plough'})
	event.remove({output: 'create:mechanical_roller'})
	event.remove({output: 'create:sail_frame'})
	event.remove({output: 'create:white_sail'})
	event.remove({output: 'create:andesite_casing'})
	event.remove({output: 'create:brass_casing'})
	event.remove({output: 'create:copper_casing'})
	event.remove({output: 'create:mechanical_crafter'})
	event.remove({output: 'create:sequenced_gearshift'})
	event.remove({output: 'create:flywheel'})
	event.remove({output: 'create:rotation_speed_controller'})
	event.remove({output: 'create:mechanical_arm'})
	event.remove({output: 'create:track'})
	event.remove({output: 'create:railway_casing'})
	event.remove({output: 'create:schedule'})
	event.remove({output: 'create:track_station'})
	event.remove({output: 'create:track_signal'})
	event.remove({output: 'create:track_observer'})
	event.remove({output: 'create:controls'})
	event.remove({output: 'create:item_vault'})
	event.remove({output: 'create:andesite_funnel'})
	event.remove({output: 'create:brass_funnel'})
	event.remove({output: 'create:andesite_tunnel'})
	event.remove({output: 'create:brass_tunnel'})
	event.remove({output: 'create:content_observer'})
	event.remove({output: 'create:stockpile_switch'})
	event.remove({output: 'create:creative_crate'})
	event.remove({output: 'create:display_link'})
	event.remove({output: 'create:display_board'})
	event.remove({output: 'create:nixie_tube'})
	event.remove({output: 'create:rose_quartz_lamp'})
	event.remove({output: 'create:redstone_link'})
	event.remove({output: 'create:analog_lever'})
	event.remove({output: 'create:placard'})
	event.remove({output: 'create:pulse_repeater'})
	event.remove({output: 'create:pulse_extender'})
	event.remove({output: 'create:powered_latch'})
	event.remove({output: 'create:powered_toggle_latch'})
	event.remove({output: 'create:cinder_flour'})
	event.remove({output: 'create:rose_quartz'})
	event.remove({output: 'create:polished_rose_quartz'})
	event.remove({output: 'create:powdered_obsidian'})
	event.remove({output: 'create:sturdy_sheet'})
	event.remove({output: 'create:propeller'})
	event.remove({output: 'create:whisk'})
	event.remove({output: 'create:brass_hand'})
	event.remove({output: 'create:crafter_slot_cover'})
	event.remove({output: 'create:electron_tube'})
	event.remove({output: 'create:precision_mechanism'})
	event.remove({output: 'create:blaze_cake_base'})
	event.remove({output: 'create:blaze_cake'})
	event.remove({output: 'create:creative_blaze_cake'})
	event.remove({output: 'create:bar_of_chocolate'})
	event.remove({output: 'create:sweet_roll'})
	event.remove({output: 'create:chocolate_glazed_berries'})
	event.remove({output: 'create:raw_zinc'})
	event.remove({output: 'create:andesite_alloy'})
	event.remove({output: 'create:zinc_ingot'})
	event.remove({output: 'create:brass_ingot'})
	event.remove({output: 'create:copper_nugget'})
	event.remove({output: 'create:zinc_nugget'})
	event.remove({output: 'create:brass_nugget'})
	event.remove({output: 'create:copper_sheet'})
	event.remove({output: 'create:schematicannon'})
	event.remove({output: 'create:brass_sheet'})
	event.remove({output: 'create:iron_sheet'})
	event.remove({output: 'create:golden_sheet'})
	event.remove({output: 'create:crushed_raw_zinc'})
	event.remove({output: 'create:belt_connector'})
	event.remove({output: 'create:goggles'})
	event.remove({output: 'create:super_glue'})
	event.remove({output: 'create:minecart_coupling'})
	event.remove({output: 'create:crafting_blueprint'})
	event.remove({output: 'create:copper_backtank'})
	event.remove({output: 'create:netherite_backtank'})
	event.remove({output: 'create:sand_paper'})
	event.remove({output: 'create:red_sand_paper'})
	event.remove({output: 'create:wrench'})
	event.remove({output: 'create:linked_controller'})
	event.remove({output: 'create:potato_cannon'})
	event.remove({output: 'create:extendo_grip'})
	event.remove({output: 'create:wand_of_symmetry'})
	event.remove({output: 'create:handheld_worldshaper'})
	event.remove({output: 'create:filter'})
	event.remove({output: 'create:attribute_filter'})
	event.remove({output: 'create:empty_schematic'})
	event.remove({output: 'create:schematic_and_quill'})
	event.remove({output: 'create:clipboard'})
	event.remove({output: 'create:andesite_ladder'})
	event.remove({output: 'create:brass_ladder'})
	event.remove({output: 'create:andesite_bars'})
	event.remove({output: 'create:brass_bars'})
	event.remove({output: 'create:andesite_scaffolding'})
	event.remove({output: 'create:brass_scaffolding'})
	event.remove({output: 'create:metal_girder'})
	event.remove({output: 'create:copycat_step'})
	event.remove({output: 'create:copycat_panel'})
	event.remove({output: 'create:schematicannon'})
	event.remove({output: 'create:andesite_door'})
	event.remove({output: 'create:brass_door'})
	event.remove({output: 'create:copper_door'})
	event.remove({output: 'create:train_door'})
	event.remove({output: 'create:train_trapdoor'})
	event.remove({output: 'create:zinc_ore'})
	event.remove({output: 'create:deepslate_zinc_ore'})
	event.remove({output: 'create:raw_zinc_block'})
	event.remove({output: 'create:zinc_block'})
	event.remove({output: 'create:andesite_alloy_block'})
	event.remove({output: 'create:industrial_iron_block'})
	event.remove({output: 'create:brass_block'})
	event.remove({output: 'create:experience_block'})
	event.remove({output: 'create:rose_quartz_block'})
	event.remove({output: 'create:rose_quartz_tiles'})
	event.remove({output: 'create:small_rose_quartz_tiles'})
	event.remove({output: 'create:honey_bucket'})
	event.remove({output: 'create:chocolate_bucket'})
	event.remove({output: 'create:copper_diving_helmet'})
	event.remove({output: 'create:copper_diving_boots'})

	event.remove({id: 'create:crafting/appliances/netherite_diving_boots'})
	event.remove({id: 'create:crafting/appliances/netherite_diving_boots_from_netherite'})
	event.remove({id: 'create:crafting/appliances/netherite_diving_helmet'})
	event.remove({id: 'create:crafting/appliances/netherite_diving_helmet_from_netherite'})
	
	// Remove Twilight Forest item recipes
	event.remove({output: 'twilightforest:uncrafting_table'})
	event.remove({id: 'twilightforest:equipment/naga_chestplate'})
	event.remove({id: 'twilightforest:equipment/naga_leggings'})

	event.remove({id: 'twilightforest:equipment/block_and_chain'})
	event.remove({id: 'twilightforest:equipment/knightmetal_shield'})

	event.remove({id: 'twilightforest:equipment/knightmetal_boots'})
	event.remove({id: 'twilightforest:equipment/knightmetal_leggings'})
	event.remove({id: 'twilightforest:equipment/knightmetal_chestplate'})
	event.remove({id: 'twilightforest:equipment/knightmetal_helmet'})
	event.remove({id: 'twilightforest:equipment/knightmetal_sword'})
	event.remove({id: 'twilightforest:equipment/knightmetal_axe'})
	event.remove({id: 'twilightforest:equipment/knightmetal_pickaxe'})
	event.remove({id: 'twilightforest:equipment/knightmetal_ring'})

	event.remove({id: 'twilightforest:equipment/steeleaf_boots'})
	event.remove({id: 'twilightforest:equipment/steeleaf_leggings'})
	event.remove({id: 'twilightforest:equipment/steeleaf_chestplate'})
	event.remove({id: 'twilightforest:equipment/steeleaf_helmet'})
	event.remove({id: 'twilightforest:equipment/steeleaf_sword'})
	event.remove({id: 'twilightforest:equipment/steeleaf_axe'})
	event.remove({id: 'twilightforest:equipment/steeleaf_pickaxe'})
	event.remove({id: 'twilightforest:equipment/steeleaf_hoe'})
	event.remove({id: 'twilightforest:equipment/steeleaf_shovel'})

	event.remove({id: 'twilightforest:equipment/ironwood_boots'})
	event.remove({id: 'twilightforest:equipment/ironwood_leggings'})
	event.remove({id: 'twilightforest:equipment/ironwood_chestplate'})
	event.remove({id: 'twilightforest:equipment/ironwood_helmet'})
	event.remove({id: 'twilightforest:equipment/ironwood_sword'})
	event.remove({id: 'twilightforest:equipment/ironwood_axe'})
	event.remove({id: 'twilightforest:equipment/ironwood_pickaxe'})
	event.remove({id: 'twilightforest:equipment/ironwood_hoe'})
	event.remove({id: 'twilightforest:equipment/ironwood_shovel'})

	event.remove({id: 'twilightforest:compressed_blocks/reversed/fiery_block_to_ingot'})
	event.remove({id: 'twilightforest:compressed_blocks/fiery_block'})
	event.remove({id: 'twilightforest:equipment/fiery_ingot_crafting'})
	event.remove({id: 'twilightforest:equipment/fiery_boots'})
	event.remove({id: 'twilightforest:equipment/fiery_leggings'})
	event.remove({id: 'twilightforest:equipment/fiery_chestplate'})
	event.remove({id: 'twilightforest:equipment/fiery_helmet'})
	event.remove({id: 'twilightforest:equipment/fiery_pickaxe'})
	event.remove({id: 'twilightforest:equipment/fiery_sword'})

	event.remove({id: 'twilightforest:equipment/fiery_fiery_boots'})
	event.remove({id: 'twilightforest:equipment/fiery_fiery_leggings'})
	event.remove({id: 'twilightforest:equipment/fiery_fiery_chestplate'})
	event.remove({id: 'twilightforest:equipment/fiery_fiery_helmet'})
	event.remove({id: 'twilightforest:equipment/fiery_iron_pickaxe'})
	event.remove({id: 'twilightforest:equipment/fiery_iron_sword'})

	event.remove({id: 'twilightforest:equipment/arctic_boots'})
	event.remove({id: 'twilightforest:equipment/arctic_leggings'})
	event.remove({id: 'twilightforest:equipment/arctic_chestplate'})
	event.remove({id: 'twilightforest:equipment/arctic_helmet'})

	event.remove({id: 'twilightforest:equipment/yeti_boots'})
	event.remove({id: 'twilightforest:equipment/yeti_leggings'})
	event.remove({id: 'twilightforest:equipment/yeti_chestplate'})
	event.remove({id: 'twilightforest:equipment/yeti_helmet'})
	
	// Remove Occultism item recipes
	event.remove({output: 'occultism:dictionary_of_spirits'})
	event.remove({output: 'occultism:debug_wand'})
	event.remove({output: 'occultism:spirit_fire'})
	event.remove({output: 'occultism:oak_sapling'})
	event.remove({output: 'occultism:tallow'})
	event.remove({output: 'occultism:afrit_essence'})
	event.remove({output: 'occultism:dimensional_matrix'})
	event.remove({output: 'occultism:spirit_attuned_gem'})
	event.remove({output: 'occultism:otherworld_ashes'})
	event.remove({output: 'occultism:burnt_otherstone'})
	event.remove({output: 'occultism:otherstone_frame'})
	event.remove({output: 'occultism:wormhole_frame'})
	event.remove({output: 'occultism:otherstone_tablet'})
	event.remove({output: 'occultism:storage_remote_inert'})
	event.remove({output: 'occultism:chalk_white_impure'})
	event.remove({output: 'occultism:chalk_red_impure'})
	event.remove({output: 'occultism:chalk_gold_impure'})
	event.remove({output: 'occultism:chalk_purple_impure'})
	event.remove({output: 'occultism:raw_silver'})
	event.remove({output: 'occultism:raw_iesnium'})
	event.remove({output: 'occultism:silver_ingot'})
	event.remove({output: 'occultism:iesnium_ingot'})
	event.remove({output: 'occultism:silver_nugget'})
	event.remove({output: 'occultism:iesnium_nugget'})
	event.remove({output: 'occultism:obsidian_dust'})
	event.remove({output: 'occultism:iron_dust'})
	event.remove({output: 'occultism:gold_dust'})
	event.remove({output: 'occultism:copper_dust'})
	event.remove({output: 'occultism:silver_dust'})
	event.remove({output: 'occultism:iesnium_dust'})
	event.remove({output: 'occultism:crushed_end_stone'})
	event.remove({output: 'occultism:lenses'})
	event.remove({output: 'occultism:infused_lenses'})
	event.remove({output: 'occultism:lens_frame'})
	event.remove({output: 'occultism:purified_ink'})
	event.remove({output: 'occultism:spirit_attuned_pickaxe_head'})
	event.remove({output: 'occultism:magic_lamp_empty'})
	event.remove({output: 'occultism:storage_remote'})
	event.remove({output: 'occultism:chalk_white'})
	event.remove({output: 'occultism:chalk_gold'})
	event.remove({output: 'occultism:chalk_purple'})
	event.remove({output: 'occultism:chalk_red'})
	event.remove({output: 'occultism:divination_rod'})
	event.remove({output: 'occultism:brush'})
	event.remove({output: 'occultism:butcher_knife'})
	event.remove({output: 'occultism:infused_pickaxe'})
	event.remove({output: 'occultism:iesnium_pickaxe'})
	event.remove({output: 'occultism:soul_gem'})
	event.remove({output: 'occultism:satchel'})
	event.remove({output: 'occultism:book_of_binding_foliot'})
	event.remove({output: 'occultism:book_of_binding_bound_foliot'})
	event.remove({output: 'occultism:book_of_binding_djinni'})
	event.remove({output: 'occultism:book_of_binding_bound_djinni'})
	event.remove({output: 'occultism:book_of_binding_afrit'})
	event.remove({output: 'occultism:book_of_binding_bound_afrit'})
	event.remove({output: 'occultism:book_of_binding_marid'})
	event.remove({output: 'occultism:book_of_binding_bound_marid'})
	event.remove({output: 'occultism:book_of_calling_foliot_lumberjack'})
	event.remove({output: 'occultism:book_of_calling_foliot_transport_items'})
	event.remove({output: 'occultism:book_of_calling_foliot_cleaner'})
	event.remove({output: 'occultism:book_of_calling_djinni_manage_machine'})
	event.remove({output: 'occultism:otherworld_goggles'})
	event.remove({output: 'occultism:storage_controller'})
	event.remove({output: 'occultism:datura_seeds'})
	event.remove({output: 'occultism:datura'})
	event.remove({output: 'occultism:miner_debug_unspecialized'})
	event.remove({output: 'occultism:miner_foliot_unspecialized'})
	event.remove({output: 'occultism:miner_djinni_ores'})
	event.remove({output: 'occultism:miner_afrit_deeps'})
	event.remove({output: 'occultism:miner_marid_master'})
	event.remove({output: 'occultism:spirit_torch'})
	event.remove({output: 'occultism:ritual'})
	event.remove({output: 'occultism:otherstone'})
	event.remove({output: 'occultism:otherstone_slab'})
	event.remove({output: 'occultism:otherstone_pedestal'})
	event.remove({output: 'occultism:storage_actuator_base'})
	event.remove({output: 'occultism:andesite'})
	event.remove({output: 'occultism:otherworld_log'})
	event.remove({output: 'occultism:otherworld_log_natural'})
	event.remove({output: 'occultism:otherworld_leaves'})
	event.remove({output: 'occultism:otherworld_leaves_natural'})
	event.remove({output: 'occultism:otherworld_sapling'})
	event.remove({output: 'occultism:silver_ore'})
	event.remove({output: 'occultism:silver_ore_deepslate'})
	event.remove({output: 'occultism:iesnium_ore'})
	event.remove({output: 'occultism:iesnium_ore_natural'})
	event.remove({output: 'occultism:silver_block'})
	event.remove({output: 'occultism:iesnium_block'})
	event.remove({output: 'occultism:candle_white'})
	event.remove({output: 'occultism:spirit_attuned_crystal'})
	event.remove({output: 'occultism:sacrificial_bowl'})
	event.remove({output: 'occultism:golden_sacrificial_bowl'})
	event.remove({output: 'occultism:storage_stabilizer_tier1'})
	event.remove({output: 'occultism:storage_stabilizer_tier2'})
	event.remove({output: 'occultism:storage_stabilizer_tier3'})
	event.remove({output: 'occultism:storage_stabilizer_tier4'})
	event.remove({output: 'occultism:dimensional_mineshaft'})
	event.remove({output: 'occultism:spirit_lantern'})
	event.remove({output: 'occultism:spirit_torch'})
	event.remove({output: 'occultism:spirit_campfire'})
	event.remove({output: 'occultism:stable_wormhole'})
	event.remove({output: 'occultism:familiar_ring'})

	// Remove Nature's Compass item recipes
	event.remove({id: 'naturescompass:natures_compass'})

// ====================================================================================================================
// =============================================== Create Craft Recipes ===============================================
// ====================================================================================================================

    // Witch Eye
	event.recipes.summoningrituals.altar("minecraft:ender_pearl")
	.input(Ingredient.of('endrem:witch_pupil', 1))
	.itemOutput('1x endrem:witch_eye')

	//Exotic Eye
	event.recipes.summoningrituals.altar("minecraft:ender_pearl")
	.input(Ingredient.of('minecraft:bubble_coral', 1))
	.input(Ingredient.of('minecraft:fire_coral', 1))
	.input(Ingredient.of('minecraft:horn_coral', 1))
	.input(Ingredient.of('minecraft:tube_coral', 1))
	.input(Ingredient.of('minecraft:conduit', 2))
	.input(Ingredient.of('minecraft:glow_ink_sac', 2))
	.itemOutput('1x endrem:exotic_eye')

	// Bottle o' Enchanting
	event.recipes.summoningrituals.altar("minecraft:glass_bottle")
	.input(Ingredient.of('minecraft:lapis_lazuli', 6))
	.input(Ingredient.of('minecraft:emerald', 3))
	.itemOutput('3x minecraft:experience_bottle')
	.recipeTime(25)

	// Illagium Apple
	event.recipes.summoningrituals.altar("minecraft:golden_apple")
	.input(Ingredient.of('illagerrevolutionmod:illagium', 8))
	.itemOutput('1x illagerrevolutionmod:illagium_apple')
	.recipeTime(25)

	// Enchanted Golden Apple
	event.recipes.summoningrituals.altar("minecraft:iron_apple")
	.input(Ingredient.of('minecraft:gold_ingot', 8))
	.itemOutput('1x minecraft:golden_apple')
	.recipeTime(25)

	// Enchanted Golden Apple
	event.recipes.summoningrituals.altar("minecraft:enchanted_iron_apple")
	.input(Ingredient.of('minecraft:experience_bottle', 24))
	.input(Ingredient.of('minecraft:gold_block', 8))
	.input(Ingredient.of('minecraft:diamond_block', 1))
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

	// Abyssal Sacrifice
	event.recipes.summoningrituals.altar("minecraft:heart_of_the_sea")
	.input(Ingredient.of('cataclysm:athame', 1))
	.input(Ingredient.of('minecraft:nautilus_shell', 1))
	.input(Ingredient.of('cataclysm:crystallized_coral', 1))
	.input(Ingredient.of('minecraft:diamond_block', 1))
	.input(Ingredient.of('minecraft:iron_block', 1))
	.input(Ingredient.of('minecraft:emerald_block', 1))
	.input(Ingredient.of('minecraft:gold_block', 1))
	.input(Ingredient.of('minecraft:amethyst_block', 1))
	.itemOutput('1x cataclysm:abyssal_sacrifice')

	// Chests
	event.shapeless('minecraft:chest', ['1x upgrade_aquatic:driftwood_chest']),
	event.shapeless('minecraft:chest', ['1x upgrade_aquatic:river_chest']),
	event.shapeless('minecraft:chest', ['1x woodworks:oak_chest']),
	event.shapeless('minecraft:chest', ['1x woodworks:spruce_chest']),
	event.shapeless('minecraft:chest', ['1x woodworks:birch_chest']),
	event.shapeless('minecraft:chest', ['1x woodworks:jungle_chest']),
	event.shapeless('minecraft:chest', ['1x woodworks:acacia_chest']),
	event.shapeless('minecraft:chest', ['1x woodworks:dark_oak_chest']),
	event.shapeless('minecraft:chest', ['1x woodworks:mangrove_chest']),
	event.shapeless('minecraft:chest', ['1x woodworks:crimson_chest']),
	event.shapeless('minecraft:chest', ['1x woodworks:warped_chest']),
	event.shapeless('minecraft:chest', ['1x woodworks:spruce_chest']),

	// Trapped Chests
	event.shapeless('minecraft:trapped_chest', ['1x upgrade_aquatic:driftwood_trapped_chest']),
	event.shapeless('minecraft:trapped_chest', ['1x upgrade_aquatic:river_trapped_chest']),
	event.shapeless('minecraft:trapped_chest', ['1x woodworks:oak_trapped_chest']),
	event.shapeless('minecraft:trapped_chest', ['1x woodworks:spruce_trapped_chest']),
	event.shapeless('minecraft:trapped_chest', ['1x woodworks:birch_trapped_chest']),
	event.shapeless('minecraft:trapped_chest', ['1x woodworks:jungle_trapped_chest']),
	event.shapeless('minecraft:trapped_chest', ['1x woodworks:acacia_trapped_chest']),
	event.shapeless('minecraft:trapped_chest', ['1x woodworks:dark_oak_trapped_chest']),
	event.shapeless('minecraft:trapped_chest', ['1x woodworks:mangrove_trapped_chest']),
	event.shapeless('minecraft:trapped_chest', ['1x woodworks:crimson_trapped_chest']),
	event.shapeless('minecraft:trapped_chest', ['1x woodworks:warped_trapped_chest']),
	event.shapeless('minecraft:trapped_chest', ['1x woodworks:spruce_trapped_chest']),

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

	event.recipes.summoningrituals.altar("minecraft:leather_horse_armor")
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

	event.recipes.summoningrituals.altar("minecraft:iron_horse_armor")
	.itemOutput('1x minecraft:iron_ingot')
	.recipeTime(25)

	event.recipes.summoningrituals.altar("minecraft:minecart")
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

	event.recipes.summoningrituals.altar("minecraft:golden_horse_armor")
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

	event.recipes.summoningrituals.altar("minecraft:diamond_horse_armor")
	.itemOutput('1x minecraft:diamond')
	.recipeTime(25)

// ====================================================================================================================
// ====================================================================================================================
// ====================================================================================================================
});

MoreJSEvents.villagerTrades((event) => {
    /*
     * Will remove all vanilla trades. You can also just remove them for specific professions.
     */
    event.removeVanillaTrades();

    /*
     * Will remove all mod trades. You can also just remove them for specific professions.
     */
    event.removeModdedTrades();
});