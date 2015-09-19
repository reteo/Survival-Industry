/* There are some recipes that need to happen. */

// Set the oredicted materials.
val iron = <ore:ingotIron>;
val fluix = <ore:crystalFluix>;
val glass = <ore:blockGlass>;
val green = <ore:dyeGreen>;
val enderpearl = <ore:pearlEnder>;
val emerald = <ore:gemEmerald>;
val diamond = <ore:gemDiamond>;
val gold = <ore:ingotGold>;
val redstone = <ore:dustRedstone>;
val black = <ore:dyeBlack>;
val blue = <ore:dyeBlue>;
val obsidian = <ore:blockObsidian>;
val aluminum = <ore:ingotAluminum>;
val leather = <ore:materialLeather>;
val wool = <ore:materialBedding>;
val blazepowder = <ore:itemBlazePowder>;
val blazerod = <ore:itemBlazeRod>;
val chest = <ore:chestWood>;
val enderobsidian = <ore:blockEnderObsidian>;

// Non-oredicted materials might as well be shortened as well.
val stickypiston = <minecraft:sticky_piston>;
val piston = <minecraft:piston>;
val bedrock = <minecraft:bedrock>;
val relicscrap = <fossil:relicScrap>;
val biofossil = <fossil:bioFossil>;
val machineframe = <rftools:machineFrame>;
val paper = <minecraft:paper>;
val cell = <advancedgenetics:cell>;
val book = <minecraft:book>;
val riftflux = <mod_Invasion:riftFlux>;
val water = <minecraft:water_bucket>.transformReplace(<minecraft:bucket>);
val cauldron = <minecraft:cauldron>;

/* First, ElectriCraft and RotaryCraft aluminum ingots don't seem to
   have block recipes.  To fix this, we'll change the block recipe to
   use the Ore Dictionary. */

recipes.removeShaped(<TConstruct:MetalBlock:6>);
recipes.addShaped(<TConstruct:MetalBlock:6>, [[aluminum,aluminum,aluminum],[aluminum,aluminum,aluminum],[aluminum,aluminum,aluminum]]);

/* Next, ore flowers, as by default, are useless outside of ore
   detection.  Let's make dyes out of them... */

// Rose Red
recipes.addShapeless(<minecraft:dye:1>, [<OreFlowers:ore_flowers:3>]);

// Cactus Green
recipes.addShapeless(<minecraft:dye:2>, [<OreFlowers:ore_flowers:1>]);
recipes.addShapeless(<minecraft:dye:2>, [<OreFlowers:ore_flowers3>]);
recipes.addShapeless(<minecraft:dye:2>, [<OreFlowers:ore_flowers2:5>]);

// Purple
recipes.addShapeless(<minecraft:dye:5>, [<OreFlowers:ore_flowers:5>]);
recipes.addShapeless(<minecraft:dye:5>, [<OreFlowers:ore_flowers:6>]);
recipes.addShapeless(<minecraft:dye:5>, [<OreFlowers:ore_flowers2:1>]);

// Light Grey
recipes.addShapeless(<minecraft:dye:7>, [<OreFlowers:ore_flowers>]);
recipes.addShapeless(<minecraft:dye:7>, [<OreFlowers:ore_flowers:2>]);
recipes.addShapeless(<minecraft:dye:7>, [<OreFlowers:ore_flowers:7>]);

// Dandelion Yellow
recipes.addShapeless(<minecraft:dye:11>, [<OreFlowers:ore_flowers:4>]);
recipes.addShapeless(<minecraft:dye:11>, [<OreFlowers:ore_flowers2>]);

// Magenta
recipes.addShapeless(<minecraft:dye:13>, [<OreFlowers:ore_flowers2:2>]);
recipes.addShapeless(<minecraft:dye:13>, [<OreFlowers:ore_flowers2:4>]);
recipes.addShapeless(<minecraft:dye:13>, [<OreFlowers:ore_flowers2:7>]);

// Orange
recipes.addShapeless(<minecraft:dye:14>, [<OreFlowers:ore_flowers2:6>]);


/* Now, one of the features of Survival Industry is the mad science.
   However, it needs to be gated behind the RotaryCraft progression.
   Since the highest material used in RotaryCraft is bedrock, why not
   use that to gate the mad science? */
   
// Before setting recipes, the old ones need to be cleared.
// Applied Energistics
recipes.removeShaped(<appliedenergistics2:tile.BlockInscriber>);

// Fossils & Archaeology
recipes.removeShaped(<fossil:cultureVat>);
recipes.removeShaped(<fossil:analyzer>);

// RFTools
recipes.removeShaped(<rftools:dimensionBuilderBlock>);
recipes.removeShaped(<rftools:dimensionEnscriberBlock>);
recipes.removeShaped(<rftools:matterTransmitterBlock>);
recipes.removeShaped(<rftools:matterReceiverBlock>);

// Advanced Genetics
recipes.removeShaped(<advancedgenetics:basicdictionary>);

// Minechem
recipes.removeShaped(<minechem:minechemAtomicManipulator>);

// Invasion Mod
recipes.removeShaped(<mod_Invasion:phaseCrystal>);
recipes.removeShaped(<mod_Invasion:phaseCrystal>);

// Extra Utilities 
recipes.removeShaped(<ExtraUtilities:decorativeBlock1:1>);

// EnderStorage
recipes.removeShaped(<EnderStorage:enderChest>);
recipes.removeShaped(<EnderStorage:enderChest:4096>);
recipes.removeShaped(<EnderStorage:enderPouch>);

   
// Now, let's make the appropriate gated recipes.

// Applied Energistics Gating
recipes.addShaped(<appliedenergistics2:tile.BlockInscriber>, [[iron, stickypiston, iron], [fluix, null, bedrock], [iron, stickypiston, iron]]);

// Fossils & Archaeology Gating
recipes.addShaped(<fossil:cultureVat>, [[glass, green, glass],[glass, water, glass],[iron, bedrock, iron]]);
recipes.addShaped(<fossil:analyzer>, [[iron, relicscrap, iron],[iron, biofossil, iron],[iron, bedrock, iron]]);

// RFTools Gating
recipes.addShaped(<rftools:dimensionBuilderBlock>, [[enderpearl, emerald, enderpearl],[diamond, machineframe, diamond],[gold, bedrock, gold]]);
recipes.addShaped(<rftools:dimensionEnscriberBlock>, [[redstone, paper, redstone],[black, machineframe, black],[iron, bedrock, iron]]);
recipes.addShaped(<rftools:matterTransmitterBlock>, [[enderpearl, enderpearl, enderpearl],[redstone, machineframe, redstone],[iron, bedrock, iron]]);
recipes.addShaped(<rftools:matterReceiverBlock>, [[iron, bedrock, iron],[redstone, machineframe, redstone],[enderpearl, enderpearl, enderpearl]]);

// Advanced Genetics Gating
recipes.addShaped(<advancedgenetics:basicdictionary>, [[null, cell, null],[cell, book, cell],[null, bedrock, null]]);

// Minechem Gating
recipes.addShaped(<minechem:minechemAtomicManipulator>, [[piston, piston, piston],[piston, bedrock, piston],[piston, piston, piston]]);

// Invasion Mod Gating
recipes.addShaped(<mod_Invasion:phaseCrystal>, [[null, blue, null],[redstone, bedrock, redstone],[null, blue, null]]);
recipes.addShaped(<mod_Invasion:phaseCrystal>, [[null, redstone, null],[blue, bedrock, blue],[null, redstone, null]]);

// Extra Utilities Gating 
recipes.addShaped(<ExtraUtilities:decorativeBlock1:1>, [[riftflux, obsidian, riftflux],[obsidian, enderpearl, obsidian],[riftflux, obsidian, riftflux]]);

// Ender Storage Gating
recipes.addShaped(<EnderStorage:enderChest>, [[blazerod, wool, blazerod],[enderobsidian, chest, enderobsidian],[blazerod, enderpearl, blazerod]]);
recipes.addShaped(<EnderStorage:enderChest:4096>, [[blazerod, wool, blazerod],[enderobsidian, cauldron, enderobsidian],[blazerod, enderpearl, blazerod]]);
recipes.addShaped(<EnderStorage:enderPouch>, [[blazepowder, leather, blazepowder],[leather, enderobsidian, leather],[blazepowder, wool, blazepowder]]);
