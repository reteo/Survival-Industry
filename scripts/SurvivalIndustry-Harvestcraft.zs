import mods.nei.NEI;

val stick = <ore:stickWood>;
val brick = <ore:ingotBrick>;
val flint = <ore:itemFlint>;


/* We don't need Pam's Harvestcraft to handle bees; Forestry does that in spades. */

// Royal Jelly is only used to make new queens.  Forestry does that through breeding bees.
recipes.removeShapeless(<harvestcraft:royaljellyItem>);
NEI.hide(<harvestcraft:royaljellyItem:0>);

// Pam's apiaries removed in favor of Forestry apiaries.
recipes.removeShaped(<harvestcraft:apiary>);
NEI.hide(<harvestcraft:apiary:0>);

// Pam's queens removed in favor of Forestry queens.
NEI.hide(<harvestcraft:queenbeeItem:*>);

// Pam's honeycomb removed in favor of Forestry honeycombs.
NEI.hide(<harvestcraft:honeycombItem>);
<ore:beeComb>.remove(<harvestcraft:honeycombItem>);

// Pam's honey removed in favor of Forestry honey.
NEI.hide(<harvestcraft:honeyItem>);
<ore:listAllsugar>.remove(<harvestcraft:honeyItem>);
<ore:FoodHoneydrop>.remove(<harvestcraft:honeyItem>);
<ore:dropHoney>.remove(<harvestcraft:honeyItem>);

// Indian mustard is actually mustard.
recipes.addShapeless(<harvestcraft:mustardseedItem>, [<OreFlowers:ore_flowers2>]);

/* There's no need for two types of hive and apiary.  Adding recipes to allow Forestry bee products to be used in addition to Pam's bee products. */
recipes.removeShapeless(<harvestcraft:honeycombchocolatebarItem>);
recipes.addShapeless(<harvestcraft:honeycombchocolatebarItem>, [<ore:toolSaucepan>, <ore:foodChocolatebar>, <ore:beeComb>]);

recipes.addShaped(<harvestcraft:potItem>,[[stick,brick,brick],[null,brick,brick]]);
recipes.addShaped(<harvestcraft:skilletItem>,[[brick,null,null],[null,brick,null],[null,null,stick]]);
recipes.addShaped(<harvestcraft:saucepanItem>,[[brick],[stick]]);
recipes.addShaped(<harvestcraft:cuttingboardItem>,[[flint,null,null],[null,stick,null],[null,null,planks]]);

