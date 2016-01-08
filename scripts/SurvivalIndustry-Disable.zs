// We want to hide blocked items from NEI.
import mods.nei.NEI;

/* Survival Industry's RF generation should be done using RotaryCraft.
   all other engines should be disabled.  This script removes recipes
   for those engines that do not have a disable option in the
   configuration. */
   
recipes.removeShaped(<advancedgenetics:combustiongeneratoridle>);
NEI.hide(<advancedgenetics:combustiongeneratoridle>);
NEI.hide(<advancedgenetics:combustiongenerator>);
recipes.removeShaped(<BuildCraft|Builders:machineBlock>);
NEI.hide(<BuildCraft|Builders:machineBlock>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:0>);
NEI.hide(<BuildCraft|Core:engineBlock:0>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:1>);
NEI.hide(<BuildCraft|Core:engineBlock:1>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:2>);
NEI.hide(<BuildCraft|Core:engineBlock:2>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:3>);
NEI.hide(<BuildCraft|Core:engineBlock:3>);
recipes.removeShaped(<rftools:endergenicBlock:0>);
NEI.hide(<rftools:endergenicBlock:0>);
recipes.removeShaped(<BuildCraft|Factory:autoWorkbenchBlock:0>);
NEI.hide(<BuildCraft|Factory:autoWorkbenchBlock:0>);
recipes.removeShaped(<BuildCraft|Factory:miningWellBlock:0>);
NEI.hide(<BuildCraft|Factory:miningWellBlock:0>);
recipes.removeShaped(<BuildCraft|Factory:miningWellBlock:0>);
NEI.hide(<BuildCraft|Factory:plainPipeBlock:0>);

/* It's important to notify the player when something's been disabled. */

<advancedgenetics:combustiongeneratoridle>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<advancedgenetics:combustiongeneratoridle>.addTooltip(format.yellow("have been disabled in the"));
<advancedgenetics:combustiongeneratoridle>.addTooltip(format.yellow("Survival Industry modpack."));

<BuildCraft|Core:engineBlock:0>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<BuildCraft|Core:engineBlock:0>.addTooltip(format.yellow("have been disabled by the"));
<BuildCraft|Core:engineBlock:0>.addTooltip(format.yellow("Survival Industry modpack."));

<BuildCraft|Core:engineBlock:1>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<BuildCraft|Core:engineBlock:1>.addTooltip(format.yellow("have been disabled by the"));
<BuildCraft|Core:engineBlock:1>.addTooltip(format.yellow("Survival Industry modpack."));

<BuildCraft|Core:engineBlock:2>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<BuildCraft|Core:engineBlock:2>.addTooltip(format.yellow("have been disabled by the"));
<BuildCraft|Core:engineBlock:2>.addTooltip(format.yellow("Survival Industry modpack."));

<BuildCraft|Core:engineBlock:3>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<BuildCraft|Core:engineBlock:3>.addTooltip(format.yellow("have been disabled by the"));
<BuildCraft|Core:engineBlock:3>.addTooltip(format.yellow("Survival Industry modpack."));

<appliedenergistics2:tile.BlockVibrationChamber>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<appliedenergistics2:tile.BlockVibrationChamber>.addTooltip(format.yellow("have been disabled by the"));
<appliedenergistics2:tile.BlockVibrationChamber>.addTooltip(format.yellow("Survival Industry modpack."));
NEI.hide(<appliedenergistics2:tile.BlockVibrationChamber>);

<extracells:vibrantchamberfluid>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<extracells:vibrantchamberfluid>.addTooltip(format.yellow("have been disabled by the"));
<extracells:vibrantchamberfluid>.addTooltip(format.yellow("Survival Industry modpack."));
NEI.hide(<extracells:vibrantchamberfluid>);

<rftools:endergenicBlock:0>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<rftools:endergenicBlock:0>.addTooltip(format.yellow("have been disabled by the"));
<rftools:endergenicBlock:0>.addTooltip(format.yellow("Survival Industry modpack."));

<BuildCraft|Builders:machineBlock>.addTooltip(format.yellow("The BuildCraft quarry has been disabled"));
<BuildCraft|Builders:machineBlock>.addTooltip(format.yellow("by the Survival Industry modpack."));

<BuildCraft|Factory:miningWellBlock>.addTooltip(format.yellow("The Buildcraft mining well has been disabled"));
<BuildCraft|Factory:miningWellBlock>.addTooltip(format.yellow("by the Survival Industry modpack."));

<BuildCraft|Factory:autoWorkbenchBlock>.addTooltip(format.yellow("The Buildcraft auto workbench has been disabled"));
<BuildCraft|Factory:autoWorkbenchBlock>.addTooltip(format.yellow("by the Survival Industry modpack."));


/* We don't need Pam's Harvestcraft to handle bees; Forestry does that in spades. */

// Royal Jelly is only used to make new queens.  Forestry does that through breeding bees.
recipes.removeShapeless(<harvestcraft:royaljellyItem>);
// NEI.hide(<harvestcraft:royaljellyItem:0>);


// Pam's apiaries removed in favor of Forestry apiaries.
recipes.removeShaped(<harvestcraft:apiary>);
// NEI.hide(<harvestcraft:apiary:0>);

// Pam's queens removed in favor of Forestry queens.
// NEI.hide(<harvestcraft:queenbeeItem:*>);

// Pam's honeycomb removed in favor of Forestry honeycombs.
// NEI.hide(<harvestcraft:honeycombItem>);
<ore:beeComb>.remove(<harvestcraft:honeycombItem>);

// Pam's honey removed in favor of Forestry honey.
// NEI.hide(<harvestcraft:honeyItem>);
<ore:listAllsugar>.remove(<harvestcraft:honeyItem>);
<ore:FoodHoneydrop>.remove(<harvestcraft:honeyItem>);
<ore:dropHoney>.remove(<harvestcraft:honeyItem>);
