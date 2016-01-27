import mods.nei.NEI;

val stick = <ore:stickWood>;
val brick = <ore:ingotBrick>;
val flint = <ore:itemFlint>;
val planks = <ore:plankWood>;

/* We don't need Pam's Harvestcraft to handle bees; Forestry does that in spades. */

// Remove all references to the bees.

NEI.hide(<harvestcraft:grubItem:*>);
NEI.hide(<harvestcraft:queenbeeItem:*>);

// Wipe out all combs.

<ore:beeComb>.remove(<harvestcraft:honeycombItem>);
<ore:beeComb>.remove(<harvestcraft:waxcombItem>);
<ore:materialPressedwax>.remove(<harvestcraft:waxcombItem>);
<ore:materialWaxcomb>.remove(<harvestcraft:waxcombItem>);
<ore:materialHoneycomb>.remove(<harvestcraft:honeycombItem>);

<ore:listAllsugar>.remove(<harvestcraft:honeyItem>);
<ore:foodHoneydrop>.remove(<harvestcraft:honeyItem>);
<ore:dropHoney>.remove(<harvestcraft:honeyItem>);

// The beeswax goes away.

<ore:beeComb>.remove(<harvestcraft:beeswaxItem>);
<ore:materialPressedwax>.remove(<harvestcraft:beeswaxItem>);

// Two candleberries making two cotten?  This can't be right...
recipes.removeShapeless(<harvestcraft:cottonItem>,[<harvestcraft:candleberryItem>,<harvestcraft:candleberryItem>]);
