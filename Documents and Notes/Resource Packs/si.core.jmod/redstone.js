// Let's give some items easier names
var pureCertusQuartz = "appliedenergistics2:item.ItemMultiMaterial:10"
var pureNetherQuartz = "appliedenergistics2:item.ItemMultiMaterial:11"
var camouflageBlock = "ExpandedRedstone:expanded redstone_item_placer:10"
var chestReader = "ExpandedRedstone:expanded redstone_item_placer:7"
var signalDriver = "ExpandedRedstone:expanded redstone_item_placer:8"
var itemEffector = "ExpandedRedstone:expanded redstone_item_placer:3"

// Let's make a new oredict referencing structural-type metal ingots.
//var ingotMats = ["ingotAluminum","ingotCopper","ingotIron","ingotBronze","ingotSteel","ingotHSLA","ingotNickel","ingotPlatinum"];
//for (var x in ingotMats) addOreDict(x, "ingotMetal");

addOreDict("ingotAluminum", "ingotMetal");
addOreDict("ingotCopper", "ingotMetal");
addOreDict("ingotIron", "ingotMetal");
addOreDict("ingotBronze", "ingotMetal");
addOreDict("ingotSteel", "ingotMetal");
addOreDict("ingotHSLA", "ingotMetal");
addOreDict("ingotNickel", "ingotMetal");
addOreDict("ingotPlatinum", "ingotMetal");

// Let's make a new oredict referencing all types of quartz.
//var quartzMats = ["gemQuartz","crystalCertusQuartz",pureCertusQuartz,pureNetherQuartz];
//for (var x in quartzMats) addOreDict(x, "materialQuartz");

addOreDict("gemQuartz", "materialQuartz");
addOreDict("crystalCertusQuartz", "materialQuartz");
addOreDict(pureCertusQuartz, "materialQuartz");
addOreDict(pureNetherQuartz, "materialQuartz");

// Remove original recipes.
removeRecipes("minecraft:piston");
removeRecipes("minecraft:tripwire_hook");
removeRecipes("minecraft:hopper");
removeRecipes("minecraft:comparator");
removeRecipes("minecraft:daylight_detector");
removeRecipes(camouflageBlock);
removeRecipes(chestReader);
removeRecipes(signalDriver);
removeRecipes(itemEffector);

// Make new recipes:
// Piston.
addShapedRecipe("minecraft:piston", [
	["plankWood", "plankWood", "plankWood" ],
	["cobblestone", "ingotMetal", "cobblestone" ],
	["cobblestone", "dustRedstone", "cobblestone" ]]);


// Tripwire Hook.
addShapedRecipe("minecraft:tripwire_hook@2", [
	["ingotMetal", null, null ],
	["stickWood", null, null ],
	["plankWood", null, null ]]);


// Hopper.
addShapedRecipe("minecraft:hopper", [
	[null, null, "ingotMetal" ],
	["ingotMetal", "minecraft:chest", "ingotMetal" ],
	[null, "ingotMetal", null ]]);

// Redstone Comparator.
addShapedRecipe("minecraft:comparator", [
	[null, "minecraft:redstone_torch", null ],
	["minecraft:redstone_torch", "materialQuartz", "minecraft:redstone_torch" ],
	["stone", "stone", "stone" ]]);

// Daylight Sensor.
addShapedRecipe("minecraft:daylight_detector", [
	["blockGlass", "blockGlass", "blockGlass" ],
	["materialQuartz", "materialQuartz" ,"materialQuartz" ],
	["slabWood", "slabWood", "slabWood" ]]);

// Camouflage Block.
addShapedRecipe(camouflageBlock, [
	["dustRedstone", "ingotMetal", "dustRedstone" ],
	["ingotMetal", "pearlEnderEye" ,"ingotMetal" ],
	["dustRedstone", "ingotMetal", "slabWood" ]]);

// Chest Reader.
addShapedRecipe(chestReader, [
	[null, "chest", null ],
	["dustRedstone", "materialQuartz" ,"dustRedstone" ],
	[null, "slabStone", null ]]);

// Signal Driver.
addShapedRecipe(signalDriver, [
	[null, "slabStone", null ],
	["dustRedstone", "materialQuartz" ,"dustRedstone" ],
	[null, "slabStone", null ]]);

// Item Effector
addShapedRecipe(signalDriver, [
	["cobblestone", "cobblestone", "cobblestone" ],
	["materialQuartz", "minecraft:dispenser" ,"pearlEnder" ],
	["cobblestone", "dustRedstone", "cobblestone" ]]);




