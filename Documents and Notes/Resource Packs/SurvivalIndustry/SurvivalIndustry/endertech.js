// #### Ender Technology Gating

// The key to ender-tech gating, the Cherenkov Singularity.
addItem("itemCherenkovSingularity", "CoreItem", 1, "SurvivalIndustry.general");

ShapelessRecipes = [
    [1, cherenkov, [plutonium, "minecraft:ender_pearl"], "ReactorCraft"]
];

var ShapedRecipes = [
    // Ender Storage
    [1, "EnderStorage:enderChest", 
        [["itemBlazeRod", "materialBedding", "itemBlazeRod" ],  ["plankWood", "chestWood", "plankWood" ],  ["itemBlazeRod", cherenkov, "itemBlazeRod" ]], 
        "EnderStorage"],
    [1, "EnderStorage:enderChest:4096", 
        [["itemBlazeRod", "materialBedding", "itemBlazeRod" ],  ["plankWood", "minecraft:cauldron", "plankWood" ],  ["itemBlazeRod", cherenkov, "itemBlazeRod" ]], 
        "EnderStorage"],
    [1, "EnderStorage:enderPouch", 
        [["itemBlazePowder", "materialLeather", "itemBlazePowder" ],  ["materialLeather", cherenkov, "materialLeather" ],  ["itemBlazePowder", "materialBedding", "itemBlazePowder" ]], 
        "EnderStorage"],
        
    // Enhanced Portals 3
    [1, "enhancedportals:frame", 
        [[bedrockDust, "ingotIron", bedrockDust],  ["ingotIron", "blockQuartz", "ingotIron"],  [bedrockDust, "ingotIron", bedrockDust]], 
        "enhancedportals"],
        
    // Extra Utilities' "Ender Infused Obsidian," needed for much of ExU's ender machinery
    [1, "ExtraUtilities:decorativeBlock1:1", 
        [[null, "blockObsidian", null ],  ["blockObsidian", cherenkov, "blockObsidian" ],  [null, "blockObsidian", null ]], 
        "ExtraUtilities"],
        
    // The end portal stone, specifically to allow players to make their own end portals.
    [1, "minecraft:end_portal_frame", 
        [[cherenkov, cherenkov, cherenkov],  [cherenkov, "mod_Invasion:riftFlux", cherenkov],  [cherenkov, cherenkov, cherenkov]], 
        null],
];
  
/// Do not edit past this point. ////////////////////////////////////////////////////

// Code for making shapeless recipes.
for (var m in ShapelessRecipes) {
    log("Checking "+ShapelessRecipes[m][1] + ".");
    if (ShapelessRecipes[m][3] == null || isModLoaded(ShapelessRecipes[m][3])) {
        var quantity="";
        log("Making "+ShapelessRecipes[m][1] + ".");
        if (ShapelessRecipes[m][0] > 1) quantity = "@"+ShapelessRecipes[m][0];
        removeRecipes(ShapelessRecipes[m][1]);
        addShapelessRecipe(ShapelessRecipes[m][1]+quantity, ShapelessRecipes[m][2]);
    }
}

// Code for making shaped recipes.
for (var m in ShapedRecipes) {
    log("Checking "+ShapedRecipes[m][1] + ".");
    if (ShapedRecipes[m][3] == null || isModLoaded(ShapedRecipes[m][3])) {
        var quantity="";
        log("Making "+ShapedRecipes[m][1] + ".");
        if (ShapedRecipes[m][0] > 1) quantity = "@"+ShapedRecipes[m][0];
        removeRecipes(ShapedRecipes[m][1]);
        addShapedRecipe(ShapedRecipes[m][1]+quantity, ShapedRecipes[m][2]);
    }
}