execute as @a at @s if entity @e[type=wither,distance=..150] run tag @s add witherthemeplays
execute as @a at @s if entity @e[type=wither,distance=..150] run stopsound @a music
scoreboard players add @a[tag=witherthemeplays] withertheme 1

#------------------------------------------------------------------------------------------------------------------------------------------------------------------
execute as @a at @s if score @s withertheme matches 2500.. run scoreboard players set @s withertheme 0
#------------------------------------------------------------------------------------------------------------------------------------------------------------------

execute as @a at @s if score @s withertheme matches 1 run playsound bossthemes:witherboss hostile @s ~ ~ ~
execute as @a at @s unless entity @e[type=wither,distance=..150] run stopsound @s hostile bossthemes:witherboss
execute as @a at @s unless entity @e[type=wither,distance=..150] run scoreboard players set @s withertheme 0
execute as @a at @s unless entity @e[type=wither,distance=..150] run tag @s remove witherthemeplays
execute as @a at @s if entity @e[type=ender_dragon,distance=..400] run tag @s add dragonthemeplays
execute as @a at @s if entity @e[type=ender_dragon,distance=..400] run stopsound @a music
scoreboard players add @a[tag=dragonthemeplays] dragontheme 1

#------------------------------------------------------------------------------------------------------------------------------------------------------------------
execute as @a at @s if score @s dragontheme matches 5480.. run scoreboard players set @s dragontheme 0
#------------------------------------------------------------------------------------------------------------------------------------------------------------------

execute as @a at @s if score @s dragontheme matches 1 run playsound bossthemes:enderdragonbosstheme hostile @s ~ ~ ~
execute as @a at @s unless entity @e[type=ender_dragon,distance=..400] run stopsound @s hostile bossthemes:enderdragonbosstheme
execute as @a at @s unless entity @e[type=ender_dragon,distance=..400] run scoreboard players set @s dragontheme 0
execute as @a at @s unless entity @e[type=ender_dragon,distance=..400] run tag @s remove dragonthemeplays
scoreboard objectives add withertheme dummy
scoreboard objectives add dragontheme dummy
scoreboard objectives add bosmjoinmes dummy
scoreboard players add @a bosmjoinmes 1
# execute as @a at @s if score @s bosmjoinmes matches 100 run function bossthemes:plrjoinedmessage
execute as @a at @s if score @s bosmjoinmes matches 5000.. run scoreboard players set @s bosmjoinmes 101
# smashed