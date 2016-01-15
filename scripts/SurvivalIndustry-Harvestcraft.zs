import mods.nei.NEI;

val stick = <ore:stickWood>;
val brick = <ore:ingotBrick>;
val flint = <ore:itemFlint>;
val planks = <ore:plankWood>;

/* We don't need Pam's Harvestcraft to handle bees; Forestry does that in spades. */

// Remove all references to the hives and related nesting grounds.
recipes.removeShaped(<harvestcraft:apiary>);
NEI.hide(<harvestcraft:apiary:0>);


// Remove all references to the bees.
NEI.hide(<harvestcraft:royaljellyItem:0>);
NEI.hide(<harvestcraft:grubItem:*>);
NEI.hide(<harvestcraft:queenbeeItem:*>);

recipes.removeShapeless(<harvestcraft:royaljellyItem>);


// Wipe out all combs.
NEI.hide(<harvestcraft:honeycombItem>);
NEI.hide(<harvestcraft:waxcombItem>);

<ore:beeComb>.remove(<harvestcraft:honeycombItem>);
<ore:beeComb>.remove(<harvestcraft:waxcombItem>);
<ore:materialPressedwax>.remove(<harvestcraft:waxcombItem>);
<ore:materialWaxcomb>.remove(<harvestcraft:waxcombItem>);
<ore:materialHoneycomb>.remove(<harvestcraft:honeycombItem>);

recipes.removeShapeless(<harvestcraft:honeycombchocolatebarItem>);
recipes.addShapeless(<harvestcraft:honeycombchocolatebarItem>, [<ore:toolSaucepan>, <ore:foodChocolatebar>, <ore:beeComb>]);


// Wipe out honey.
NEI.hide(<harvestcraft:honeyItem>);

<ore:listAllsugar>.remove(<harvestcraft:honeyItem>);
<ore:foodHoneydrop>.remove(<harvestcraft:honeyItem>);
<ore:dropHoney>.remove(<harvestcraft:honeyItem>);

/* The honey sandwich and marzipan are still using Pam's honey only.  Fixing. */
recipes.removeShapeless(<harvestcraft:honeysandwichItem>);
recipes.removeShapeless(<harvestcraft:marzipanItem>);

recipes.addShapeless(<harvestcraft:honeysandwichItem>, [<ore:toolCuttingboard>, <ore:listAllnutbutter>, <ore:foodHoneydrop>, <minecraft:bread>]);
recipes.addShapeless(<harvestcraft:marzipanItem>, [<ore:toolMortarandpestle>, <ore:cropAlmond>, <ore:foodHoneydrop>]);


// The beeswax goes away.
NEI.hide(<harvestcraft:beeswaxItem>);

<ore:beeComb>.remove(<harvestcraft:beeswaxItem>);
<ore:materialPressedwax>.remove(<harvestcraft:beeswaxItem>);

// At this point, Forestry should handle all beeswax, honeycomb, and honey recipes for Pam's.

/* --- Now onto the non-bee related parts of Pam's Harvestcraft. --- */

// Indian mustard is actually mustard.
recipes.addShapeless(<harvestcraft:mustardseedItem>, [<OreFlowers:ore_flowers2>]);

// Adding Agrarian recipes for Pam's utensils.  Surprise, stoneware and ceramic cookware exist!  And flint was used as a knife long before iron took over.
recipes.addShaped(<harvestcraft:potItem>,[[stick,brick,brick],[null,brick,brick]]);
recipes.addShaped(<harvestcraft:skilletItem>,[[brick,null,null],[null,brick,null],[null,null,stick]]);
recipes.addShaped(<harvestcraft:saucepanItem>,[[brick],[stick]]);
recipes.addShaped(<harvestcraft:cuttingboardItem>,[[flint,null,null],[null,stick,null],[null,null,planks]]);

// Two candleberries making two cotten?  This can't be right...
recipes.removeShapeless(<harvestcraft:cottonItem>,[<harvestcraft:candleberryItem>,<harvestcraft:candleberryItem>]);
