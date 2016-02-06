// Mods the pack depends on: modid, display name
SI.dependency("RotaryCraft","RotaryCraft");
SI.dependency("ReactorCraft","ReactorCraft");
SI.dependency("ReactorCraft","ReactorCraft");
SI.dependency("ElectriCraft","ElectriCraft");
SI.dependency("CustomOreGen","Custom Ore Generation");
SI.dependency("HungerOverhaul","Hunger Overhaul");
SI.dependency("OreFlowers","Ore Flowers");
SI.dependency("mod_Invasion","Invasion Mod");
SI.dependency("HarderWildlife","Harder Wildlife");
SI.dependency("MineTweaker3","MineTweaker 3");
SI.dependency("modtweaker2","Mod Tweaker");
SI.dependency("SpecialAI","Special AI");
SI.dependency("ZAMod","Zombie Awareness");

SI.defineColor("RED", 		255,	  0,	  0);
SI.defineColor("GREEN", 	  0,	255,	  0);
SI.defineColor("BLUE", 		  0,	  0,	255);
SI.defineColor("COPPER",	192,	 88,	  0);
SI.defineColor("BRONZE",	192,	104,	 64);
SI.defineColor("STEEL",		 64,	 64,	 64);
SI.defineColor("PLATINUM",	 52,	104,	192);
SI.defineColor("ELECTRUM",	255,	255,	192);
SI.defineColor("TIN", 		128,	128,	128);
SI.defineColor("ALUMINUM",	192,	192,	192);
SI.defineColor("SILVER", 	255,	255,	255);

SI.setHarvestLevelColor(255, "AQUA");
SI.setHarvestLevelColor(0, "GRAY");
SI.setHarvestLevelColor(1, "WHITE");
SI.setHarvestLevelColor(2, "GREEN");
SI.setHarvestLevelColor(3, "YELLOW");
SI.setHarvestLevelColor(4, "GOLD");
SI.setHarvestLevelColor(5, "RED");
SI.setHarvestLevelColor(6, "DARK_PURPLE");


// Metal configuration. Requires SIIngotGeneric for ingots and SIMetalBlocks for blocks to be added



SI.addMetalBlock("copper")	.condition("!Metallurgy,!ElectriCraft");
SI.addMetalBlock("tin")		.condition("!Metallurgy,!ElectriCraft");
SI.addMetalBlock("bronze")	.condition("!Metallurgy");
SI.addMetalBlock("electrum")	.condition("!Metallurgy");
SI.addMetalBlock("steel")		.condition("!Metallurgy");
SI.addMetalBlock("aluminum")	.condition("Electricraft");
SI.addMetalBlock("cadmium")	.condition("ReactorCraft");
SI.addMetalBlock("indium")	.condition("ReactorCraft");
SI.addMetalBlock("platinum")	.condition("ElectriCraft,!Metallurgy");
SI.addMetalBlock("silver")	.condition("!Metallurgy");
		
SI.addMetalIngot("copper")	.condition("!Metallurgy,!ElectriCraft");
SI.addMetalIngot("tin")		.condition("!Metallurgy,!ElectriCraft");
SI.addMetalIngot("bronze")	.condition("!Metallurgy");
SI.addMetalIngot("electrum")	.condition("!Metallurgy");
SI.addMetalIngot("steel")		.condition("!Metallurgy");
SI.addMetalIngot("silver")	.condition("!Metallurgy,!Electricraft");

SI.addAlloy("ingotCopper", "ingotTin",  		"ingotBronze",		2);
SI.addAlloy("ingotSilver", "ingotGold", 		"ingotElectrum",	2);
SI.addAlloy("oreIron", 	"ingotIron",							2);
SI.addAlloy("oreTin", 	"ingotTin",								2);
SI.addAlloy("oreCopper", 	"ingotCopper",							2);
SI.addAlloy("oreGold", 	"ingotGold",							2);
SI.addAlloy("oreAluminum", "ingotAluminium",						2);
SI.addAlloy("oreSilver", 	"ingotSilver",							2);

// Blocks: name, class, hardness, resistance, tool, harvestlevel, material, tab

SI.addBlock("blockMetalGeneric", 	"SIMetalBlock",		10.0,	10.0,	"pickaxe",	1,	"iron",	"si.core").placer("SIMetalBlockPlacer");
SI.addBlock("blockPitchblende", 	"BlockPitchblende", 30.0, 	45.0,	"pickaxe",	1,	"iron", "si.core").condition("ReactorCraft");
SI.addBlock("blockCdInAg" , 		"BlockCdInAg", 		10.0,	15.0,	"pickaxe",	1, 	"iron", "si.core").condition("ReactorCraft");
		
SI.addBlock("oreCopper" , 		"SICoreBlock", 		10.0,	15.0,	"pickaxe",	1, 	"iron", "si.core").condition("!Electricraft,!Metallurgy");
SI.addBlock("oreTin" ,	 		"SICoreBlock", 		10.0,	15.0,	"pickaxe",	2, 	"iron", "si.core").condition("!Electricraft,!Metallurgy");
SI.addBlock("oreSilver" , 		"SICoreBlock", 		10.0,	15.0,	"pickaxe",	3, 	"iron", "si.core").condition("!Electricraft,!Metallurgy");


SI.addItem("ingotGeneric",				"SIIngotGeneric",  	64,	"si.core");
SI.addItem("itemCherenkovsingularity",	"SICoreItem",		1,	"si.core");
SI.addItem("itemCrucible",				"ItemCrucible",		64,	"si.core");
SI.addItem("itemIngotMold",				"ItemIngotMold",	64,	"si.core");
SI.addItem("itemDyeWhite", 				"SICoreDye",		64,	"si.core").colorindex( 0);
SI.addItem("itemDyeBlue",				"SICoreDye",		64,	"si.core").colorindex(11);
SI.addItem("itemDyeBrown",				"SICoreDye",		64,	"si.core").colorindex(12);
SI.addItem("itemDyeGreen",				"SICoreDye",		64,	"si.core").colorindex(13);
SI.addItem("itemDyeBlack",				"SICoreDye",		64,	"si.core").colorindex(15);
SI.addItem("itemWoodenBucket", 			"ItemWoodenBucket",	16,	"si.core");
SI.addItem("foodJPMorningSupreme",		"SICoreFood",		1,	"si.core").fooddata(		SI.FoodData(16,1.600000023841858,false,false).buffdata("digspeed", 60, 1, 100)			);

SI.addOreDict("si.core:blockPitchblende",		"blockUranium");
SI.addOreDict("si.core:oreSilver",			"oreSilver");
SI.addOreDict("si.core:oreCopper",			"oreCopper");
SI.addOreDict("si.core:oreTin",				"oreTin");
SI.addOreDict("si.core:itemDyeBlue",			"dyeBlue");
SI.addOreDict("si.core:itemDyeBlue",			"dye");
SI.addOreDict("si.core:itemDyeWhite",			"dyeWhite");
SI.addOreDict("si.core:itemDyeWhite",			"dye");
SI.addOreDict("si.core:itemDyeGreen",			"dyeGreen");
SI.addOreDict("si.core:itemDyeGreen",			"dye");
SI.addOreDict("si.core:itemDyeBlack",			"dyeBlack");
SI.addOreDict("si.core:itemDyeBlack",			"dye");
SI.addOreDict("si.core:itemDyeBrown",			"dyeBrown");
SI.addOreDict("si.core:itemDyeBrown",			"dye");
SI.addOreDict("enderutilities:enderpart:0",	"enderAlloyBasic");
SI.addOreDict("enderutilities:enderpart:1",	"enderAlloyEnhanced");
SI.addOreDict("enderutilities:enderpart:2",	"enderAlloyAdvanced");

var toolTypes = ["Sword","Hoe","Pickaxe","Axe","Shovel"];
var toolMats = [["Bronze","!Metallurgy"],["Copper","!Metallurgy"],["Steel","!Metallurgy,!Rotarycraft"],["Flint",null],["Aluminum","Electricraft"]]

for(var n in toolTypes){
	for(var m in toolMats){
		SI.addItem("tool" + toolTypes[n] + toolMats[m][0],"SITool" + toolTypes[n],1,"si.core").tooldata(
			SI.ToolData(toolMats[m][0].toUpperCase())
		).condition(toolMats[m][1]);

		SI.addShapedRecipe(	"si.core:tool" + toolTypes[n] + toolMats[m][0],			SI.standardShape(toolTypes[n].toLowerCase(),(toolMats[m][0] != "Flint" ? "ingot" : "item")+toolMats[m][0] ))
			.condition(toolMats[m][1]);
	}
}

var armorTypes = ["Helmet","Chestplate","Leggings","Boots"];
var armorMats = [	["Copper",	"!Metallurgy"],			["Silver",	"!Metallurgy"],			["Bronze",	"!Metallurgy"],			["Steel",	"!Metallurgy"],
				["Electrum","!Metallurgy"],			["Tin",		"!Metallurgy"],			["Aluminum","!Metallurgy"],			["Platinum","!Metallurgy"]];

for(var n in armorTypes){
	for(var m in armorMats){
		SI.addItem("armor" + armorMats[m][0] + armorTypes[n],"SICoreArmor",1,"si.core").armordata(
			SI.ArmorData(armorMats[m][0].toUpperCase(),armorTypes[n].toLowerCase())
		).condition(armorMats[m][1]);

		SI.addShapedRecipe(	"si.core:armor" + armorMats[m][0] + armorTypes[n],		SI.standardShape(armorTypes[n].toLowerCase(),"ingot"+armorMats[m][0])	)
			.condition(armorMats[m][1]);
	}
}

// Adds/defines tool materials: name, mininglevel, durability, efficiency(speed), damage vs entities, enchantability, repairmaterial (must be oreDicted)
SI.addToolMaterial(	"WOOD",									0,  59, 2.0,0.0,15,	"plankWood"			);
SI.addToolMaterial(	"GOLD", 								0, 131, 4.0,0.0,25,	"ingotGold"			);
SI.addToolMaterial(	"STONE", 								1, 131, 4.0,0.0, 5,	"cobblestone"		);
SI.addToolMaterial(	"FLINT", 								1, 175, 5.0,1.0,10,	"itemFlint"			);
SI.addToolMaterial(	"COPPER",								2, 180, 5.0,1.0, 5,	"ingotCopper"		);
SI.addToolMaterial(	"ELECTRUM",								2, 100,20.0,0.0,30,	"ingotElectrum"		);
SI.addToolMaterial(	"SILVER", 								2,  25,16.0,1.0,20,	"ingotSilver"		);
SI.addToolMaterial(	"ALUMINUM",								2, 175, 4.5,2.0, 4,	"ingotAluminum"		);
SI.addToolMaterial(	"BRONZE", 								4, 250, 6.0,1.0,14,	"ingotBronze"		);
SI.addToolMaterial(	"IRON", 								4, 250, 6.0,2.0,14,	"ingotIron"			);
SI.addToolMaterial(	"HSLA",	 								5, 750, 7.0,3.0,18,	"ingotHSLA"			);
SI.addToolMaterial(	"STEEL", 								5, 750, 7.0,3.0,18,	"ingotSteel"		);
SI.addToolMaterial(	"EMERALD", 								6,1561, 8.0,3.0,10,	"gemDiamond"		);
SI.addToolMaterial(	"Scarab", 								6,1861, 8.0,4.0,25,	"gemScarab"			);
SI.addToolMaterial(	"RUBY",									5, 512, 8.0,3.0,10,	"gemRuby"			);
SI.addToolMaterial(	"SAPPHIRE",								5, 512, 8.0,3.0,10,	"gemSapphire"		);
SI.addToolMaterial(	"PERIDOT",								5, 512,7.75,3.0,14,	"getPeridot"		);
SI.addToolMaterial(	"RAILCRAFT_STEEL",						5, 750, 7.0,3.0,18,	"ingotSteel"		);
SI.addToolMaterial(	"darkSteel",							6,1250, 8.0,3.0, 3,	"ingotDarkSteel"	);
SI.addToolMaterial(	"enderutilities.enderalloy.advanced",	7,5120,14.0,4.0,15,	"enderAlloyAdvanced");

// Adds/defines armor materials: name, base modifier (for durability), armor helmet, chest, leggigns, boots, enchatability, repairmaterial

SI.addArmorMaterial(	"CLOTH",		 5,1,3,2,1,15,"itemLeather"		); // Vanilla, Leather
SI.addArmorMaterial(	"CHAIN",		15,2,5,4,1,12,"ingotIron"		); // Vanilla
SI.addArmorMaterial(	"COPPER",		 8,2,5,4,1, 9,"ingotCopper"		);
SI.addArmorMaterial(	"TIN",			 8,2,4,3,1,15,"ingotTin"		);
SI.addArmorMaterial(	"ALUMINUM",		 6,2,4,3,1,20,"ingotAluminum"	);
SI.addArmorMaterial(	"IRON",			15,2,6,5,2, 9,"ingotIron"		); // Vanilla
SI.addArmorMaterial(	"BRONZE",		18,2,6,5,2, 9,"ingotBronze"		);
SI.addArmorMaterial(	"GOLD",			 7,2,5,3,1,25,"ingotGold"		);
SI.addArmorMaterial(	"SILVER",		 7,2,5,3,1,20,"ingotSilver"		);
SI.addArmorMaterial(	"ELECTRUM",		 8,2,5,4,1,28,"ingotElectrum"	); 
SI.addArmorMaterial(	"STEEL", 		21,2,7,5,2, 9,"ingotSteel"		);
SI.addArmorMaterial(	"HSLA",	 		21,2,7,5,2, 9,"ingotHSLA"		);
SI.addArmorMaterial(	"PLATINUM",		28,3,8,6,3,20,"ingotPlatinum"	);
SI.addArmorMaterial(	"DIAMOND",		33,3,8,6,3,10,"gemDiamond"		); // Vanilla
SI.addArmorMaterial(	"darkSteel",	35,3,8,6,3, 4,"ingotDarkSteel"	);

SI.purgeRecipe(	"advancedgenetics:combustiongeneratoridle");
SI.purgeRecipe(	"advancedgenetics:basicdictionary");
SI.purgeRecipe(	"battlegear2:shield.wood");
SI.purgeRecipe(	"BuildCraft|Builders:machineBlock");
SI.purgeRecipe(	"BuildCraft|Core:engineBlock:0");
SI.purgeRecipe(	"BuildCraft|Core:engineBlock:1");
SI.purgeRecipe(	"BuildCraft|Core:engineBlock:2");
SI.purgeRecipe(	"BuildCraft|Core:engineBlock:3");
SI.purgeRecipe(	"BuildCraft|Factory:autoWorkbenchBlock:0");
SI.purgeRecipe(	"BuildCraft|Factory:miningWellBlock:0");
SI.purgeRecipe(	"EnderStorage:enderChest");
SI.purgeRecipe(	"EnderStorage:enderChest:4096");
SI.purgeRecipe(	"EnderStorage:enderPouch");
SI.purgeRecipe(	"enderutilities:enderpart");
SI.purgeRecipe(	"enderutilities:enderpart:1");
SI.purgeRecipe(	"enderutilities:enderpart:2");
SI.purgeRecipe(	"enderutilities:enderpart:20");
SI.purgeRecipe(	"enderutilities:enderpart:21");
SI.purgeRecipe(	"enderutilities:enderpearlreusable");
SI.purgeRecipe(	"enderutilities:enderarrow");
SI.purgeRecipe(	"enhancedportals:frame");
SI.purgeRecipe(	"minecraft:saddle");
SI.purgeRecipe(	"minecraft:iron_horse_armor");
SI.purgeRecipe(	"minecraft:golden_horse_armor");
SI.purgeRecipe(	"minecraft:diamond_horse_armor");
SI.purgeRecipe(	"minecraft:end_portal_frame");
SI.purgeRecipe(	"ExtraUtilities:decorativeBlock1:1");
SI.purgeRecipe(	"fossil:analyzer");
SI.purgeRecipe(	"fossil:cultureVat");
SI.purgeRecipe(	"GardenStuff:lattice");
SI.purgeRecipe(	"GardenStuff:lattice_wood");
SI.purgeRecipe(	"GardenStuff:lattice_wood:1");
SI.purgeRecipe(	"GardenStuff:lattice_wood:2");
SI.purgeRecipe(	"GardenStuff:lattice_wood:3");
SI.purgeRecipe(	"GardenStuff:lattice_wood:4");
SI.purgeRecipe(	"GardenStuff:lattice_wood:5");
SI.purgeRecipe(	"Railcraft:machine.alpha:12");
SI.purgeRecipe(	"gendustry:MutagenTank");
SI.purgeRecipe(	"mod_Invasion:phaseCrystal");
SI.purgeRecipe(	"Metallurgy:base.brick");
SI.purgeRecipe(	"Metallurgy:base.brick:1");
SI.purgeRecipe(	"Metallurgy:base.brick:2");
SI.purgeRecipe(	"Metallurgy:base.brick:3");
SI.purgeRecipe(	"Metallurgy:base.brick:4");
SI.purgeRecipe(	"Metallurgy:base.brick:5");
SI.purgeRecipe(	"Metallurgy:base.brick:6");
SI.purgeRecipe(	"Metallurgy:base.brick:7");
SI.purgeRecipe(	"Metallurgy:precious.brick");
SI.purgeRecipe(	"Metallurgy:precious.brick:1");
SI.purgeRecipe(	"Metallurgy:precious.brick:2");
SI.purgeRecipe(	"Metallurgy:precious.brick:3");
SI.purgeRecipe(	"Metallurgy:precious.brick:4");
SI.purgeRecipe(	"Metallurgy:vanilla.brick:0");
SI.purgeRecipe(	"Metallurgy:vanilla.brick:1");
SI.purgeRecipe(	"Metallurgy:machine.frame");
SI.purgeRecipe(	"Metallurgy:crusher");
SI.purgeRecipe(	"Metallurgy:base.block:2");
SI.purgeRecipe(	"Metallurgy:base.brick:2");
SI.purgeRecipe(	"Metallurgy:manganese.ingot");
SI.purgeRecipe(	"minechem:minechemAtomicManipulator");
SI.purgeRecipe(	"minecraft:skull:1");
SI.purgeRecipe(	"Sync:Sync_ItemPlaceholder");
SI.purgeRecipe(	"rftools:endergenicBlock:0");
SI.purgeRecipe(	"harvestcraft:apiary");
SI.purgeRecipe(	"harvestcraft:royaljellyItem");
SI.purgeRecipe(	"harvestcraft:honeycombchocolatebarItem");
SI.purgeRecipe(	"harvestcraft:honeysandwichItem");
SI.purgeRecipe(	"harvestcraft:marzipanItem");
SI.purgeRecipe(	"EnderIO:blockStirlingGenerator");
SI.purgeRecipe(	"EnderIO:blockCombustionGenerator");
SI.purgeRecipe(	"EnderIO:blockZombieGenerator");
SI.purgeRecipe(	"EnderIO:blockSolarPanel");
SI.purgeRecipe(	"EnderIO:blockSolarPanel:1");
SI.purgeRecipe(	"EnderIO:blockSagMill");
SI.purgeRecipe(	"EnderIO:blockAlloySmelter");
SI.purgeRecipe(	"EnderIO:blockCapBank");
SI.purgeRecipe(	"EnderIO:blockCapBank:1");
SI.purgeRecipe(	"EnderIO:blockCapBank:2");
SI.purgeRecipe(	"EnderIO:blockCapBank:3");
SI.purgeRecipe(	"EnderIO:blockCrafter");
SI.purgeRecipe(	"EnderIO:blockFarmStation");
SI.purgeRecipe(	"EnderIO:blockKillerJoe");
SI.purgeRecipe(	"minecraft:dye:0");
SI.purgeRecipe(	"minecraft:dye:2");
SI.purgeRecipe(	"minecraft:dye:3");
SI.purgeRecipe(	"minecraft:dye:4");
SI.purgeRecipe(	"minecraft:dye:15");
SI.purgeRecipe(	"minecraft:enchanting_table");
SI.purgeRecipe(	"eplus:tableUpgrade");
SI.purgeRecipe(	"eplus:advancedEnchantmentTable");

SI.hideFromNEI("advancedgenetics:combustiongeneratoridle");
SI.hideFromNEI("advancedgenetics:combustiongenerator");
SI.hideFromNEI("appliedenergistics2:tile.BlockVibrationChamber");
SI.hideFromNEI("BuildCraft|Builders:machineBlock");
SI.hideFromNEI("BuildCraft|Core:engineBlock:0");
SI.hideFromNEI("BuildCraft|Core:engineBlock:1");
SI.hideFromNEI("BuildCraft|Core:engineBlock:2");
SI.hideFromNEI("BuildCraft|Core:engineBlock:3");
SI.hideFromNEI("BuildCraft|Factory:autoWorkbenchBlock:0");
SI.hideFromNEI("BuildCraft|Factory:miningWellBlock:0");
SI.hideFromNEI("extracells:vibrantchamberfluid");
SI.hideFromNEI("Metallurgy:base.ore:2");
SI.hideFromNEI("Metallurgy:base.block:2");
SI.hideFromNEI("Metallurgy:base.brick:2");
SI.hideFromNEI("Metallurgy:manganese.molten");
SI.hideFromNEI("Metallurgy:base.dust:2");
SI.hideFromNEI("Metallurgy:manganese.ingot");
SI.hideFromNEI("Metallurgy:molten.bucket:6");
SI.hideFromNEI("aobd:crushedManganese");
SI.hideFromNEI("rftools:endergenicBlock:0");
SI.hideFromNEI("rftools:machineFrame");
SI.hideFromNEI("harvestcraft:apiary:0");
SI.hideFromNEI("harvestcraft:royaljellyItem:0");
SI.hideFromNEI("harvestcraft:honeycombItem");
SI.hideFromNEI("harvestcraft:waxcombItem");
SI.hideFromNEI("harvestcraft:honeyItem");
SI.hideFromNEI("harvestcraft:beeswaxItem");
SI.hideFromNEI("harvestcraft:apiary:0");
SI.hideFromNEI("EnderIO:blockStirlingGenerator");
SI.hideFromNEI("EnderIO:blockCombustionGenerator");
SI.hideFromNEI("EnderIO:blockZombieGenerator");
SI.hideFromNEI("EnderIO:blockSolarPanel");
SI.hideFromNEI("EnderIO:blockSolarPanel:1");
SI.hideFromNEI("EnderIO:blockSagMill");
SI.hideFromNEI("EnderIO:blockAlloySmelter");
SI.hideFromNEI("EnderIO:blockCapBank");
SI.hideFromNEI("EnderIO:blockCapBank:1");
SI.hideFromNEI("EnderIO:blockCapBank:2");
SI.hideFromNEI("EnderIO:blockCapBank:3");
SI.hideFromNEI("EnderIO:blockCrafter");
SI.hideFromNEI("EnderIO:blockFarmStation");
SI.hideFromNEI("EnderIO:blockKillerJoe");

SI.addToolTip([	"advancedgenetics:combustiongeneratoridle",
					"appliedenergistics2:tile.BlockVibrationChamber",
					"BuildCraft|Core:engineBlock:0",
					"BuildCraft|Core:engineBlock:1",
					"BuildCraft|Core:engineBlock:2",
					"BuildCraft|Core:engineBlock:3",
					"extracells:vibrantchamberfluid",
					"rftools:endergenicBlock:0"
				],[	"info.si.core.tooltips.enginedisable1","info.si.core.tooltips.enginedisable2","info.si.core.tooltips.enginedisable3"]);
		
SI.addToolTip([	"BuildCraft|Builders:machineBlock"],		["info.si.core.tooltips.quarrydisable1","info.si.core.tooltips.quarrydisable2"]);
SI.addToolTip([	"BuildCraft|Factory:autoWorkbenchBlock:0"],	["info.si.core.tooltips.autoworkbenchdisable1","info.si.core.tooltips.autoworkbenchdisable2"]);
SI.addToolTip([	"BuildCraft|Factory:miningWellBlock:0"],	["info.si.core.tooltips.miningwelldisable1","info.si.core.tooltips.miningwelldisable2"]);
SI.addToolTip([	"si.core:itemDyeWhite"],					["info.si.core.tooltips.justadye"]);
SI.addToolTip([	"si.core:foodJPMorningSupreme"],			["info.si.core.tooltips.jpsupreme1","info.si.core.tooltips.jpsupreme2","info.si.core.tooltips.jpsupreme3"]);

SI.itemStackSubstitute("RoC:ingotAluminum", 								"RotaryCraft:rotarycraft_item_modingots:6");
SI.itemStackSubstitute("RoC:ingotIndium", 									"RotaryCraft:rotarycraft_item_modingots:51");
SI.itemStackSubstitute("RoC:ingotPlatinum", 								"RotaryCraft:rotarycraft_item_modingots:44");
SI.itemStackSubstitute("RoC:ingotPitchblende",								"RotaryCraft:rotarycraft_item_modingots:49");
SI.itemStackSubstitute("RoC:ingotCadmium", 									"RotaryCraft:rotarycraft_item_modingots:50");
SI.itemStackSubstitute("ReC:ingotCdInAg", 									"ReactorCraft:reactorcraft_item_crafting:3");
SI.itemStackSubstitute("ReC:itemPlutonium", 								"ReactorCraft:reactorcraft_item_plutonium:0");
SI.itemStackSubstitute("chisel:diamondChisel", 								"minecraft:diamond").condition("!chisel");
SI.itemStackSubstitute("chisel:obsidianChisel", 							"minecraft:obsidian").condition("!chisel");
SI.itemStackSubstitute("OpenComputers:item:25", 							"itemSilicon").condition("!OpenComputers");
SI.itemStackSubstitute("OpenComputers:item:24", 							"dustRedstone").condition("!OpenComputres");
SI.itemStackSubstitute("appliedenergistics2:item.ToolCertusQuartzWrench", 	"RotaryCraft:rotarycraft_item_screwdriver").condition("!appliedenergistics2");
SI.itemStackSubstitute("BuildCraft|Core:wrenchItem", 						"RotaryCraft:rotarycraft_item_screwdriver").condition("!BuildCraft|Core");
SI.itemStackSubstitute("ProjRed|Core:projectred.core.part:19", 				"minecraft:glowstone").condition("!ProjRed|Core");

SI.addShapelessRecipe("RoC:ingotAluminum@9",						["blockAluminum"]								);
SI.addShapelessRecipe("RoC:ingotIndium@9",							["blockIndium"]									);
SI.addShapelessRecipe("RoC:ingotPlatinum@9",						["blockPlatinum"]								);
SI.addShapelessRecipe("RoC:ingotPitchblende@9",						["blockUranium"]								);
SI.addShapelessRecipe("RoC:ingotCadmium@9",							["blockCadmium"]								);
SI.addShapelessRecipe("ReC:ingotCdInAg@9", 							["si.core:blockCdInAg"]							);
SI.addShapelessRecipe("si.core:itemCherenkovsingularity",			["ReC:itemPlutonium","minecraft:ender_pearl"]	);
SI.addShapelessRecipe("si.core:itemIngotMold",						["minecraft:sand"]								);
SI.addShapelessRecipe("minecraft:stick",							["si.core:itemIngotMold","minecraft:stick"]		);
SI.addShapelessRecipe("si.core:itemCrucible",						["minecraft:clay","minecraft:sand"]				);
SI.addShapelessRecipe("minecraft:flint",							["minecraft:gravel"]							);
SI.addShapelessRecipe("si.core:foodJPMorningSupreme",				["listAllmilk","foodCoffee","foodToastsandwich","listAllegg@2","foodCheese@2","foodMayo","toolSkillet"]	);
SI.addShapelessRecipe("harvestcraft:freshmilkItem",					["si.core:itemWoodenBucket_milk"]				);
SI.addShapelessRecipe("minecraft:dye:1",							["OreFlowers:ore_flowers:3"]					);
SI.addShapelessRecipe("minecraft:dye:2",							["OreFlowers:ore_flowers:1"]					);
SI.addShapelessRecipe("minecraft:dye:2",							["OreFlowers:ore_flowers3"]						);
SI.addShapelessRecipe("minecraft:dye:2",							["OreFlowers:ore_flowers2:5"]					);
SI.addShapelessRecipe("minecraft:dye:5",							["OreFlowers:ore_flowers:5"]					);
SI.addShapelessRecipe("minecraft:dye:5",							["OreFlowers:ore_flowers:6"]					);
SI.addShapelessRecipe("minecraft:dye:5",							["OreFlowers:ore_flowers2:1"]					);
SI.addShapelessRecipe("minecraft:dye:7",							["OreFlowers:ore_flowers"]						);
SI.addShapelessRecipe("minecraft:dye:7",							["OreFlowers:ore_flowers:2"]					);
SI.addShapelessRecipe("minecraft:dye:7",							["OreFlowers:ore_flowers:7"]					);
SI.addShapelessRecipe("minecraft:dye:11",							["OreFlowers:ore_flowers:4"]					);
SI.addShapelessRecipe("minecraft:dye:13",							["OreFlowers:ore_flowers2:2"]					);
SI.addShapelessRecipe("minecraft:dye:13",							["OreFlowers:ore_flowers2:4"]					);
SI.addShapelessRecipe("minecraft:dye:13",							["OreFlowers:ore_flowers2:7"]					);
SI.addShapelessRecipe("minecraft:dye:14",							["OreFlowers:ore_flowers2:6"]					);
SI.addShapelessRecipe("VeganOption:oilVegetable@7",					["presserOil","minecraft:glass_bottle@7","RotaryCraft:rotarycraft_item_canola:1"]);
SI.addShapelessRecipe("VeganOption:oilVegetable",					["presserOil","minecraft:glass_bottle","RotaryCraft:rotarycraft_item_canola"]);
SI.addShapelessRecipe("harvestcraft:honeycombchocolatebarItem",		["toolSaucepan","foodChocolatebar","beeComb"]);
SI.addShapelessRecipe("harvestcraft:honeysandwichItem",				["toolCuttingboard","listAllnutbutter","foodHoneydrop","minecraft:bread"]);
SI.addShapelessRecipe("harvestcraft:marzipanItem",					["cropAlmond","toolMortarandpestle","foodHoneydrop"]);
SI.addShapelessRecipe("harvestcraft:mustardseedItem",				["OreFlowers:ore_flowers2"]);
SI.addShapelessRecipe("si.core:itemDyeBlack@8", 					["flowerBlack","minecraft:glass_bottle","dustRedstone"]);
SI.addShapelessRecipe("si.core:itemDyeWhite@8",						["flowerWhite","minecraft:glass_bottle","dustRedstone"]);
SI.addShapelessRecipe("si.core:itemDyeBrown@8", 					["flowerBrown","minecraft:glass_bottle","dustRedstone"]);
SI.addShapelessRecipe("si.core:itemDyeGreen@8", 					["flowerGreen","minecraft:glass_bottle","dustRedstone"]);
SI.addShapelessRecipe("si.core:itemDyeBlue@8", 						["flowerBlue","minecraft:glass_bottle","dustRedstone"]);
SI.addShapelessRecipe("si.core:itemDyeBlack",						["flowerBlack"]									);
SI.addShapelessRecipe("si.core:itemDyeWhite",						["flowerWhite"]									);
SI.addShapelessRecipe("si.core:itemDyeBrown",						["flowerBrown"]									);
SI.addShapelessRecipe("si.core:itemDyeGreen",						["flowerGreen"]									);
SI.addShapelessRecipe("si.core:itemDyeBlue",						["flowerBlue"]									);
SI.addShapelessRecipe("minecraft:dye:15@3", 						["minecraft:bone"]								);
SI.addShapelessRecipe("minecraft:dye:4@9",							["minecraft:lapis_block"]						);

SI.addShapedRecipe("si.core:blockPitchblende",
[	["ingotUranium","ingotUranium","ingotUranium"],
	["ingotUranium","ingotUranium","ingotUranium"],
	["ingotUranium","ingotUranium","ingotUranium"]
]).condition("ReactorCraft");
		
SI.addShapedRecipe("si.core:blockCdInAg",
[	["ReC:ingotCdInAg","ReC:ingotCdInAg","ReC:ingotCdInAg"],
	["ReC:ingotCdInAg","ReC:ingotCdInAg","ReC:ingotCdInAg"],
	["ReC:ingotCdInAg","ReC:ingotCdInAg","ReC:ingotCdInAg"]
]);
		
SI.addShapedRecipe("si.core:itemWoodenBucket",		
[	[null					, "stickWood"			,	null		],
	["plankWood"			, null					,	"plankWood"	],
	[null					, "plankWood"			,	null		]
]);
		
SI.addShapedRecipe("advancedgenetics:basicdictionary", 
[	[null						, 	"RotaryCraft:rotarycraft_item_powders:4"	, null ],
	["advancedgenetics:cell"	,	"minecraft:book"							, "advancedgenetics:cell" ],
	[null						, 	"RotaryCraft:rotarycraft_item_powders:4"	, null ]
]);
		
SI.addShapedRecipe("battlegear2:shield.wood", 
[	[null			, 	"plankWood"	, null ],
	["plankWood"	,	"logWood"	, "plankWood" ],
	[null			, 	"plankWood"	, null ]
]);
		
SI.addShapedRecipe("EnderStorage:enderChest", 
[	["itemBlazeRod", 	"materialBedding"					, "itemBlazeRod" 	],
	["plankWood"	,	"chestWood"							, "plankWood" 		],
	["itemBlazeRod", 	"si.core:itemCherenkovsingularity"	, "itemBlazeRod" 	]
]);
		
SI.addShapedRecipe("EnderStorage:enderChest:4096", 
[	["itemBlazeRod", 	"materialBedding"					, "itemBlazeRod" 	],
	["plankWood"	,	"minecraft:cauldron"				, "plankWood" 		],
	["itemBlazeRod", 	"si.core:itemCherenkovsingularity"	, "itemBlazeRod" 	]
]);
		
SI.addShapedRecipe("EnderStorage:enderPouch", 
[	["itemBlazePowder", 	"materialLeather"					, "itemBlazePowder" 	],
	["materialLeather",		"si.core:itemCherenkovsingularity"	, "materialLeather" 	],
	["itemBlazePowder", 	"materialBedding"					, "itemBlazePowder" 	]
]);
		
SI.addShapedRecipe("enderutilities:enderpart:20@3", 
[	["stickWood", 							"stickWood", 						"stickWood" 						],
	["si.core:itemCherenkovsingularity",	"si.core:itemCherenkovsingularity",	"si.core:itemCherenkovsingularity" 	],
	["stickWood", 							"stickWood", 						"stickWood" 						]
]);
		
SI.addShapedRecipe("enderutilities:enderpart:21@3", 
[	["minecraft:string", 	"minecraft:string", 				"minecraft:string" 	],
	["materialLeather",	"si.core:itemCherenkovsingularity",		"materialLeather" 	],
	["minecraft:string", 	"minecraft:string", 				"minecraft:string" 	]
]);
		
SI.addShapedRecipe("enderutilities:enderpearlreusable", 
[	["nuggetGold", 						"pearlEnder", 		"nuggetGold" 						],
	["si.core:itemCherenkovsingularity","blockRedstone",	"si.core:itemCherenkovsingularity" 	],
	["nuggetGold", 						"pearlEnder", 		"nuggetGold" 						]
]);
		
SI.addShapedRecipe("enderutilities:enderarrow@4", 
[	[null, 				"nuggetGold", 		"si.core:itemCherenkovsingularity"	],
	[null,				"minecraft:arrow",	"nuggetGold" 						],
	["minecraft:arrow", null, 				null 								]
]);
		
SI.addShapedRecipe("enderutilities:enderpart@3", 
[	["ingotIron", 							"ingotIron", 						"ingotIron"							],
	["si.core:itemCherenkovsingularity",	"si.core:itemCherenkovsingularity",	"si.core:itemCherenkovsingularity" 	],
	["ingotIron", 							"ingotIron", 						"ingotIron"							]
]);
		
SI.addShapedRecipe("enderutilities:enderpart:1@3", 
[	["ingotGold", 							"ingotGold", 						"ingotGold"							],
	["si.core:itemCherenkovsingularity",	"si.core:itemCherenkovsingularity",	"si.core:itemCherenkovsingularity" 	],
	["ingotIron", 							"ingotIron", 						"ingotIron"							]
]);
		
SI.addShapedRecipe("enderutilities:enderpart:2@3", 
[	["ingotIron", 		"si.core:itemCherenkovsingularity", "ingotIron"							],
	["ingotGold",		"gemDiamond",						"ingotGold" 						],
	["blockObsidian", 	"si.core:itemCherenkovsingularity", "blockObsidian"						]
]);
		
SI.addShapedRecipe("enhancedportals:frame", 
[	["RotaryCraft:rotarycraft_item_powders:4", "ingotIron", 	"RotaryCraft:rotarycraft_item_powders:4"],
	["ingotIron",								"blockQuartz",	"ingotIron" 							],
	["RotaryCraft:rotarycraft_item_powders:4", "ingotIron", 	"RotaryCraft:rotarycraft_item_powders:4"]
]);
		
SI.addShapedRecipe("minecraft:end_portal_frame", 
[	["si.core:itemCherenkovsingularity", "si.core:itemCherenkovsingularity", 	"si.core:itemCherenkovsingularity"],
	["si.core:itemCherenkovsingularity", "mod_Invasion:riftFlux",				"si.core:itemCherenkovsingularity"],
	["si.core:itemCherenkovsingularity", "si.core:itemCherenkovsingularity", 	"si.core:itemCherenkovsingularity"]
]);
		
SI.addShapedRecipe("minecraft:saddle", 
[	["materialLeather", "materialLeather", 	"materialLeather"],
	["materialLeather", "materialLeather", 	"materialLeather"],
	["ingotIron", 		 null, 					"ingotIron"]
]);
		
SI.addShapedRecipe("minecraft:iron_horse_armor", 
[	["ingotIron", "ingotIron", 	"ingotIron"],
	["ingotIron", "ingotIron", 	"ingotIron"],
	["ingotIron", 		 null, 	"ingotIron"]
]);
		
SI.addShapedRecipe("minecraft:golden_horse_armor", 
[	["ingotGold", "ingotGold", 	"ingotGold"],
	["ingotGold", "ingotGold", 	"ingotGold"],
	["ingotGold", 		 null, 	"ingotGold"]
]);
		
SI.addShapedRecipe("minecraft:diamond_horse_armor", 
[	["gemDiamond", "gemDiamond", 	"gemDiamond"],
	["gemDiamond", "gemDiamond", 	"gemDiamond"],
	["gemDiamond", 		 null, 		"gemDiamond"]
]);
		
SI.addShapedRecipe("ExtraUtilities:decorativeBlock1:1", 
[	[null, 		"blockObsidian", 	null],
	["blockObsidian", "si.core:itemCherenkovsingularity", 	"blockObsidian"],
	[null,			"blockObsidian",	null]
]);
		
SI.addShapedRecipe("fossil:cultureVat", 
[	["blockGlass",	"dyeGreen", 		"blockGlass"],
	["blockGlass", "listAllwater",		"blockGlass"],
	["ingotIron",	"minecraft:bedrock","ingotIron" ]
]);
		
SI.addShapedRecipe("fossil:analyzer", 
[	["ingotIron",	"fossil:relicScrap","ingotIron"],
	["ingotIron", 	"bioFossil",		"ingotIron"],
	["ingotIron",	"minecraft:bedrock","ingotIron" ]
]);
		
SI.addShapedRecipe("GardenStuff:lattice", 
[	[null,			"barsIron",		null],
	["barsIron", 	"ingotIron",	"barsIron"],
	[null,			"barsIron",		null]
]);
		
SI.addShapedRecipe("GardenStuff:lattice_wood", 
[	[null,			"stickWood",		null],
	["stickWood", 	"minecraft:planks",	"stickWood"],
	[null,			"stickWood",		null]
]);
		
SI.addShapedRecipe("GardenStuff:lattice_wood:1", 
[	[null,			"stickWood",			null],
	["stickWood", 	"minecraft:planks:1",	"stickWood"],
	[null,			"stickWood",			null]
]);
		
SI.addShapedRecipe("GardenStuff:lattice_wood:2", 
[	[null,			"stickWood",			null],
	["stickWood", 	"minecraft:planks:2",	"stickWood"],
	[null,			"stickWood",			null]
]);
		
SI.addShapedRecipe("GardenStuff:lattice_wood:3", 
[	[null,	"stickWood",null],
	["stickWood", 	"minecraft:planks:3",	"stickWood"],
	[null,	"stickWood",null]
]);
		
SI.addShapedRecipe("GardenStuff:lattice_wood:4", [[null,	"stickWood",null],
					["stickWood", 	"minecraft:planks:4",	"stickWood"],
					[null,	"stickWood",null]
				]
		);
		
SI.addShapedRecipe("GardenStuff:lattice_wood:5", [[null,	"stickWood",null],
					["stickWood", 	"minecraft:planks:5",	"stickWood"],
					[null,	"stickWood",null]
				]
		);
		
SI.addShapedRecipe("Railcraft:machine.alpha:12", [["sand",	"minecraft:brick_block","sand"],
					["minecraft:brick_block", 	"minecraft:magma_cream",	"minecraft:brick_block"],
					["sand",	"minecraft:brick_block","sand"]
				]
		);
		
SI.addShapedRecipe("gendustry:MutagenTank", [["ingotTin",	"paneGlass","ingotTin"],
					["ingotTin", 	"paneGlass",	"ingotTin"],
					["ingotTin",	"minecraft:bedrock","ingotTin"]
				]
		);
		
SI.addShapedRecipe("mod_Invasion:phaseCrystal", [[null,	"dyeBlue",null],
					["dustRedstone", 	"RotaryCraft:rotarycraft_item_powders:4",	"dustRedstone"],
					[null,	"dyeBlue",null]
				]
		);

SI.addShapedRecipe("mod_Invasion:phaseCrystal", [[null,	"dustRedstone",null],
					["dyeBlue", 	"RotaryCraft:rotarycraft_item_powders:4",	"dyeBlue"],
					[null,	"dustRedstone",null]
				]
		);
		
SI.addShapedRecipe("Metallurgy:machine.frame", [["stone",	"ingotCopper","stone"],
					["ingotCopper", 	"stone",	"ingotCopper"],
					["stone",	"ingotCopper","stone"]
				]
		);
		
SI.addShapedRecipe("Metallurgy:crusher", [["ingotCopper",	"ingotCopper","ingotCopper"],
					["stone", 	"Metallurgy:machine.frame",	"stone"],
					["stone",	"minecraft:furnace","stone"]
				]
		);
		
SI.addShapedRecipe("minechem:minechemAtomicManipulator", [["minecraft:piston",	"minecraft:piston","minecraft:piston"],
					["minecraft:piston", 	"RotaryCraft:rotarycraft_item_powders:4",	"minecraft:piston"],
					["minecraft:piston",	"minecraft:piston","minecraft:piston"]
				]
		);
		
SI.addShapedRecipe("minecraft:skull:1", [["RotaryCraft:rotarycraft_item_powders:4",	"slimeball","RotaryCraft:rotarycraft_item_powders:4"],
					["slimeball", 	"VeganOption:mobHeadBlank",	"slimeball"],
					["RotaryCraft:rotarycraft_item_powders:4",	"slimeball","RotaryCraft:rotarycraft_item_powders:4"]
				]
		);
		
SI.addShapedRecipe("minecraft:skull:1", [["minecraft:daylight_detector",	"blockLapis","minecraft:daylight_detector"],
					["gemQuartz", 	"si.core:itemCherenkovsingularity",	"gemQuartz"],
					["gemEmerald",	"blockRedstone","gemEmerald"]
				]
		);
		
SI.addShapedRecipe("rftools:machineFrame", [["ingotIron",	"RotaryCraft:rotarycraft_item_powders:4","ingotIron"],
					["goldnugget", null,	"goldnugget"],
					["ingotIron",	"RotaryCraft:rotarycraft_item_powders:4","ingotIron"]
				]
		);
		
SI.addShapedRecipe("harvestcraft:potItem", [["stickWood",	"ingotBrick","ingotBrick"],
					[null, 		"ingotBrick","ingotBrick"],
					[null,	null,null]
				]
		);
		
SI.addShapedRecipe("harvestcraft:skilletItem", [["ingotBrick",	null,null],
					[null, "ingotBrick",	null],
					[null,	null,"stickWood"]
				]
		);
		
SI.addShapedRecipe("harvestcraft:saucepanItem", [["ingotBrick",	null,null],
					[null, "stickWood",	null],
					[null,	null,null]
				]
		);
		
SI.addShapedRecipe("harvestcraft:cuttingboardItem", [["itemFlint",	null,null],
					[null, "stickWood",	null],
					[null,	null,"plankWood"]
				]
		);
		
SI.addShapedRecipe("minecraft:enchanting_table", [["blockObsidian",	"blockGlassGreen","blockObsidian"],
					["OpenComputers:item:24", "ProjRed|Core:projectred.core.part:19",	"blockRedstone"],
					["chisel:diamondChisel",	"RotaryCraft:rotarycraft_item_shaftcraft:3","BuildCraft|Core:wrenchItem"]
				]
		);
		
SI.addShapedRecipe("eplus:tableUpgrade", [["blockGlassRed",	"blockGlassGreen","blockGlassBlue"],
					["OpenComputers:item:25", "blockGlassColorless",	"ElectriCraft:electricraft_item_battery"],
					["chisel:obsidianChisel",	null,"appliedenergistics2:item.ToolCertusQuartzWrench"]
				]
		);
		
SI.addShapedRecipe("eplus:advancedEnchantmentTable", [["blockGlassRed",	"blockGlassGreen","blockGlassBlue"],
					["OpenComputers:item:25", "blockGlassColorless",	"ElectriCraft:electricraft_item_battery"],
					["chisel:obsidianChisel",	"minecraft:enchanting_table","appliedenergistics2:item.ToolCertusQuartzWrench"]
				]
		);



SI.setBlockProperties("minecraft:stonebrick")								.br(45.0);
SI.setBlockProperties("chisel:stonebricksmooth") 							.br(45.0);
SI.setBlockProperties("chisel:factoryblock") 								.br(45.0);
SI.setBlockProperties("chisel:granite") 									.br(45.0);
SI.setBlockProperties("chisel:iron_block") 									.br(45.0);
SI.setBlockProperties("chisel:iron2") 										.br(45.0);
SI.setBlockProperties("RotaryCraft:rotarycraft_block_deco") 				.br(45.0);
SI.setBlockProperties("minecraft:coal_ore")  								.hl(1).br(45.0);
SI.setBlockProperties("minecraft:diamond_ore")  							.hl(5).br(45.0);
SI.setBlockProperties("minecraft:emerald_ore")  							.hl(5).br(45.0);
SI.setBlockProperties("minecraft:gold_ore") 	 							.hl(4).br(45.0);
SI.setBlockProperties("minecraft:iron_ore")  								.hl(3).br(45.0);
SI.setBlockProperties("minecraft:lit_redstone_ore")  						.hl(2).br(45.0);
SI.setBlockProperties("minecraft:redstone_ore")  							.hl(2).br(45.0);
SI.setBlockProperties("minecraft:quartz_ore")  								.hl(5).br(45.0);
SI.setBlockProperties("minecraft:lapis_ore") 	 							.hl(2).br(45.0);
SI.setBlockProperties("minecraft:obsidian") 	 							.hl(6);
SI.setBlockProperties("appliedenergistics2:tile.OreQuartz")  				.hl(5).br(45.0);
SI.setBlockProperties("appliedenergistics2:tile.OreQuartzCharged") 			.hl(5).br(45.0);
SI.setBlockProperties("appliedenergistics2:tile.BlockSkyStone") 			.hl(7);
SI.setBlockProperties("Forestry:resources:1") 								.hl(1).br(45.0);
SI.setBlockProperties("Forestry:resources:2") 								.hl(2).br(45.0);
SI.setBlockProperties("fossil:fossil") 										.hl(4);
SI.setBlockProperties("minechem:tile.oreUranium") 							.hl(4).br(45.0);
SI.setBlockProperties("ElectriCraft:electricraft_block_ore") 				.hl(0,1).hl(1,2).hl(2,4).hl(3,3).hl(4,1).hl(5,4).br(45);
SI.setBlockProperties("Forestry:resources") 								.hl(0,1).hl(1,1).hl(2,2).br(45.0);
SI.setBlockProperties("NetherOres:tile.netherores.ore.0") 					.hl(0, 1).hl(1, 5).hl(2, 4).hl(3, 3).hl(4, 2).hl(5, 4).hl(6, 1).hl(7, 2).hl(8, 5).hl(9, 4).hl(10,2)
																			.hl(11,4).hl(12,4).hl(13,5).hl(14,5).hl(15,5).br(45.0);		
SI.setBlockProperties("NetherOres:tile.netherores.ore.1") 					.hl(0, 4).hl(1, 3).hl(2, 4).hl(3, 4).hl(4, 4).hl(5, 1).hl(6, 5).hl(7, 4).hl(8, 5).hl(9, 4).hl(10,4)
																			.hl(11,2).hl(12,1).hl(13,1).hl(14,1).hl(15,2).br(45.0);		
SI.setBlockProperties("ProjRed|Exploration:projectred.exploration.ore:0") 	.hl(0,5).hl(1,5).hl(2,5).hl(3,1).hl(4,2).hl(5,4).hl(6,4).br(45.0);		
SI.setBlockProperties("Railcraft:ore") 										.hl(0,1).hl(1,1).hl(2,5).hl(3,5).hl(4,2).hl(5,5).hl(7,3).hl(8,4).hl(9,1).hl(10,2).hl(11,2).br(45.0);
SI.setBlockProperties("ReactorCraft:reactorcraft_block_fluoriteore") 		.hl(0,5).hl(1,5).hl(2,5).hl(3,5).hl(4,5).hl(5,5).hl(6,5).hl(7,5).br(45.0);
SI.setBlockProperties("ReactorCraft:reactorcraft_block_ore") 				.hl(1,4).hl(2,4).hl(3,4).hl(4,4).hl(5,4).hl(6,1).hl(7,1).hl(8,1).hl(9,4).br(45.0);



