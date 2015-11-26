/* There are some recipes that need to happen. */

// Set the oredicted materials.
val stone = <ore:stone>;
val iron = <ore:ingotIron>;
val ironbars = <ore:barsIron>;
val copper = <ore:ingotCopper>;
val fluix = <ore:crystalFluix>;
val glass = <ore:blockGlass>;
val glasspane = <ore:paneGlass>;
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
val stick = <ore:stickWood>;
val tin = <ore:ingotTin>;
val cobalt = <ore:ingotCobalt>;
val ardite = <ore:ingotArdite>;
val wood = <ore:logWood>;
val planks = <ore:plankWood>;
val brick = <ore:ingotBrick>;
val flint = <ore:itemFlint>;
val sand = <ore:sand>;



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
val oakplanks = <minecraft:planks>;
val spruceplanks = <minecraft:planks:1>;
val birchplanks = <minecraft:planks:2>;
val jungleplanks = <minecraft:planks:3>;
val acaciaplanks = <minecraft:planks:4>;
val darkoakplanks = <minecraft:planks:5>;
val metallurgymachineframe = <Metallurgy:machine.frame>;
val furnace = <minecraft:furnace>;
val magmacream = <minecraft:magma_cream>;
val bricks = <minecraft:brick_block>;

/* First, ElectriCraft and RotaryCraft aluminum ingots don't seem to
   have block recipes.  To fix this, we'll change the block recipe to
   use the Ore Dictionary. */
/*
recipes.removeShaped(<TConstruct:MetalBlock:6>);
*/
recipes.addShaped(<customitems:aluminum_block>, [[aluminum,aluminum,aluminum],[aluminum,aluminum,aluminum],[aluminum,aluminum,aluminum]]);
recipes.addShapeless(<ElectriCraft:electricraft_item_ingots:4> * 9, [<customitems:aluminum_block>]);

recipes.addShapeless(<minecraft:stick> * 4, [<ore:plankWood>, <ore:plankWood>]);


/*
recipes.addShaped(<TConstruct:MetalBlock>, [[cobalt,cobalt,cobalt],[cobalt,cobalt,cobalt],[cobalt,cobalt,cobalt]]);
recipes.addShaped(<TConstruct:MetalBlock:1>, [[ardite,ardite,ardite],[ardite,ardite,ardite],[ardite,ardite,ardite]]);
*/
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

// Magenta
recipes.addShapeless(<minecraft:dye:13>, [<OreFlowers:ore_flowers2:2>]);
recipes.addShapeless(<minecraft:dye:13>, [<OreFlowers:ore_flowers2:4>]);
recipes.addShapeless(<minecraft:dye:13>, [<OreFlowers:ore_flowers2:7>]);

// Orange
recipes.addShapeless(<minecraft:dye:14>, [<OreFlowers:ore_flowers2:6>]);

// Indian mustard is actually mustard.
recipes.addShapeless(<harvestcraft:mustardseedItem>, [<OreFlowers:ore_flowers2>]);


/* Now, one of the features of Survival Industry is the mad science.
   However, it needs to be gated behind the RotaryCraft progression.
   Since the highest material used in RotaryCraft is bedrock, why not
   use that to gate the mad science? */
   
// Before setting recipes, the old ones need to be cleared.
// Gendustry
recipes.removeShaped(<gendustry:MutagenTank>);

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

// Adding Vanilla Saddles and Horse Armor
recipes.removeShaped(<minecraft:saddle>);
recipes.removeShaped(<minecraft:iron_horse_armor>);
recipes.removeShaped(<minecraft:golden_horse_armor>);
recipes.removeShaped(<minecraft:diamond_horse_armor>);

// Changing Lattices to avoid conflicting with RotaryCraft gears
recipes.removeShaped(<GardenStuff:lattice>);
recipes.removeShaped(<GardenStuff:lattice_wood>);
recipes.removeShaped(<GardenStuff:lattice_wood:1>);
recipes.removeShaped(<GardenStuff:lattice_wood:2>);
recipes.removeShaped(<GardenStuff:lattice_wood:3>);
recipes.removeShaped(<GardenStuff:lattice_wood:4>);
recipes.removeShaped(<GardenStuff:lattice_wood:5>);
   
// Adding craftable End Portal Stones
recipes.removeShaped(<minecraft:end_portal_frame>);

// Now, let's make the appropriate gated recipes.
// Gendustry
recipes.addShaped(<gendustry:MutagenTank>, [[tin, glasspane, tin],[tin, glasspane, tin],[tin, bedrock, tin]]);

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

// Adding Vanilla Saddles
recipes.addShaped(<minecraft:saddle>, [[leather, leather, leather],[leather, leather, leather],[iron, null, iron]]);
recipes.addShaped(<minecraft:iron_horse_armor>, [[iron, iron, iron],[iron, iron, iron],[iron, null, iron]]);
recipes.addShaped(<minecraft:golden_horse_armor>, [[gold, gold, gold],[gold, gold, gold],[gold, null, gold]]);
recipes.addShaped(<minecraft:diamond_horse_armor>, [[diamond, diamond, diamond],[diamond, diamond, diamond],[diamond, null, diamond]]);

// Adding craftable End Portal Stones
recipes.addShaped(<minecraft:end_portal_frame>, [[enderobsidian, null, enderobsidian],[enderobsidian, enderobsidian, enderobsidian],[stone, stone, stone]]);

// Adding changed lattice recipes
recipes.addShaped(<GardenStuff:lattice>, [[null, ironbars, null],[ironbars, iron, ironbars],[null, ironbars, null]]);
recipes.addShaped(<GardenStuff:lattice_wood>, [[null, stick, null],[stick, oakplanks, stick],[null, stick, null]]);
recipes.addShaped(<GardenStuff:lattice_wood:1>, [[null, stick, null],[stick, spruceplanks, stick],[null, stick, null]]);
recipes.addShaped(<GardenStuff:lattice_wood:2>, [[null, stick, null],[stick, birchplanks, stick],[null, stick, null]]);
recipes.addShaped(<GardenStuff:lattice_wood:3>, [[null, stick, null],[stick, jungleplanks, stick],[null, stick, null]]);
recipes.addShaped(<GardenStuff:lattice_wood:4>, [[null, stick, null],[stick, acaciaplanks, stick],[null, stick, null]]);
recipes.addShaped(<GardenStuff:lattice_wood:5>, [[null, stick, null],[stick, darkoakplanks, stick],[null, stick, null]]);

// Adding recipe to make canola oil (vegetable oil)
recipes.addShapeless(<VeganOption:oilVegetable> * 7, [<ore:presserOil>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <RotaryCraft:rotarycraft_item_canola:1>]);
recipes.addShapeless(<VeganOption:oilVegetable>, [<ore:presserOil>, <minecraft:glass_bottle>, <RotaryCraft:rotarycraft_item_canola>]);


/* These definitions were added later. */


// Adding changed wooden shield recipes
recipes.removeShaped(<battlegear2:shield.wood>);
recipes.addShaped(<battlegear2:shield.wood>, [[null, planks, null],[planks, wood, planks],[null, planks, null]]);

/* The Metallurgy "Machine Frame" requires iron, but bronze needs to be made before iron can be mined.  This machine's recipe will need to change. */
recipes.removeShaped(<Metallurgy:machine.frame>);
recipes.addShaped(<Metallurgy:machine.frame>, [[stone, copper, stone],[copper, stone, copper],[stone, copper, stone]]);
recipes.removeShaped(<Metallurgy:crusher>);
recipes.addShaped(<Metallurgy:crusher>, [[copper, copper, copper],[stone, metallurgymachineframe, stone],[stone, furnace, stone]]);

/* Before we get into casting metals to bow nature to our will, we will need more mundane things. Like clay and flint.
   This adds clay-based recipes for the Harvestcraft cooking wares that otherwise require metals, and a flint-based cutting board. */
recipes.addShaped(<harvestcraft:potItem>,[[stick,brick,brick],[null,brick,brick]]);
recipes.addShaped(<harvestcraft:skilletItem>,[[brick,null,null],[null,brick,null],[null,null,stick]]);
recipes.addShaped(<harvestcraft:saucepanItem>,[[brick],[stick]]);
recipes.addShaped(<harvestcraft:cuttingboardItem>,[[flint,null,null],[null,stick,null],[null,null,planks]]);

/* Since steel is needed before diamond can be mined, let's remove dependence on the Nether for the Railcraft blast furnace. */
recipes.removeShaped(<Railcraft:machine.alpha:12>);
recipes.addShaped(<Railcraft:machine.alpha:12>,[[sand,bricks,sand],[bricks,magmacream,bricks],[sand,bricks,sand]]);
