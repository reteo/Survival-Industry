/* Mod alter is a jmod that adds custom recipes to mods' machines.
   It provides no items or blocks of its own. */

/* The RotaryCraft blast furnace is incredibly useful if set up right.

   It can make alloys in a large number of complex ways, make certain materials
   only have a chance of being consumed, requires specific temperatures for certain results,
   and even allow you to make crafting-table-like recipes that require smelting.*/

if (isModLoaded("RotaryCraft")){
    loadjs("RotaryCraft/BlastFurnace.js");
    loadjs("RotaryCraft/Centrifuge.js");
}

