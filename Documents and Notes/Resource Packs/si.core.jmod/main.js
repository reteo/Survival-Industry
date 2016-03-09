// Because this is JavaScript we can easily define Variables for longer Strings
var bedrockDust = "RotaryCraft:rotarycraft_item_powders:4";
var bedrockIngot = "RotaryCraft:rotarycraft_item_compacts:3";
var aluminumIngot = "RotaryCraft:rotarycraft_item_modingots:6";
var indiumIngot = "RotaryCraft:rotarycraft_item_modingots:51";
var pitchblendeIngot = "RotaryCraft:rotarycraft_item_modingots:49";
var cdInAgIngot = "ReactorCraft:reactorcraft_item_crafting:3";
var plutonium = "ReactorCraft:reactorcraft_item_plutonium:0";
var platinumIngot = "RotaryCraft:rotarycraft_item_modingots:44";
var cadmiumIngot = "RotaryCraft:rotarycraft_item_modingots:50";
var cherenkov = "si.core:itemCherenkovsingularity";

Settings.showToolHarvestLevels(true);
Settings.showArmorValues(true);
Settings.showBlockHarvestLevels(true);
Settings.enhancedAnvilRepair(true);
Settings.craftingGridToolRepair(true);
Global.preventToolBreaking(true);
RotaryCraft.patchRotarycraftSteelTools(true);
Sync.preventRecipeReload(true);

// Mods the pack depends on: modid, display name
dependency("RotaryCraft",	"RotaryCraft");
dependency("ReactorCraft",	"ReactorCraft");
dependency("ReactorCraft",	"ReactorCraft");
dependency("ElectriCraft",	"ElectriCraft");
dependency("CustomOreGen",	"Custom Ore Generation");
dependency("HungerOverhaul",	"Hunger Overhaul");
dependency("OreFlowers",	"Ore Flowers");
dependency("mod_Invasion",	"Invasion Mod");
dependency("HarderWildlife",	"Harder Wildlife");
dependency("SpecialAI",	"Special AI");
dependency("ZAMod",		"Zombie Awareness");

// As of now, only the armors use these colors. colorname, red, green, glue.
defineColor("RED", 255, 0, 0);
defineColor("GREEN", 0, 255, 0);
defineColor("BLUE", 0, 0,255);
defineColor("COPPER", 192, 88, 0);
defineColor("BRONZE", 192, 104, 64);
defineColor("STEEL", 64, 64, 64);
defineColor("PLATINUM", 52, 104, 192);
defineColor("ELECTRUM", 255, 255, 192);
defineColor("TIN", 128, 128, 128);
defineColor("ALUMINUM", 192, 192, 192);
defineColor("SILVER", 255, 255, 255);

addCreativeTab("si.core.general","Survival Industry","si.core:itemCrucible");
addCreativeTab("si.core.armor","Survival Industry Armor","si.core:armorBronzeChestplate");
addCreativeTab("si.core.tools","Survival Industry Tools","si.core:toolPickaxeFlint");
addCreativeTab("si.core.food","Survival Industry Food","si.core:foodJPMorningSupreme");

// Metal configuration. Requires SIIngotGeneric for ingots and SIMetalBlocks for blocks to be added
if(!isModLoaded("Metallurgy")){
	addMetalBlock("bronze");	
	addMetalIngot("bronze");
	addMetalBlock("electrum");	
	addMetalIngot("electrum");
	addMetalBlock("steel");		
	addMetalIngot("steel");
	addMetalBlock("silver");
	if(!isModLoaded("ElectriCraft")){
		addMetalIngot("silver");
		addMetalBlock("copper");	
		addMetalIngot("copper");
		addMetalBlock("tin");		
		addMetalIngot("tin");
	}
	if(isModLoaded("ElectriCraft")) addMetalBlock("platinum");
}

if(isModLoaded("ElectriCraft")) addMetalBlock("aluminum");
if(isModLoaded("ReactorCraft")) {
	addMetalBlock("cadmium");
	addMetalBlock("indium");
}

// Defines alloys available for the crucible
addAlloy("ingotCopper", "ingotTin", "ingotBronze", 2);
addAlloy("ingotSilver", "ingotGold", "ingotElectrum", 2);
addAlloy("oreIron", "ingotIron", 2);
addAlloy("oreTin", "ingotTin", 2);
addAlloy("oreCopper", "ingotCopper", 2);
addAlloy("oreGold", "ingotGold", 2);
addAlloy("oreAluminum", "ingotAluminium", 2);
addAlloy("oreSilver", "ingotSilver", 2);


RotaryCraft.addBlastFurnaceRecipe	("ingotBronze",	 		600,1,0,[["ingotCopper","ingotTin",null],[null,null,null],[null,null,null]]);
RotaryCraft.addBlastFurnaceRecipe	("ingotElectrum",		600,1,0,[["ingotSilver","ingotGold",null],[null,null,null],[null,null,null]]);

RotaryCraft.addBlastFurnaceAlloying	("si.core:ingotSteel",		"minecraft:iron_ingot"	,550).setXP(1).input(1,"minecraft:coal",100,2);
RotaryCraft.addBlastFurnaceAlloying	("si.core:ingotSteel",		"minecraft:iron_ingot"	,550).setXP(1).input(1,"minecraft:coal:1",100,4);
RotaryCraft.addBlastFurnaceAlloying	("si.core:ingotSteel",		"minecraft:iron_ingot"	,550).setXP(1).input(1,"RotaryCraft:rotarycraft_item_compacts:8",100,1);
RotaryCraft.addBlastFurnaceAlloying	("si.core:ingotSteel",		"minecraft:iron_ingot"	,1200).setXP(1)
	.input(1,"RotaryCraft:rotarycraft_item_compacts:8",100,1)
	.input(2,"minecraft:gunpowder",3,1);

// Blocks: name, class, hardness, resistance, tool, harvestlevel, material, tab
addBlock("blockMetalGeneric", "MetalBlock", 10.0, 10.0, "pickaxe", 1, "iron", "si.core.general");
if(!isModLoaded("ElectriCraft") && !isModLoaded("!Metallurgy")){
	addBlock("oreCopper" , "CoreBlock", 10.0, 15.0, "pickaxe", 1, "iron", "si.core.general");
	addBlock("oreTin" , "CoreBlock", 10.0, 15.0, "pickaxe", 2, "iron", "si.core.general");
	addBlock("oreSilver" , "CoreBlock", 10.0, 15.0, "pickaxe", 3, "iron", "si.core.general");
	if(!isModLoaded("CustomOreGen")){
		addOreGeneration().blockToGenerate("si.core:oreCopper").chancesPerChunk(7).startY(48).endY(72);
		addOreGeneration().blockToGenerate("si.core:oreTin").chancesPerChunk(5).startY(28).endY(48);
		addOreGeneration().blockToGenerate("si.core:oreSilver").chancesPerChunk(2).startY(16).endY(24);
	}
}

if(isModLoaded("ReactorCraft")){
	addBlock("blockPitchblende", "BlockPitchblende", 30.0, 45.0, "pickaxe", 1, "iron", "si.core.general");
	addBlock("blockCdInAg" , "BlockCdInAg", 10.0, 15.0, "pickaxe", 1, "iron", "si.core.general");
}


// Items: name, class, stacksize, tab
addItem("ingotGeneric", "IngotGeneric", 64, "si.core.general");
addItem("itemCherenkovsingularity", "CoreItem", 1, "si.core.general");
addItem("itemCrucible", "ItemCrucible", 64, "si.core.general");
addItem("itemIngotMold", "ItemIngotMold", 64, "si.core.general");
addItem("itemDyeWhite", "CoreDye", 64, "si.core.general").colorindex( 0);
addItem("itemDyeBlue", "CoreDye", 64, "si.core.general").colorindex(11);
addItem("itemDyeBrown", "CoreDye", 64, "si.core.general").colorindex(12);
addItem("itemDyeGreen", "CoreDye", 64, "si.core.general").colorindex(13);
addItem("itemDyeBlack", "CoreDye", 64, "si.core.general").colorindex(15);
addItem("itemWoodenBucket", "ItemWoodenBucket", 16, "si.core.general");
addItem("foodJPMorningSupreme", "CoreFood", 1, "si.core.food")
  .fooddata(FoodData(16,1.600000023841858,false,false).buffdata("digspeed", 60, 1, 100));
if(isModLoaded("chisel")){
	addItem("toolChiselFlint", "ToolChisel", 1, "si.core.tools").tooldata(ToolData("FLINT").durability(64));
	addItem("toolChiselBedrock", "ToolChisel", 1, "si.core.tools").tooldata(ToolData("BEDROCK").hasModes(true));
}

//OreDict: item (or oreDictEntry) to oreDictEntry. Matching two OreDictEntries against each other will result in all items of the first entry become member of the second, not vice versa.
addOreDict("si.core:blockPitchblende", "blockUranium");
addOreDict("si.core:oreSilver", "oreSilver");
addOreDict("si.core:oreCopper", "oreCopper");
addOreDict("si.core:oreTin", "oreTin");
addOreDict("si.core:itemDyeBlue", "dyeBlue");
addOreDict("si.core:itemDyeBlue", "dye");
addOreDict("si.core:itemDyeWhite", "dyeWhite");
addOreDict("si.core:itemDyeWhite", "dye");
addOreDict("si.core:itemDyeGreen", "dyeGreen");
addOreDict("si.core:itemDyeGreen", "dye");
addOreDict("si.core:itemDyeBlack", "dyeBlack");
addOreDict("si.core:itemDyeBlack", "dye");
addOreDict("si.core:itemDyeBrown", "dyeBrown");
addOreDict("si.core:itemDyeBrown", "dye");
addOreDict("enderutilities:enderpart:0", "enderAlloyBasic");
addOreDict("enderutilities:enderpart:1", "enderAlloyEnhanced");
addOreDict("enderutilities:enderpart:2", "enderAlloyAdvanced");
addOreDict("minecraft:coal:2", "fuelCoal");
addOreDict("minecraft:coal:2", "itemCoal");
addOreDict("minecraft:coal:2", "coal");
addOreDict("RotaryCraft:rotarycraft_item_canola","sourceVegetableOil");
addOreDict("minecraft:flint","itemFlint");
addOreDict("minecraft:obsidian","blockObsidian");
addOreDict("minecraft:leather","materialLeather");

removeChestLoot("minecraft:iron_ingot");
removeChestLoot("minecraft:gold_ingot");
removeChestLoot("minecraft:redstone");
removeChestLoot("minecraft:iron_ingot");
removeChestLoot("minecraft:diamond");
removeChestLoot("minecraft:emerald");
removeChestLoot("minecraft:minecraft:iron_pickaxe");
removeChestLoot("minecraft:obsidian");
removeChestLoot("Railcraft:ingot");
removeChestLoot("Railcraft:cube:2");

//loops for tools and armor


// Adds/defines tool materials: name, mininglevel, durability, efficiency(speed), damage vs entities, enchantability, repairmaterial (must be oreDicted)
addToolMaterial( "WOOD", 0, 59, 2.0,0.0,15, "plankWood" );
addToolMaterial( "GOLD", 0, 131, 4.0,0.0,25, "ingotGold" );
addToolMaterial( "STONE", 1, 131, 4.0,0.0, 5, "cobblestone" );
addToolMaterial( "FLINT", 1, 175, 5.0,1.0,10, "itemFlint" );
addToolMaterial( "COPPER", 2, 180, 5.0,1.0, 5, "ingotCopper" );
addToolMaterial( "ELECTRUM", 2, 100,20.0,0.0,30, "ingotElectrum" );
addToolMaterial( "SILVER", 2, 25,16.0,1.0,20, "ingotSilver" );
addToolMaterial( "ALUMINUM", 2, 175, 4.5,2.0, 4, "ingotAluminum" );
addToolMaterial( "BRONZE", 4, 250, 6.0,1.0,14, "ingotBronze" );
addToolMaterial( "IRON", 4, 250, 6.0,2.0,14, "ingotIron" );
addToolMaterial( "HSLA", 5, 750, 7.0,3.0,18, "ingotHSLA" );
addToolMaterial( "STEEL", 5, 750, 7.0,3.0,18, "ingotSteel" );
addToolMaterial( "EMERALD", 6,1561, 8.0,3.0,10, "gemDiamond" );
addToolMaterial( "Scarab", 6,1861, 8.0,4.0,25, "gemScarab" );
addToolMaterial( "RUBY", 5, 512, 8.0,3.0,10, "gemRuby" );
addToolMaterial( "SAPPHIRE", 5, 512, 8.0,3.0,10, "gemSapphire" );
addToolMaterial( "PERIDOT", 5, 512,7.75,3.0,14, "getPeridot" );
addToolMaterial( "RAILCRAFT_STEEL", 5, 750, 7.0,3.0,18, "ingotSteel" );
addToolMaterial( "darkSteel", 6,1250, 8.0,3.0, 3, "ingotDarkSteel" );
addToolMaterial( "enderutilities.enderalloy.advanced", 7,5120,14.0,4.0,15, "enderAlloyAdvanced" );
addToolMaterial( "BEDROCK", 7, 0, 8.0,3.0,10, "RotaryCraft:ingotBedrock");

// Adds/defines armor materials: name, base modifier (for durability), armor helmet, chest, leggigns, boots, enchatability, repairmaterial

addArmorMaterial( "CLOTH", 5,1,3,2,1,15,"itemLeather" ); // Vanilla, Leather
addArmorMaterial( "CHAIN", 15,2,5,4,1,12,"ingotIron" ); // Vanilla
addArmorMaterial( "COPPER", 8,2,5,4,1, 9,"ingotCopper" );
addArmorMaterial( "TIN", 8,2,4,3,1,15,"ingotTin" );
addArmorMaterial( "ALUMINUM", 6,2,4,3,1,20,"ingotAluminum" );
addArmorMaterial( "IRON", 15,2,6,5,2, 9,"ingotIron" ); // Vanilla
addArmorMaterial( "BRONZE", 18,2,6,5,2, 9,"ingotBronze" );
addArmorMaterial( "GOLD", 7,2,5,3,1,25,"ingotGold" );
addArmorMaterial( "SILVER", 7,2,5,3,1,20,"ingotSilver" );
addArmorMaterial( "ELECTRUM", 8,2,5,4,1,28,"ingotElectrum" ); 
addArmorMaterial( "STEEL", 21,2,7,5,2, 9,"ingotSteel" );
addArmorMaterial( "HSLA", 21,2,7,5,2, 9,"ingotHSLA" );
addArmorMaterial( "PLATINUM", 28,3,8,6,3,20,"ingotPlatinum" );
addArmorMaterial( "DIAMOND", 33,3,8,6,3,10,"gemDiamond" ); // Vanilla
addArmorMaterial( "darkSteel", 35,3,8,6,3, 4,"ingotDarkSteel" );

// The recipes for these items are erased
removeRecipes( "advancedgenetics:combustiongeneratoridle");
removeRecipes( "advancedgenetics:basicdictionary");
removeRecipes( "battlegear2:shield.wood");
removeRecipes( "BuildCraft|Builders:machineBlock");
removeRecipes( "BuildCraft|Core:engineBlock:0");
removeRecipes( "BuildCraft|Core:engineBlock:1");
removeRecipes( "BuildCraft|Core:engineBlock:2");
removeRecipes( "BuildCraft|Core:engineBlock:3");
removeRecipes( "BuildCraft|Factory:autoWorkbenchBlock:0");
removeRecipes( "BuildCraft|Factory:miningWellBlock:0");
removeRecipes( "EnderStorage:enderChest");
removeRecipes( "EnderStorage:enderChest:4096");
removeRecipes( "EnderStorage:enderPouch");
removeRecipes( "enderutilities:enderpart");
removeRecipes( "enderutilities:enderpart:1");
removeRecipes( "enderutilities:enderpart:2");
removeRecipes( "enderutilities:enderpart:20");
removeRecipes( "enderutilities:enderpart:21");
removeRecipes( "enderutilities:enderpearlreusable");
removeRecipes( "enderutilities:enderarrow");
removeRecipes( "enhancedportals:frame");
removeRecipes( "minecraft:saddle");
removeRecipes( "minecraft:iron_horse_armor");
removeRecipes( "minecraft:golden_horse_armor");
removeRecipes( "minecraft:diamond_horse_armor");
removeRecipes( "minecraft:end_portal_frame");
removeRecipes( "ExtraUtilities:decorativeBlock1:1");
removeRecipes( "fossil:analyzer");
removeRecipes( "fossil:cultureVat");
removeRecipes( "GardenStuff:lattice");
removeRecipes( "GardenStuff:lattice_wood");
removeRecipes( "GardenStuff:lattice_wood:1");
removeRecipes( "GardenStuff:lattice_wood:2");
removeRecipes( "GardenStuff:lattice_wood:3");
removeRecipes( "GardenStuff:lattice_wood:4");
removeRecipes( "GardenStuff:lattice_wood:5");
removeRecipes( "Railcraft:machine.alpha:12");
removeRecipes( "gendustry:MutagenTank");
removeRecipes( "mod_Invasion:phaseCrystal");
removeRecipes( "Metallurgy:base.brick");
removeRecipes( "Metallurgy:base.brick:1");
removeRecipes( "Metallurgy:base.brick:2");
removeRecipes( "Metallurgy:base.brick:3");
removeRecipes( "Metallurgy:base.brick:4");
removeRecipes( "Metallurgy:base.brick:5");
removeRecipes( "Metallurgy:base.brick:6");
removeRecipes( "Metallurgy:base.brick:7");
removeRecipes( "Metallurgy:precious.brick");
removeRecipes( "Metallurgy:precious.brick:1");
removeRecipes( "Metallurgy:precious.brick:2");
removeRecipes( "Metallurgy:precious.brick:3");
removeRecipes( "Metallurgy:precious.brick:4");
removeRecipes( "Metallurgy:vanilla.brick:0");
removeRecipes( "Metallurgy:vanilla.brick:1");
removeRecipes( "Metallurgy:machine.frame");
removeRecipes( "Metallurgy:crusher");
removeRecipes( "Metallurgy:base.block:2");
removeRecipes( "Metallurgy:base.brick:2");
removeRecipes( "Metallurgy:manganese.ingot");
removeRecipes( "minechem:minechemAtomicManipulator");
removeRecipes( "minecraft:skull:1");
removeRecipes( "Sync:Sync_ItemPlaceholder");
removeRecipes( "rftools:endergenicBlock:0");

removeRecipes( "minecraft:dye:0");
removeRecipes( "minecraft:dye:2");
removeRecipes( "minecraft:dye:3");
removeRecipes( "minecraft:dye:4");
removeRecipes( "minecraft:dye:15");
removeRecipes( "minecraft:enchanting_table");
removeRecipes( "eplus:tableUpgrade");
removeRecipes( "eplus:advancedEnchantmentTable");
removeRecipes( "rftools:machineFrame");
removeRecipes( "harvestcraft:cottonItem");

removeSmeltingRecipes("Metallurgy:manganese.ingot");

// While still in the game, these items will not show up in NEI
hideFromNEI("advancedgenetics:combustiongeneratoridle");
hideFromNEI("advancedgenetics:combustiongenerator");
hideFromNEI("appliedenergistics2:tile.BlockVibrationChamber");
hideFromNEI("BuildCraft|Builders:machineBlock");
hideFromNEI("BuildCraft|Core:engineBlock:0");
hideFromNEI("BuildCraft|Core:engineBlock:1");
hideFromNEI("BuildCraft|Core:engineBlock:2");
hideFromNEI("BuildCraft|Core:engineBlock:3");
hideFromNEI("BuildCraft|Factory:autoWorkbenchBlock:0");
hideFromNEI("BuildCraft|Factory:miningWellBlock:0");
hideFromNEI("extracells:vibrantchamberfluid");
hideFromNEI("Metallurgy:base.ore:2");
hideFromNEI("Metallurgy:base.block:2");
hideFromNEI("Metallurgy:base.brick:2");
hideFromNEI("Metallurgy:manganese.molten");
hideFromNEI("Metallurgy:base.dust:2");
hideFromNEI("Metallurgy:manganese.ingot");
hideFromNEI("Metallurgy:molten.bucket:6");
hideFromNEI("aobd:crushedManganese");
hideFromNEI("rftools:endergenicBlock:0");


//Adding some item tooltips. First argument: The list of items the tooltips apply to. Second argument: A list of lines that show up as tool tips.
addToolTip(
 ["advancedgenetics:combustiongeneratoridle",
  "appliedenergistics2:tile.BlockVibrationChamber",
  "BuildCraft|Core:engineBlock:0",
  "BuildCraft|Core:engineBlock:1",
  "BuildCraft|Core:engineBlock:2",
  "BuildCraft|Core:engineBlock:3",
  "extracells:vibrantchamberfluid",
  "rftools:endergenicBlock:0"],  
 ["info.si.core.tooltips.enginedisable1",
  "info.si.core.tooltips.enginedisable2",
  "info.si.core.tooltips.enginedisable3"]);
  
addToolTip(
 ["BuildCraft|Builders:machineBlock"],
 ["info.si.core.tooltips.quarrydisable1",
  "info.si.core.tooltips.quarrydisable2"]);
addToolTip(
 ["BuildCraft|Factory:autoWorkbenchBlock:0"],
 ["info.si.core.tooltips.autoworkbenchdisable1",
  "info.si.core.tooltips.autoworkbenchdisable2"]);
addToolTip(
 ["BuildCraft|Factory:miningWellBlock:0"],
 ["info.si.core.tooltips.miningwelldisable1",
  "info.si.core.tooltips.miningwelldisable2"]);
addToolTip(
 ["si.core:itemDyeWhite"], 
 ["info.si.core.tooltips.justadye"]);
addToolTip(
 ["si.core:foodJPMorningSupreme"],
 ["info.si.core.tooltips.jpsupreme1",
  "info.si.core.tooltips.jpsupreme2",
  "info.si.core.tooltips.jpsupreme3"]);

// Shapeless recipes
addShapelessRecipe("RoC:ingotAluminum@9", ["blockAluminum"]);
addShapelessRecipe("RoC:ingotIndium@9", ["blockIndium"]);
addShapelessRecipe("RoC:ingotPlatinum@9", ["blockPlatinum"]);
addShapelessRecipe("RoC:ingotPitchblende@9", ["blockUranium"]);
addShapelessRecipe("RoC:ingotCadmium@9", ["blockCadmium"]);
addShapelessRecipe("ReC:ingotCdInAg@9", ["si.core:blockCdInAg"]);
addShapelessRecipe(cherenkov, [plutonium,"minecraft:ender_pearl"]);
addShapelessRecipe("si.core:itemIngotMold", ["minecraft:sand"]);
addShapelessRecipe("minecraft:stick", ["si.core:itemIngotMold","minecraft:stick"]);
addShapelessRecipe("si.core:itemCrucible", ["minecraft:clay","minecraft:sand"]);
addShapelessRecipe("minecraft:flint", ["minecraft:gravel"]);
addShapelessRecipe("si.core:foodJPMorningSupreme", ["listAllmilk","foodCoffee","foodToastsandwich","listAllegg@2","foodCheese@2","foodMayo","toolSkillet"]);
addShapelessRecipe("harvestcraft:freshmilkItem", ["si.core:itemWoodenBucket_milk"]);
addShapelessRecipe("minecraft:dye:1", ["OreFlowers:ore_flowers:3"]);
addShapelessRecipe("minecraft:dye:2", ["OreFlowers:ore_flowers:1"]);
addShapelessRecipe("minecraft:dye:2", ["OreFlowers:ore_flowers3"]);
addShapelessRecipe("minecraft:dye:2", ["OreFlowers:ore_flowers2:5"]);
addShapelessRecipe("minecraft:dye:5", ["OreFlowers:ore_flowers:5"]);
addShapelessRecipe("minecraft:dye:5", ["OreFlowers:ore_flowers:6"]);
addShapelessRecipe("minecraft:dye:5", ["OreFlowers:ore_flowers2:1"]);
addShapelessRecipe("minecraft:dye:7", ["OreFlowers:ore_flowers"]);
addShapelessRecipe("minecraft:dye:7", ["OreFlowers:ore_flowers:2"]);
addShapelessRecipe("minecraft:dye:7", ["OreFlowers:ore_flowers:7"]);
addShapelessRecipe("minecraft:dye:11", ["OreFlowers:ore_flowers:4"]);
addShapelessRecipe("minecraft:dye:13", ["OreFlowers:ore_flowers2:2"]);
addShapelessRecipe("minecraft:dye:13", ["OreFlowers:ore_flowers2:4"]);
addShapelessRecipe("minecraft:dye:13", ["OreFlowers:ore_flowers2:7"]);
addShapelessRecipe("minecraft:dye:14", ["OreFlowers:ore_flowers2:6"]);
addShapelessRecipe("VeganOption:oilVegetable@7", ["presserOil","minecraft:glass_bottle@7","RotaryCraft:rotarycraft_item_canola:1"]);
addShapelessRecipe("VeganOption:oilVegetable", ["presserOil","minecraft:glass_bottle","RotaryCraft:rotarycraft_item_canola"]);
addShapelessRecipe("harvestcraft:mustardseedItem", ["OreFlowers:ore_flowers2"]);
addShapelessRecipe("si.core:itemDyeBlack@8", ["flowerBlack","minecraft:glass_bottle","dustRedstone"]);
addShapelessRecipe("si.core:itemDyeWhite@8", ["flowerWhite","minecraft:glass_bottle","dustRedstone"]);
addShapelessRecipe("si.core:itemDyeBrown@8", ["flowerBrown","minecraft:glass_bottle","dustRedstone"]);
addShapelessRecipe("si.core:itemDyeGreen@8", ["flowerGreen","minecraft:glass_bottle","dustRedstone"]);
addShapelessRecipe("si.core:itemDyeBlue@8", ["flowerBlue","minecraft:glass_bottle","dustRedstone"]);
addShapelessRecipe("si.core:itemDyeBlack", ["flowerBlack"]);
addShapelessRecipe("si.core:itemDyeWhite", ["flowerWhite"]);
addShapelessRecipe("si.core:itemDyeBrown", ["flowerBrown"]);
addShapelessRecipe("si.core:itemDyeGreen", ["flowerGreen"]);
addShapelessRecipe("si.core:itemDyeBlue", ["flowerBlue"]);
addShapelessRecipe("minecraft:dye:15@3", ["minecraft:bone"]);
addShapelessRecipe("minecraft:dye:4@9", ["minecraft:lapis_block"]);

addShapedStandardRecipe("si.core:blockPitchblende","block","ingotUranium");
addShapedStandardRecipe("si.core:blockCdInAg","block",cdInAgIngot);
  
addShapedRecipe("si.core:itemWoodenBucket", [
  [null, "stickWood", null ],
  ["plankWood", null, "plankWood" ],
  [null, "plankWood", null ]]);
  
addShapedRecipe("advancedgenetics:basicdictionary", [
  [null, bedrockDust, null ],
  ["advancedgenetics:cell", "minecraft:book", "advancedgenetics:cell" ],
  [null, bedrockDust, null ]]);
  
addShapedRecipe("battlegear2:shield.wood", [
  [null, "plankWood" , null ],
  ["plankWood", "logWood" , "plankWood" ],
  [null, "plankWood" , null ]]);
  
addShapedRecipe("EnderStorage:enderChest", [
  ["itemBlazeRod", "materialBedding", "itemBlazeRod" ],
  ["plankWood", "chestWood", "plankWood" ],
  ["itemBlazeRod", cherenkov, "itemBlazeRod" ]]);
  
addShapedRecipe("EnderStorage:enderChest:4096", [
  ["itemBlazeRod", "materialBedding", "itemBlazeRod" ],
  ["plankWood", "minecraft:cauldron", "plankWood" ],
  ["itemBlazeRod", cherenkov, "itemBlazeRod" ]]);
  
addShapedRecipe("EnderStorage:enderPouch", [
  ["itemBlazePowder", "materialLeather", "itemBlazePowder" ],
  ["materialLeather", cherenkov, "materialLeather" ],
  ["itemBlazePowder", "materialBedding", "itemBlazePowder" ]
]);
  
addShapedRecipe("enderutilities:enderpart:20@3", [
  ["stickWood", "stickWood", "stickWood" ],
  [cherenkov, cherenkov, cherenkov ],
  ["stickWood", "stickWood", "stickWood" ]]);
  
addShapedRecipe("enderutilities:enderpart:21@3", [
  ["minecraft:string", "minecraft:string", "minecraft:string" ],
  ["materialLeather", cherenkov, "materialLeather" ],
  ["minecraft:string", "minecraft:string", "minecraft:string" ]]);
  
addShapedRecipe("enderutilities:enderpearlreusable", [
  ["nuggetGold", "pearlEnder", "nuggetGold" ],
  [cherenkov, "blockRedstone", cherenkov ],
  ["nuggetGold", "pearlEnder", "nuggetGold" ]]);
  
addShapedRecipe("enderutilities:enderarrow@4", [
  [null, "nuggetGold", cherenkov ],
  [null, "minecraft:arrow", "nuggetGold" ],
  ["minecraft:arrow", null, null ]]);
  
addShapedRecipe("enderutilities:enderpart@3", [
  ["ingotIron", "ingotIron", "ingotIron" ],
  [cherenkov, cherenkov, cherenkov ],
  ["ingotIron", "ingotIron", "ingotIron" ]]);
  
addShapedRecipe("enderutilities:enderpart:1@3", 
  [ ["ingotGold", "ingotGold", "ingotGold" ],
  [cherenkov, cherenkov, cherenkov ],
  ["ingotIron", "ingotIron", "ingotIron" ]]);
  
addShapedRecipe("enderutilities:enderpart:2@3", [
  ["ingotIron", cherenkov, "ingotIron" ],
  ["ingotGold", "gemDiamond", "ingotGold" ],
  ["blockObsidian", cherenkov, "blockObsidian" ]]);
  
addShapedRecipe("enhancedportals:frame", [
  [bedrockDust, "ingotIron", bedrockDust],
  ["ingotIron", "blockQuartz", "ingotIron"],
  [bedrockDust, "ingotIron", bedrockDust]]);
  
addShapedRecipe("minecraft:end_portal_frame", [
  [cherenkov, cherenkov, cherenkov],
  [cherenkov, "mod_Invasion:riftFlux", cherenkov],
  [cherenkov, cherenkov, cherenkov]]);
  
addShapedRecipe("minecraft:saddle", [
  ["materialLeather", "materialLeather", "materialLeather" ],
  ["materialLeather", "materialLeather", "materialLeather" ],
  ["ingotIron", null, "ingotIron" ]]);
  
addShapedRecipe("minecraft:iron_horse_armor", [
  ["ingotIron", "ingotIron", "ingotIron"],
  ["ingotIron", "ingotIron", "ingotIron"],
  ["ingotIron", null, "ingotIron"]]);
  
addShapedRecipe("minecraft:golden_horse_armor", [
  ["ingotGold", "ingotGold", "ingotGold"],
  ["ingotGold", "ingotGold", "ingotGold"],
  ["ingotGold", null, "ingotGold"]]);
  
addShapedRecipe("minecraft:diamond_horse_armor", [
  ["gemDiamond", "gemDiamond", "gemDiamond"],
  ["gemDiamond", "gemDiamond", "gemDiamond"],
  ["gemDiamond", null, "gemDiamond"]]);
  
addShapedRecipe("ExtraUtilities:decorativeBlock1:1", [
  [null, "blockObsidian", null ],
  ["blockObsidian", cherenkov, "blockObsidian" ],
  [null, "blockObsidian", null ] ]);
  
addShapedRecipe("fossil:cultureVat", [
  ["blockGlass", "dyeGreen", "blockGlass"],
  ["blockGlass", "listAllwater", "blockGlass"],
  ["ingotIron", "minecraft:bedrock", "ingotIron" ]]);
  
addShapedRecipe("fossil:analyzer", [
  ["ingotIron", "fossil:relicScrap", "ingotIron"],
  ["ingotIron", "fossil:bioFossil", "ingotIron"],
  ["ingotIron", "minecraft:bedrock", "ingotIron"]]);
  
addShapedRecipe("GardenStuff:lattice", [
  [null, "barsIron", null ],
  ["barsIron", "ingotIron", "barsIron" ],
  [null, "barsIron", null ]]);
  
addShapedRecipe("GardenStuff:lattice_wood", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks", "stickWood" ],
  [null, "stickWood", null ]]);
  
addShapedRecipe("GardenStuff:lattice_wood:1", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks:1", "stickWood" ],
  [null, "stickWood", null ]]);
  
addShapedRecipe("GardenStuff:lattice_wood:2", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks:2", "stickWood" ],
  [null, "stickWood", null ]]);
  
addShapedRecipe("GardenStuff:lattice_wood:3", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks:3", "stickWood" ],
  [null, "stickWood", null ]]);
  
addShapedRecipe("GardenStuff:lattice_wood:4", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks:4", "stickWood" ],
  [null, "stickWood", null ]]);
  
addShapedRecipe("GardenStuff:lattice_wood:5", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks:5", "stickWood" ],
  [null, "stickWood", null ]]);
  
addShapedRecipe("Railcraft:machine.alpha:12", [
  ["sand", "minecraft:brick_block", "sand" ],
  ["minecraft:brick_block", "minecraft:magma_cream", "minecraft:brick_block" ],
  ["sand", "minecraft:brick_block", "sand" ]]);
  
addShapedRecipe("gendustry:MutagenTank", [
  ["ingotTin", "paneGlass", "ingotTin"],
  ["ingotTin", "paneGlass", "ingotTin"],
  ["ingotTin", "minecraft:bedrock", "ingotTin"]]);
  
addShapedRecipe("mod_Invasion:phaseCrystal", [
  [null, "dyeBlue", null ],
  ["dustRedstone",bedrockDust, "dustRedstone" ],
  [null, "dyeBlue", null ]]);

addShapedRecipe("mod_Invasion:phaseCrystal", [
  [null, "dustRedstone", null ],
  ["dyeBlue", bedrockDust, "dyeBlue" ],
  [null, "dustRedstone", null ]]);
  
addShapedRecipe("Metallurgy:machine.frame", [
  ["stone", "ingotCopper", "stone" ],
  ["ingotCopper", "stone", "ingotCopper" ],
  ["stone", "ingotCopper", "stone" ]]);
  
addShapedRecipe("Metallurgy:crusher", [
  ["ingotCopper", "ingotCopper", "ingotCopper" ],
  ["stone", "Metallurgy:machine.frame", "stone" ],
  ["stone", "minecraft:furnace", "stone" ]]);
  
addShapedRecipe("minechem:minechemAtomicManipulator", [
  ["minecraft:piston", "minecraft:piston", "minecraft:piston"],
  ["minecraft:piston", bedrockDust, "minecraft:piston"],
  ["minecraft:piston", "minecraft:piston", "minecraft:piston"]]);
  
addShapedRecipe("minecraft:skull:1", [
  [bedrockDust, "slimeball", bedrockDust],
  ["slimeball", "VeganOption:mobHeadBlank", "slimeball"],
  [bedrockDust, "slimeball", bedrockDust]]);
  
addShapedRecipe("minecraft:skull:1", [
  ["minecraft:daylight_detector", "blockLapis", "minecraft:daylight_detector" ],
  ["gemQuartz", cherenkov, "gemQuartz" ],
  ["gemEmerald", "blockRedstone","gemEmerald" ]]);
  
addShapedRecipe("rftools:machineFrame", [
  ["ingotIron", bedrockDust, "ingotIron" ],
  ["nuggetGold", null, "nuggetGold" ],
  ["ingotIron", bedrockDust, "ingotIron" ]]);
  
addShapedRecipe("harvestcraft:potItem", [
  ["stickWood", "ingotBrick", "ingotBrick" ],
  [null, "ingotBrick", "ingotBrick" ],
  [null, null, null ]]);
  
addShapedRecipe("harvestcraft:skilletItem", [
  ["ingotBrick", null, null ],
  [null, "ingotBrick", null ],
  [null, null, "stickWood" ]]);
  
addShapedRecipe("harvestcraft:saucepanItem", [
  ["ingotBrick", null, null ],
  [null, "stickWood", null ],
  [null, null, null ]]);
  
addShapedRecipe("harvestcraft:cuttingboardItem", [
  ["itemFlint", null, null ],
  [null, "stickWood", null ],
  [null, null, "plankWood" ]]);

addShapedRecipe("si.core:toolChiselFlint", [
  [null, "itemFlint", null],
  ["stickWood", null, null],
  [null, null, null]]);

addShapedRecipe("si.core:toolChiselBedrock", [
  [null, bedrockIngot, null],
  ["stickWood", null, null],
  [null, null, null]]);

addShapedRecipe("Sync:Sync_ItemPlaceholder", [
  ["minecraft:daylight_detector", "minecraft:lapis_block", "minecraft:daylight_detector"],
  ["minecraft:quartz", cherenkov, "minecraft:quartz"],
  ["minecraft:emerald", "minecraft:redstone_block", "minecraft:emerald"]]);


if (isModLoaded("RotaryCraft") && isModLoaded("ElectriCraft")) {
  addShapedRecipe("minecraft:enchanting_table", [
    ["blockObsidian", "blockGlassGreen", "blockObsidian" ],
    ["RotaryCraft:rotarycraft_item_machine:45", "RotaryCraft:rotarycraft_item_borecraft:5", "blockRedstone" ],
    ["RotaryCraft:rotarycraft_item_machine:75", "RotaryCraft:rotarycraft_item_shaftcraft:3", "RotaryCraft:rotarycraft_item_machine:115" ]]);
  
  addShapedRecipe("eplus:tableUpgrade", [
    ["blockGlassRed", "blockGlassGreen", "blockGlassBlue" ],
    ["RotaryCraft:rotarycraft_item_misccraft:15", "blockGlassColorless", "ElectriCraft:electricraft_item_battery" ],
    ["RotaryCraft:rotarycraft_item_borecraft:1", null, "RotaryCraft:rotarycraft_item_misccraft" ]]);
  
  addShapedRecipe("eplus:advancedEnchantmentTable", [
    ["blockGlassRed", "blockGlassGreen", "blockGlassBlue" ],
    ["RotaryCraft:rotarycraft_item_misccraft:15", "blockGlassColorless", "ElectriCraft:electricraft_item_battery" ],
    ["RotaryCraft:rotarycraft_item_borecraft:1", "minecraft:enchanting_table", "RotaryCraft:rotarycraft_item_misccraft" ]]);
} else {
  addShapedRecipe("minecraft:enchanting_table", [
    ["blockObsidian", "blockGlassGreen", "blockObsidian" ],
    ["minecraft:furnace", "dustGlowstone", "blockRedstone" ],
    ["minecraft:crafting_table", "blockIron", "minecraft:anvil" ]]);
  
  addShapedRecipe("eplus:tableUpgrade", [
    ["blockGlassRed", "blockGlassGreen", "blockGlassBlue" ],
    ["craftingPiston", "blockGlassColorless", "blockRedstone" ],
    ["minecraft:dispenser", null, "minecraft:heavy_weighted_pressure_plate" ]]);
  
  addShapedRecipe("eplus:advancedEnchantmentTable", [
    ["blockGlassRed", "blockGlassGreen", "blockGlassBlue" ],
    ["craftingPiston", "blockGlassColorless", "blockRedstone" ],
    ["minecraft:dispenser", "minecraft:enchanting_table", "minecraft:heavy_weighted_pressure_plate" ]]);
}

setBlockProperties("minecraft:stonebrick") .br(45.0);
setBlockProperties("chisel:stonebricksmooth") .br(45.0);
setBlockProperties("chisel:factoryblock") .br(45.0);
setBlockProperties("chisel:granite") .br(45.0);
setBlockProperties("chisel:iron_block") .br(45.0);
setBlockProperties("chisel:iron2") .br(45.0);
setBlockProperties("RotaryCraft:rotarycraft_block_deco") .br(45.0);
setBlockProperties("minecraft:coal_ore") .hl(1).br(45.0);
setBlockProperties("minecraft:diamond_ore") .hl(5).br(45.0);
setBlockProperties("minecraft:emerald_ore") .hl(5).br(45.0);
setBlockProperties("minecraft:gold_ore") .hl(4).br(45.0);
setBlockProperties("minecraft:iron_ore") .hl(3).br(45.0);
setBlockProperties("minecraft:lit_redstone_ore") .hl(2).br(45.0);
setBlockProperties("minecraft:redstone_ore") .hl(2).br(45.0);
setBlockProperties("minecraft:quartz_ore") .hl(5).br(45.0);
setBlockProperties("minecraft:lapis_ore") .hl(2).br(45.0);
setBlockProperties("minecraft:obsidian") .hl(6);
setBlockProperties("appliedenergistics2:tile.OreQuartz") .hl(5).br(45.0);
setBlockProperties("appliedenergistics2:tile.OreQuartzCharged") .hl(5).br(45.0);
setBlockProperties("appliedenergistics2:tile.BlockSkyStone") .hl(7);
setBlockProperties("Forestry:resources:1") .hl(1).br(45.0);
setBlockProperties("Forestry:resources:2") .hl(2).br(45.0);
setBlockProperties("fossil:fossil") .hl(4);
setBlockProperties("minechem:tile.oreUranium") .hl(4).br(45.0);
setBlockProperties("ElectriCraft:electricraft_block_ore") .hl(0,1).hl(1,2).hl(2,4).hl(3,3).hl(4,1).hl(5,4).br(45);
setBlockProperties("Forestry:resources") .hl(0,1).hl(1,1).hl(2,2).br(45.0);
setBlockProperties("NetherOres:tile.netherores.ore.0") .hl(0, 1).hl(1, 5).hl(2, 4).hl(3, 3).hl(4, 2).hl(5, 4).hl(6, 1).hl(7, 2).hl(8, 5).hl(9, 4).hl(10,2)
  .hl(11,4).hl(12,4).hl(13,5).hl(14,5).hl(15,5).br(45.0); 
setBlockProperties("NetherOres:tile.netherores.ore.1") .hl(0, 4).hl(1, 3).hl(2, 4).hl(3, 4).hl(4, 4).hl(5, 1).hl(6, 5).hl(7, 4).hl(8, 5).hl(9, 4).hl(10,4)
  .hl(11,2).hl(12,1).hl(13,1).hl(14,1).hl(15,2).br(45.0); 
setBlockProperties("ProjRed|Exploration:projectred.exploration.ore:0") .hl(0,5).hl(1,5).hl(2,5).hl(3,1).hl(4,2).hl(5,4).hl(6,4).br(45.0); 
setBlockProperties("Railcraft:ore") .hl(0,1).hl(1,1).hl(2,5).hl(3,5).hl(4,2).hl(5,5).hl(7,3).hl(8,4).hl(9,1).hl(10,2).hl(11,2).br(45.0);
setBlockProperties("ReactorCraft:reactorcraft_block_fluoriteore") .hl(0,5).hl(1,5).hl(2,5).hl(3,5).hl(4,5).hl(5,5).hl(6,5).hl(7,5).br(45.0);
setBlockProperties("ReactorCraft:reactorcraft_block_ore") .hl(1,4).hl(2,4).hl(3,4).hl(4,4).hl(5,4).hl(6,1).hl(7,1).hl(8,1).hl(9,4).br(45.0);


/* When both Forestry and Pam's HarvestCraft are loaded together, HarvestCraft's
    bee products will be replaced with Forestry's bee products.  Make sure Pam's
    hives are prevented from loading. */ 
if(isModLoaded("Forestry") && isModLoaded("harvestcraft")){
  hideFromNEI("harvestcraft:beehive");;
  hideFromNEI("harvestcraft:apiary");;
  
  hideFromNEI("harvestcraft:grubItem:*");
  hideFromNEI("harvestcraft:queenbeeItem:*");
  hideFromNEI("harvestcraft:royaljellyItem")
  
  hideFromNEI("harvestcraft:honeycombItem");
  hideFromNEI("harvestcraft:waxcombItem");
  
  hideFromNEI("harvestcraft:honeyItem");
  hideFromNEI("harvestcraft:beeswaxItem");
  
  
  removeOreDict("harvestcraft:honeycombItem","beeComb");
  removeOreDict("harvestcraft:honeycombItem","materialHoneycomb");
  removeOreDict("harvestcraft:waxcombItem","beeComb");
  removeOreDict("harvestcraft:waxcombItem","materialWaxcomb");
  
  removeOreDict("harvestcraft:honeyItem","listAllsugar");
  removeOreDict("harvestcraft:honeyItem","foodHoneydrop");
  removeOreDict("harvestcraft:honeyItem","dropHoney");
  removeOreDict("harvestcraft:beeswaxItem","materialPressedwax");
  
  
  addOreDict("Forestry:beeQueenGE", "beeQueen");
  
  addOreDict("beeComb", "materialHoneycomb");
  addOreDict("beeComb", "materialWaxcomb");
  
  addOreDict("dropHoney", "foodHoneydrop");
  addOreDict("dropHoney", "listAllSugar");
  
  addOreDict("itemBeeswax", "materialPressedwax");
   
// These should be removed entirely. 
  removeRecipes("harvestcraft:apiary");
  removeRecipes("harvestcraft:royaljellyItem");

// These need to be remade using oredict entries.
  removeRecipes("harvestcraft:marzipanItem");
  removeRecipes("harvestcraft:honeycombchocolatebarItem");
  removeRecipes("harvestcraft:honeysandwichItem");
  removeRecipes("harvestcraft:honeylemonlambItem");
  
  addShapelessRecipe("harvestcraft:honeycombchocolatebarItem",["toolSaucepan","foodChocolatebar","beeComb"]);
  addShapelessRecipe("harvestcraft:honeysandwichItem", ["toolCuttingboard","listAllnutbutter","foodHoneydrop","minecraft:bread"]);
  addShapelessRecipe("harvestcraft:marzipanItem", ["cropAlmond","toolMortarandpestle","foodHoneydrop"]);
  addShapelessRecipe("harvestcraft:honeylemonlambItem", ["toolBakeware","listAllmuttonraw","cropLemon", "foodMustard","foodHoneydrop"]);
}

// While we're at it, let's add GardenCore support for Forestry wax.
if(isModLoaded("Forestry") && isModLoaded("GardenCore")){
  addOreDict("itemBeeswax", "materialWax");
  addOreDict("materialWax", "itemBeeswax");
}

if(isModLoaded("Ztones") && isModLoaded("chisel")) load("ztones.js");
if(isModLoaded("EnderIO")) load("enderio.js");
load("toolsandarmor.js");
load("cleanup.js");



