// Ore creation
(function () {
    var newOres = ["Aluminum","Copper","Tin","Nickel","Lead","Silver","Platinum"];

    for(var m in newOres){
        ore = newOres[m];
        addBlock("CoreBlock").set({
          name: "ore" + ore,
          hardness: 3.0,
          blastresistance: 10.0,
          tool: "pickaxe",
          harvestlevel: 1,
          material: "iron",
          tab: "MohsMining.general"
        });
        addOreDict("MohsMining:" + "ore" + ore, "ore" + ore);
        addSmeltingRecipe("MohsMining:" + "ingot" + ore,"MohsMining:" + "ore" + ore);
    }
})(); 

// ----------------------------------------------------------------------------- //


// Ore Stats
// Legend: blockID, [[Harvest level, hardness/blast resistance for meta 0], [hr, bl/hd for meta 1], ... [hr, bl/hd for meta n]]
//      a harvest level of -1 means the meta is not altered.
(function(){
    var blocks = [
        ["minecraft:coal_ore",          [[1, 3.3]], null], 
        ["MohsMining:oreTin",           [[1, 4.0]], null], 
        ["MohsMining:oreLead",          [[1, 4.6]], null], 
        ["minecraft:gold_ore",          [[1, 7.5]], null], 
        ["MohsMining:oreSilver",        [[1, 5.5]], null], 
        ["MohsMining:oreAluminum",      [[1, 3.7]], null], 
        ["MohsMining:oreCopper",        [[2, 5.5]], null], 
        ["minecraft:redstone_ore",      [[2, 5.5]], null], 
        ["minecraft:lit_redstone_ore",  [[2, 5.5]], null], 
        ["MohsMining:orePlatinum",      [[2, 10.0]], null], 
        ["MohsMining:oreNickel",        [[3, 6.3]], null], 
        ["minecraft:iron_ore",          [[3, 5.9]], null], 
        ["minecraft:lapis_ore",         [[6, 4.6]], null], 
        ["minecraft:obsidian",          [[5, -1]], null], 
        ["minecraft:emerald_ore",       [[7, 5.1]], null], 
        ["minecraft:quartz_ore",        [[6, 4.7]], null], 
        ["minecraft:diamond_ore",       [[7, 6.3]], null], 
        ["appliedenergistics2:tile.OreQuartz", 
                                        [[6, 4.7]], "appliedenergistics2"], 
        ["appliedenergistics2:tile.OreQuartzCharged", 
                                        [[6, 4.7]], "appliedenergistics2"], 
        ["appliedenergistics2:tile.BlockSkyStone", 
                                        [[7, 10.0]], "appliedenergistics2"], 
        // Forestry:  Apatite, Copper, Tin
        ["Forestry:resources",          [[4, 4.5], [2, 5.5], [1, 4.0]], "Forestry"], 
        ["minechem:tile.oreUranium",    [[6, 9.1]], "minechem"], 
        // ElectriCraft: Copper, Tin, Silver, Nickel, Aluminum, Platinum
        ["ElectriCraft:electricraft_block_ore", 
                                        [[2, 5.5], [1, 4.0], [1, 5.5], [3, 5.9], [1, 3.7], [2, 10.0]], "ElectriCraft"], 
        // Project Red: Ruby, Sapphire, Peridot, Copper, Tin, Silver, Electrotine
        ["ProjRed|Exploration:projectred.exploration.ore", 
                                        [[6, 6.4], [7, 6.4], [6, 5.2], [2, 5.5], [1, 4.0], [1, 5.5], [2, 5.5]], "ProjRed|Exploration"], 
        // Railcraft: Sulfur, Saltpeter, Abyssal (Diamond, Emerald, Lapis), Firestone, (null), Poor (Iron, Gold, Copper, Tin, Lead)
        ["Railcraft:ore",               [[1, 3.4], [1, 3.2], [7, 6.3], [7, 5.1], [6, 4.6], [6, 10.0], [-1, -1], [3, 5.9], [1, 7.5], [2, 5.5], [1, 4.0], [1, 4.6]], "Railcraft"], 
        ["ReactorCraft:reactorcraft_block_fluoriteore", 
                                        [[4, 4.2], [4, 4.2], [4, 4.2], [4, 4.2], [4, 4.2], [4, 4.2], [4, 4.2], [4, 4.2]], "ReactorCraft"], 
        // ReactorCraft: (null), Pitchblende, Cadmium, Indium, Silver, End Pitchblende, Ammonium Chloride, Calcite, Magnetite, Thorite
        ["ReactorCraft:reactorcraft_block_ore", 
                                        [[-1, -1], [6, 9.1], [1, 4.6], [1, 3.8], [1, 5.5], [6, 9.1], [1, 3.2], [2, 3.8], [7, 6.2], [5, 5.5]], "ReactorCraft"]
    ];
    
    for (var m in blocks){
        var block = blocks[m];
        if ((block[2] == null) || isModLoaded(block[2])){
            for (var n in block[1]) {
                var valueGroup = block[1][n];
                var meta = n;
                var harvestLevel = valueGroup[0];
                var hardness = valueGroup[1];
                var blastresistance = (+"hardness")*10;
                
                var currentBlock = setBlockProperties(block[0]);  // Used with Harvest Level
                var currentMeta = setBlockProperties(block[0] + ":" + n); // Used with Blast Resistance and Hardness
                
                if (harvestLevel >= 0)
                    currentBlock.harvestlevel(n, harvestLevel);
                    
                if (hardness >= 0) {
                    currentMeta.hardness(hardness);
                    currentMeta.blastresistance(""+blastresistance);
                }
            }
        }
    }

})();


// ----------------------------------------------------------------------------- //



// Ore Spawning

// The order is "name", vein size, chances per chunk, lower Y level, higher Y level.
(function() {
    if (!isModLoaded("CustomOreGen")){ // COG will do the placement if it's installed.
        ores = [
            ["Aluminum", 7, 24, 5, 64], 
            ["Copper", 7, 22, 5, 64], 
            ["Tin", 7, 20, 5, 64], 
            ["Nickel", 8, 12, 16, 48], 
            ["Lead", 8, 8, 8, 32], 
            ["Silver", 8, 4, 8, 32], 
            ["Platinum", 4, 2, 5, 16]];
        
        for (var m in ores){
            var ore = ores[m];
            
            var name = ore[0];
            var size = ore[1];
            var chances = ore[2];
            var bottom = ore[3];
            var top = ore[4];
            
            addOreGeneration().blockToGenerate("MohsMining:ore"+name).veinSize(size).chancesPerChunk(chances).startY(bottom).endY(top);
        }
    }
})(); 

