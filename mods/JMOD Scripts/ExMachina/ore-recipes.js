/* We want the ore gravels, sands, and dusts to be processed by Vanilla Ingot Works. */

var metalsNative = ["Iron", "Gold", "Copper", "Tin", "Silver", "Nickel", "Platinum", "Aluminum", "Lead"];
var metalsAobd = ["Uranium", "Cadmium", "Indium"];

var metalsNether = ["Iron", "Gold", "Copper", "Nickel" ];
var metalsNetherAobd = ["Uranium", "Cadmium", "Indium"];

var metalsEnder = ["Tin", "Silver", "Platinum", "Lead"];

var oreStyles = ["Gravel", "Sand", "Dust"];

// First, let's do basic ore duplication.

// Native first.
log("Native ores:")
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
   To fix this, we can simply add recipes to make ore blocks out of broken ores. */



/* Functions */

function nativeOreDoubling(oreMetal, oreStyle) {
    metalType = oreMetal.toLowerCase();
    metalStyle = oreStyle.toLowerCase();

    log("Metal: " + oreMetal + " - Form: " + oreStyle);
    VIW.addAlloy("ingot" + oreMetal, "exnihilo:" + metalType + "_" + metalStyle, 2);
}

function aobdOreDoubling(oreMetal, oreStyle) {
    log("Metal: " + oreMetal + " - Form: " + oreStyle);
    VIW.addAlloy("ingot" + oreMetal, "aobd:ore" + oreStyle + oreMetal, 2);
}
