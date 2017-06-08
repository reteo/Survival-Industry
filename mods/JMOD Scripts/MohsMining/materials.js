// Basic Colors:
defineColor("RED", 255, 0, 0);
defineColor("GREEN", 0, 255, 0);
defineColor("BLUE", 0, 0,255);

// ----------------------------------------------------------------------------- //



//Tool Materials
// Legend: name, mininglevel, durability, efficiency(speed), damage vs entities, enchantability, repairmaterial (must be oreDicted)
(function(){
    var toolmat = [
        ["WOOD",            0,   88,  2.1,  0.3,   2, "plankWood",      null],
        ["STONE",           1,  601,  3.9,  0.9,   5, "cobblestone",    null], // Assuming Feldspar
        ["FLINT",           1,  712,  4.0,  0.5,   3, "itemFlint",      null],
        ["LEAD",            2,  122,  4.2,  4.2,  22, "ingotLead",      null],
        ["TIN",             2,  111,  2.8,  2.7,  14, "ingotTin",       null],
        ["GOLD",            2,  154,  7.1,  7.2,  38, "ingotGold",      null],
        ["SILVER",          2,  140,  4.8,  3.9,  20, "ingotSilver",    null],
        ["ELECTRUM",        2,  138,  4.4,  5.6,  29, "ingotElectrum",  null],
        ["ALUMINUM",        2,  140,  2.8,  1.0,   5, "ingotAluminum",  null],
        ["COPPER",          3,  162,  4.9,  3.3,  17, "ingotCopper",    null],
        ["PLATINUM",        3,  208, 10.0,  8.0,  42, "ingotPlatinum",  null],
        ["IRON",            4,  235,  5.4,  1.9,  10, "ingotIron",      null],
        ["NICKEL",          4,  236,  5.8,  3.3,  17, "ingotNickel",    null],
        ["BRONZE",          4,  236,  5.8,  3.2,  17, "ingotBronze",    null],
        ["STEEL",           5,  287,  5.7,  3.0,  15, "ingotSteel",     null],
        ["HSLA",            5,  349,  6.1,  3.0,  18, "ingotHSLA",      "RotaryCraft"],
        ["RAILCRAFT_STEEL", 5,  287,  5.7,  3.0,  15, "ingotSteel",     "Railcraft"],
        ["darkSteel",       5,  287,  5.7,  3.0,  15, "ingotDarkSteel", "EnderIO"],
        ["OBSIDIAN",        6,  418,  3.4,  0.9,   2, "blockObsidian",  null],
        ["PERIDOT",         7,  712,  4.5,  1.3,  14, "gemPeridot",     "ProjRed|Exploration"],
        ["QUARTZ",          7,  711,  4.0,  1.0,   8, "crystalNetherQuartz", null],
        ["CERTUS",          7,  711,  4.0,  1.0,   8, "crystalCertusQuartz", "appliedenergistics2"],
        ["TEMERALD",        7, 1293,  5.9,  1.5,   8, "gemEmerald",     null], // "True" Emerald, not diamond with weird material name.
        ["RUBY",            8,  973,  4.4,  3.0,  10, "gemRuby",        "ProjRed|Exploration"],
        ["Scarab",          8 , 973,  5.5,  4.0,  25, "gemScarab",      "fossil"],
        ["SAPPHIRE",        8, 1293,  5.9,  3.0,  10, "gemSapphire",    "ProjRed|Exploration"],
        ["EMERALD",         8, 1674,  5.8,  1.9,   7, "gemDiamond",     null],
        ["enderutilities.enderalloy.advanced",
                            8, 1674,  5.2,  5.0,  30, "enderAlloyAdvanced",
                                                                        "enderutilities"],
        ["BEDROCK",       255,   0, 8.0,3.0,10, "RotaryCraft:ingotBedrock"]
    ];

    for (var m in toolmat) {
        var material = toolmat[m];
        if ((material[7] == null) || isModLoaded(material[7]))
            addToolMaterial(material[0],material[1],material[2],material[3],material[4],material[5],material[6]);
    }
})();

// ----------------------------------------------------------------------------- //
    

// Armor Colors
defineColor("WOOD", 135, 73, 13);
defineColor("TIN", 128, 128, 128);
defineColor("LEAD", 179, 182, 220);
defineColor("ELECTRUM", 255, 255, 192);
defineColor("ALUMINUM", 192, 192, 192);
defineColor("SILVER", 227, 247, 255);
defineColor("COPPER", 192, 104, 64);
defineColor("PLATINUM", 102, 160, 255);
defineColor("NICKEL", 221, 210, 168);
defineColor("BRONZE", 192, 88, 0);
defineColor("STEEL", 128, 128, 128);
defineColor("OBSIDIAN", 27, 21, 40);
defineColor("QUARTZ", 219, 204, 191);
defineColor("CERTUS", 186, 219, 255);
defineColor("TEMERALD", 65, 243, 132); // True emerald, not diamond with a misleading name in code.

    
// Armor Materials
(function(){
    var armormat = [
        ["WOOD",             7, 1,  3, 2, 1,  2, "plankWood",        null],
        ["TIN",              7, 1,  3, 2, 1, 15, "ingotTin",         null],
        ["LEAD",             8, 1,  3, 2, 1, 23, "ingotLead",        null], // Lead suit, Weak for now, but hopefully can be buffed as a hazmat suit later.
        ["ELECTRUM",         8, 1,  3, 2, 1, 18, "ingotElectrum",    null],
        ["ALUMINUM",         8, 1,  3, 2, 1,  6, "ingotAluminum",    null],
        ["SILVER",           8, 1,  3, 2, 1, 30, "ingotSilver",      null],
        ["GOLD",             8, 1,  3, 2, 1, 30, "ingotGold",        null],
        ["COPPER",           8, 1,  3, 2, 1, 18, "ingotCopper",      null],
        ["PLATINUM",         9, 1,  4, 3, 1, 30, "ingotPlatinum",    null],
        ["IRON",            10, 1,  4, 3, 1,  0, "ingotIron",        null],
        ["NICKEL",          10, 1,  4, 3, 1, 18, "ingotNickel",      null],
        ["BRONZE",          10, 1,  4, 3, 1,  9, "ingotBronze",      null],
        ["STEEL",           11, 2,  4, 3, 2,  8, "ingotSteel",       null],
        ["RAILCRAFT_STEEL", 11, 2,  4, 3, 2,  8, "ingotSteel",       "Railcraft"],
        ["darkSteel",       11, 2,  4, 3, 2,  8, "ingotDarkSteel",   "EnderIO"],
        ["HSLA",            12, 2,  5, 4, 2,  8, "ingotHSLA",        "RotaryCraft"],
        ["OBSIDIAN",        14, 2,  5, 4, 2,  0, "blockObsidian",    null],
        ["QUARTZ",          20, 3,  8, 6, 3,  8, "crystalNetherQuartz", null],
        ["CERTUS",          20, 3,  8, 6, 3,  8, "crystalCertusQuartz", "appliedenergistics2"],
        ["PERIDOT",         20, 3,  8, 6, 3,  7, "gemPeridot",       "ProjRed|Exploration"],
        ["RUBY",            25, 4, 10, 8, 4,  8, "gemRuby",          "ProjRed|Exploration"],
        ["TEMERALD",        32, 5, 13,10, 5,  8, "gemEmerald",       null],
        ["SAPPHIRE",        32, 5, 13,10, 5, 12, "gemSapphire",      "ProjRed|Exploration"],
        ["EMERALD",         35, 5, 14,11, 5, 14, "gemDiamond",       null]
    ];
    
    for (var m in armormat) {
        var material = armormat[m];
        if ((material[8] == null) || isModLoaded(material[8]))
            addArmorMaterial(material[0], material[1], material[2], material[3], material[4], material[5], material[6], material[7]);
    }
})();

