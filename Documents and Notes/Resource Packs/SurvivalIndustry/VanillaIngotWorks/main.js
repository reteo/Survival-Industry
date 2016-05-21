/* Vanilla Ingot Works: Allowing ore doubling and alloying support without the need for additional machines. */


// Makes a custom creative tab for custom items.
addCreativeTab("VanillaIngotWorks.general","Vanilla Ingot Works","VanillaIngotWorks:itemCrucible");

// Before we can do anything, let's make the basic tools of the trade.
addItem("itemCrucible", "ItemCrucible", 64, "VanillaIngotWorks.general");
addItem("itemIngotMold", "ItemIngotMold", 64, "VanillaIngotWorks.general");

// Next, we need the recipes for the above tools.
addShapelessRecipe("VanillaIngotWorks:itemIngotMold", ["minecraft:sand"]);
addShapelessRecipe("VanillaIngotWorks:itemCrucible", ["minecraft:clay","minecraft:sand"]);

// This restores the sand used for an unneeded mold by crafting it with a stick.
addShapelessRecipe("minecraft:stick", ["VanillaIngotWorks:itemIngotMold","minecraft:stick"]);


// Define the different materials we'll be using.  For now, we'll just add common metals. 
var ores = ["Iron","Gold","Copper","Tin","Aluminum","Silver", "Lead", "Nickel", "Platinum"];

// Now, we define the basic alloys we'll most likely use.
// Format:	"First Material", "Second Material", "Alloy"
var alloys = [
	["Copper","Tin","Bronze"],
	["Silver","Gold","Electrum"]];


// First, alloy ingots with ingots to make 2 ingots each.
for(var m in alloys){
	addAlloy("ingot" + alloys[m][0], "ingot" + alloys[m][1], "ingot" + alloys[m][2], 2);
}

// Next, alloy ores with ores to make 4 ingots each.
for(var m in alloys){
	addAlloy("ore" + alloys[m][0], "ore" + alloys[m][1], "ingot" + alloys[m][2], 4);
}

// Finally, duplicate ores.
for(var m in ores){
	addAlloy("ore" + ores[m], "ingot" + ores[m], 2);
}

load("SurvivalIndustry.js");