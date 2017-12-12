/* We want the ore gravels, sands, and dusts to be processed by Vanilla Ingot Works. */

var metalsNative = ["Iron", "Gold", "Copper", "Tin", "Silver", "Nickel", "Platinum", "Aluminum", "Lead"];
var metalsAobd = ["Uranium", "Cadmium", "Indium"];

var metalsNether = ["Iron", "Gold", "Copper", "Nickel" ];
var metalsNetherAobd = ["Uranium", "Cadmium", "Indium"];

var metalsEnder = ["Tin", "Silver", "Platinum", "Lead"];

var oreStyles = ["Gravel", "Sand", "Dust"];

// First, let's do basic ore duplication.

// Native first.
for (var m in metalsNative){
    for (var o in oreStyles) {
	oreMetal = metalsNative[m];
	oreStyle = oreStyles[o];
	metalType = oreMetal.toLowerCase();
	metalStyle = oreStyle.toLowerCase();
	
	VIW.addAlloy("exnihilo:" + metalType + "_" + metalStyle, "ingot" + oreMetal, 2);
	log("addAlloy Arguments: " + "exnihilo:" + metalType + "_" + metalStyle + ", " + "ingot" + oreMetal + ", " +  "2");
    }
}

// Now for AOBD ores.
for (var m in metalsAobd){
    for (var o in oreStyles) {
	metalType = metalsAobd[m];
	metalStyle = oreStyles[o];
	
	VIW.addAlloy("aobd:ore" + metalStyle + metalType, "ingot" + metalType, 2);
	log("addAlloy Arguments: " + "aobd:ore" + metalStyle + metalType + ", " +  "ingot" + metalType + ", " +  "2");
    }
}
    
// For gravel, there are nether and ender variants.

// First, Native Nether ores.
for (var m in metalsNether){
    for (var o in oreStyles) {
	oreMetal = metalsNether[m];
	oreStyle = oreStyles[o];
	metalType = oreMetal.toLowerCase();
	metalStyle = oreStyle.toLowerCase();
	
	VIW.addAlloy("exnihilo:" + metalType + "_" + metalStyle, "ingot" + oreMetal, 2);
	log("addAlloy Arguments: " + "exnihilo:" + metalType + "_" + metalStyle + ", " +  "ingot" + oreMetal + ", " +  "2");
    }
}

// Then, AOBD Nether ores.
for (var m in metalsNetherAobd){
    for (var o in oreStyles) {
	metalType = metalsNetherAobd[m];
	metalStyle = oreStyles[o];
	
	VIW.addAlloy("aobd:ore" + metalStyle + metalType, "ingot" + metalType, 2);
	log("addAlloy Arguments: " + "aobd:ore" + metalStyle + metalType + ", " +  "ingot" + metalType + ", " +  "2");
    }
}

// Finally, Ender ores (there are no AOBD variants for ender ores)
for (var m in metalsEnder){
    for (var o in oreStyles) {
	oreMetal = metalsEnder[m];
	oreStyle = oreStyles[o];
	metalType = oreMetal.toLowerCase();
	metalStyle = oreStyle.toLowerCase();
	
	VIW.addAlloy("exnihilo:" + metalType + "_" + metalStyle, "ingot" + oreMetal, 2);
	log("addAlloy Arguments: " + "exnihilo:" + metalType + "_" + metalStyle + ", " +  "ingot" + oreMetal + ", " +  "2");
    }
}

/* We want to be able to use the extractor, but vanilla ores aren't available in skyblock.
   To fix this, we can simply add recipes to make ore blocks out of broken ores. */

