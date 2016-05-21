// A component to render changes to fit EnderIO with RotaryCraft.

// Now, we add the RotaryCraft recipes for EnderIO materials.
var recipe = [
    [electricalSteel,    600,1,0,[["ingotSteel","itemSilicon",null],[null,null,null],[null,null,null]]],
    [electricalSteel,	 600,1,0,[["ingotHSLA","itemSilicon",null],[null,null,null],[null,null,null]]],
    [energeticAlloy,	1000,1,0,[["dustRedstone","ingotGold","dustGlowstone"],[null,null,null],[null,null,null]]],
    [vibrantAlloy,		1450,1,0,[["ingotEnergeticAlloy","pearlEnder",null],[null,null,null],[null,null,null]]],
    [conductiveIron,	 600,1,0,[["dustRedstone","ingotIron",null],[null,null,null],[null,null,null]]],
    [redstoneAlloy,		 600,1,0,[["dustRedstone","itemSilicon",null],[null,null,null],[null,null,null]]],
    [pulsatingIron,		1000,1,0,[["pearlEnder","ingotIron",null],[null,null,null],[null,null,null]]],
    [darkSteel,			1200,1,0,[["ingotSteel","blockObsidian",null],[null,null,null],[null,null,null]]],
    [darkSteel,			1200,1,0,[["ingotHSLA","blockObsidian",null],[null,null,null],[null,null,null]]],
    [soularium,			1450,1,0,[["soulsand","ingotGold",null],[null,null,null],[null,null,null]]]
];

for (var m in recipe)
    RotaryCraft.addBlastFurnaceRecipe(recipe[m][0],recipe[m][1],recipe[m][2],recipe[m][3],recipe[m][4]);

// Next, we'll assign alloys to the blast furnace.  The options vary too widely to make effective use of looping.
RotaryCraft.addBlastFurnaceAlloying	(fusedQuartz, "gemQuartz",600).required(4).setXP(1);
RotaryCraft.addBlastFurnaceAlloying	(quiteClearGlass, "sand",600).required(1).setXP(1);
RotaryCraft.addBlastFurnaceAlloying	(enlightenedFusedQuartz, "gemQuartz",600).required(4).setXP(1).input(1,"dustGlowstone",100,4);
RotaryCraft.addBlastFurnaceAlloying	(enlightenedClearGlass, "sand",600).required(1).setXP(1).input(1,"dustGlowstone",100,4);
RotaryCraft.addBlastFurnaceAlloying	(darkFusedQuartz, "gemQuartz",600).required(4).setXP(1).input(1,"dyeBlack",100,4);
RotaryCraft.addBlastFurnaceAlloying	(darkClearGlass, "sand",600).required(1).setXP(1).input(1,"dyeBlack",100,4);
RotaryCraft.addBlastFurnaceAlloying (eioSilicon,"sand",800).input(1,aluminumFlakes,25,1).input(1,"itemCoal",25,1);
RotaryCraft.addBlastFurnaceAlloying (eioSilicon,"sand",800).input(1,aluminumFlakes,25,1).input(1,"itemCoal",25,1);
RotaryCraft.addBlastFurnaceAlloying (eioSilicon,"sand",800).input(1,aluminumFlakes,25,1).input(1,"coalCoke",25,1).addBonus();
