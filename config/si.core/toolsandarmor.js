var toolTypes = ["Sword","Hoe","Pickaxe","Axe","Shovel"];
var toolMats = [["Bronze","!Metallurgy"],["Copper","!Metallurgy"],["Steel","!Metallurgy,!Rotarycraft"],["Flint",null],["Aluminum","ElectriCraft"]]
for(var n in toolTypes){
	for(var m in toolMats){
		addItem("tool" + toolTypes[n] + toolMats[m][0],"SITool" + toolTypes[n],1,"si.core").tooldata(
			ToolData(toolMats[m][0].toUpperCase())
		).condition(toolMats[m][1]);

		addShapedStandardRecipe(	"si.core:tool" + toolTypes[n] + toolMats[m][0],
						toolTypes[n].toLowerCase(),
						(toolMats[m][0] != "Flint" ? "ingot" : "item")+toolMats[m][0]
		).condition(toolMats[m][1]);
	}
}

var armorTypes = ["Helmet","Chestplate","Leggings","Boots"];
var armorMats = [	["Copper",	"!Metallurgy"],["Silver",	"!Metallurgy"],["Bronze",	"!Metallurgy"],	["Steel",	"!Metallurgy"],
			["Electrum",	"!Metallurgy"],["Tin",		"!Metallurgy"],["Aluminum",	"!Metallurgy"],	["Platinum",	"!Metallurgy"]];
for(var n in armorTypes){
	for(var m in armorMats){
		addItem("armor" + armorMats[m][0] + armorTypes[n],"SICoreArmor",1,"si.core").armordata(
			ArmorData(armorMats[m][0].toUpperCase(),armorTypes[n].toLowerCase())
		).condition(armorMats[m][1]);

		addShapedStandardRecipe(	"si.core:armor" + armorMats[m][0] + armorTypes[n],armorTypes[n].toLowerCase(),"ingot"+armorMats[m][0])	
			.condition(armorMats[m][1]);
	}
}
