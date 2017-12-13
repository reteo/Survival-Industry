/* We want the ore gravels, sands, and dusts to be processed by Vanilla Ingot Works. */

var metalsNative = ["Iron", "Gold", "Copper", "Tin", "Silver", "Nickel", "Platinum", "Aluminum", "Lead"];
var metalsAobd = ["Cadmium", "Indium"];

var metalsNether = ["Iron", "Gold", "Copper", "Nickel" ];
var metalsNetherAobd = ["Cadmium", "Indium"];

var metalsEnder = ["Tin", "Silver", "Platinum", "Lead"];

var oreStyles = ["Gravel", "Sand", "Dust"];

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

// Native first.
for (var m in metalsNative){
    for (var o in oreStyles) {
	nativeOreBlock(metalsNative[m],oreStyles[o]);
    }
}

// Nether next.
for (var m in metalsNether){
    for (var o in oreStyles) {
	nativeOreBlock(metalsNether[m],oreStyles[o]);
    }
}

// Then, the End.
for (var m in metalsEnder){
    for (var o in oreStyles) {
	nativeOreBlock(metalsEnder[m],oreStyles[o]);
    }
}


// Now for AOBD ores.
for (var m in metalsAobd){
    for (var o in oreStyles) {
	aobdOreBlock(metalsAobd[m], oreStyles[o]);
    }
}

// Then, AOBD Nether ores.
for (var m in metalsNetherAobd){
    for (var o in oreStyles) {
	aobdOreBlock(metalsNetherAobd[m], oreStyles[o]);
    }
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

function nativeOreBlock(oreMetal, oreStyle) {
    metalType = oreMetal.toLowerCase();
    metalStyle = oreStyle.toLowerCase();

    originBlock = "exnihilo:" + metalType + "_" + metalStyle;
    resultOre = "ore" + oreMetal

    addShapelessRecipe(resultOre, ["cobblestone",originBlock]);

    log("This should make " + resultOre + " from cobblestone and " + originBlock + ".");

}

function aobdOreBlock(oreMetal, oreStyle) {
    originBlock = "aobd:ore" + oreStyle + oreMetal;
    resultOre = "ore" + oreMetal

    addShapelessRecipe(resultOre, ["cobblestone",originBlock]);

    log("This should make " + resultOre + " from cobblestone and " + originBlock + ".");

}

function makeOreBlock(oreBlock, itemMaterial) {
    addShapedRecipe(oreBlock, [
	[itemMaterial, itemMaterial,  itemMaterial],
	[itemMaterial, "cobblestone", itemMaterial],
	[itemMaterial, itemMaterial,  itemMaterial]]);
}
