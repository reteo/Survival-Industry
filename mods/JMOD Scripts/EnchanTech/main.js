// Replacing the recipes for enchantment equipment.
removeRecipes( "minecraft:enchanting_table");
removeRecipes( "eplus:tableUpgrade");
removeRecipes( "eplus:advancedEnchantmentTable");

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
