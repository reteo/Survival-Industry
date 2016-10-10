// #### Ender Technology Gating

// The key to ender-tech gating, the Cherenkov Singularity.
addItem("itemCherenkovSingularity", "CoreItem", 1, "SurvivalIndustry.general");

var ShapelessRecipes = [
    [1, cherenkov, [plutonium, "minecraft:ender_pearl"], "ReactorCraft"]
];

var ShapedRecipes = [
    // Ender Storage
    [1, "EnderStorage:enderChest", [["itemBlazeRod", "materialBedding", "itemBlazeRod" ], ["plankWood", "chestWood", "plankWood" ], ["itemBlazeRod", cherenkov, "itemBlazeRod" ]], "EnderStorage"], 
    [1, "EnderStorage:enderChest:4096", [["itemBlazeRod", "materialBedding", "itemBlazeRod" ], ["plankWood", "minecraft:cauldron", "plankWood" ], ["itemBlazeRod", cherenkov, "itemBlazeRod" ]], "EnderStorage"], 
    [1, "EnderStorage:enderPouch", [["itemBlazePowder", "materialLeather", "itemBlazePowder" ], ["materialLeather", cherenkov, "materialLeather" ], ["itemBlazePowder", "materialBedding", "itemBlazePowder" ]], "EnderStorage"], 
        
    // Enhanced Portals 3
    [1, "enhancedportals:frame", [[bedrockDust, "ingotIron", bedrockDust], ["ingotIron", "blockQuartz", "ingotIron"], [bedrockDust, "ingotIron", bedrockDust]], "enhancedportals"], 
        
    // Extra Utilities' "Ender Infused Obsidian, " needed for much of ExU's ender machinery
    [1, "ExtraUtilities:decorativeBlock1:1", [[null, "blockObsidian", null ], ["blockObsidian", cherenkov, "blockObsidian" ], [null, "blockObsidian", null ]], "ExtraUtilities"], 
        
    // The end portal stone, specifically to allow players to make their own end portals.
    [1, "minecraft:end_portal_frame", [[cherenkov, cherenkov, cherenkov], [cherenkov, "mod_Invasion:riftFlux", cherenkov], [cherenkov, cherenkov, cherenkov]], null], 
];
  
/// Do not edit past this point. ////////////////////////////////////////////////////

// Code for making shapeless recipes.
(function(recipes){
    for (var m in recipes) {
        log("Checking "+recipes[m][1] + ".");
        if (recipes[m][3] == null || isModLoaded(recipes[m][3])) {
            var quantity="";
            log("Making "+recipes[m][1] + ".");
            if (recipes[m][0] > 1) quantity = "@"+recipes[m][0];
            removeRecipes(recipes[m][1]);
            addShapelessRecipe(recipes[m][1]+quantity, recipes[m][2]);
        }
    }
})(ShapelessRecipes);

// Code for making shaped recipes.
(function(recipes){
    for (var m in recipes) {
        log("Checking "+recipes[m][1] + ".");
        if (recipes[m][3] == null || isModLoaded(recipes[m][3])) {
            var quantity="";
            log("Making "+recipes[m][1] + ".");
            if (recipes[m][0] > 1) quantity = "@"+recipes[m][0];
            removeRecipes(recipes[m][1]);
            addShapedRecipe(recipes[m][1]+quantity, recipes[m][2]);
        }
    }
})(ShapedRecipes);
