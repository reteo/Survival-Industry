// #### Ender Technology Gating
// The key to ender-tech gating, the Cherenkov Singularity.
addItem("itemCherenkovSingularity", "CoreItem", 1, "SurvivalIndustry.general");
addShapelessRecipe(cherenkov, [plutonium,"minecraft:ender_pearl"]);


// Recipes gated using the Cherenkov Singularity
// Ender Storage
removeRecipes( "EnderStorage:enderChest");
addShapedRecipe("EnderStorage:enderChest", [
  ["itemBlazeRod", "materialBedding", "itemBlazeRod" ],
  ["plankWood", "chestWood", "plankWood" ],
  ["itemBlazeRod", cherenkov, "itemBlazeRod" ]]);
  
removeRecipes( "EnderStorage:enderChest:4096");
addShapedRecipe("EnderStorage:enderChest:4096", [
  ["itemBlazeRod", "materialBedding", "itemBlazeRod" ],
  ["plankWood", "minecraft:cauldron", "plankWood" ],
  ["itemBlazeRod", cherenkov, "itemBlazeRod" ]]);
  
removeRecipes( "EnderStorage:enderPouch");
addShapedRecipe("EnderStorage:enderPouch", [
  ["itemBlazePowder", "materialLeather", "itemBlazePowder" ],
  ["materialLeather", cherenkov, "materialLeather" ],
  ["itemBlazePowder", "materialBedding", "itemBlazePowder" ]
]);

// Ender Utilities
removeRecipes(stickEnder);
addShapedRecipe(stickEnder + "@3", [
  ["stickWood", "stickWood", "stickWood" ],
  [cherenkov, cherenkov, cherenkov ],
  ["stickWood", "stickWood", "stickWood" ]]);
  
removeRecipes(ropeEnder);
addShapedRecipe(ropeEnder + "@3", [
  ["minecraft:string", "minecraft:string", "minecraft:string" ],
  ["materialLeather", cherenkov, "materialLeather" ],
  ["minecraft:string", "minecraft:string", "minecraft:string" ]]);
  
removeRecipes("enderutilities:enderpearlreusable");
addShapedRecipe("enderutilities:enderpearlreusable", [
  ["nuggetGold", "pearlEnder", "nuggetGold" ],
  [cherenkov, "blockRedstone", cherenkov ],
  ["nuggetGold", "pearlEnder", "nuggetGold" ]]);
  
removeRecipes("enderutilities:enderarrow");
addShapedRecipe("enderutilities:enderarrow@4", [
  [null, "nuggetGold", cherenkov ],
  [null, "minecraft:arrow", "nuggetGold" ],
  ["minecraft:arrow", null, null ]]);
  
removeRecipes(alloyEnder)
addShapedRecipe(alloyEnder + "@3", [
  ["ingotIron", "ingotIron", "ingotIron" ],
  [cherenkov, cherenkov, cherenkov ],
  ["ingotIron", "ingotIron", "ingotIron" ]]);
  
removeRecipes(alloyEnderEnhanced)
addShapedRecipe(alloyEnderEnhanced + "@3", 
  [ ["ingotGold", "ingotGold", "ingotGold" ],
  [cherenkov, cherenkov, cherenkov ],
  ["ingotIron", "ingotIron", "ingotIron" ]]);
  
removeRecipes(alloyEnderAdvanced)
addShapedRecipe(alloyEnderAdvanced + "@3", [
  ["ingotIron", cherenkov, "ingotIron" ],
  ["ingotGold", "gemDiamond", "ingotGold" ],
  ["blockObsidian", cherenkov, "blockObsidian" ]]);

// Enhanced Portals 3
removeRecipes("enhancedportals:frame");
addShapedRecipe("enhancedportals:frame", [
  [bedrockDust, "ingotIron", bedrockDust],
  ["ingotIron", "blockQuartz", "ingotIron"],
  [bedrockDust, "ingotIron", bedrockDust]]);
  
// Ender Infused Obsidian
removeRecipes( "ExtraUtilities:decorativeBlock1:1");
addShapedRecipe("ExtraUtilities:decorativeBlock1:1", [
  [null, "blockObsidian", null ],
  ["blockObsidian", cherenkov, "blockObsidian" ],
  [null, "blockObsidian", null ] ]);

// Sync
removeRecipes( "Sync:Sync_ItemPlaceholder");
addShapedRecipe("Sync:Sync_ItemPlaceholder", [
  ["minecraft:daylight_detector", "minecraft:lapis_block", "minecraft:daylight_detector"],
  ["minecraft:quartz", cherenkov, "minecraft:quartz"],
  ["minecraft:emerald", "minecraft:redstone_block", "minecraft:emerald"]]);

// The vanilla End Portal stone
removeRecipes("minecraft:end_portal_frame");
addShapedRecipe("minecraft:end_portal_frame", [
  [cherenkov, cherenkov, cherenkov],
  [cherenkov, "mod_Invasion:riftFlux", cherenkov],
  [cherenkov, cherenkov, cherenkov]]);