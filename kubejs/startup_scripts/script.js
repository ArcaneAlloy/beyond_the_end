// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {

	//Add craft recipes for new Ender Eyes

	event.create('endrem:sculk_eye')
		.displayName('\u00A7dSculk Eye')
		.tooltip('\u00A77\u00A7oIt is rough and hard to the touch, but the light it emits is soft and comforting')
	
	event.create('endrem:soul_eye')
		.displayName('\u00A7dSoul Eye')
		.tooltip('\u00A77\u00A7oElegant and spooky. Who does this bell call?')
	
	event.create('endrem:lucky_eye')
		.displayName('\u00A7dLucky Eye')
		.tooltip('\u00A77\u00A7oThis eye shines so much... How many emeralds will it be worth?')
	
	event.create('endrem:mossy_eye')
		.displayName('\u00A7dMossy Eye')
		.tooltip('\u00A77\u00A7oBetween the cracks and the mold the light whisper of the sea can be heard')

	event.create('endrem:abyss_eye')
		.displayName('\u00A7dAbyss Eye')
		.tooltip('\u00A77\u00A7oA symbol of dominance over the deep waters, it exudes an enigmatic power')

	event.create('endrem:mech_eye')
		.displayName('\u00A7dMech Eye')
		.tooltip('\u00A77\u00A7oA glimmering artifact that twists and resonates at its inner core')

	event.create('endrem:monstrous_eye')
		.displayName('\u00A7dMonstrous Eye')
		.tooltip('\u00A77\u00A7oYou can feel a pulsating heat along with the whisper of the fire')

	event.create('endrem:flame_eye').
		displayName('\u00A7dFlame Eye')
		.tooltip('\u00A77\u00A7oThe Flame Eye, a symbol of strength and honor.\nUse it with dignity.')

	event.create('minecraft:iron_apple').food(food => {
		food
			.hunger(2)
    		.saturation(3)//This value does not directly translate to saturation points gained
      		//The real value can be assumed to be:
      		//min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
      		.effect('absorption', 200, 0, 1)
      		.alwaysEdible()//Like golden apples
	})

	event.create('minecraft:enchanted_iron_apple').food(food => {
		food
			.hunger(2)
    		.saturation(3)//This value does not directly translate to saturation points gained
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