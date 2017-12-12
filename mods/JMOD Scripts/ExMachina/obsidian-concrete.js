/* Obsidian concrete is the skyblock alternative to bedrock; when collected using the
   bedrock breaker, obsidian concrete will yield bedrock dust.  */

/* First, create the necessary blocks to cover the steps in the production process. */
// Obsidian Concrete Mix
addItem("CoreItem").set({
    name: "mixObsidianConcrete",
    stacksize: 64,
    tab: "ExMachina.general"
});

// Obsidian Concrete (ExMachina:ObsidianConcrete)
addItem("rotarycraft.DynamicBlock").set({
    name: "ObsidianConcrete",
    stacksize: 64,
    tab: "ExMachina.general",
    fakebedrock: true
});

/* Now to make the appropriate recipes. */

// Combine obsidian dust and gravel to make Obsidian Concrete Mix.
addShapelessRecipe("ExMachina:mixObsidianConcrete", ["Railcraft:dust", "minecraft:gravel"]);

// Superheat in pulse jet furnace to make the final obsidian concrete.
RotaryCraft.addPulseJetRecipe("ExMachina:wetObsidianConcrete", "ExMachina:ObsidianConcrete");
