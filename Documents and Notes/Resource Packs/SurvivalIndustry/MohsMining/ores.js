// Ore creation
(function () {
    var newOres = ["Aluminum","Copper","Tin","Nickel","Lead","Silver","Platinum"];

    for(var m in newOres){
        addBlock("ore" + newOres[m], "CoreBlock", 3.0, 5.0, "pickaxe", 1, "rock", "MohsMining.general");
        addOreDict("MohsMining:" + "ore" + newOres[m], "ore" + newOres[m]);
        addSmeltingRecipe("MohsMining:" + "ingot" + newOres[m],"MohsMining:" + "ore" + newOres[m]);
    }
})(); 

// ----------------------------------------------------------------------------- //


// Ore Stats
// Legend: blockID, [Harvest levels for meta 0, meta 1, meta 2, ... meta n], [Hardness levels for meta 0... etc.], "ModID Providing Ore" 
//      a harvest level of -1 means the meta is not altered.
(function () {
    var oreBlocks = [
        ["minecraft:coal_ore",          [1], [4.2], null],
        ["MohsMining:oreTin",           [1], [7.0], null],
        ["MohsMining:oreLead",          [1], [9.1], null],
        ["minecraft:gold_ore",          [1], [20.4], null],
        ["MohsMining:oreSilver",        [1], [12.5], null],
        ["MohsMining:oreAluminum",      [1], [5.8], null],
        ["MohsMining:oreCopper",        [2], [12.7], null],
        ["minecraft:redstone_ore",      [2], [12.7], null],
        ["minecraft:lit_redstone_ore",  [2], [12.7], null],
        ["MohsMining:orePlatinum",      [2], [30.0], null],
        ["MohsMining:oreNickel",        [3], [15.8], null],
        ["minecraft:iron_ore",          [3], [14.4], null],
        ["minecraft:lapis_ore",         [6], [9.3], null],
        ["minecraft:obsidian",          [5], [7.7], null],
        ["minecraft:emerald_ore",       [7], [16.1], null],
        ["minecraft:quartz_ore",        [6], [9.7], null],
        ["minecraft:diamond_ore",       [7], [12.7], null],
        ["appliedenergistics2:tile.OreQuartz",
                                        [6], [9.7], "appliedenergistics2"],
        ["appliedenergistics2:tile.OreQuartzCharged",
                                        [6], [9.7], "appliedenergistics2"],
        ["appliedenergistics2:tile.BlockSkyStone",
                                        [7], [20.0], "appliedenergistics2"],
        // Forestry:  Apatite, Copper, Tin
        ["Forestry:resources",          [4,2,1], [8.8,12.7,7.0], "Forestry"],
        ["minechem:tile.oreUranium",    [6], [26.6], "minechem"],
        // ElectriCraft: Copper, Tin, Silver, Nickel, Aluminum, Platinum
        ["ElectriCraft:electricraft_block_ore", 
                                        [2,1,1,3,1,2], [12.7,7.0,12.5,15.8,5.8,30.0], "ElectriCraft"],
        // Project Red: Ruby, Sapphire, Peridot, Copper, Tin, Silver, Electrotine
        ["ProjRed|Exploration:projectred.exploration.ore",
                                        [6,7,6,2,1,1,2], [11.1,16.1,11.5,12.7,7.0,12.5,12.7], "ProjRed|Exploration"],
        // Railcraft: Sulfur, Saltpeter, Abyssal (Diamond, Emerald, Lapis), Firestone, (null), Poor (Iron, Gold, Copper, Tin, Lead)
        ["Railcraft:ore",               [1,1,7,7,6,6,-1,3,1,2,1,1], [5.0,4.0,12.7,16.1,9.3,9.5,-1,14.4,20.4,12.7,7.0,9.1], "Railcraft"],
        ["ReactorCraft:reactorcraft_block_fluoriteore",
                                        [4,4,4,4,4,4,4,4], [7.6,7.6,7.6,7.6,7.6,7.6,7.6,7.6], "ReactorCraft"],
        // ReactorCraft: (null) Pitchblende, Cadmium, Indium, Silver, End Pitchblende, Ammonium Chloride, Calcite, Magnetite, Thorite
        ["ReactorCraft:reactorcraft_block_ore", 
                                        [-1,6,1,1,1,6,1,2,7,5], [-1,26.6,9.2,6.0,12.5,26.6,3.0,5.9,15.2,12.6], "ReactorCraft"]
];  


    for (var m in oreBlock = oreBlocks)
        if ((oreBlocks[m][3] == null) || isModLoaded(oreBlocks[m][3]))
            for (var n in oreBlocks[m][1])
                if (oreBlocks[m][1][n] >= 0)
                    setBlockProperties(oreBlocks[m][0]) .harvestlevel(n,oreBlocks[m][1][n]);
            for (var n in oreBlocks[m][2])
                if (oreBlocks[m][2][n] >= 0)
                    setBlockProperties(oreBlocks[m][0] + ":" + n) .hardness(oreBlocks[m][2][n]).br(oreBlocks[m][2][n]);
})(); 


// ----------------------------------------------------------------------------- //



// Ore Spawning

// The order is "name", vein size, chances per chunk, lower Y level, higher Y level.
(function () {
    orePlacements = [
        ["Aluminum", 7, 24, 5, 64],
        ["Copper", 7, 22, 5, 64],
        ["Tin", 7, 20, 5, 64],
        ["Nickel", 8, 12, 16, 48],
        ["Lead", 8, 8, 8, 32],
        ["Silver", 8, 4, 8, 32],
        ["Platinum", 4, 2, 5, 16]];

    for (var m in orePlacements){
        addOreGeneration().blockToGenerate("MohsMining:ore"+orePlacements[m][0]).veinSize(orePlacements[m][1]).chancesPerChunk(orePlacements[m][2]).startY(orePlacements[m][3]).endY(orePlacements[m][4]);
    }
})(); 
