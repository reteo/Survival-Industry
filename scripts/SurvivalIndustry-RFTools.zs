import mods.nei.NEI;

val bedrockdust = <RotaryCraft:rotarycraft_item_powders:4>;
val iron = <ore:ingotIron>;
val goldnugget = <ore:nuggetGold>;

recipes.removeShaped(<rftools:endergenicBlock:0>);
NEI.hide(<rftools:endergenicBlock:0>);
<rftools:endergenicBlock:0>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<rftools:endergenicBlock:0>.addTooltip(format.yellow("have been disabled by the"));
<rftools:endergenicBlock:0>.addTooltip(format.yellow("Survival Industry modpack."));

recipes.removeShaped(<rftools:machineFrame>);

recipes.addShaped(<rftools:machineFrame>, [[iron, bedrockdust, iron],[goldnugget, null, goldnugget],[iron, bedrockdust, iron]]);
