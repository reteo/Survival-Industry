/* When both Forestry and Pam's HarvestCraft are loaded together, HarvestCraft's
bee products will be replaced with Forestry's bee products.  Make sure Pam's
hives are prevented from loading. */ 

// The list columns are: blockID, oredict, crafting?, smelting?, [tooltip ID, # of lines]
(function(){
    var purges = [
        ["harvestcraft:beehive", [null], false, false, ["forestrybees", 2]],
        ["harvestcraft:apiary", [null], true, false, ["forestrybees", 2]],
        ["harvestcraft:grubItem", [null], false, false, ["forestrybees", 2]],
        ["harvestcraft:queenbeeItem", [null], false, false, ["forestrybees", 2]],
        ["harvestcraft:royaljellyItem", [null], true, false, ["forestrybees", 2]],
        ["harvestcraft:honeycombItem", ["beeComb", "materialHoneycomb"], false, false, ["forestrybees", 2]],
        ["harvestcraft:waxcombItem", ["beeComb", "materialWaxcomb"], false, false, ["forestrybees", 2]],
        ["harvestcraft:honeyItem", ["listAllsugar","foodHoneydrop","dropHoney"], false, false, ["forestrybees", 2]],
        ["harvestcraft:beeswaxItem", ["materialPressedwax"], false, false, ["forestrybees", 2]]
    ];

    // Now for the purge.
    for (var m in purges) {
        var purge = purges[m];
        
        hideFromNEI(purge[0]);
        if (purge[1][0] != null) // Remove ore dictionary entries
            for (i in purge[1])
                removeOreDict(purge[0],purge[1][i]);
        if (purge[2] == true) // Remove crafting bench recipe
            removeRecipes(purge[0]);
        if (purge[3] == true) // Remove furnace recipe
            removeSmeltingRecipes(purge[0]);
        if (purge[4][0] != null) // Add tooltips referencing the removal.
            for (var i in purge[4][1])
                addToolTip(purge[0], ["info.SurvivalIndustry.tooltips." + purge[4][0] + i]);
    }
})();

// Now to do some Ore Dictionary Merging.
(function(){
    var updates = [
        ["Forestry:beeQueenGE", ["beeQueen"]],
        ["beeComb",             ["materialHoneycomb", "materialWaxcomb"]],
        ["dropHoney",           ["foodHoneydrop","listAllSugar"]],
        ["itemBeeswax",         ["materialPressedwax"]]
    ];
    
    for (var m in updates)
        var update = updates[m];
    
        if (update[1][0] != null) // Merge ore dictionary entries
            for (i in update[1])
                addOreDict(update[1][0], update[1][i]);
})();

// Finally, let's remake some recipes to fit the changes.
(function(){
    recipes = [
        ["harvestcraft:marzipanItem", ["toolMortarandpestle","cropAlmond","foodHoneydrop"]],
        ["harvestcraft:honeycombchocolatebarItem", ["toolSaucepan","foodChocolatebar","beeComb"]],
        ["harvestcraft:honeysandwichItem", ["toolCuttingboard","listAllnutbutter","foodHoneydrop","minecraft:bread"]],
        ["harvestcraft:honeylemonlambItem", ["toolBakeware","listAllmuttonraw","cropLemon","foodMustard","foodHoneydrop"]]
    ];
    
    for (m in recipes){
        var recipe = recipes[m];
        
        removeRecipes(recipe[0]);
        addShapelessRecipe(recipe[0], recipe[1]);
    }   
})();
