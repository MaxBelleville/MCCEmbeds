tellraw @s {"score":{"name":"$iteration","objective":"moxlib.test"},"color":"red","extra":[{"text":" Failed: ","extra":[{"text":"\"","color":"white","extra":[{"nbt":"describes","storage":"moxlib:test/it","color":"gold"},{"text":"\"","color":"white"}]}]}]}
tellraw @s {"text":"Expected: ","color":"gray","extra":[{"nbt":"expects","storage":"moxlib:test/it","color":"white"}]}
tellraw @s {"text":"Received: ","color":"gray","extra":[{"nbt":"receives","storage":"moxlib:test/it","color":"white"}]}