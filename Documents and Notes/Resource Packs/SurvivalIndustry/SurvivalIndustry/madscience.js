// Gating for Mad Science Technology.

// All Mad Science depends on bedrock.

// Legend: Output count, output ID, [recipe], mod

var ShapelessRecipes = [
    // We'll put in a blank entry, just to make sure the list is populated.  "NotARealMod" will never result as true, so we're good.
    [null, null, [null], "NotARealMod"]
];


var ShapedRecipes = [
    // Advanced Genetics - The important machines each need a basic dictionary.
    [1, "advancedgenetics:basicdictionary", [[null, bedrockDust, null], ["advancedgenetics:cell", "minecraft:book", "advancedgenetics:cell"], [null, bedrockDust, null]], "advancedgenetics"], 
    
    // Fossils & Archaeology - The Culture Vat is needed to actually grow dinosaurs.
    [1, "fossil:cultureVat", [["blockGlass", "dyeGreen", "blockGlass"], ["blockGlass", "listAllwater", "blockGlass"], ["ingotIron", "minecraft:bedrock", "ingotIron"]], "fossil"], 
    
    // Gendustry - The mutagen tank is needed to perform any mutations.
    [1, "gendustry:MutagenTank", [["ingotTin", "paneGlass", "ingotTin"], ["ingotTin", "paneGlass", "ingotTin"], ["ingotTin", "minecraft:bedrock", "ingotTin"]], "gendustry"], 
    
    //MineChem - The atomic manipulator actually does the work for this mod.
    [1, "minechem:minechemAtomicManipulator", [["minecraft:piston", "minecraft:piston", "minecraft:piston"], ["minecraft:piston", bedrockDust, "minecraft:piston"], ["minecraft:piston", "minecraft:piston", "minecraft:piston"]], "minechem"], 
    
    // Invasion Mod - The phase crystal is needed to make all the technology in this pack, including the nexus.
    [1, "mod_Invasion:phaseCrystal", [[null, "dyeBlue", null], ["dustRedstone", bedrockDust, "dustRedstone"], [null, "dyeBlue", null]], "mod_Invasion"], 
    
    // RFTools - The machine frame is needed for all RFTools machinery.
    [1, "rftools:machineFrame", [["ingotIron", bedrockDust, "ingotIron"], ["nuggetGold", null, "nuggetGold"], ["ingotIron", bedrockDust, "ingotIron"]], "rftools"], 
];

  
/// Do not edit past this point. ////////////////////////////////////////////////////

// Code for making shapeless recipes.

for (var m in ShapelessRecipes) {
    if (ShapelessRecipes[m][3] == null || isModLoaded(ShapelessRecipes[m][3])) {
        var quantity="";
        if (ShapelessRecipes[m][0] > 1) quantity = "@"+ShapelessRecipes[m][0];
        removeRecipes(ShapelessRecipes[m][1]);
        addShapelessRecipe(ShapelessRecipes[m][1]+quantity, ShapelessRecipes[m][2]);
    }
}

// Code for making shaped recipes.
for (var m in ShapedRecipes) {
    if (ShapedRecipes[m][3] == null || isModLoaded(ShapedRecipes[m][3])) {
        var quantity="";
        if (ShapedRecipes[m][0] > 1) quantity = "@"+ShapedRecipes[m][0];
        removeRecipes(ShapedRecipes[m][1]);
        addShapedRecipe(ShapedRecipes[m][1]+quantity, ShapedRecipes[m][2]);
    }
}
