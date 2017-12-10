/* This is a simple JMOD that adds a clay bucket to the game.  This bucket can hold
 * exactly three things: water, milk, and lava.  Perfect for games where iron isn't
 * readily available before lava. */

// Add the creative tab.
addCreativeTab("SimpleClayBucket.general","Survival Industry","SimpleClayBucket:itemClayBucket");

//Create the bucket.  This time, it is a fully-working fluid-handling bucket.

bucketObject = addItem("CoreBucket").set({
    name: "itemClayBucket",
    stacksize: 16,
    tab: "SimpleClayBucket.general",
    fluidlist : ['water','milk','lava']
});

addItem("CoreItem").set({
    name : "itemUnfiredClayBucket", 
    stacksize: 16, 
    tab : "SimpleClayBucket.general"
});

// Make the recipe for the unfired bucket.  Uses the Ore Dictionary.
addShapedRecipe("SimpleClayBucket:itemUnfiredClayBucket", [
  [null,        null,    null ],
  ["itemClay", null,           "itemClay" ],
    [null,        "itemClay",    null ]]);

// Now to smelt the unfired bucket into a final clay bucket.
addSmeltingRecipe("SimpleClayBucket:itemClayBucket", "SimpleClayBucket:itemUnfiredClayBucket")

// Add a special recipe in the case that Pam's HarvestCraft is installed.
if (isModLoaded("harvestcraft")){
    addShapelessRecipe("harvestcraft:freshmilkItem", ["SimpleClayBucket:itemClayBucket.milk"]);
    addShapelessRecipe("harvestcraft:freshwaterItem", ["SimpleClayBucket:itemClayBucket.water"]);
}
