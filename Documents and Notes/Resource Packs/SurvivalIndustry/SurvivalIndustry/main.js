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





