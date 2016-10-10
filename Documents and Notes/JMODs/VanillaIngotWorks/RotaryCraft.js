// Add definitions for RotaryCraft
log("Launching Blast Furnace Recipes.");

var aluminumFlakes          = 	"RotaryCraft:rotarycraft_item_modextracts:27";


/* Let's make a new recipe for metal alloys to encourage use of the blast furnace.
   In addition, this allows recipes that are more true to life; a primary ingredient
   with one or more additive ingredients.
*/
// Legend: Result, [count, Main Ingredient], Temperature [Additive 1, % chance consumed, # consumed], [Additive 2, % chance consumed, # consumed], [Additive 3, % chance consumed, # consumed], Bonus?, XP per smelt
// NOTE: if count is less than 1, then it is ignored, and any count... er... counts.
var alloys = [
    ["ingotBronze",     [0, "ingotCopper"],   550,    ["ingotTin",    100, 1],        [null],                  [null],    true,   1],
    ["ingotElectrum",   [0, "ingotGold"],     550,    ["ingotSilver", 100, 1],        [null],                  [null],    true,   1],
    ["ingotSteel",      [0, "ingotIron"],     550,    ["itemCoal",    100, 2],        [null],                  [null],    false,  1],
    ["ingotSteel",      [0, "ingotIron"],     550,    ["itemCharcoal",100, 4],        [null],                  [null],    false,  1],
    ["ingotSteel",      [0, "ingotIron"],     550,    ["coalCoke",    100, 1],        [null],                  [null],    false,  1],
    ["ingotSteel",      [0, "ingotIron"],    1200,    ["coalCoke",    100, 1],        ["dustGunpowder", 3, 1], [null],    true,   1]
];


// Legend: Result, temperature, speed, xp, [[first,crafting,row],[second,crafting,row],[third,crafting,row]]
var recipes = [
    ["minecraft:stone_brick_stairs",  600, 1, 0, [["stone", null, null],["stone", "stone", null],["stone", "stone", "stone"]]]  // Just to get the ball rolling. :P
];


// Now, EnderIO stuff is included here.
if (isModLoaded("EnderIO")){
    
// EnderIO Definitions
    var eioSilicon              =	"EnderIO:itemMaterial:1";
    // EnderAlloy
    var electricalSteel         =	"EnderIO:itemAlloy:0";
    var energeticAlloy          =	"EnderIO:itemAlloy:1";
    var vibrantAlloy            =	"EnderIO:itemAlloy:2";
    var redstoneAlloy           =	"EnderIO:itemAlloy:3";
    var conductiveIron          =	"EnderIO:itemAlloy:4";
    var pulsatingIron           =	"EnderIO:itemAlloy:5";
    var darkSteel               =	"EnderIO:itemAlloy:6";
    var soularium               =	"EnderIO:itemAlloy:7";
    //FusedQuartz   
    var fusedQuartz             =	"EnderIO:blockFusedQuartz:0";
    var quiteClearGlass         =	"EnderIO:blockFusedQuartz:1";
    var enlightenedFusedQuartz	=	"EnderIO:blockFusedQuartz:2";
    var enlightenedClearGlass   =	"EnderIO:blockFusedQuartz:3";
    var darkFusedQuartz         =	"EnderIO:blockFusedQuartz:4";
    var darkClearGlass          =	"EnderIO:blockFusedQuartz:5";
           
    var eioAlloys = [
      [electricalSteel,       [0, "ingotSteel"],          600,    ["itemSilicon", 100, 1],        [null],                    [null],    false,   1],
      [electricalSteel,       [0, "ingotHSLA"],           600,    ["itemSilicon", 100, 1],        [null],                    [null],    false,   1],
      [energeticAlloy,        [0, "ingotGold"],          1000,    ["dustRedstone", 100, 1],       ["dustGlowstone", 100, 1], [null],    false,   1],
      [vibrantAlloy,          [0, "ingotEnergeticAlloy"],1450,    ["pearlEnder", 100, 1],         [null],                    [null],    false,   1],
      [fusedQuartz,           [4, "gemQuartz"],           600,    [null],                         [null],                    [null],    false,   1],
      [quiteClearGlass,       [1, "sand"],                600,    [null],                         [null],                    [null],    false,   1],
      [enlightenedFusedQuartz,[4, "gemQuartz"],           600,    ["dustGlowstone",100, 4],       [null],                    [null],    false,   1],
      [enlightenedClearGlass, [1, "sand"],                600,    ["dustGlowstone",100, 4],       [null],                    [null],    false,   1],
      [darkFusedQuartz,       [4, "gemQuartz"],           600,    ["dyeBlack",100, 4],            [null],                    [null],    false,   1],
      [darkClearGlass,        [1, "sand"],                600,    ["dyeBlack",100, 4],            [null],                    [null],    false,   1],
      [eioSilicon,            [0, "sand"],                800,    ["itemCharcoal",25, 4],         [aluminumFlakes,25, 1],    [null],    false,   1],
      [eioSilicon,            [0, "sand"],                800,    ["itemCoal",25, 1],             [aluminumFlakes,25, 1],    [null],    false,   1],
      [eioSilicon,            [0, "sand"],                800,    ["coalCoke",25, 1],             [aluminumFlakes,25, 1],    [null],    true,    1],
      [conductiveIron,        [0, "ingotIron"],           600,    ["dustRedstone", 100, 1],       [null],                    [null],    false,   1],
      [redstoneAlloy,         [0, "itemSilicon"],         600,    ["dustRedstone", 100, 1],       [null],                    [null],    false,   1],
      [pulsatingIron,         [0, "ingotIron"],          1000,    ["pearlEnder", 100, 1],         [null],                    [null],    false,   1],
      [darkSteel,             [0, "ingotSteel"],         1200,    ["blockObsidian", 100, 1],      [null],                    [null],    false,   1],
      [darkSteel,             [0, "ingotHSLA"],          1200,    ["blockObsidian", 100, 1],      [null],                    [null],    false,   1],
      [soularium,             [0, "soulsand"],           1450,    ["ingotGold", 100, 1],          [null],                    [null],    false,   1],
    ];
    
    alloys.push.apply(alloys,eioAlloys);  // Merge the general alloys with the EnderIO specific ones.
    
}

    
// ------- Assignment Code; don't change anything after this line. -----------





// Code to apply Blast Furnace Recipes.

for (var m in recipes) {
    RotaryCraft.addBlastFurnaceRecipe(recipes[m][0],recipes[m][1],recipes[m][2],recipes[m][3],recipes[m][4]);
}





// Code to apply Blast Furnace alloys.
for (var m in alloys) {   

    if (alloys[m][1][0] < 1) {  // If the main ingredient requirement number is 0, then the number of the main ingredient doesn't matter.
        switch(alloys[m][6]) {  // Check whether or not the recipe supplies a bonus.
            case true: // There is a bonus
            
            if(alloys[m][3][0] != null) { // First argument
                if(alloys[m][4][0] != null) { // Second Argument
                    if (alloys[m][5][0] != null) { // Third Argument
                        RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).input(2, alloys[m][4][0], alloys[m][4][1], alloys[m][4][2]).input(3, alloys[m][5][0], alloys[m][5][1], alloys[m][5][2]).setXP(alloys[m][7]).addBonus();
                    }
                    else { // No third Argument
                    }
                        RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).input(2, alloys[m][4][0], alloys[m][4][1], alloys[m][4][2]).setXP(alloys[m][7]).addBonus();
                }
                else { // No second Argument
                    RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).setXP(alloys[m][7]).addBonus();
                }
            }
            else { // No first argument
                RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).setXP(alloys[m][7]).addBonus();
            }
            
            case false: // No bonus supplied.
            
            if(alloys[m][3][0] != null) { // First argument
                if(alloys[m][4][0] != null) { // Second Argument
                    if (alloys[m][5][0] != null) { // Third Argument
                        RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).input(2, alloys[m][4][0], alloys[m][4][1], alloys[m][4][2]).input(3, alloys[m][5][0], alloys[m][5][1], alloys[m][5][2]).setXP(alloys[m][7]);
                    }
                    else { // No third Argument
                    }
                        RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).input(2, alloys[m][4][0], alloys[m][4][1], alloys[m][4][2]).setXP(alloys[m][7]);
                }
                else { // No second Argument
                    RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).setXP(alloys[m][7]);
                }
            }
            else { // No first argument
                RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).setXP(alloys[m][7]);
            }
            
        }
    }
    else { // There is a specific amount of the main material required.
        switch(alloys[m][6]) { // Check to see if a bonus is provided.
            case true: // Bonus output is provided.
            
            if(alloys[m][3][0] != null) { // First argument
                if(alloys[m][4][0] != null) { // Second Argument
                    if (alloys[m][5][0] != null) { // Third Argument
                        RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).input(2, alloys[m][4][0], alloys[m][4][1], alloys[m][4][2]).input(3, alloys[m][5][0], alloys[m][5][1], alloys[m][5][2]).setXP(alloys[m][7]).required(alloys[m][1][0]).addBonus();
                    }
                    else { // No third Argument
                    }
                        RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).input(2, alloys[m][4][0], alloys[m][4][1], alloys[m][4][2]).setXP(alloys[m][7]).required(alloys[m][1][0]).addBonus();
                }
                else { // No second Argument
                    RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).setXP(alloys[m][7]).required(alloys[m][1][0]).addBonus();
                }
            }
            else { // No first argument
                RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).setXP(alloys[m][7]).required(alloys[m][1][0]).addBonus();
            }
            
            case false: //Bonus output is not provided.
            
            if(alloys[m][3][0] != null) { // First argument
                if(alloys[m][4][0] != null) { // Second Argument
                    if (alloys[m][5][0] != null) { // Third Argument
                        RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).input(2, alloys[m][4][0], alloys[m][4][1], alloys[m][4][2]).input(3, alloys[m][5][0], alloys[m][5][1], alloys[m][5][2]).setXP(alloys[m][7]).required(alloys[m][1][0]);
                    }
                    else { // No third Argument
                    }
                        RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).input(2, alloys[m][4][0], alloys[m][4][1], alloys[m][4][2]).setXP(alloys[m][7]).required(alloys[m][1][0]);
                }
                else { // No second Argument
                    RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).input(1, alloys[m][3][0], alloys[m][3][1],alloys[m][3][2]).setXP(alloys[m][7]).required(alloys[m][1][0]);
                }
            }
            else { // No first argument
                RotaryCraft.addBlastFurnaceAlloying(alloys[m][0], alloys[m][1][1], alloys[m][2]).setXP(alloys[m][7]).required(alloys[m][1][0]);
            }
            
        }
    }

}