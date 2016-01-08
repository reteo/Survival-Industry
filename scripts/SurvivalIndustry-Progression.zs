/* Mining Progression Script */
import mods.nei.NEI;


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

/* *** Remove Grinding of Manganese Dust *** */
mods.appeng.Grinder.removeRecipe(<Metallurgy:base.dust:2>);
// mods.metallurgy.Crusher.removeRecipe(<Metallurgy:base.dust:2>);
// mods.railcraft.RockCrusher.removeRecipe(<aobd:crushedManganese>);

/* *** Remove Smelting of Manganese Ingots *** */
recipes.removeShapeless(<Metallurgy:manganese.ingot>);
furnace.remove(<Metallurgy:manganese.ingot>);


