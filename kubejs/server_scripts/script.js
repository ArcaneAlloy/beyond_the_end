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
});