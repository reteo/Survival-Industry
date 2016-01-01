/* The ore dictionary needs to be fixed so that the coal from the fossils mod will
   be useful as coal. */

val coalFuel = <ore:fuelCoal>;
val coalItem = <ore:itemCoal>;
val coalBase = <ore:coal>;
val vegOilSource = <ore:sourceVegetableOil>;

coalFuel.add(<minecraft:coal:2>);
coalItem.add(<minecraft:coal:2>);
coalBase.add(<minecraft:coal:2>);
//vegOilSource.add(<RotaryCraft:rotarycraft_item_canola>);
//The above line was commented out because the mod registering the item for which a recipe is being added or removed (RotaryCraft) has requested not to allow this. See your logs for more information, including on who to go to if you have further questions.

<ore:foodHoneydrop>.addAll(<ore:dropHoney>);
<ore:listAllsugar>.addAll(<ore:dropHoney>);
