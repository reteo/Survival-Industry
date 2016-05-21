/* Common Ores is a mod that provides common materials used by many mods.
 * This mod includes weapons, tools, and armor.
 * 
 * It is recommended to install Vanilla Ingot Works in order to make the alloys.
 */

// Anvils repair tools using the tool and its key ingredient.
Settings.enhancedAnvilRepair(true);
// Crafting benches repair tools using the tool and its key ingredient.
Settings.craftingGridToolRepair(true);
// When tools break, they just won't work until they're fixed.
Global.preventToolBreaking(true);

// These options show the mining level of tools and blocks in the tooltips.
Settings.showToolHarvestLevels(true);
//Settings.showBlockHarvestLevels(true);

// These options show armor values in the tooltip.
Settings.showArmorValues(true);

// Before we begin, it helps to have a creative mode tab.
addCreativeTab("MohsMining.general","Moh's Mining: Ores and Metals","MohsMining:oreCopper");
addCreativeTab("MohsMining.tools","Moh's Mining: Tools and Weapons","MohsMining:toolPipeLead");
addCreativeTab("MohsMining.armor","Moh's Mining: Armor","MohsMining:armorSilverChestplate");

// First, let's assign colors.

defineColor("RED", 255, 0, 0);
defineColor("GREEN", 0, 255, 0);
defineColor("BLUE", 0, 0,255);

defineColor("ALUMINUM", 192, 192, 192);
defineColor("COPPER", 192, 104, 64);
defineColor("TIN", 128, 128, 128);
defineColor("BRONZE", 192, 88, 0);
defineColor("NICKEL", 221, 210, 168);
defineColor("LEAD", 179, 182, 220);
defineColor("SILVER", 227, 247, 255);
defineColor("PLATINUM", 102, 160, 255);
defineColor("ELECTRUM", 255, 255, 192);
defineColor("OBSIDIAN", 27, 21, 40);

// Now for some generic stuff to build from.
// NOTE: These are REQUIRED for addMetalBlock() and addMetalIngot() to work!
addBlock("blockMetalGeneric", "MetalBlock", 10.0, 10.0, "pickaxe", 1, "iron", "MohsMining.general");
addItem("ingotGeneric", "IngotGeneric", 64, "MohsMining.general");

// Next, we add the blocks and ingots.
var metals = ["Aluminum","Copper","Tin","Bronze","Nickel","Lead","Silver","Platinum","Electrum"];

for(var m in metals){
    addMetalBlock(metals[m]);
    addOreDict("MohsMining:" + "block" + metals[m], "block" + metals[m]);
    addMetalIngot(metals[m]);
    addOreDict("MohsMining:" + "ingot" + metals[m], "ingot" + metals[m]);
}

// Now, we move onto materials.
// First, for tools.
// Legend: name, mininglevel, durability, efficiency(speed), damage vs entities, enchantability, repairmaterial (must be oreDicted)

var toolmat = [
    ["WOOD",        0,  59,   2.0, 0.0, 15, "plankWood"],
    ["STONE",       1,  131,  4.0, 0.0,  5, "cobblestone"],
    ["FLINT",       1,  175,  4.0, 1.0, 10, "itemFlint" ],
    ["GOLD",        1,  80,  10.0, 0.0, 25, "ingotGold"],
    ["SILVER",      1,  100,  6.0, 1.0, 20, "ingotSilver"],
    ["ELECTRUM",    1,  90,   8.0, 0.5, 45, "ingotElectrum"],
    ["TIN",         2,  150,  4.5, 2.0,  4, "ingotTin"],
    ["LEAD",        2,  100,  4.5, 5.0,  0, "ingotLead"],
    ["ALUMINUM",    2,  175,  5.0, 2.5,  4, "ingotAluminum"],
    ["COPPER",      3,  200,  5.0, 1.0,  5, "ingotCopper"],
    ["PLATINUM",    4,  175,  5.0, 2.0, 14, "ingotPlatinum"],
    ["BRONZE",      4,  300,  7.0, 3.0, 14, "ingotBronze"],
    ["IRON",        5,  250,  6.0, 2.0, 14, "ingotIron"],
    ["NICKEL",      5,  250,  5.5, 1.5, 14, "ingotNickel"],
    ["OBSIDIAN",    6,  800,  7.0, 2.5, 15, "blockObsidian"],
    ["EMERALD",     7, 1561,  8.0, 3.0, 10, "gemDiamond"]
];

for (var m in toolmat)
    addToolMaterial(toolmat[m][0],toolmat[m][1],toolmat[m][2],toolmat[m][3],toolmat[m][4],toolmat[m][5],toolmat[m][6]);    

var toolTypes = ["Sword","Hoe","Pickaxe","Axe","Shovel"];
var toolMats = ["Flint","Aluminum","Copper","Bronze","Nickel","Silver","Platinum","Electrum", "Obsidian"];

for(var m in toolMats) for(var n in toolTypes){
	//var logTool = ["MohsMining:tool" + toolTypes[n] + toolMats[m]];
    //log (logTool);
    //var logToolType = [toolTypes[n].toLowerCase()];
    //log (logToolType);
    //var logToolMaterial = [(toolMats[m] != "Flint" ? (toolMats[m] != "Obsidian" ? "ingot" : "block") : "item")+toolMats[m]];
    //log (logToolMaterial);
	addItem("tool" + toolTypes[n] + toolMats[m], "Tool" + toolTypes[n], 1, "MohsMining.tools").tooldata(ToolData(toolMats[m].toUpperCase()));
	addShapedStandardRecipe("MohsMining:tool" + toolTypes[n] + toolMats[m], toolTypes[n].toLowerCase(), (toolMats[m] != "Flint" ? (toolMats[m] != "Obsidian" ? "ingot" : "block") : "item")+toolMats[m]);
}

// What's the point of lead if we can't have a lead pipe?  A very nasty weapon, but doesn't last long.
addItem("toolPipeLead","ToolSword",1,"MohsMining.tools").tooldata(ToolData("LEAD"));;

// Lead Pipe doesn't have a default recipe.  Let's make one.
addShapedRecipe("MohsMining:toolPipeLead", [
  [null, null, "ingotLead"],
  [null, "ingotLead", null],
  ["ingotLead", null, null]]);

    
// Then, for armor.
var armormat = [
    ["TIN",         6, 1, 3, 2, 1, 15, "ingotTin"],
    ["SILVER",      7, 1, 3, 2, 1, 20, "ingotSilver"],
    ["ELECTRUM",    8, 2, 4, 3, 1, 28, "ingotElectrum"],
    ["ALUMINUM",   10, 3, 5, 3, 1, 20, "ingotAluminum"],
    ["COPPER",     12, 3, 5, 4, 1,  9, "ingotCopper"],
    ["PLATINUM",   13, 3, 6, 4, 1, 20, "ingotPlatinum"],
    ["NICKEL",     14, 3, 6, 5, 2, 15, "ingotNickel"],
    ["BRONZE",     18, 3, 6, 5, 2,  9, "ingotBronze"],
    ["OBSIDIAN",   20, 3, 8, 6, 3, 20, "blockObsidian"]
];

for (var m in armormat)
    addArmorMaterial(armormat[m][0], armormat[m][1], armormat[m][2], armormat[m][3], armormat[m][4], armormat[m][5], armormat[m][6], armormat[m][7]);

// Next, the Armor
var armorTypes = ["Helmet","Chestplate","Leggings","Boots"];
var armorMats = ["Tin","Silver","Electrum","Aluminum","Copper","Platinum","Bronze","Nickel","Obsidian"];

for(var m in armorMats) for(var n in armorTypes) {
	//var logging = ["addShapedStandardRecipe(\"MohsMining:armor" + armorMats[m] + armorTypes[n] + ", " + armorTypes[n].toLowerCase() + ", " + (armorMats[m] != "Obsidian" ? "ingot" : "block") + armorMats[m] + ");"];
    //log(logging);
	addItem("armor" + armorMats[m] + armorTypes[n],"CoreArmor",1,"MohsMining.armor").armordata(ArmorData(armorMats[m].toUpperCase(),armorTypes[n].toLowerCase()));
	addShapedStandardRecipe("MohsMining:armor" + armorMats[m] + armorTypes[n],armorTypes[n].toLowerCase(),(armorMats[m] != "Obsidian" ? "ingot" : "block")+armorMats[m]);
}

// If the chisel mod is included, let's add a few additional chisels to the game.
if(isModLoaded("chisel")){

    // Order of options: Material name, durability, has modes?
    var materials = [
        ["Flint",64,false],
        ["Aluminum",128,true],
        ["Copper",256,true],
        ["Platinum",320,true],
        ["Nickel",400,true],
        ["Bronze",512,true]
    ];
    
    for (var m in materials) {
        mat=(materials[m][0] != "Flint" ? "ingot" : "item")+materials[m][0];
        addItem("toolChisel"+materials[m][0], "ToolChisel", 1, "MohsMining.tools").tooldata(ToolData(materials[m][0].toUpperCase()).durability(materials[m][1]).hasModes(materials[m][2]));
        addShapedRecipe("MohsMining:toolChisel"+materials[m][0], [
            [null,          mat,    null ],
            ["stickWood",   null,   null ],
            [null,          null,   null ]]);
    }
}
else log("Chisel mod is not installed; skipping additional chisels.");


// Onto the ores.
var ores = ["Aluminum","Copper","Tin","Nickel","Lead","Silver","Platinum"];

for(var m in ores){
    addBlock("ore" + ores[m], "CoreBlock", 3.0, 5.0, "pickaxe", 1, "rock", "MohsMining.general");
    addOreDict("MohsMining:" + "ore" + ores[m], "ore" + ores[m]);
    addSmeltingRecipe("MohsMining:" + "ingot" + ores[m],"MohsMining:" + "ore" + ores[m]);
}

// Now, we'll set the harvest levels for the ores to more appropriate values.
// Legend: blockID, Harvest level
var blocks = [
    ["minecraft:coal_ore",          1],
    ["minecraft:gold_ore",          1],
    ["MohsMining:oreAluminum",      1],
    ["MohsMining:oreLead",          1],
    ["MohsMining:oreSilver",        1],
    ["MohsMining:oreTin",           1],
    ["MohsMining:oreCopper",        2],
    ["minecraft:redstone_ore",      2],
    ["minecraft:lit_redstone_ore",  2],
    ["MohsMining:orePlatinum",      3],
    ["MohsMining:oreNickel",        4],
    ["minecraft:iron_ore",          4],
    ["minecraft:lapis_ore",         5],
    ["minecraft:obsidian",          5],
    ["minecraft:diamond_ore",       6],
    ["minecraft:emerald_ore",       6],
    ["minecraft:quartz_ore",        6]
];

for (var m in blocks){
    log("Block: "+blocks[m][0]+", Harvest Level: " + blocks[m][1]);
    setBlockProperties(blocks[m][0]) .harvestlevel(blocks[m][1]);
}

// Finally, the ore needs to be spawned in the world.
// The order is "name", vein size, chances per chunk, lower Y level, higher Y level.
ores = [
    ["Alumninum", 7, 24, 5, 64],
    ["Copper", 7, 22, 5, 64],
    ["Tin", 7, 20, 5, 64],
    ["Nickel", 8, 12, 16, 48],
    ["Lead", 8, 8, 8, 32],
    ["Silver", 8, 4, 8, 32],
    ["Platinum", 4, 2, 5, 16]];

for (var m in ores){
    addOreGeneration().blockToGenerate("MohsMining:ore"+ores[m][0]).veinSize(ores[m][1]).chancesPerChunk(ores[m][2]).startY(ores[m][3]).endY(ores[m][4]);
}

// The standard stuff has been set.  Now to add things specific for Survival Industry.

load("SurvivalIndustry.js");