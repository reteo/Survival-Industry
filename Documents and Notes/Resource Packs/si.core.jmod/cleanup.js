/* Here we try to tie up some loose ends left over by some mods */

if(!isModLoaded("tconstruct") && isModLoaded("RotaryCraft")){

	/* If we don't have TCon anymore, we surely don't need RoCs items and OreDict entries to integrate it, right? */

	removeOreDict("RotaryCraft:rotarycraft_item_modingots:47","ingotSteel");
	hideFromNEI("RotaryCraft:rotarycraft_item_modinterface:2");
	hideFromNEI("RotaryCraft:rotarycraft_item_modinterface:3");
	hideFromNEI("RotaryCraft:rotarycraft_item_modinterface:4");
	hideFromNEI("RotaryCraft:rotarycraft_item_modinterface:5");
	hideFromNEI("RotaryCraft:rotarycraft_item_modinterface:6");
}


if(!isModLoaded("NetherOres") && isModLoaded("RotaryCraft")){

	/* We also don't need RoCs NetherOre ingots and their OreDict entries if there.... uhm... is no NetherOres! */

	var netherOresIDs = [28,29,30,31,32,33,34,35,36,37,38,39,40,44,68,70,75,76,77,83];
	for(var n in netherOresIDs){
		hideFromNEI("RotaryCraft:rotarycraft_item_modingots:"+netherOresIDs[n]);
		removeOreDict("RotaryCraft:rotarycraft_item_modingots:"+netherOresIDs[n]);
	}
}

