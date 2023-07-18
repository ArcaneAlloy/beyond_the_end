execute as @a[nbt={ActiveEffects:[{Id:32}]}] run tellraw @s ["",{"text":"The ","color":"light_purple"},{"text":"Cleric","bold":true,"color":"gold"},{"text":" offers you as a reward an artifact that seems to be familiar to you and that will help you on your quest.","color":"light_purple"}]
execute as @a[nbt={ActiveEffects:[{Id:32}]}] run give @s endrem:evil_eye
execute as @a[nbt={ActiveEffects:[{Id:32}]}] run effect clear @s minecraft:hero_of_the_village
