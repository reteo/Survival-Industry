// Gating for Mad Science Technology.

// All Mad Science depends on bedrock.

// Gating Advanced Genetics
removeRecipes( "advancedgenetics:basicdictionary");
addShapedRecipe("advancedgenetics:basicdictionary", [
  [null, bedrockDust, null ],
  ["advancedgenetics:cell", "minecraft:book", "advancedgenetics:cell" ],
  [null, bedrockDust, null ]]);

// Fossils & Archaeology
removeRecipes( "fossil:analyzer");
addShapedRecipe("fossil:analyzer", [
  ["ingotIron", "fossil:relicScrap", "ingotIron"],
  ["ingotIron", "fossil:bioFossil", "ingotIron"],
  ["ingotIron", "minecraft:bedrock", "ingotIron"]]);

removeRecipes( "fossil:cultureVat");
addShapedRecipe("fossil:cultureVat", [
  ["blockGlass", "dyeGreen", "blockGlass"],
  ["blockGlass", "listAllwater", "blockGlass"],
  ["ingotIron", "minecraft:bedrock", "ingotIron" ]]);

// Gendustry  
removeRecipes( "gendustry:MutagenTank");
addShapedRecipe("gendustry:MutagenTank", [
  ["ingotTin", "paneGlass", "ingotTin"],
  ["ingotTin", "paneGlass", "ingotTin"],
  ["ingotTin", "minecraft:bedrock", "ingotTin"]]);

// Minechem
removeRecipes( "minechem:minechemAtomicManipulator");
addShapedRecipe("minechem:minechemAtomicManipulator", [
  ["minecraft:piston", "minecraft:piston", "minecraft:piston"],
  ["minecraft:piston", bedrockDust, "minecraft:piston"],
  ["minecraft:piston", "minecraft:piston", "minecraft:piston"]]);

// Invasion Mod
removeRecipes( "mod_Invasion:phaseCrystal");
addShapedRecipe("mod_Invasion:phaseCrystal", [
  [null, "dyeBlue", null ],
  ["dustRedstone",bedrockDust, "dustRedstone" ],
  [null, "dyeBlue", null ]]);

// RFTools
removeRecipes( "rftools:machineFrame");
addShapedRecipe("rftools:machineFrame", [
  ["ingotIron", bedrockDust, "ingotIron" ],
  ["nuggetGold", null, "nuggetGold" ],
  ["ingotIron", bedrockDust, "ingotIron" ]]);