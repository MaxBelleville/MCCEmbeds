data modify storage retina:data Surfaces set value {Top:[[60,120,60,420,120,420]],Bottom:[[60,0,60,420,0,420]],West:[[60,0,60,60,120,420]],East:[[420,0,60,420,120,420]],North:[[60,0,60,420,120,60]],South:[[60,0,420,420,120,420]]}
execute unless block ~ ~ ~ #minecraft:anvil[facing=north] unless block ~ ~ ~ #minecraft:anvil[facing=south] run data modify storage retina:data NewSurfaces.Top set value [[90,150,120,390,150,360],[120,300,180,360,300,300],[0,480,90,480,480,390]]
execute unless block ~ ~ ~ #minecraft:anvil[facing=north] unless block ~ ~ ~ #minecraft:anvil[facing=south] run data modify storage retina:data NewSurfaces.Bottom set value [[90,120,120,390,120,360],[120,150,180,360,150,300],[0,300,90,480,300,390]]
execute unless block ~ ~ ~ #minecraft:anvil[facing=north] unless block ~ ~ ~ #minecraft:anvil[facing=south] run data modify storage retina:data NewSurfaces.West set value [[90,120,120,90,150,360],[120,150,180,120,300,300],[0,300,90,0,480,390]]
execute unless block ~ ~ ~ #minecraft:anvil[facing=north] unless block ~ ~ ~ #minecraft:anvil[facing=south] run data modify storage retina:data NewSurfaces.East set value [[390,120,120,390,150,360],[360,150,180,360,300,300],[480,300,90,480,480,390]]
execute unless block ~ ~ ~ #minecraft:anvil[facing=north] unless block ~ ~ ~ #minecraft:anvil[facing=south] run data modify storage retina:data NewSurfaces.North set value [[90,120,120,390,150,120],[120,150,180,360,300,180],[0,300,90,480,480,90]]
execute unless block ~ ~ ~ #minecraft:anvil[facing=north] unless block ~ ~ ~ #minecraft:anvil[facing=south] run data modify storage retina:data NewSurfaces.South set value [[90,120,360,390,150,360],[120,150,300,360,300,300],[0,300,390,480,480,390]]
execute unless block ~ ~ ~ #minecraft:anvil[facing=east] unless block ~ ~ ~ #minecraft:anvil[facing=west] run data modify storage retina:data NewSurfaces.Top set value [[120,150,90,360,150,390],[180,300,120,300,300,360],[90,480,0,390,480,480]]
execute unless block ~ ~ ~ #minecraft:anvil[facing=east] unless block ~ ~ ~ #minecraft:anvil[facing=west] run data modify storage retina:data NewSurfaces.Bottom set value [[120,120,90,360,120,390],[180,150,120,300,150,360],[90,300,0,390,300,480]]
execute unless block ~ ~ ~ #minecraft:anvil[facing=east] unless block ~ ~ ~ #minecraft:anvil[facing=west] run data modify storage retina:data NewSurfaces.West set value [[120,120,90,120,150,390],[180,150,120,180,300,360],[90,300,0,90,480,480]]
execute unless block ~ ~ ~ #minecraft:anvil[facing=east] unless block ~ ~ ~ #minecraft:anvil[facing=west] run data modify storage retina:data NewSurfaces.East set value [[360,120,90,360,150,390],[300,150,120,300,300,360],[390,300,0,390,480,480]]
execute unless block ~ ~ ~ #minecraft:anvil[facing=east] unless block ~ ~ ~ #minecraft:anvil[facing=west] run data modify storage retina:data NewSurfaces.North set value [[120,120,90,360,150,90],[180,150,120,300,300,120],[90,300,0,390,480,0]]
execute unless block ~ ~ ~ #minecraft:anvil[facing=east] unless block ~ ~ ~ #minecraft:anvil[facing=west] run data modify storage retina:data NewSurfaces.South set value [[120,120,390,360,150,390],[180,150,360,300,300,360],[90,300,480,390,480,480]]
data modify storage retina:data Surfaces.Top append from storage retina:data NewSurfaces.Top[]
data modify storage retina:data Surfaces.Bottom append from storage retina:data NewSurfaces.Bottom[]
data modify storage retina:data Surfaces.West append from storage retina:data NewSurfaces.West[]
data modify storage retina:data Surfaces.East append from storage retina:data NewSurfaces.East[]
data modify storage retina:data Surfaces.North append from storage retina:data NewSurfaces.North[]
data modify storage retina:data Surfaces.South append from storage retina:data NewSurfaces.South[]