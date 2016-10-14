// A lot of things need to be purged from Survival Industry to keep the theme consistent.

// The list columns are: blockID, oredict, crafting?, smelting?, [tooltip ID, # of lines]
(function(){
    var purges = [
        // EnderIO Stuff
        ["EnderIO:blockStirlingGenerator",      null,           true,   false,  ["enginedisable",           3]],
        ["EnderIO:blockCombustionGenerator",    null,           true,   false,  ["enginedisable",           3]],
        ["EnderIO:blockZombieGenerator",        null,           true,   false,  ["enginedisable",           3]],
        ["EnderIO:blockSolarPanel",             null,           true,   false,  ["enginedisable",           3]],
        ["EnderIO:blockSolarPanel:1",           null,           true,   false,  ["enginedisable",           3]],
        ["EnderIO:blockSagMill",                null,           true,   false,  ["sagmilldisable",          4]],
        ["EnderIO:blockAlloySmelter",           null,           true,   false,  ["alloysmelterdisable",     4]],
        ["EnderIO:blockCapBank",                null,           true,   false,  ["powerstoredisable",       3]],
        ["EnderIO:blockCapBank:1",              null,           true,   false,  ["powerstoredisable",       3]],
        ["EnderIO:blockCapBank:2",              null,           true,   false,  ["powerstoredisable",       3]],
        ["EnderIO:blockCapBank:3",              null,           true,   false,  ["powerstoredisable",       3]],
        ["EnderIO:blockCrafter",                null,           true,   false,  ["autocrafterdisable",      3]],
        ["EnderIO:blockFarmStation",            null,           true,   false,  ["farmingstationdisable",   4]],
        ["EnderIO:blockKillerJoe",              null,           true,   false,  ["killerjoedisable",        4]],
        ["EnderIO:itemMaterial:7",              null,           true,   false,  [null]],
        ["EnderIO:blockVat",                    null,           true,   false,  ["vatdisable",              3]],
        ["EnderIO:bucketNutrient_distillation", null,           false,  false,  ["fueldisable",             3]],
        ["EnderIO:bucketHootch",                null,           false,  false,  ["fueldisable",             3]],
        ["EnderIO:bucketRocket_fuel",           null,           false,  false,  ["fueldisable",             3]],
        ["EnderIO:bucketFire_water",            null,           false,  false   ["fueldisable",             3]],
        ["EnderIO:blockNutrient_distillation",  null,           false,  false,  ["fueldisable",             3]],
        ["EnderIO:blockHootch",                 null,           false,  false,  ["fueldisable",             3]],
        ["EnderIO:blockFire_water",             null,           false,  false,  ["fueldisable",             3]],
        // Non-RotaryCraft Engines
        ["advancedgenetics:combustiongeneratoridle", 
                                                null,           true,   false,  ["enginedisable",           3]],
        ["appliedenergistics2:tile.BlockVibrationChamber",  
                                                null,           true,   false,  ["enginedisable",           3]],
        ["BuildCraft|Core:engineBlock:0",       null,           true,   false,  ["enginedisable",           3]],
        ["BuildCraft|Core:engineBlock:1",       null,           true,   false,  ["enginedisable",           3]],
        ["BuildCraft|Core:engineBlock:2",       null,           true,   false,  ["enginedisable",           3]],
        ["BuildCraft|Core:engineBlock:3",       null,           true,   false,  ["enginedisable",           3]],
        ["extracells:vibrantchamberfluid",      null,           true,   false,  ["enginedisable",           3]],
        ["rftools:endergenicBlock:0",           null,           false,  true,   ["enginedisable",           3]],
        // Buildcraft Quarry
        ["BuildCraft|Builders:machineBlock",    null,           false,  true,   ["miningmachinedisable",    3]],
        // Buildcraft Auto Workbench
        ["BuildCraft|Factory:autoWorkbenchBlock",
                                                null,           false,  true,   ["autocrafterdisable",      3]],
        // Buildcraft Mining Well   
        ["BuildCraft|Factory:miningWellBlock",  null,           false,  true,   ["miningmachinedisable",    3]]
    ];
    
    // Now for the purge.
    for (var m in purges) {
        var purge = purges[m];
        hideFromNEI(purge[0]);
        if (purge[1] != null) // Remove ore dictionary entry
            removeOreDict(purge[0],purge[1]);
        if (purge[2] == true) // Remove crafting bench recipe
            removeRecipes(purge[0]);
        if (purge[3] == true) // Remove furnace recipe
            removeSmeltingRecipes(purge[0]);
        if (purge[4] != null) // Add tooltips referencing the removal.
            for (var i in purge[4][1])
                addToolTip(purge[0], ["info.SurvivalIndustry.tooltips." + purge[4][0] + i]);
    }
})();

