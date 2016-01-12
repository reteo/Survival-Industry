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
val goldnugget = <ore:nuggetGold>;
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
val redstoneblock = <ore:blockRedstone>;
val slime = <ore:slimeball>;
val quartzblock = <ore:blockQuartz>;
val quartz = <ore:gemQuartz>;
val lapisblock = <ore:blockLapis>;

// Non-oredicted materials might as well be shortened as well.
val stickypiston = <minecraft:sticky_piston>;
val piston = <minecraft:piston>;
val bedrock = <minecraft:bedrock>;
val bedrockdust = <RotaryCraft:rotarycraft_item_powders:4>;


val paper = <minecraft:paper>;

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
val furnace = <minecraft:furnace>;
val magmacream = <minecraft:magma_cream>;
val bricks = <minecraft:brick_block>;
val cherenkov = <si.core:itemCherenkovsingularity>;
val thread = <minecraft:string>;
val arrow = <minecraft:arrow>;
val daylightsensor = <minecraft:daylight_detector>;


// recipes.addShapeless(<minecraft:stick> * 4, [<ore:plankWood>, <ore:plankWood>]);

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

// Adding Vanilla Saddles and Horse Armor
recipes.removeShaped(<minecraft:saddle>);
recipes.removeShaped(<minecraft:iron_horse_armor>);
recipes.removeShaped(<minecraft:golden_horse_armor>);
recipes.removeShaped(<minecraft:diamond_horse_armor>);

// Adding craftable End Portal Stones
recipes.removeShaped(<minecraft:end_portal_frame>);

// Gating The End
recipes.addShaped(<minecraft:end_portal_frame>, [[cherenkov, cherenkov, cherenkov],[cherenkov, riftflux, cherenkov],[cherenkov, cherenkov, cherenkov]]);

/* These definitions were added later. */

// Adding Vanilla Saddles
recipes.addShaped(<minecraft:saddle>, [[leather, leather, leather],[leather, leather, leather],[iron, null, iron]]);
recipes.addShaped(<minecraft:iron_horse_armor>, [[iron, iron, iron],[iron, iron, iron],[iron, null, iron]]);
recipes.addShaped(<minecraft:golden_horse_armor>, [[gold, gold, gold],[gold, gold, gold],[gold, null, gold]]);
recipes.addShaped(<minecraft:diamond_horse_armor>, [[diamond, diamond, diamond],[diamond, diamond, diamond],[diamond, null, diamond]]);

