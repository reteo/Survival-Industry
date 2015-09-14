/* MineTweaker script to fine-tune the Survival Progress mod.

   Survival Industry is a modpack focusing on progressive survival,
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

<rftools:endergenicBlock:0>.addTooltip(format.yellow("All non-RotaryCraft engines"));
<rftools:endergenicBlock:0>.addTooltip(format.yellow("have been disabled by the"));
<rftools:endergenicBlock:0>.addTooltip(format.yellow("Survival Industry modpack."));

<BuildCraft|Builders:machineBlock>.addTooltip(format.yellow("This quarry has been disabled"));
<BuildCraft|Builders:machineBlock>.addTooltip(format.yellow("by the Survival Industry modpack."));

/* Now, the ore dictionary needs to be fixed so that the coal from the fossils mod will
   be useful as coal. */

val coalFuel = <ore:fuelCoal>;
val coalItem = <ore:itemCoal>;
val coalBase = <ore:coal>;

coalFuel.add(<minecraft:coal:2>);
coalItem.add(<minecraft:coal:2>);
coalBase.add(<minecraft:coal:2>);

/* Next, we want to remove loot that can allow a player to bypass progression.
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

/* Now, there are some recipes that need to happen. */

/* First, ElectriCraft aluminum ingots don't seem to have a block recipe.
   This needs to change. */

recipes.addShaped(<TConstruct:MetalBlock:6>, [[<ElectriCraft:electricraft_item_ingots:4>, <ElectriCraft:electricraft_item_ingots:4>, <ElectriCraft:electricraft_item_ingots:4>],  [<ElectriCraft:electricraft_item_ingots:4>, <ElectriCraft:electricraft_item_ingots:4>, <ElectriCraft:electricraft_item_ingots:4>], [<ElectriCraft:electricraft_item_ingots:4>, <ElectriCraft:electricraft_item_ingots:4>, <ElectriCraft:electricraft_item_ingots:4>]]);

/* Next, ore flowers, as by default, are useless outside of ore detection.  Let's make
   dyes out of them... */

recipes.addShapeless(<minecraft:dye:1>, [<OreFlowers:ore_flowers:3>]);
recipes.addShapeless(<minecraft:dye:2>, [<OreFlowers:ore_flowers:1>]);
recipes.addShapeless(<minecraft:dye:2>, [<OreFlowers:ore_flowers3>]);
recipes.addShapeless(<minecraft:dye:2>, [<OreFlowers:ore_flowers2:5>]);
recipes.addShapeless(<minecraft:dye:5>, [<OreFlowers:ore_flowers:5>]);
recipes.addShapeless(<minecraft:dye:5>, [<OreFlowers:ore_flowers:6>]);
recipes.addShapeless(<minecraft:dye:5>, [<OreFlowers:ore_flowers2:1>]);
recipes.addShapeless(<minecraft:dye:7>, [<OreFlowers:ore_flowers>]);
recipes.addShapeless(<minecraft:dye:7>, [<OreFlowers:ore_flowers:2>]);
recipes.addShapeless(<minecraft:dye:7>, [<OreFlowers:ore_flowers:7>]);
recipes.addShapeless(<minecraft:dye:11>, [<OreFlowers:ore_flowers:4>]);
recipes.addShapeless(<minecraft:dye:11>, [<OreFlowers:ore_flowers2>]);
recipes.addShapeless(<minecraft:dye:13>, [<OreFlowers:ore_flowers2:2>]);
recipes.addShapeless(<minecraft:dye:13>, [<OreFlowers:ore_flowers2:4>]);
recipes.addShapeless(<minecraft:dye:13>, [<OreFlowers:ore_flowers2:7>]);
recipes.addShapeless(<minecraft:dye:14>, [<OreFlowers:ore_flowers2:6>]);

/* Now, Thermal Foundation has some very... unusual naming conventions for their
   ores.  Now, while I can understand their reasoning (related to the metals of
   antiquity), the fact is, this modpack is an industrial one including
   ReactorCraft and MineChem.  Those names just don't fit the theme.  I tried
   just leaving them out, but it turns out that these ores are the most compatible
   with other mods.  Let's change the names to their modern equivalents. */

// Mana Infused (Mithril)
game.setLocalization("en_US", "item.thermalfoundation.material.dustMithril.name", "Pulverized Mithril");
game.setLocalization("en_US", "item.thermalfoundation.material.ingotMithril.name", "Mithril Ingot");
game.setLocalization("en_US", "item.thermalfoundation.material.nuggetMithril.name", "Mithril Nugget");
game.setLocalization("en_US", "item.thermalfoundation.material.gearMithril.name", "Mithril Gear");
game.setLocalization("en_US", "tile.thermalfoundation.ore.mithril.name", "Mithril Ore");
game.setLocalization("en_US", "tile.thermalfoundation.storage.mithril.name", "Mithril Block");

// Ferrous Metal (Nickel)
game.setLocalization("en_US", "item.thermalfoundation.material.dustNickel.name", "Pulverized Nickel");
game.setLocalization("en_US", "item.thermalfoundation.material.ingotNickel.name", "Nickel Ingot");
game.setLocalization("en_US", "item.thermalfoundation.material.nuggetNickel.name", "Nickel Nugget");
game.setLocalization("en_US", "item.thermalfoundation.material.gearNickel.name", "Nickel Gear");
game.setLocalization("en_US", "item.thermalfoundation.armor.nickelHelmet.name", "Nickel Helmet");
game.setLocalization("en_US", "item.thermalfoundation.armor.nickelPlate.name", "Nickel Chestplate");
game.setLocalization("en_US", "item.thermalfoundation.armor.nickelLegs.name", "Nickel Leggings");
game.setLocalization("en_US", "item.thermalfoundation.armor.nickelBoots.name", "Nickel Boots");
game.setLocalization("en_US", "item.thermalfoundation.tool.nickelSword.name", "Nickel Sword");
game.setLocalization("en_US", "item.thermalfoundation.tool.nickelShovel.name", "Nickel Shovel");
game.setLocalization("en_US", "item.thermalfoundation.tool.nickelPickaxe.name", "Nickel Pickaxe");
game.setLocalization("en_US", "item.thermalfoundation.tool.nickelAxe.name", "Nickel Axe");
game.setLocalization("en_US", "item.thermalfoundation.tool.nickelHoe.name", "Nickel Hoe");
game.setLocalization("en_US", "item.thermalfoundation.tool.nickelShears.name", "Nickel Shears");
game.setLocalization("en_US", "item.thermalfoundation.tool.nickelFishingRod.name", "Nickel Fishing Rod");
game.setLocalization("en_US", "item.thermalfoundation.tool.nickelSickle.name", "Nickel Sickle");
game.setLocalization("en_US", "item.thermalfoundation.tool.nickelBow.name", "Nickel Reinforced Bow");
game.setLocalization("en_US", "tile.thermalfoundation.ore.nickel.name", "Nickel Ore");
game.setLocalization("en_US", "tile.thermalfoundation.storage.nickel.name", "Nickel Block");
game.setLocalization("en_US", "material.thermalfoundation.nickel", "Nickel");
game.setLocalization("en_US", "item.iguana.tcon.clayBucket.Ferrous.name", "Molten Nickel Clay Bucket");
game.setLocalization("en_US", "item.tconstruct.bucket.Ferrous.name", "Molten Nickel Bucket");
game.setLocalization("en_US", "tile.fluid.molten.ferrous.name", "Molten Nickel");
game.setLocalization("en_US", "LiquidMetal.Ferrous.name", "Molten Nickel");
game.setLocalization("en_US", "fluid.nickel.molten", "Molten Nickel");
game.setLocalization("en_US", "tile.netherores.ore.nickel.name", "Nether Nickel Ore");

// Shiny Metal (Platinum)
game.setLocalization("en_US", "item.thermalfoundation.material.dustPlatinum.name", "Pulverized Platinum");
game.setLocalization("en_US", "item.thermalfoundation.material.ingotPlatinum.name", "Platinum Ingot");
game.setLocalization("en_US", "item.thermalfoundation.material.nuggetPlatinum.name", "Platinum Nugget");
game.setLocalization("en_US", "item.thermalfoundation.material.gearPlatinum.name", "Platinum Gear");
game.setLocalization("en_US", "item.thermalfoundation.armor.platinumHelmet.name", "Platinum Helmet");
game.setLocalization("en_US", "item.thermalfoundation.armor.platinumPlate.name", "Platinum Chestplate");
game.setLocalization("en_US", "item.thermalfoundation.armor.platinumLegs.name", "Platinum Leggings");
game.setLocalization("en_US", "item.thermalfoundation.armor.platinumBoots.name", "Platinum Boots");
game.setLocalization("en_US", "item.thermalfoundation.tool.platinumSword.name", "Platinum Sword");
game.setLocalization("en_US", "item.thermalfoundation.tool.platinumShovel.name", "Platinum Shovel");
game.setLocalization("en_US", "item.thermalfoundation.tool.platinumPickaxe.name", "Platinum Pickaxe");
game.setLocalization("en_US", "item.thermalfoundation.tool.platinumAxe.name", "Platinum Axe");
game.setLocalization("en_US", "item.thermalfoundation.tool.platinumHoe.name", "Platinum Hoe");
game.setLocalization("en_US", "item.thermalfoundation.tool.platinumShears.name", "Platinum Shears");
game.setLocalization("en_US", "item.thermalfoundation.tool.platinumFishingRod.name", "Platinum Fishing Rod");
game.setLocalization("en_US", "item.thermalfoundation.tool.platinumSickle.name", "Platinum Sickle");
game.setLocalization("en_US", "item.thermalfoundation.tool.platinumBow.name", "Platinum Reinforced Bow");
game.setLocalization("en_US", "tile.thermalfoundation.ore.platinum.name", "Platinum Ore");
game.setLocalization("en_US", "tile.thermalfoundation.storage.platinum.name", "Platinum Block");
game.setLocalization("en_US", "material.thermalfoundation.platinum", "Platinum");
game.setLocalization("en_US", "item.iguana.tcon.clayBucket.Shiny.name", "Molten Platinum Clay Bucket");
game.setLocalization("en_US", "item.tconstruct.bucket.Shiny.name", "Molten Platinum Bucket");
game.setLocalization("en_US", "tile.fluid.molten.shiny.name", "Molten Platinum");
game.setLocalization("en_US", "LiquidMetal.Shiny.name", "Molten Platinum");
game.setLocalization("en_US", "fluid.platinum.molten", "Molten Platinum");


