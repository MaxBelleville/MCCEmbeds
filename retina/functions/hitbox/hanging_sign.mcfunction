execute unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=0] unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=4] unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=8] unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=12] run data modify storage retina:data Surfaces set value {Top:[[90,480,90,390,480,390]],Bottom:[[90,0,90,390,0,390]],West:[[90,0,90,90,480,390]],East:[[390,0,90,390,480,390]],North:[[90,0,90,390,480,90]],South:[[90,0,390,390,480,390]]}
execute unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=0] unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=4] unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=8] unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=12] run return 1
execute unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=4] unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=12] run data modify storage retina:data Surfaces set value {Top:[[30,300,210,450,300,270]],Bottom:[[30,0,210,450,0,270]],West:[[30,0,210,30,300,270]],East:[[450,0,210,450,300,270]],North:[[30,0,210,450,300,210]],South:[[30,0,270,450,300,270]]}
execute unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=4] unless block ~ ~ ~ #minecraft:ceiling_hanging_signs[rotation=12] run return 1
data modify storage retina:data Surfaces set value {Top:[[210,300,30,270,300,450]],Bottom:[[210,0,30,270,0,450]],West:[[210,0,30,210,300,450]],East:[[270,0,30,270,300,450]],North:[[210,0,30,270,300,30]],South:[[210,0,450,270,300,450]]}