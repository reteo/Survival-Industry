/* Tool Repair: repairs tools in the crafting table and anvil using their key ingredients.
 * Also: broken tools don't disappear. */

// Anvils repair tools using the tool and its key ingredient.
Settings.enhancedAnvilRepair(true);
// Crafting benches repair tools using the tool and its key ingredient.
Settings.craftingGridToolRepair(true);
// When tools break, they just won't work until they're fixed.
Global.preventToolBreaking(true);


// Adds/defines tool materials: name, mininglevel, durability, efficiency(speed), damage vs entities, enchantability, repairmaterial (must be oreDicted)
addToolMaterial( "WOOD", 0, 59, 2.0,0.0,15, "plankWood" );
addToolMaterial( "GOLD", 0, 131, 4.0,0.0,25, "ingotGold" );
addToolMaterial( "STONE", 1, 131, 4.0,0.0, 5, "cobblestone" );
addToolMaterial( "IRON", 4, 250, 6.0,2.0,14, "ingotIron" );
addToolMaterial( "EMERALD", 6,1561, 8.0,3.0,10, "gemDiamond" );

// Adds/defines armor materials: name, base modifier (for durability), armor helmet, chest, leggigns, boots, enchatability, repairmaterial
addArmorMaterial( "CLOTH", 5,1,3,2,1,15,"itemLeather" );
addArmorMaterial( "CHAIN", 15,2,5,4,1,12,"ingotIron" );
addArmorMaterial( "IRON", 15,2,6,5,2, 9,"ingotIron" );
addArmorMaterial( "GOLD", 7,2,5,3,1,25,"ingotGold" );
addArmorMaterial( "DIAMOND", 33,3,8,6,3,10,"gemDiamond" );