// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {

	event.create('endrem:sculk_eye')
		.displayName('\u00A7dSculk Eye')
		.tooltip('\u00A77\u00A7oIt is rough and hard to the touch, but the light it emits is soft and comforting')
		.fireResistant(true)
	
	event.create('endrem:carminite_eye')
		.displayName('\u00A7dCarminite Eye')
		.tooltip('\u00A77\u00A7oElegant and spooky. Who does this bell call?')
		.fireResistant(true)
	
	event.create('endrem:aurora_eye')
		.displayName('\u00A7dAurora Eye')
		.tooltip('\u00A77\u00A7oAn overwhelming cold can be felt from his gaze.')
		.fireResistant(true)
	
	event.create('endrem:fiery_eye')
		.displayName('\u00A7dFiery Eye')
		.tooltip('\u00A77\u00A7oIt looks like it might split apart at any moment.')
		.fireResistant(true)

	event.create('endrem:abyss_eye')
		.displayName('\u00A7dAbyss Eye')
		.tooltip('\u00A77\u00A7oA symbol of dominance over the deep waters, it exudes an enigmatic power')
		.fireResistant(true)

	event.create('endrem:mech_eye')
		.displayName('\u00A7dMech Eye')
		.tooltip('\u00A77\u00A7oA glimmering artifact that twists and resonates at its inner core')
		.fireResistant(true)

	event.create('endrem:monstrous_eye')
		.displayName('\u00A7dMonstrous Eye')
		.tooltip('\u00A77\u00A7oYou can feel a pulsating heat along with the whisper of the fire')
		.fireResistant(true)

	event.create('endrem:void_eye').
		displayName('\u00A7dVoid Eye')
		.tooltip('\u00A77\u00A7oThe void is pulsing energy emanates from within. Threatening.')
		.fireResistant(true)

	event.create('endrem:flame_eye').
		displayName('\u00A7dFlame Eye')
		.tooltip('\u00A77\u00A7oThe Flame Eye, a symbol of strength and honor.\nUse it with dignity.')
		.fireResistant(true)

	event.create('endrem:parasite_eye').
		displayName('\u00A7dParasite Eye')
		.tooltip('\u00A77\u00A7oAn eye with an empty look that rumbles and vibrates in your hand.')
		.fireResistant(true)

	event.create('endrem:desert_eye')
		.displayName('\u00A7dDesert Eye')
		.tooltip('\u00A77\u00A7oIts bright pupil reflects the vestiges of a very ancient era.')
		.fireResistant(true)

	event.create('minecraft:shulker_head')
		.displayName('\u00A7dShulker Head')
		.tooltip('\u00A77\u00A7oThis is a test description.')

	event.create('minecraft:netherite_scrap_stick')
		.displayName('\u00A7dNetherite Scrap Stick')
		.tooltip('\u00A77\u00A7oThis is a test description.')
		.fireResistant(true)

	event.create('dungeons_mobs:wildfire_core')
		.displayName('\u00A7dWildfire Core')
		.tooltip('\u00A77\u00A7oThis is a test description.')
		.fireResistant(true)

	event.create('minecraft:slime_core')
		.displayName('\u00A7dSlime Core')
		.tooltip('\u00A77\u00A7oThis is a test description.')

	event.create('alexsmobs:chorus_dust')
		.displayName('\u00A7dChorus Dust')
		.tooltip('\u00A77\u00A7oThis is a test description.')

	event.create('alexsmobs:ectoplasm')
		.displayName('\u00A7dEctoplasm')
		.tooltip('\u00A77\u00A7oThis is a test description.')

	event.create('mutantmore:mutant_blaze_core_fragment')
		.displayName('\u00A7dMutant Blaze Core Fragment')
		.tooltip('\u00A77\u00A7oThis is a test description.')
		.fireResistant(true)

	event.create('cataclysm:void_core_fragment')
		.displayName('\u00A7dVoid Core Fragment')
		.tooltip('\u00A77\u00A7oThis is a test description.')

	event.create('dungeons_mobs:wind_essence')
		.displayName('\u00A7dWind Essence')
		.tooltip('\u00A77\u00A7oThis is a test description.')		

	event.create('cataclysm:ender_guardian_arm')
		.displayName('\u00A7dEnder Guardian Arm')
		.tooltip('\u00A77\u00A7oThis is a test description.')	

	event.create('cataclysm:heater_engine')
		.displayName('\u00A7dHeater Engine')
		.tooltip('\u00A77\u00A7oThis is a test description.')	

	event.create('minecraft:goat_hide')
		.displayName('\u00A7dGoat Hide')
		.tooltip('\u00A77\u00A7oThis is a test description.')	

	event.create('minecraft:iron_apple').food(food => {
		food
			.hunger(2)
    		.saturation(1)//This value does not directly translate to saturation points gained
      		//The real value can be assumed to be:
      		//min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      		.effect('absorption', 600, 0, 1)
      		.alwaysEdible()//Like golden apples
	})

	event.create('minecraft:enchanted_iron_apple').glow(true).food(food => {
		food
			.hunger(2)
    		.saturation(1)//This value does not directly translate to saturation points gained
      		//The real value can be assumed to be:
      		//min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      		.effect('absorption', 1200, 1, 1)
			.effect('regeneration', 400, 0, 1)
			.effect('resistance', 600, 0, 1)
      		.alwaysEdible()//Like golden apples
	})

})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})