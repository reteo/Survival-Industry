// A lot of things need to be purged from Survival Industry to keep the theme consistent.

// The list columns are: blockID, oredict, crafting?, smelting?, [tooltip ID, # of lines]
var purge = [
    // EnderIO Stuff
    ["EnderIO:blockStirlingGenerator", null, true, false, [null]],
    ["EnderIO:blockCombustionGenerator", null, true, false, [null]],
    ["EnderIO:blockZombieGenerator", null, true, false, [null]],
    ["EnderIO:blockSolarPanel", null, true, false, [null]],
    ["EnderIO:blockSolarPanel:1", null, true, false, [null]],
    ["EnderIO:blockSagMill", null, true, false, [null]],
    ["EnderIO:blockAlloySmelter", null, true, false, [null]],
    ["EnderIO:blockCapBank", null, true, false, [null]],
    ["EnderIO:blockCapBank:1", null, true, false, [null]],
    ["EnderIO:blockCapBank:2", null, true, false, [null]],
    ["EnderIO:blockCapBank:3", null, true, false, [null]],
    ["EnderIO:blockCrafter", null, true, false, [null]],
    ["EnderIO:blockFarmStation", null, true, false, [null]],
    ["EnderIO:blockKillerJoe", null, true, false, [null]],
    ["EnderIO:itemMaterial:7", null, true, false, [null]],
    ["EnderIO:blockVat", null, true, false, [null]],
    ["EnderIO:itemPowderIngot:0", "dustCoal", false, true, [null]],
    ["EnderIO:itemPowderIngot:1", "dustIron", false, true, [null]],
    ["EnderIO:itemPowderIngot:2", "dustGold", false, true, [null]],
    ["EnderIO:itemPowderIngot:3", "dustCopper", false, true, [null]],
    ["EnderIO:itemPowderIngot:4", "dustTin", false, true, [null]],
    ["EnderIO:itemPowderIngot:8", "dustWheat", false, true, [null]],
    ["EnderIO:bucketNutrient_distillation", null, false, false, [null]],
    ["EnderIO:bucketHootch", null, false, false, [null]],
    ["EnderIO:bucketRocket_fuel", null, false, false, [null]],
    ["EnderIO:bucketFire_water", null, false, false],
    ["EnderIO:blockNutrient_distillation", null, false, false, [null]],
    ["EnderIO:blockHootch", null, false, false, [null]],
    ["EnderIO:blockFire_water", null, false, false, [null]],
    // Non-RotaryCraft Engines
    ["advancedgenetics:combustiongeneratoridle", null, true, false, ["enginedisable",3]],
    ["appliedenergistics2:tile.BlockVibrationChamber", null, true, false, ["enginedisable",3]],
    ["BuildCraft|Core:engineBlock:0", null, true, false, ["enginedisable",3]],
    ["BuildCraft|Core:engineBlock:1", null, true, false, ["enginedisable",3]],
    ["BuildCraft|Core:engineBlock:2", null, true, false, ["enginedisable",3]],
    ["BuildCraft|Core:engineBlock:3", null, true, false, ["enginedisable",3]],
    ["extracells:vibrantchamberfluid", null, true, false, ["enginedisable",3]],
    ["rftools:endergenicBlock:0", null, false, true, ["enginedisable",3]],
    // Buildcraft Quarry
    ["BuildCraft|Builders:machineBlock", null, false, true, ["quarrydisable",2]],
    // Buildcraft Auto Workbench
    ["BuildCraft|Factory:autoWorkbenchBlock", null, false, true, ["autoworkbenchdisable",2]],
    // Buildcraft Mining Well
    ["BuildCraft|Factory:miningWellBlock", null, false, true, ["miningwelldisable",2]],
    // Metallurgy's Manganese.  All of it.
    ["Metallurgy:base.ore:2", null, false, false, [null]],
    ["Metallurgy:base.block:2", null, true, false, [null]],
    ["Metallurgy:base.brick:2", null, true, false, [null]],
    ["Metallurgy:manganese.molten", null, false, false, [null]],
    ["Metallurgy:base.dust:2", null, false, false, [null]],
    ["Metallurgy:manganese.ingot", null, true, true, [null]],
    ["Metallurgy:molten.bucket:6", null, false, false, [null]],
    ["aobd:crushedManganese", null, false, false, [null]]
];

// Now for the purge.
for (var m in purge) {
    hideFromNEI(purge[m][0]);
    if (purge[m][1] != null) // Remove ore dictionary entry
        removeOreDict(purge[m][0],purge[m][1]);
    if (purge[m][2] == true) // Remove crafting bench recipe
        removeRecipes(purge[m][0]);
    if (purge[m][3] == true) // Remove furnace recipe
        removeSmeltingRecipes(purge[m][0]);
    if (purge[m][4][0] != null) // Add tooltips referencing the removal.
        for (var i in purge[m][4][1])
            addToolTip(purge[m][0], ["info.SurvivalIndustry.tooltips." + purge[m][4][0] + i]);
}