// Ore Dictionary Merges
var oreDictMerge = [
    
];

// Forestry wax recipes should support gardencore's wax.
if(isModLoaded("Forestry") && isModLoaded("GardenCore")){
    var ForestryGardenDictMerge = [
        ["itemBeeswax", "materialWax", "materialPressedwax"],
    ];
    
    oreDictMerge.push.apply(oreDictMerge, ForestryGardenDictMerge);  // Merge the two recipe lists.
}

// Ore Dictionary Assignments
var oreDictAssign = [
    // Fixing some problems.
    [["minecraft:coal:2"], ["fuelCoal", "itemCoal", "coal"], "fossil"],
    [["RotaryCraft:rotarycraft_item_canola"], ["sourceVegetableOil"], "RotaryCraft"],
    [["minecraft:flint"], ["itemFlint"], null],
    [["minecraft:obsidian"], ["blockObsidian"], null],
    [["minecraft:leather"], ["materialLeather"], null],
    
    // Fertilizers should be oredicted.  "fertilizerOrganic" should be limited to materials gained from dead creatures and plants.
    [["minecraft:dye:15"], ["fertilizer", "itemFertilizer", "fertilizerOrganic"], null],
    [["Forestry:fertilizerBio", "Forestry:fertilizerCompound"], ["fertilizer", "itemFertilizer"], "Forestry"],
    [["Forestry:fertilizerBio"], ["fertilizerOrganic"], "Forestry"],
    [["VeganOption:fertilizer", "VeganOption:compost"], ["fertilizer", "itemFertilizer", "fertilizerOrganic"], "VeganOption"],
    [["VeganOption:compost"], ["fertilizerOrganic"], "VeganOption"],
    [["RotaryCraft:rotarycraft_item_powders:13"], ["fertilizer", "itemFertilizer", "fertilizerOrganic"], "RotaryCraft"],
    [["GardenCore:compost_pile"], ["fertilizer", "itemFertilizer", "fertilizerOrganic"], "GardenCore"],
    [["HarderWildlife:logRotting:12"], ["fertilizer", "itemFertilizer", "fertilizerOrganic"], "HarderWildlife"],
    [["Metallurgy:fertilizer"], ["fertilizer", "itemFertilizer"], "Metallurgy"]
];


/// Do not edit past this point. ////////////////////////////////////////////////////

// Assign items to the ore dictionary.
for (var m in oreDictAssign) {
    if (oreDictAssign[m][2] == null || isModLoaded(oreDictAssign[m][2])) {
        for (var n in oreDictAssign[m][1]) {
            for (var o in oreDictAssign[m][0]) {
                addOreDict(oreDictAssign[m][0][o], oreDictAssign[m][1][n]);
            }
        }
    }
}

// Merge multiple ore dictionaries together.
for (var m in oreDictMerge) { // for every record...
    for (var n in oreDictMerge[m]) { // ...every entry...
        for (var o in oreDictMerge[m]) { // ...will be merged with every other entry...
            if (oreDictMerge[m][n] != oreDictMerge[m][o]) { // ... unless they're the same item.
                addOreDict(oreDictMerge[m][n], oreDictMerge[m][o]);
            }
        }
    }
}
