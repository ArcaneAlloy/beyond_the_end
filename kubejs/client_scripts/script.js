// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	
// ====================================================================================================================
// ================================================== Hide Items JEI ==================================================
// ====================================================================================================================

	event.hide('cataclysm:mech_eye')
	event.hide('cataclysm:flame_eye')
	event.hide('cataclysm:void_eye')
	event.hide('cataclysm:monstrous_eye')
	event.hide('cataclysm:abyss_eye')
})