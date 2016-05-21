/* This is an expansion to Moh's Mining that adds steel to the metals and
 * mining progression.*/

// Part of this will tweak RotaryCraft Steel tools.
RotaryCraft.patchRotarycraftSteelTools(true);
// First, let's assign colors.
defineColor("STEEL", 64, 64, 64);

// Next, we add the blocks and ingots.
var metals = ["Steel"];

for(var m in metals){
    addMetalIngot(metals[m]);
    addOreDict("MohsMining:ingot" + metals[m], "ingot" + metals[m]);
    addMetalBlock(metals[m]);
    addOreDict("MohsMining:block" + metals[m], "block" + metals[m]);
}

// While we're on it, let's make blocks for ReactorCraft metals.
// Legend: name, hardness, blast resistance, harvest level
if(isModLoaded("ReactorCraft")){
    var metals = ["Pitchblende", "CdInAg"];
    
    for (var m in metals){
        addMetalBlock(metals[m]);
        addOreDict("MohsMining:block" + metals[m], "block" + metals[m]);
        addShapedStandardRecipe("MohsMining:block" + metals[m], "block", "ingot" + metals[m]);
    }
    
    // Pitchblende is actually Uranium, so we need to add that oredict as well.
    addOreDict("MohsMining:blockPitchblende", "blockUranium");
}

// Now, we move onto materials.
// First, for tools.

var toolmat = [
    ["STEEL", 6, 750, 7.0,2.5,18, "ingotSteel"]
];

for (var m in toolmat)
    addToolMaterial(toolmat[m][0],toolmat[m][1],toolmat[m][2],toolmat[m][3],toolmat[m][4],toolmat[m][5],toolmat[m][6]);    

var toolTypes = ["Sword","Hoe","Pickaxe","Axe","Shovel"];
var toolMats = ["Flint","Aluminum","Copper","Bronze","Nickel","Silver","Platinum","Electrum", "Obsidian"];

for(var m in toolMats) for(var n in toolTypes){
	addItem("tool" + toolTypes[n] + toolMats[m], "Tool" + toolTypes[n], 1, "MohsMining.tools").tooldata(ToolData(toolMats[m].toUpperCase()));
	addShapedStandardRecipe("MohsMining:tool" + toolTypes[n] + toolMats[m], toolTypes[n].toLowerCase(), "ingot" + toolMats[m]);
}

// Then, for armor.

var armormat = [
    ["STEEL", 21,3,8,6,3, 12,"ingotSteel"]
];

for (var m in armormat)
    addArmorMaterial(armormat[m][0], armormat[m][1], armormat[m][2], armormat[m][3], armormat[m][4], armormat[m][5], armormat[m][6], armormat[m][7]);

var armorTypes = ["Helmet","Chestplate","Leggings","Boots"];
var armorMats = ["Steel"];

for(var m in armorMats) for(var n in armorTypes) {
	//var logging = ["addShapedStandardRecipe(\"MohsMining:armor" + armorMats[m] + armorTypes[n] + ", " + armorTypes[n].toLowerCase() + ", " + (armorMats[m] != "Obsidian" ? "ingot" : "block") + armorMats[m] + ");"];
    //log(logging);
	addItem("armor" + armorMats[m] + armorTypes[n],"CoreArmor",1,"MohsMining.armor").armordata(ArmorData(armorMats[m].toUpperCase(),armorTypes[n].toLowerCase()));
	addShapedStandardRecipe("MohsMining:armor" + armorMats[m] + armorTypes[n],armorTypes[n].toLowerCase(), "ingot" + armorMats[m]);
}

// If the chisel mod is included, let's add a another chisel to the game.

if(isModLoaded("chisel")){

    // Order of options: Material name, durability, has modes?
    var materials = [
        ["Steel",1500,true]
    ];
    
    for (var m in materials) {
        mat = "ingot" + materials[m][0];
        addItem("toolChisel"+materials[m][0], "ToolChisel", 1, "MohsMining.tools").tooldata(ToolData(materials[m][0].toUpperCase()).durability(materials[m][1]).hasModes(materials[m][2]));
        addShapedRecipe("MohsMining:toolChisel"+materials[m][0], [
            [null,          mat,    null ],
            ["stickWood",   null,   null ],
            [null,          null,   null ]]);
    }
}

/* Now, in addition to the original materials through this jmod, we also want to 
 * tweak the materials used by other mods. */

// Tools

var toolmat = [
    ["RAILCRAFT_STEEL", 6, 750, 7.0,2.5,18, "ingotSteel"],
    ["HSLA", 6, 800, 7.5,3.0,18, "ingotHSLA"],
    ["darkSteel", 6,850, 8.0,3.0, 20, "ingotDarkSteel"],
    ["Scarab", 6 ,900, 8.0,4.0,25, "gemScarab"],
    ["PERIDOT", 6, 1000,7.75,3.75,14, "getPeridot"],
    ["RUBY", 7, 1200, 8.0,3.0,10, "gemRuby"],
    ["SAPPHIRE", 7, 1200, 8.0,3.0,10, "gemSapphire"],
    ["enderutilities.enderalloy.advanced", 7,3000, 10.0, 5.0, 30, "enderAlloyAdvanced"],
    ["BEDROCK", 255, 0, 8.0,3.0,10, "RotaryCraft:ingotBedrock"]
];

for (var m in toolmat)
    addToolMaterial(toolmat[m][0],toolmat[m][1],toolmat[m][2],toolmat[m][3],toolmat[m][4],toolmat[m][5],toolmat[m][6]);

// Armor
var armormat = [
    ["RAILCRAFT_STEEL", 21,3,8,6,3, 12,"ingotSteel"],
    ["HSLA", 21,3,8,6,3, 9,"ingotHSLA"],
    ["darkSteel", 22,3,8,6,3, 20,"ingotDarkSteel"]
];

for (var m in armormat)
    addArmorMaterial(armormat[m][0], armormat[m][1], armormat[m][2], armormat[m][3], armormat[m][4], armormat[m][5], armormat[m][6], armormat[m][7]);
    
// Let's make sure the other mods' ores have the correct harvest levels.
setBlockProperties("appliedenergistics2:tile.OreQuartz") .hl(6);
setBlockProperties("appliedenergistics2:tile.OreQuartzCharged") .hl(6);
setBlockProperties("appliedenergistics2:tile.BlockSkyStone") .hl(6);
setBlockProperties("Forestry:resources") .hl(0,5).hl(1,2).hl(2,1);
setBlockProperties("minechem:tile.oreUranium") .hl(7);
setBlockProperties("ElectriCraft:electricraft_block_ore") .hl(0,2).hl(1,1).hl(2,1).hl(3,4).hl(4,1).hl(5,3);
setBlockProperties("ProjRed|Exploration:projectred.exploration.ore:0") .hl(0,6).hl(1,6).hl(2,5).hl(3,2).hl(4,1).hl(5,1).hl(6,2); 
setBlockProperties("Railcraft:ore") .hl(0,1).hl(1,1).hl(2,6).hl(3,6).hl(4,5).hl(5,5).hl(7,4).hl(8,1).hl(9,2).hl(10,1).hl(11,1);
setBlockProperties("ReactorCraft:reactorcraft_block_fluoriteore") .hl(0,4).hl(1,4).hl(2,4).hl(3,4).hl(4,4).hl(5,4).hl(6,4).hl(7,4);
setBlockProperties("ReactorCraft:reactorcraft_block_ore") .hl(1,6).hl(2,1).hl(3,1).hl(4,1).hl(5,6).hl(6,1).hl(7,2).hl(8,6).hl(9,5);
