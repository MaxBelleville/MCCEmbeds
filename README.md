# MCCEmbeds
Embeded datapack resources for mccscript via import "@[embed]"" 

## Embed Configuration: 
Embedded packs may have configuration options via config "@[embed]" "[config_id]" [config_value] 
These allow you to make modifications to the embedded datapacks like changing the text of a string.

## Embedded Datapacks Info:
@uuid: UUID converter, gets uuid of a selected entity, that you can use more directly target that entity.

@retina: Retina2.0 is a raycasting library using voxel traversal that supports most hitboxes.

@moxlib: A library that contains useful tools/API for datapack creation.

@sbtools: Structure Block Tools, improves structure development by adding several ways to edit the Bounding Box.

@regex: Allows for regex patterns given a string target *REQUIRES* Moxlib

@blockstates: Converts the block you are looking at into it's component/nbt data.

@rpr: Resource Pack Require, ensures that a resource pack is loaded using  language file tricks.(Up To 3 packs) 
*CONFIG*
config @rpr "PACK1" { //Change to PACK2 or PACK3 if dealing with more then one RP.
    //In the lang file for your RP it would be rpr1_fail = rpr1_solve
    //You can change the values if you find the lang file to be confusing.
    pack_fail = "rpr1_fail" 
    pack_solve = "rpr1_solve"
    pack_force = false //If true would make player not be able to move until you enable pack
    pack_warning = "RPR: Resource pack required failed to load" //Message that will show to any players who don't have RP.
} 

## Embbeded Datapack Credits: 
uuid by gibbsly: https://github.com/gibbsly/gu

retina by nico314159: https://github.com/Nico314159/Retina_v2

moxlib by Moxvallix: https://github.com/moxvallix/moxlib

taglib by HeDeAn: https://github.com/HeDeAnTheonlyone/Taglib

sbtools by Conure512: https://www.planetminecraft.com/data-pack/structure-block-tools/

regex by Moxvallix: https://github.com/GMDU/regex-parser

blockstate by Triton365: https://github.com/Triton365/BlockState

invcarts by XAVI333: https://www.planetminecraft.com/data-pack/invisible-minecarts-6240587/





