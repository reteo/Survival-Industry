/* When both Forestry and Pam's HarvestCraft are loaded together, HarvestCraft's
bee products will be replaced with Forestry's bee products.  Make sure Pam's
hives are prevented from loading. */ 

// The list columns are: blockID, oredict, crafting?, smelting?, [tooltip ID, # of lines]
(function(){
    var purge = [
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
    for (var m in purge) {
        hideFromNEI(purge[m][0]);
        if (purge[m][1][0] != null) // Remove ore dictionary entries
            for (i in purge[m][1])
                removeOreDict(purge[m][0],purge[m][1][i]);
        if (purge[m][2] == true) // Remove crafting bench recipe
            removeRecipes(purge[m][0]);
        if (purge[m][3] == true) // Remove furnace recipe
            removeSmeltingRecipes(purge[m][0]);
        if (purge[m][4][0] != null) // Add tooltips referencing the removal.
            for (var i in purge[m][4][1])
                addToolTip(purge[m][0], ["info.SurvivalIndustry.tooltips." + purge[m][4][0] + i]);
    }
})();

// Now to do some Ore Dictionary Merging.
(function(){
    var update = [
        ["Forestry:beeQueenGE", ["beeQueen"]],
        ["beeComb", ["materialHoneycomb", "materialWaxcomb"]],
        ["dropHoney", ["foodHoneydrop","listAllSugar"]],
        ["itemBeeswax", ["materialPressedwax"]]
    ];
    
    for (var m in update)
        if (update[m][1][0] != null) // Merge ore dictionary entries
            for (i in update[m][1])
                addOreDict(update[m][1][0], update[m][1][i]);
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
        removeRecipes(recipes[m][0]);
        addShapelessRecipe(recipes[m][0], recipes[m][1]);
    }   
})();
