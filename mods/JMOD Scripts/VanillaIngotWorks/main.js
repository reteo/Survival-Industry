/* Vanilla Ingot Works: Allowing ore doubling and alloying support without the need for additional machines. */

// Makes a custom creative tab for custom items.
addCreativeTab("VanillaIngotWorks.general","Vanilla Ingot Works","VanillaIngotWorks:itemCrucible");


// Before we can do anything, let's make the basic tools of the trade.
addItem(".vanillaingotworks.ItemCrucible").set({
  name: "itemCrucible",
  stacksize: 64,
  tab: "VanillaIngotWorks.general"
});

addItem(".vanillaingotworks.ItemIngotMold").set({
  name: "itemIngotMold",
  stacksize: 64,
  tab: "VanillaIngotWorks.general"
});


// Next, we need the recipes for the above tools.
addShapelessRecipe("VanillaIngotWorks:itemIngotMold", ["minecraft:sand"]);
addShapelessRecipe("VanillaIngotWorks:itemCrucible", ["minecraft:clay","minecraft:sand"]);


// This restores the sand used for an unneeded mold by crafting it with a stick.
addShapelessRecipe("minecraft:stick", ["VanillaIngotWorks:itemIngotMold","minecraft:stick"]);


// Define the different materials we'll be using. 
var ores = [["Iron",    null],
            ["Gold",    null],
            ["Copper",  null],
            ["Tin",     null],
            ["Aluminum",null],
            ["Silver",  null],
            ["Lead",    null],
            ["Nickel",  null],
            ["Platinum",null]
];


// Now, we define the basic alloys we'll most likely use.
// Legend:	Result, [Ingredient 1, Ingredient 2]
var alloys = [
	["Bronze",      ["Copper","Tin"]],
	["Electrum",    ["Silver","Gold"]]
];


// First, alloy ingots with ingots to make 2 ingots each.
for(var m in alloys){
    var alloy = alloys[m];
	  vanillaingotworks.addAlloy("ingot" + alloy[1][0], "ingot" + alloy[1][1], "ingot" + alloy[0], 2);
}


// Next, alloy ores with ores to make 4 ingots each.
for(var m in alloys){
    var alloy = alloys[m];
	  vanillaingotworks.addAlloy("ore" + alloy[1][0], "ore" + alloy[1][1], "ingot" + alloy[0], 4);
}


// Finally, duplicate ores.
for(var m in ores){
    var ore = ores[m];
    if ((ore[1] == null) || isModLoaded(ore[1]))
        vanillaingotworks.addAlloy("ore" + ore[0], "ingot" + ore[0], 2);
}
