/* Survival Industry's RF generation should be done using RotaryCraft.
   all other engines should be disabled.  This script removes recipes
   for those engines that do not have a disable option in the
   configuration. */
   
recipes.removeShaped(<advancedgenetics:combustiongeneratoridle>);
recipes.removeShaped(<BuildCraft|Builders:machineBlock>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:0>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:1>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:2>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:3>);
recipes.removeShaped(<rftools:endergenicBlock:0>);


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

<extracells:vibrantchamberfluid>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<extracells:vibrantchamberfluid>.addTooltip(format.yellow("have been disabled by the"));
<extracells:vibrantchamberfluid>.addTooltip(format.yellow("Survival Industry modpack."));

<rftools:endergenicBlock:0>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<rftools:endergenicBlock:0>.addTooltip(format.yellow("have been disabled by the"));
<rftools:endergenicBlock:0>.addTooltip(format.yellow("Survival Industry modpack."));



<BuildCraft|Builders:machineBlock>.addTooltip(format.yellow("This quarry has been disabled"));
<BuildCraft|Builders:machineBlock>.addTooltip(format.yellow("by the Survival Industry modpack."));

