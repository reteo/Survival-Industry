/* Obsidian concrete is the skyblock alternative to bedrock; when collected using the
   bedrock breaker, obsidian concrete will yield bedrock dust.  */

/* First, create the necessary blocks to cover the steps in the production process. */
// Obsidian Concrete Mix
addBlock("CoreBlock").set({
    name: "mixObsidianConcrete",
    material: "sand",
    tab: "ExMachina.general"
});

// Obsidian Concrete (ExMachina:ObsidianConcrete)
addBlock(".rotarycraft.DynamicBlock").set({
    name: "blockObsidianConcrete",
    stacksize: 64,
    material: "rock",
    tab: "ExMachina.general",
    fakebedrock: true
});

/* Now to make the appropriate recipes. */

// Combine obsidian dust and gravel to make Obsidian Concrete Mix.
addShapelessRecipe("ExMachina:mixObsidianConcrete", ["dustObsidian", "minecraft:gravel"]);

// Superheat in pulse jet furnace to make the final obsidian concrete.
RotaryCraft.addPulseJetRecipe("ExMachina:blockObsidianConcrete", "ExMachina:mixObsidianConcrete");


/* Now, we need to make sure the player knows the point of "Obsidian Concrete."  To do this, 
   we'll simply add a tooltip for both the concrete and the bedrock breaker. */

// addToolTip("ExMachina:blockObsidianConcrete", "info.ExMachina.tooltips.obsidianConcrete");
// addToolTip("RotaryCraft:rotarycraft_item_machine", "info.ExMachina.tooltips.bedrockBreaker");
