import mods.nei.NEI;

val cell = <advancedgenetics:cell>;
val book = <minecraft:book>;
val bedrock = <minecraft:bedrock>;

recipes.removeShaped(<advancedgenetics:combustiongeneratoridle>);
NEI.hide(<advancedgenetics:combustiongeneratoridle>);
NEI.hide(<advancedgenetics:combustiongenerator>);

<advancedgenetics:combustiongeneratoridle>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<advancedgenetics:combustiongeneratoridle>.addTooltip(format.yellow("have been disabled in the"));
<advancedgenetics:combustiongeneratoridle>.addTooltip(format.yellow("Survival Industry modpack."));

recipes.removeShaped(<advancedgenetics:basicdictionary>);

recipes.addShaped(<advancedgenetics:basicdictionary>, [[null, cell, null],[cell, book, cell],[null, bedrock, null]]);
