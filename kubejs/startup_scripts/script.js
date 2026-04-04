// priority: 0

StartupEvents.registry('item', event => {

  function itemWithTooltip(id, fireResistant) {
    let item = event.create(id)
      .displayName(Text.translatable('item.' + id.replace(':', '.')).color(0xFF55FF))
      .tooltip(Text.translatable('tooltip.' + id.replace(':', '.')).gray().italic())

    if (fireResistant) item.fireResistant()

    return item
  }

  let eyes = [
    'endrem:sculk_eye',
    'endrem:carminite_eye',
    'endrem:aurora_eye',
    'endrem:fiery_eye',
    'endrem:abyss_eye',
    'endrem:mech_eye',
    'endrem:monstrous_eye',
    'endrem:void_eye',
    'endrem:flame_eye',
    'endrem:parasite_eye',
    'endrem:desert_eye'
  ]

  eyes.forEach(id => itemWithTooltip(id, true))

  itemWithTooltip('minecraft:shulker_head')
  itemWithTooltip('dungeons_mobs:wildfire_core', true)
  itemWithTooltip('minecraft:slime_core')
  itemWithTooltip('alexsmobs:chorus_dust')
  itemWithTooltip('alexsmobs:ectoplasm')
  itemWithTooltip('mutantmore:mutant_blaze_core_fragment', true)
  itemWithTooltip('cataclysm:void_core_fragment')
  itemWithTooltip('dungeons_mobs:wind_essence')
  itemWithTooltip('cataclysm:ender_guardian_arm')
  itemWithTooltip('cataclysm:heater_engine')
  itemWithTooltip('minecraft:goat_hide')

  event.create('minecraft:iron_apple').food(food => {
    food
      .hunger(2)
      .saturation(1)
      .effect('absorption', 600, 0, 1)
      .alwaysEdible()
  })

  event.create('minecraft:enchanted_iron_apple')
    .glow(true)
    .food(food => {
      food
        .hunger(2)
        .saturation(1)
        .effect('absorption', 1200, 1, 1)
        .effect('regeneration', 400, 0, 1)
        .effect('resistance', 600, 0, 1)
        .alwaysEdible()
    })

})

StartupEvents.registry('block', event => {
})