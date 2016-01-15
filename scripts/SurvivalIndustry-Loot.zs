/* We want to remove loot that can allow a player to bypass progression.
   Ores, ingots, blocks, and dusts are examples of this issue.  While we're at
   it, let's pull items the player can't use... just to be nice. */

/* First, the dungeon chest. */
vanilla.loot.removeChestLoot("dungeonChest", <minecraft:iron_ingot>);
vanilla.loot.removeChestLoot("dungeonChest", <minecraft:redstone>);

/* Next, mineshafts. */
vanilla.loot.removeChestLoot("mineshaftCorridor", <minecraft:iron_ingot>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <minecraft:gold_ingot>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <minecraft:redstone>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <minecraft:diamond>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <minecraft:iron_pickaxe>);

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

