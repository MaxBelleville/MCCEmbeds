execute if block ~ ~ ~ minecraft:tripwire[attached=false] run data modify storage retina:data Surfaces set value {Top:[[0,240,0,480,240,480]],Bottom:[[0,0,0,480,0,480]],West:[[0,0,0,0,240,480]],East:[[480,0,0,480,240,480]],North:[[0,0,0,480,240,0]],South:[[0,0,480,480,240,480]]}
execute if block ~ ~ ~ minecraft:tripwire[attached=true] run data modify storage retina:data Surfaces set value {Top:[[0,30,0,480,30,480]],Bottom:[[0,0,0,480,0,480]],West:[[0,0,0,0,30,480]],East:[[480,0,0,480,30,480]],North:[[0,0,0,480,30,0]],South:[[0,0,480,480,30,480]]}