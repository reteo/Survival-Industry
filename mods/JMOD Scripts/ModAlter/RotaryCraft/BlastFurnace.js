// Mod Alter

log("Beginning RotaryCraft Blast Furnace Recipes");

/* Let's make some common metal alloy recipes to encourage use of the blast furnace.
   In addition, this allows recipes that are more true to life; a primary ingredient
   with one or more additive ingredients.  This should conserve the additive element
   significantly, which will encourage blast furnace use even more!
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
    ["minecraft:stone_brick_stairs",  600, 1, 0, [["cobblestone", null, null],["cobblestone", "cobblestone", null],["cobblestone", "cobblestone", "cobblestone"]]]  // Just to get the ball rolling. :P
];


// For an example, let's add EnderIO materials for processing in the blast furnace.
if (isModLoaded("EnderIO")){
    
// EnderIO Definitions
    var eioSilicon              =	"EnderIO:itemMaterial";
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
      [conductiveIron,        [0, "ingotIron"],           600,    ["dustRedstone", 100, 1],       [null],                    [null],    false,   1],
      [redstoneAlloy,         [0, "itemSilicon"],         600,    ["dustRedstone", 100, 1],       [null],                    [null],    false,   1],
      [pulsatingIron,         [0, "ingotIron"],          1000,    ["pearlEnder", 100, 1],         [null],                    [null],    false,   1],
      [darkSteel,             [0, "ingotSteel"],         1200,    ["blockObsidian", 100, 1],      [null],                    [null],    false,   1],
      [darkSteel,             [0, "ingotHSLA"],          1200,    ["blockObsidian", 100, 1],      [null],                    [null],    false,   1],
      [soularium,             [0, "soulsand"],           1450,    ["ingotGold", 100, 1],          [null],                    [null],    false,   1],
    ];
    
    alloys = alloys.concat(eioAlloys); // Merge the general alloys with the EnderIO specific ones.
    
}

// ------- Assignment Code; don't change anything after this line. -----------


// Code to apply Blast Furnace "Crafting" Recipes.
(function (craftingRecipes) {
    for (var m in craftingRecipes) {
        var recipe = craftingRecipes[m];
        RotaryCraft.addBlastFurnaceRecipe(recipe[0],recipe[1],recipe[2],recipe[3],recipe[4]);
    }
})(recipes);

// Code to apply Blast Furnace alloys.
(function (alloyingRecipes) {
    for (var m in alloyingRecipes) {   
        var alloy = alloyingRecipes[m];
        
        var alloyRecipe = RotaryCraft.addBlastFurnaceAlloying(alloy[0], alloy[1][1], alloy[2]);
        
        if (alloy[1][0] > 0) alloyRecipe.required(alloy[1][0]);
        if (alloy[7] > 0) alloyRecipe.setXP(alloy[7]);
        if (alloy[6]) alloyRecipe.addBonus();
        if (alloy[3]) alloyRecipe.input(1, alloy[3][0], alloy[3][1], alloy[3][2]);
        if (alloy[4]) alloyRecipe.input(2, alloy[4][0], alloy[4][1], alloy[4][2]);
        if (alloy[5]) alloyRecipe.input(3, alloy[5][0], alloy[5][1], alloy[5][2]);
        
        //          alloy[] index:
        // 0="output" 
        // 1=[# consumed at a time, 3x3 ingredient]
        // 2=temperature 
        // 3=[# consumed at a time, middle ingredient]
        // 4=[# consumed at a time, top ingredient]
        // 5=[# consumed at a time, bottom ingredient]
        // 6=provides bonus?
        // 7=XP amount provided
        
    }
})(alloys);
