/* This is a simple JMOD that adds a wooden bucket to the game.  This bucket can hold
 * exactly two things: water and milk.  Perfect for games where farming is important before mining. */

// Add the creative tab.
addCreativeTab("SimpleWoodenBucket.general","Survival Industry","SimpleWoodenBucket:itemWoodenBucket");

//Create the bucket.  This time, it is a fully-working fluid-handling bucket.

bucketObject = addItem("CoreBucket").set({
    name: "itemWoodenBucket",
    stacksize: 16,
    tab: "SimpleWoodenBucket.general",
    fluidlist : ['water','milk']
});

// Make the recipe for the bucket.  Uses the Ore Dictionary.
addShapedRecipe("SimpleWoodenBucket:itemWoodenBucket", [
  [null,        "stickWood",    null ],
  ["plankWood", null,           "plankWood" ],
  [null,        "plankWood",    null ]]);

// Add a special recipe in the case that Pam's HarvestCraft is installed.
if (isModLoaded("harvestcraft")){
    addShapelessRecipe("harvestcraft:freshmilkItem", ["SimpleWoodenBucket:itemWoodenBucket.milk"]);
    addShapelessRecipe("harvestcraft:freshwaterItem", ["SimpleWoodenBucket:itemWoodenBucket.water"]);
}
