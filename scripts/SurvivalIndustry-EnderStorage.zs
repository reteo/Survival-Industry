recipes.removeShaped(<EnderStorage:enderChest>);
recipes.removeShaped(<EnderStorage:enderChest:4096>);
recipes.removeShaped(<EnderStorage:enderPouch>);

val wool = <ore:materialBedding>;
val blazerod = <ore:itemBlazeRod>;
val blazepowder = <ore:itemBlazePowder>;
val obsidian = <ore:blockObsidian>;
val cauldron = <minecraft:cauldron>;
val leather = <ore:materialLeather>;
val chest = <ore:chestWood>;
val cherenkov = <si.core:itemCherenkovsingularity>;

// Ender Storage Gating
recipes.addShaped(<EnderStorage:enderChest>, [[blazerod, wool, blazerod],[obsidian, chest, obsidian],[blazerod, cherenkov, blazerod]]);
recipes.addShaped(<EnderStorage:enderChest:4096>, [[blazerod, wool, blazerod],[obsidian, cauldron, obsidian],[blazerod, cherenkov, blazerod]]);
recipes.addShaped(<EnderStorage:enderPouch>, [[blazepowder, leather, blazepowder],[leather, cherenkov, leather],[blazepowder, wool, blazepowder]]);
