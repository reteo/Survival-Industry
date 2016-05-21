// These are fixes for conflicting recipes.

// The wooden bucket should convert to fresh (liquid) in Pam's Harvestcraft.
addShapelessRecipe("harvestcraft:freshmilkItem", ["si.core:itemWoodenBucket_milk"]);

// The RotaryCraft gear and the BattleGear shield recipes coincide.
removeRecipes( "battlegear2:shield.wood");
addShapedRecipe("battlegear2:shield.wood", [
  [null, "slabWood" , null ],
  ["slabWood", "plankWood" , "slabWood" ],
  [null, "slabWood" , null ]]);
  
// Why on EARTH does the saddle not have a recipe?
removeRecipes( "minecraft:saddle");
addShapedRecipe("minecraft:saddle", [
  ["materialLeather", "materialLeather", "materialLeather" ],
  ["materialLeather", "materialLeather", "materialLeather" ],
  ["ingotIron", null, "ingotIron" ]]);

// Same question for Horse Armor
removeRecipes( "minecraft:iron_horse_armor");
addShapedRecipe("minecraft:iron_horse_armor", [
  ["ingotIron", "ingotIron", "ingotIron"],
  ["ingotIron", "ingotIron", "ingotIron"],
  ["ingotIron", null, "ingotIron"]]);
  
removeRecipes( "minecraft:golden_horse_armor");
addShapedRecipe("minecraft:golden_horse_armor", [
  ["ingotGold", "ingotGold", "ingotGold"],
  ["ingotGold", "ingotGold", "ingotGold"],
  ["ingotGold", null, "ingotGold"]]);
  
removeRecipes( "minecraft:diamond_horse_armor"); 
addShapedRecipe("minecraft:diamond_horse_armor", [
  ["gemDiamond", "gemDiamond", "gemDiamond"],
  ["gemDiamond", "gemDiamond", "gemDiamond"],
  ["gemDiamond", null, "gemDiamond"]]);

// Vegan Option -- the original wither head was much too easy to acquire.
removeRecipes( "minecraft:skull:1");
addShapedRecipe("minecraft:skull:1", [
  [bedrockDust, "slimeball", bedrockDust],
  ["slimeball", "VeganOption:mobHeadBlank", "slimeball"],
  [bedrockDust, "slimeball", bedrockDust]]);
  
// We need steel to progress to the Nether.  So we don't use nether materials for it.
// NOTE: Vegan Option allows magma cream.
removeRecipes( "Railcraft:machine.alpha:12");
addShapedRecipe("Railcraft:machine.alpha:12", [
  ["sand", "minecraft:brick_block", "sand" ],
  ["minecraft:brick_block", "minecraft:magma_cream", "minecraft:brick_block" ],
  ["sand", "minecraft:brick_block", "sand" ]]);

// The recipes for Garden Stuff's lattices conflict with other mods' gears.
removeRecipes( "GardenStuff:lattice");
addShapedRecipe("GardenStuff:lattice", [
  [null, "barsIron", null ],
  ["barsIron", "ingotIron", "barsIron" ],
  [null, "barsIron", null ]]);
  
removeRecipes( "GardenStuff:lattice_wood");
addShapedRecipe("GardenStuff:lattice_wood", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks", "stickWood" ],
  [null, "stickWood", null ]]);

removeRecipes( "GardenStuff:lattice_wood:1");
addShapedRecipe("GardenStuff:lattice_wood:1", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks:1", "stickWood" ],
  [null, "stickWood", null ]]);

removeRecipes( "GardenStuff:lattice_wood:2");
addShapedRecipe("GardenStuff:lattice_wood:2", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks:2", "stickWood" ],
  [null, "stickWood", null ]]);

removeRecipes( "GardenStuff:lattice_wood:3");
addShapedRecipe("GardenStuff:lattice_wood:3", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks:3", "stickWood" ],
  [null, "stickWood", null ]]);

removeRecipes( "GardenStuff:lattice_wood:4");
addShapedRecipe("GardenStuff:lattice_wood:4", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks:4", "stickWood" ],
  [null, "stickWood", null ]]);

removeRecipes( "GardenStuff:lattice_wood:5");
addShapedRecipe("GardenStuff:lattice_wood:5", [
  [null, "stickWood", null ],
  ["stickWood", "minecraft:planks:5", "stickWood" ],
  [null, "stickWood", null ]]);
