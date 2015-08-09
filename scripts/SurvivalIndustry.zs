/* MineTweaker script to fine-tune the Survival Progress mod.

   Survival Progress is a modpack focusing on progressive survival,
   in which you improve your chances of survival through a progression
   of tools and methods that are made available by previous tools and
   methods. */

/* First, this mod's RF generation should be done using RotaryCraft.
   all other engines should be disabled.  This script removes recipes
   for those engines that do not have a disable option in the
   configuration. */
   
recipes.removeShaped(<advancedgenetics:combustiongeneratoridle>);
recipes.removeShaped(<BuildCraft|Builders:machineBlock>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:0>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:1>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:2>);
recipes.removeShaped(<BuildCraft|Core:engineBlock:3>);


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

<BuildCraft|Builders:machineBlock>.addTooltip(format.yellow("This quarry has been disabled"));
<BuildCraft|Builders:machineBlock>.addTooltip(format.yellow("by the Survival Industry modpack."));




/* Next, we want to remove loot that can allow a player to bypass progression.
   Ores, ingots, blocks, and dusts are examples of this issue. */

/* First, the dungeon chest. */
vanilla.loot.removeChestLoot("dungeonChest", <minecraft:iron_ingot>);
vanilla.loot.removeChestLoot("dungeonChest", <minecraft:redstone>);

/* Next, mineshafts. */
vanilla.loot.removeChestLoot("mineshaftCorridor", <minecraft:iron_ingot>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <minecraft:gold_ingot>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <minecraft:redstone>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <minecraft:diamond>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <minecraft:iron_pickaxe>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <Railcraft:tool.steel.shears>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <Railcraft:tool.steel.shovel>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <Railcraft:tool.steel.pickaxe>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <Railcraft:tool.steel.axe>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <Railcraft:ingot>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <Railcraft:cube:2>);

/* Onto desert pyramids. */
vanilla.loot.removeChestLoot("pyramidDesertyChest", <minecraft:iron_ingot>);
vanilla.loot.removeChestLoot("pyramidDesertyChest", <minecraft:gold_ingot>);
vanilla.loot.removeChestLoot("pyramidDesertyChest", <minecraft:diamond>);
vanilla.loot.removeChestLoot("pyramidDesertyChest", <minecraft:emerald>);
/* Next, jungle pyramids. */
vanilla.loot.removeChestLoot("pyramidJungleChest", <minecraft:iron_ingot>);
vanilla.loot.removeChestLoot("pyramidJungleChest", <minecraft:gold_ingot>);
vanilla.loot.removeChestLoot("pyramidJungleChest", <minecraft:diamond>);
vanilla.loot.removeChestLoot("pyramidJungleChest", <minecraft:emerald>);

/* We now move onto Railcraft workshops. */
	/* Nothing to remove. */

/* Strongholds, too. */
	/* Corridors */
vanilla.loot.removeChestLoot("strongholdCorridor", <minecraft:iron_ingot>);
vanilla.loot.removeChestLoot("strongholdCorridor", <minecraft:gold_ingot>);
vanilla.loot.removeChestLoot("strongholdCorridor", <minecraft:diamond>);
vanilla.loot.removeChestLoot("strongholdCorridor", <minecraft:redstone>);
vanilla.loot.removeChestLoot("strongholdCorridor", <minecraft:iron_pickaxe>);
	/* Crossings */
vanilla.loot.removeChestLoot("strongholdCrossing", <minecraft:iron_ingot>);
vanilla.loot.removeChestLoot("strongholdCrossing", <minecraft:gold_ingot>);
vanilla.loot.removeChestLoot("strongholdCrossing", <minecraft:redstone>);
vanilla.loot.removeChestLoot("strongholdCrossing", <minecraft:iron_pickaxe>);

/* And we certainly don't want the village blacksmith ruining the progression! */
vanilla.loot.removeChestLoot("villageBlacksmith", <minecraft:iron_ingot>);
vanilla.loot.removeChestLoot("villageBlacksmith", <minecraft:gold_ingot>);
vanilla.loot.removeChestLoot("villageBlacksmith", <minecraft:diamond>);
vanilla.loot.removeChestLoot("villageBlacksmith", <minecraft:iron_pickaxe>);
vanilla.loot.removeChestLoot("villageBlacksmith", <minecraft:obsidian>);
vanilla.loot.removeChestLoot("villageBlacksmith", <Railcraft:tool.steel.shears>);
vanilla.loot.removeChestLoot("villageBlacksmith", <Railcraft:tool.steel.shovel>);
vanilla.loot.removeChestLoot("villageBlacksmith", <Railcraft:tool.steel.pickaxe>);
vanilla.loot.removeChestLoot("villageBlacksmith", <Railcraft:tool.steel.axe>);
vanilla.loot.removeChestLoot("villageBlacksmith", <Railcraft:ingot>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <Railcraft:cube:2>);

