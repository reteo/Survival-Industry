/* We want the ore gravels, sands, and dusts to be processed by Vanilla Ingot Works. */

var metalsNative = ["Iron", "Gold", "Copper", "Tin", "Silver", "Nickel", "Platinum", "Aluminum", "Lead"];
var metalsAobd = ["Cadmium", "Indium"];

var metalsNether = ["Iron", "Gold", "Copper", "Nickel" ];
var metalsNetherAobd = ["Cadmium", "Indium"];

var metalsEnder = ["Tin", "Silver", "Platinum", "Lead"];

var oreStyles = ["Gravel", "Sand", "Dust"];

var nativeOreRecipes = [
    ["MohsMining:oreAluminum", "Aluminum"],
    ["MohsMining:oreCopper", "Copper"],
    ["minecraft:gold_ore", "Gold"],
    ["minecraft:iron_ore", "Iron"],
    ["MohsMining:oreLead", "Lead"],
    ["MohsMining:oreNickel", "Nickel"],
    ["MohsMining:orePlatinum", "Platinum"],
    ["MohsMining:oreSilver", "Silver"],
    ["MohsMining:oreTin", "Tin"]
];

var aobdOreRecipes = [
    ["ReactorCraft:reactorcraft_block_ore:2", "Cadmium"],
    ["ReactorCraft:reactorcraft_block_ore:3", "Indium"]
];

// First, let's do basic ore duplication.

// Native first.
for (var m in metalsNative){
    for (var o in oreStyles) {
	nativeOreDoubling(metalsNative[m],oreStyles[o]);
    }
}

// Nether next.
for (var m in metalsNether){
    for (var o in oreStyles) {
	nativeOreDoubling(metalsNether[m],oreStyles[o]);
    }
}

// Then, the End.
for (var m in metalsEnder){
    for (var o in oreStyles) {
	nativeOreDoubling(metalsEnder[m],oreStyles[o]);
    }
}


// Now for AOBD ores.
for (var m in metalsAobd){
    for (var o in oreStyles) {
	aobdOreDoubling(metalsAobd[m], oreStyles[o]);
    }
}

// Then, AOBD Nether ores.
for (var m in metalsNetherAobd){
    for (var o in oreStyles) {
	aobdOreDoubling(metalsNetherAobd[m], oreStyles[o]);
    }
}


/* We want to be able to use the extractor, but vanilla ores aren't available in skyblock.
   To fix this, we can simply add recipes to make ore blocks out of ore gravels, sands, and
   dusts, along with one cobblestone. */

for (var i in nativeOreRecipes) {
    nativeOreBlock(nativeOreRecipes[i][1], nativeOreRecipes[i][0]);
}


for (var i in aobdOreRecipes) {
    aobdOreBlock(aobdOreRecipes[i][1], aobdOreRecipes[i][0]);
}



/* In addition to the metals, we will also need ore blocks for other drops.  These are needed in order
   to collect additional materials using the RotaryCraft extractor. */

// Coal
makeOreBlock("minecraft:coal_ore", "minecraft:coal");

// Redstone
makeOreBlock("minecraft:redstone_ore", "minecraft:redstone");

// Lapis Lazuli
makeOreBlock("minecraft:lapis_ore", "minecraft:dye:4");


/* Functions */

function nativeOreDoubling(oreMetal, oreStyle) {
    metalType = oreMetal.toLowerCase();
    metalStyle = oreStyle.toLowerCase();

    originBlock = "exnihilo:" + metalType + "_" + metalStyle;
    resultItem = "ingot" + oreMetal
    resultDuplication = 2

    VIW.addAlloy(resultItem, originBlock, resultDuplication);
    
    log("This should make " + resultDuplication + " of " + resultItem + " from 1 " + originBlock + ".");

    
}

function aobdOreDoubling(oreMetal, oreStyle) {

    originBlock = "aobd:ore" + oreStyle + oreMetal;
    resultItem = "ingot" + oreMetal
    resultDuplication = 2

    VIW.addAlloy(resultItem, originBlock, resultDuplication);

    log("This should make " + resultDuplication + " of " + resultItem + " from 1 " + originBlock + ".");
}

function nativeOreBlock(oreMetal, resultOre) {
    metalType = oreMetal.toLowerCase();

    originItem = "exnihilo:exnihilo." + metalType + "_broken";

    addShapelessRecipe(resultOre, [originItem, originItem, originItem, originItem, originItem, originItem, originItem]);

    log("Made " + resultOre + " from cobblestone@2 and " + originItem + ".");

}

function aobdOreBlock(oreMetal, resultOre) {
    originItem = "aobd:oreBroken" + oreMetal;

    addShapelessRecipe(resultOre, [originItem, originItem, originItem, originItem, originItem, originItem, originItem]);

    log("Made " + resultOre + " from cobblestone@2 and " + originItem + ".");

}

function makeOreBlock(oreBlock, itemMaterial) {
    addShapedRecipe(oreBlock, [
	[itemMaterial, itemMaterial,  itemMaterial],
	[itemMaterial, "cobblestone", itemMaterial],
	[itemMaterial, itemMaterial,  itemMaterial]]);
}
