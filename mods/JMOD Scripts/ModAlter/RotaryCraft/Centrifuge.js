// ModAlter

// These are recipes that add drops to the RotaryCraft centrifuge.

// Legend: Input, Output, chance (in percent)

/* Any changes to the outputs of the centrifuge wipes out its original
 * outputs.  We need to prevent this by ensuring the centrifuge recipe
 * includes all original outputs as well. */

if (!isModLoaded("ExNihilo")) {
    var itemOutput = [
	["sand", [["dustRedstone", 1], ["dustSaltpeter", 10]]]
    ];
    
    if (isModLoaded("EnderIO")){
	
	log("EnderIO Detected!  Adding Centrifuge Recipes!");
	
	var eioSilicon = "EnderIO:itemMaterial";
	
	var eioOutput = [
	    ["sand", [[eioSilicon, 10], ["dustRedstone", 1], ["dustSaltpeter", 10]]]
	];
	
	itemOutput = itemOutput.concat(eioOutput); // Merge the EnderIO items list with the vanilla one.
	
	
    }
    
    
    // Do not edit below this line.
    
    (function (itemRecipes) {
	for (var m in itemRecipes){
	    
	    currentRecipe = itemRecipes[m];
	    
	    recipeInput = currentRecipe[0];
	    extractList = currentRecipe[1];
	    
	    recipe = RotaryCraft.addCentrifugeRecipe(recipeInput);
	    
	    
	    for (var n in extractList) {
		
		currentExtract = extractList[n];
		extractItem = currentExtract[0];
		extractChance = currentExtract[1];
		
		recipe.addOutput(extractItem, extractChance);
		
		log("Centrifuge Recipe Added: "+recipeInput+" -> "+extractItem+" ("+extractChance+"%)");
	    }
	    
	}
	
    })(itemOutput)
}
