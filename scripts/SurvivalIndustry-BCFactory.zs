import mods.nei.NEI;

recipes.removeShaped(<BuildCraft|Factory:autoWorkbenchBlock:0>);
NEI.hide(<BuildCraft|Factory:autoWorkbenchBlock:0>);
recipes.removeShaped(<BuildCraft|Factory:miningWellBlock:0>);
NEI.hide(<BuildCraft|Factory:miningWellBlock:0>);
recipes.removeShaped(<BuildCraft|Factory:miningWellBlock:0>);
NEI.hide(<BuildCraft|Factory:plainPipeBlock:0>);

<BuildCraft|Factory:miningWellBlock>.addTooltip(format.yellow("The Buildcraft mining well has been disabled"));
<BuildCraft|Factory:miningWellBlock>.addTooltip(format.yellow("by the Survival Industry modpack."));
<BuildCraft|Factory:autoWorkbenchBlock>.addTooltip(format.yellow("The Buildcraft auto workbench has been disabled"));
<BuildCraft|Factory:autoWorkbenchBlock>.addTooltip(format.yellow("by the Survival Industry modpack."));

