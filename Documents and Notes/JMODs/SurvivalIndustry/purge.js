// A lot of things need to be purged from Survival Industry to keep the theme consistent.

// The list columns are: blockID, oredict, crafting?, smelting?, [tooltip ID, # of lines]
(function(){
    var purges = [
        // EnderIO Stuff
        ["EnderIO:blockStirlingGenerator",      null,     true,   false,  true, ["enginedisable",     3]],
        ["EnderIO:blockCombustionGenerator",    null,     true,   false,  true,  ["enginedisable",           3]],
        ["EnderIO:blockZombieGenerator",        null,     true,   false,  true,  ["enginedisable",           3]],
        ["EnderIO:blockSolarPanel",             null,     true,   false,  true,  ["enginedisable",           3]],
        ["EnderIO:blockSolarPanel:1",           null,     true,   false,  true,  ["enginedisable",           3]],
        ["EnderIO:blockSagMill",                null,     true,   false,  true,  ["sagmilldisable",          4]],
        ["EnderIO:blockAlloySmelter",           null,     true,   false,  true,  ["alloysmelterdisable",     4]],
        ["EnderIO:blockCapBank",                null,     true,   false,  true,  ["powerstoredisable",       3]],
        ["EnderIO:blockCapBank:1",              null,     true,   false,  true,  ["powerstoredisable",       3]],
        ["EnderIO:blockCapBank:2",              null,     true,   false,  true,  ["powerstoredisable",       3]],
        ["EnderIO:blockCapBank:3",              null,     true,   false,  true,  ["powerstoredisable",       3]],
        ["EnderIO:blockCrafter",                null,     true,   false,  true,  ["autocrafterdisable",      3]],
        ["EnderIO:blockFarmStation",            null,     true,   false,  true,  ["farmingstationdisable",   4]],
        ["EnderIO:blockKillerJoe",              null,     true,   false,  true,  ["killerjoedisable",        4]],
        ["EnderIO:itemMaterial:7",              null,     true,   false,  true,  [null]],
        ["EnderIO:blockVat",                    null,     true,   false,  true,  ["vatdisable",              3]],
        ["EnderIO:bucketNutrient_distillation", null,     false,  false,  true,  ["fueldisable",             3]],
        ["EnderIO:bucketHootch",                null,     false,  false,  true,  ["fueldisable",             3]],
        ["EnderIO:bucketRocket_fuel",           null,     false,  false,  true,  ["fueldisable",             3]],
        ["EnderIO:bucketFire_water",            null,     false,  false,  true,  ["fueldisable",             3]],
        ["EnderIO:blockNutrient_distillation",  null,     false,  false,  true,  ["fueldisable",             3]],
        ["EnderIO:blockHootch",                 null,     false,  false,  true,  ["fueldisable",             3]],
        ["EnderIO:blockFire_water",             null,     false,  false,  true,  ["fueldisable",             3]],
        // Non-RotaryCraft Engines
        ["advancedgenetics:combustiongeneratoridle", 
                                                null,     true,   false,  true,  ["enginedisable",           3]],
        ["appliedenergistics2:tile.BlockVibrationChamber",  
                                                null,     true,   false,  true,  ["enginedisable",           3]],
        ["BuildCraft|Core:engineBlock:0",       null,     true,   false,  true,  ["enginedisable",           3]],
        ["BuildCraft|Core:engineBlock:1",       null,     true,   false,  true,  ["enginedisable",           3]],
        ["BuildCraft|Core:engineBlock:2",       null,     true,   false,  true,  ["enginedisable",           3]],
        ["BuildCraft|Core:engineBlock:3",       null,     true,   false,  true,  ["enginedisable",           3]],
        ["extracells:vibrantchamberfluid",      null,     true,   false,  true,  ["enginedisable",           3]],
        ["rftools:endergenicBlock:0",           null,     false,  true,  true,  ["enginedisable",           3]],
        // Buildcraft Quarry
        ["BuildCraft|Builders:machineBlock",    null,     true,   false,  true,  ["miningmachinedisable",    3]],
        // Buildcraft Auto Workbench
        ["BuildCraft|Factory:autoWorkbenchBlock",
                                                null,     true,   false,  true,  ["autocrafterdisable",      3]],
        // Buildcraft Mining Well   
        ["BuildCraft|Factory:miningWellBlock",  null,     true,   false,  true,  ["miningmachinedisable",    3]],

	// Redundant Ender Chests
        ["EnderStorage:enderChest:273",         null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:546",         null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:819",         null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:1092",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:1365",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:1638",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:1911",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:2184",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:2457",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:2730",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:3003",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:3276",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:3549",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:3822",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:4095",        null,     true,   false,  true,  [null]],

	// Redundant Ender Tanks
        ["EnderStorage:enderChest:4369",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:4642",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:4915",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:5188",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:5461",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:5734",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:6007",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:6280",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:6553",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:6826",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:7099",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:7372",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:7645",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:7918",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderChest:8191",        null,     true,   false,  true,  [null]],
	
	// Redundant Ender Pouches
        ["EnderStorage:enderPouch:273",         null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:546",         null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:819",         null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:1092",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:1365",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:1638",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:1911",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:2184",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:2457",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:2730",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:3003",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:3276",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:3549",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:3822",        null,     true,   false,  true,  [null]],
        ["EnderStorage:enderPouch:4095",        null,     true,   false,  true,  [null]],

	// Vanilla Packed Ice recipe
        ["minecraft:packed_ice",                null,     true,   false,  false,  [null]],
	
    ];
    
    // Now for the purge.
    for (var m in purges) {
        var purge = purges[m];
	if (purge[4] == true) // Hide from "Not Enough Items"
	    NEI.hideItem(purge[0]);
        if (purge[1] != null) // Remove ore dictionary entry
            removeOreDict(purge[0],purge[1]);
        if (purge[2] == true) // Remove crafting bench recipe
            removeRecipes(purge[0]);
        if (purge[3] == true) // Remove furnace recipe
            removeSmeltingRecipes(purge[0]);
        if (purge[5] != null) // Add tooltips referencing the removal.
            for (var i in purge[5][1])
                addToolTip(purge[0], ["info.SurvivalIndustry.tooltips." + purge[5][0] + i]);
    }
})();

