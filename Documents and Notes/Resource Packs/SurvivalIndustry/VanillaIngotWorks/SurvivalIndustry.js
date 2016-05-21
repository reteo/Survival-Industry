// This will add recipes for the RotaryCraft Blast Furnace.
var recipes = [
    ["Bronze", "Copper","Tin"],
    ["Electrum", "Silver","Gold"],
];

for (var m in recipes)
    RotaryCraft.addBlastFurnaceRecipe("ingot" + recipes[m][0], 600, 1, 0, [["ingot" + recipes[m][1], "ingot" + recipes[m][2], null], [null, null, null], [null,null,null]]);

// Steel is a different story.  A loop won't cut it here.
RotaryCraft.addBlastFurnaceAlloying	("SurvivalIndustry:ingotSteel","ingotIron",550).setXP(1).input(1,"itemCoal",100,2); // coal
RotaryCraft.addBlastFurnaceAlloying	("SurvivalIndustry:ingotSteel","ingotIron",550).setXP(1).input(1,"itemCharcoal",100,4); // charcoal

// Next is iron with one coal coke in the side slot.
RotaryCraft.addBlastFurnaceAlloying	("SurvivalIndustry:ingotSteel","ingotIron",550).setXP(1).input(1,"coalCoke",100,1);

// By adding gunpowder in addition to coal coke, and bringing up the heat, we can get bonus metal.
RotaryCraft.addBlastFurnaceAlloying	("SurvivalIndustry:ingotSteel","ingotIron",1200).setXP(1).input(1,"coalCoke",100,1).input(2,"dustGunpowder",3,1);

