// Let's make some materials easier to read and reference.
var pureCertusQuartz = "appliedenergistics2:item.ItemMultiMaterial:10"
var pureNetherQuartz = "appliedenergistics2:item.ItemMultiMaterial:11"

// Altering Redstone tool recipes to remove iron requirements; uses multiple materials.
var ingotMats = ["ignotAluminum", "ingotCopper", "ingotIron", "ingotBronze"];

// Piston Recipe.
removeRecipes( "minecraft:piston");
for(var currentIngot in ingotMats){
	addShapedRecipe("minecraft:piston@1", [
		["plankWood", "plankWood", "plankWood" ],
		["cobblestone", currentIngot, "cobblestone" ],
		["cobblestone", "dustRedstone", "cobblestone" ]]);
}

// Tripwire Hook Recipe.
removeRecipes( "minecraft:tripwire_hook");
for(var currentIngot in ingotMats){
	addShapedRecipe("minecraft:tripwire_hook@2", [
		[currentIngot, null, null ],
		["stickWood", null, null ],
		["plankWood", null, null ]]);
}

// Hopper.
removeRecipes( "minecraft:hopper");
for(var currentIngot in ingotMats){
	addShapedRecipe("minecraft:hopper@1", [
		[null, null, currentIngot ],
		[currentIngot, "minecraft:chest", currentIngot ],
		[null, currentIngot, null ]]);
}


// Also adding Certus Quartz to recipes using quartz.
var quartzMats = ["gemQuartz", "crystalCertusQuartz", pureCertusQuartz, pureNetherQuartz];

// Redstone Comparator.
removeRecipes( "minecraft:comparator");
for(var currentQuartz in quartzMats){
	addShapedRecipe("minecraft:comparator@1", [
		[null, "minecraft:redstone_torch", null ],
		["minecraft:redstone_torch", currentQuartz, "minecraft:redstone_torch" ],
		["stone", "stone", "stone" ]]);
}

// Daylight Sensor.
removeRecipes( "minecraft:daylight_detector");
for(var currentQuartz in quartzMats){
	addShapedRecipe("minecraft:comparator@1", [
		["blockGlass", "blockGlass", "blockGlass" ],
		[currentQuartz, currentQuartz, currentQuartz ],
		["slabWood", "slabWood", "slabWood" ]]);
}
