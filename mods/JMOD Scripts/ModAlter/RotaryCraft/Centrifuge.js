// ModAlter

// These are recipes that add drops to the RotaryCraft centrifuge.

// Legend: Input, Output, chance (in percent)

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
