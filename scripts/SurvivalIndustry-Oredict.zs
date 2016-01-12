/* The ore dictionary needs to be fixed so that the coal from the fossils mod will
   be useful as coal. */

<ore:fuelCoal>.addAll(<minecraft:coal:2>);
<ore:itemCoal>.add(<minecraft:coal:2>);
<ore:coal>.add(<minecraft:coal:2>);

/* Now to add canola seeds to the possible ingredients for vegetable oil. */

val vegOilSource = <ore:sourceVegetableOil>;
//vegOilSource.add(<RotaryCraft:rotarycraft_item_canola>);
//The above line was commented out because the mod registering the item for which a recipe is being added or removed (RotaryCraft) has requested not to allow this. See your logs for more information, including on who to go to if you have further questions.


/* Next, we want all honey to be useable in harvestcraft recipes. */
<ore:foodHoneydrop>.addAll(<ore:dropHoney>);
<ore:listAllsugar>.addAll(<ore:dropHoney>);


/* Adding an ore dictionary entry for the queen bee, for use in making royal jelly. */
<ore:beeQueen>.add(<Forestry:beeQueenGE>);

