data merge storage uuid:temp {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,a:0,b:0,c:0,d:0,e:0,f:0}
data modify storage uuid:main in set from entity @s UUID

execute store result score 0= uuid.main store result score 1= uuid.main run data get storage uuid:main in[0]
execute store result storage uuid:temp 0 int 1 run scoreboard players operation 0= uuid.main %= 256 num
execute store result score 2= uuid.main run scoreboard players operation 1= uuid.main /= 256 num
execute store result storage uuid:temp 1 int 1 run scoreboard players operation 1= uuid.main %= 256 num
execute store result score 3= uuid.main run scoreboard players operation 2= uuid.main /= 256 num
execute store result storage uuid:temp 2 int 1 run scoreboard players operation 2= uuid.main %= 256 num
execute store result storage uuid:temp 3 int 1 run scoreboard players operation 3= uuid.main /= 256 num

execute store result score 0= uuid.main store result score 1= uuid.main run data get storage uuid:main in[1]
execute store result storage uuid:temp 4 int 1 run scoreboard players operation 0= uuid.main %= 256 num
execute store result score 2= uuid.main run scoreboard players operation 1= uuid.main /= 256 num
execute store result storage uuid:temp 5 int 1 run scoreboard players operation 1= uuid.main %= 256 num
execute store result score 3= uuid.main run scoreboard players operation 2= uuid.main /= 256 num
execute store result storage uuid:temp 6 int 1 run scoreboard players operation 2= uuid.main %= 256 num
execute store result storage uuid:temp 7 int 1 run scoreboard players operation 3= uuid.main /= 256 num

execute store result score 0= uuid.main store result score 1= uuid.main run data get storage uuid:main in[2]
execute store result storage uuid:temp 8 int 1 run scoreboard players operation 0= uuid.main %= 256 num
execute store result score 2= uuid.main run scoreboard players operation 1= uuid.main /= 256 num
execute store result storage uuid:temp 9 int 1 run scoreboard players operation 1= uuid.main %= 256 num
execute store result score 3= uuid.main run scoreboard players operation 2= uuid.main /= 256 num
execute store result storage uuid:temp a int 1 run scoreboard players operation 2= uuid.main %= 256 num
execute store result storage uuid:temp b int 1 run scoreboard players operation 3= uuid.main /= 256 num

execute store result score 0= uuid.main store result score 1= uuid.main run data get storage uuid:main in[3]
execute store result storage uuid:temp c int 1 run scoreboard players operation 0= uuid.main %= 256 num
execute store result score 2= uuid.main run scoreboard players operation 1= uuid.main /= 256 num
execute store result storage uuid:temp d int 1 run scoreboard players operation 1= uuid.main %= 256 num
execute store result score 3= uuid.main run scoreboard players operation 2= uuid.main /= 256 num
execute store result storage uuid:temp e int 1 run scoreboard players operation 2= uuid.main %= 256 num
execute store result storage uuid:temp f int 1 run scoreboard players operation 3= uuid.main /= 256 num

function uuid:get_hexes with storage uuid:temp
function uuid:concat_uuid with storage uuid:temp