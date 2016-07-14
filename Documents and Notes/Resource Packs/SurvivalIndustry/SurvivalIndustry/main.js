// Ores and alloys are now handled by the "Common Ores" and "Vanilla Ingot Works" jmods.
// Dyes are now handled by the "Just Dyes" jmod.
// The wooden bucket is now handled by the "Simple Wooden Bucket"jmod.
// Ztones tweaks are now handled by the "Chisel-Ztones" jmod.
// Tool Repair is now handled by the "Tool Repair" jmod.

// Now we handle the basic settings.
// Finally, make Sync obey progression gating.
Sync.preventRecipeReload(true);

// Let's make a creative tab for Survival Industry.
addCreativeTab("SurvivalIndustry.general","Survival Industry","SurvivalIndustry:itemCherenkovSingularity");

// Let's assign definitions, so we don't need to use a lot of long strings.
load("definitions.js");

// Let's see to dependencies for the modpack.
load("dependencies.js");

// Let's oredict stuff.
load("madscience.js");

// We set up recipes, and clean up competition, for RotaryCraft machines.
load("rotarycraft.js");

// Now, let's make sure the loot prevents a progression short-circuit.
load("loot.js");

// Let's do some Mad Science gating.
load("madscience.js");

// Onto the Ender-Tech gating.
load("endertech.js");

// If Pam's HarvestCraft and Forestry are both present, we want Forestry's bees.
if(isModLoaded("Forestry") && isModLoaded("harvestcraft")){
    load("bees.js");
}

// Let's add some things to fix existing recipes.
load("fixes.js");

// Let's add some stuff for the Ore Dictionary.
load("oredictionary.js");

// Anything we don't want, let's purge.
load("purge.js");


//  **** Miscellaneous stuff that don't need a whole file. ****



/* Flint should not be solely obtained by digging through gravel.  However, we also don't
 * want a 1:1 recipe, since it would discourage other methods of obtaining flint. */
addShapelessRecipe("minecraft:flint", ["minecraft:gravel@3"]);

// Pam's cooking tools should have "stoneware" varieties, with flint cutting tools.
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
  
// The "Indian Mustard" ore flower should drop a mustard seed.
addShapelessRecipe("harvestcraft:mustardseedItem", ["OreFlowers:ore_flowers2"]);

// Forestry wax recipes should support gardencore's wax.
if(isModLoaded("Forestry") && isModLoaded("GardenCore")){
    var update = [
        ["itemBeeswax", ["materialWax"]],
        ["materialWax", ["itemBeeswax"]]
    ];

    for (var m in update)
        for (i in update[m][1])
            addOreDict(update[m][1][0], update[m][1][i]);
}

// Random Things' Fertilized Dirt should have a more oredicted entry.
if(isModLoaded("RandomThings")){
  addShapedRecipe("RandomThings:fertilizedDirt", [
  ["itemFertilizer", "materialRotten", "itemFertilizer" ],
  ["materialRotten", "minecraft:dirt", "materialRotten" ],
  ["itemFertilizer", "materialRotten", "itemFertilizer" ]]);
}

