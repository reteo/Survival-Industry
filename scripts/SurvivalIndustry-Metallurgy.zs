import mods.nei.NEI;

val stone = <ore:stone>;
val copper = <ore:ingotCopper>;
val metallurgymachineframe = <Metallurgy:machine.frame>;
val furnaceitem = <minecraft:furnace>;


recipes.removeShaped(<Metallurgy:base.brick>);
recipes.removeShaped(<Metallurgy:base.brick:1>);
recipes.removeShaped(<Metallurgy:base.brick:3>);
recipes.removeShaped(<Metallurgy:base.brick:4>);
recipes.removeShaped(<Metallurgy:base.brick:5>);
recipes.removeShaped(<Metallurgy:base.brick:6>);
recipes.removeShaped(<Metallurgy:base.brick:7>);
recipes.removeShaped(<Metallurgy:precious.brick>);
recipes.removeShaped(<Metallurgy:precious.brick:1>);
recipes.removeShaped(<Metallurgy:precious.brick:2>);
recipes.removeShaped(<Metallurgy:precious.brick:3>);
recipes.removeShaped(<Metallurgy:precious.brick:4>);
recipes.removeShaped(<Metallurgy:vanilla.brick:0>);
recipes.removeShaped(<Metallurgy:vanilla.brick:1>);

/* The Metallurgy "Machine Frame" requires iron, but bronze needs to be made before iron can be mined.  This machine's recipe will need to change. */
recipes.removeShaped(<Metallurgy:machine.frame>);
recipes.addShaped(<Metallurgy:machine.frame>, [[stone, copper, stone],[copper, stone, copper],[stone, copper, stone]]);
recipes.removeShaped(<Metallurgy:crusher>);
recipes.addShaped(<Metallurgy:crusher>, [[copper, copper, copper],[stone, metallurgymachineframe, stone],[stone, furnaceitem, stone]]);

/* *** Remove Manganese from the game *** */

NEI.hide(<Metallurgy:base.ore:2>);
NEI.hide(<Metallurgy:base.block:2>);
NEI.hide(<Metallurgy:base.brick:2>);
NEI.hide(<Metallurgy:manganese.molten>);
NEI.hide(<Metallurgy:base.dust:2>);
NEI.hide(<Metallurgy:manganese.ingot>);
NEI.hide(<Metallurgy:molten.bucket:6>);
NEI.hide(<aobd:crushedManganese>);

/* *** Remove Crafting of Manganese *** */
recipes.removeShaped(<Metallurgy:base.block:2>);
recipes.removeShaped(<Metallurgy:base.brick:2>);



/* *** Remove Smelting of Manganese Ingots *** */
recipes.removeShapeless(<Metallurgy:manganese.ingot>);
furnace.remove(<Metallurgy:manganese.ingot>);

/* *** Remove Grinding of Manganese Dust *** */
mods.appeng.Grinder.removeRecipe(<Metallurgy:base.dust:2>);
// mods.metallurgy.Crusher.removeRecipe(<Metallurgy:base.dust:2>);
// mods.railcraft.RockCrusher.removeRecipe(<aobd:crushedManganese>);

