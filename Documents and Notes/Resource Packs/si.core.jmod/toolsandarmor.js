var toolTypes = ["Sword","Hoe","Pickaxe","Axe","Shovel"];
var toolMats = [];
toolMats.push("Flint");
if(!isModLoaded("Metallurgy")){
	toolMats.push("Bronze");
	toolMats.push("Copper");
	toolMats.push("Steel");
}
if(isModLoaded("ElectriCraft")) toolMats.push("Aluminum");

for(var m in toolMats) for(var n in toolTypes){
	addItem("tool" + toolTypes[n] + toolMats[m],"Tool" + toolTypes[n],1,"si.core.tools").tooldata(		ToolData(toolMats[m].toUpperCase())	);
	addShapedStandardRecipe(	"si.core:tool" + toolTypes[n] + toolMats[m], toolTypes[n].toLowerCase(), (toolMats[m] != "Flint" ? "ingot" : "item")+toolMats[m]);
}

var armorTypes = ["Helmet","Chestplate","Leggings","Boots"];
var armorMats = ["Copper","Silver","Bronze","Steel","Electrum","Tin"];
if(isModLoaded("ElectriCraft")){
	armorMats.push("Aluminum");
	armorMats.push("Platinum");
}
if(!isModLoaded("Metallurgy")) for(var m in armorMats) for(var n in armorTypes) {
	addItem("armor" + armorMats[m] + armorTypes[n],"CoreArmor",1,"si.core.armor").armordata(			ArmorData(armorMats[m].toUpperCase(),armorTypes[n].toLowerCase())	);
	addShapedStandardRecipe(	"si.core:armor" + armorMats[m] + armorTypes[n],armorTypes[n].toLowerCase(),"ingot"+armorMats[m]);
}
