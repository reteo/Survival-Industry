/* For Survival Industry, we want to remove high-end materials from the sifter drops.
   In this way, we can preserve the mining progression, even when playing a skyblock
   game. */

/* The sifter will be able to produce metals:
   lead, tin, gold, silver, aluminum, copper, platinum, iron, and nickel. */

//exnihilo.removeResult(appliedenergistics2:item.ItemMultiMaterial:2, exnihilo:dust);






var removeSiftRecipes = [
    ["exnihilo:dust", ["appliedenergistics2:item.ItemMultiMaterial:2", "minecraft:blaze_powder", "minecraft:glowstone_dust"]],
    ["minecraft:sand", ["appliedenergistics2:item.ItemMultiMaterial:0", "appliedenergistics2:item.ItemMultiMaterial:1"]],
    ["minecraft:gravel",["minecraft:diamond", "minecraft:emerald"]],
    ["minecraft:soul_sand", ["minecraft:quartz", "minecraft:ghast_tear"]]];

var addCentrifugeRecipes = [
    ["minecraft:dirt", [
	["minecraft:clay", 10],
	["exnihilo:stone", 100],
	["exnihilo:stone", 100],
	["exnihilo:stone", 50],
	["exnihilo:stone", 50],
	["exnihilo:stone", 33],
	["exnihilo:stone", 33],
	["minecraft:wheat_seeds", 7],
	["exnihilo:seed_grass", 7],
	["minecraft:melon_seeds", 3],
	["minecraft:pumpkin_seeds", 3],
	["exnihilo:seed_sugar_cane", 3],
	["exnihilo:seed_carrot", 2],
	["exnihilo:seed_potato", 2],
	["exnihilo:seed_oak", 2],
	["exnihilo:seed_acacia", 1],
	["exnihilo:seed_spruce", 1],
	["exnihilo:seed_birch", 1]]],
    ["minecraft:sand", [
	["EnderIO:itemMaterial", 10], // Silicon
	["VeganOption:saltpeter", 10],
	["minecraft:dye:3", 3], // Cocoa Beans
	["exnihilo:seed_cactus", 3],
	["exnihilo:seed_jungle", 2],
	["exnihilo:spores", 1],
	["aobd:oreCrushedUranium", 5],
	["aobd:oreCrushedCadmium", 5],
	["aobd:oreCrushedIndium", 5],
	["exnihilo:exnihilo.iron_crushed", 20],
	["exnihilo:exnihilo.gold_crushed", 3],
	["exnihilo:exnihilo.copper_crushed", 6],
	["exnihilo:exnihilo.tin_crushed", 6],
	["exnihilo:exnihilo.silver_crushed", 2],
	["exnihilo:exnihilo.lead_crushed", 3],
	["exnihilo:exnihilo.nickel_crushed", 3],
	["exnihilo:exnihilo.platinum_crushed", 1],
	["exnihilo:exnihilo.aluminum_crushed", 13],
	["appliedenergistics2:item.ItemMultiMaterial:0", 17], // Certus Quartz
	["appliedenergistics2:item.ItemMultiMaterial:1", 1]]], // Charged Certus Quartz
    ["minecraft:gravel", [
	["minecraft:flint", 50],
	["minecraft:coal", 13],
	["minecraft:dye:4", 5], // Lapis Lazuli
	["minecraft:diamond", 1],
	["minecraft:emerald", 1],
	["aobd:oreBrokenUranium", 5],
	["aobd:oreBrokenCadmium", 5],
	["aobd:oreBrokenIndium", 5],
	["exnihilo:exnihilo.iron_broken", 20],
	["exnihilo:exnihilo.gold_broken", 3],
	["exnihilo:exnihilo.copper_broken", 6],
	["exnihilo:exnihilo.ender_tin_broken", 6],
	["exnihilo:exnihilo.silver_broken", 2],
	["exnihilo:exnihilo.lead_broken", 3],
	["exnihilo:exnihilo.nickel_broken", 3],
	["exnihilo:exnihilo.platinum_broken", 1],
	["exnihilo:exnihilo.aluminum_broken", 13],
	["Forestry:apatite", 6]]],
    ["exnihilo:dust", [
	["minecraft:dye:15", 20], // Bonemeal
	["minecraft:redstone",13 ],
	["minecraft:gunpowder", 7],
	["minecraft:glowstone_dust", 6],
	["minecraft:blaze_powder", 5],
	["aobd:orePowderedUranium", 5],
	["aobd:orePowderedCadmium", 5],
	["aobd:orePowderedIndium", 5],
	["exnihilo:exnihilo.iron_powdered", 20],
	["exnihilo:exnihilo.gold_powdered", 3],
	["exnihilo:exnihilo.copper_powdered", 6],
	["exnihilo:exnihilo.tin_powdered", 6],
	["exnihilo:exnihilo.silver_powdered", 2],
	["exnihilo:exnihilo.lead_powdered", 3],
	["exnihilo:exnihilo.nickel_powdered", 3],
	["exnihilo:exnihilo.platinum_powdered", 1],
	["exnihilo:exnihilo.aluminum_powdered", 13],
	["appliedenergistics2:item.ItemMultiMaterial:2", 17], // Certus Quartz Dust
	["appliedenergistics2:item.ItemMultiMaterial:45", 13]]], // Sky Stone Dust
    ["minecraft:soul_sand", [
	["minecraft:quartz",100 ], //Nether Quartz
	["minecraft:quartz",33 ], //Nether Quartz
	["minecraft:nether_wart", 5],
	["minecraft:ghast_tear", 2]]],
    ["exnihilo:exnihilo.gravel_nether", [
	["aobd:oreNetherBrokenCadmium", 6],
	["aobd:oreNetherBrokenCadmium", 6],
	["aobd:oreNetherBrokenIndium", 6],
	["exnihilo:exnihilo.nether_iron_broken", 17],
	["exnihilo:exnihilo.nether_gold_broken", 17],
	["exnihilo:exnihilo.nether_copper_broken", 10],
	["exnihilo:exnihilo.nether_nickel_broken", 10]]],
    ["exnihilo:exnihilo.gravel_ender", [
	["exnihilo:exnihilo.ender_tin_broken", 10],
	["exnihilo:exnihilo.ender_silver_broken", 17],
	["exnihilo:exnihilo.ender_lead_broken", 17],
	["exnihilo:exnihilo.ender_platinum_broken", 5]]]
];


/* The centrifuge will be required to produce crystals:
   peridot, quartz (certus and nether), emerald, ruby, sapphire, and diamond. 

   ...along with some other materials:
   blaze powder, glowstone, ghast tears */


/* Functions */

(function (sifterRemovals) {
    for (var i in sifterRemovals) {
	var originBlock = sifterRemovals[i][0];
	var resultList = sifterRemovals[i][1];
	
	for (var j in resultList) {
	    var resultItem = resultList[j];

	    ExNihilo.removeResult(resultItem, originBlock);
	    
	    log("This will remove " + resultItem + " from " + originBlock + " Drops.");
	}
    }
}) (removeSiftRecipes);


(function (centrifugeRecipes) {
    for (var sourceStanza in centrifugeRecipes){
	var sourceBlock = centrifugeRecipes[sourceStanza][0];
	var resultList = centrifugeRecipes[sourceStanza][1];

	centrifugeObject = addCentrifugeRecipe(sourceBlock);
	
	for (var recipeResult in resultList) {
	    var resultItem = resultList[recipeResult][0];
	    var resultChance = resultList[recipeResult][1];

	    centrifugeObject.addOutput(resultItem, resultChance);

	    log("Centrifuge has a " + resultChance + "% chance of dropping " + resultItem + " from " + sourceBlock + ".")
	}
    }
}) (addCentrifugeRecipes);
