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
    [["enderutilities:enderpart:0"], ["enderAlloyBasic"], null],
    [["enderutilities:enderpart:1"], ["enderAlloyEnhanced"], null],
    [["enderutilities:enderpart:2"], ["enderAlloyAdvanced"], null],
    
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
(function(assign){
    for (var m in assign) {
        if (assign[m][2] == null || isModLoaded(assign[m][2])) {
            for (var n in assign[m][1]) {
                for (var o in assign[m][0]) {
                    addOreDict(assign[m][0][o], assign[m][1][n]);
                }
            }
        }
    }
})(oreDictAssign);

// Merge multiple ore dictionaries together.
(function(merge){
    for (var m in merge) { // for every record...
        for (var n in merge[m]) { // ...every entry...
            for (var o in merge[m]) { // ...will be merged with every other entry...
                if (merge[m][n] != merge[m][o]) { // ... unless they're the same item.
                    addOreDict(merge[m][n], merge[m][o]);
                }
            }
        }
    }
})(oreDictMerge);
    
