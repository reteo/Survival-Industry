/* This is a simple JMOD that adds a wooden bucket to the game.  This bucket can hold
 * exactly two things: water and milk.  Perfect for games where farming is important before mining. */

// Add the creative tab.
addCreativeTab("SimpleWoodenBucket.general","Survival Industry","SimpleWoodenBucket:itemWoodenBucket");

// Create the bucket.
addItem("ItemWoodenBucket").set({
  name: "itemWoodenBucket",
  stacksize: 16,
  tab: "SimpleWoodenBucket.general"
});

// Make the recipe for the bucket.  Uses the Ore Dictionary.
addShapedRecipe("SimpleWoodenBucket:itemWoodenBucket", [
  [null,        "stickWood",    null ],
  ["plankWood", null,           "plankWood" ],
  [null,        "plankWood",    null ]]);

// Add a special recipe in the case that Pam's HarvestCraft is installed.
if (isModLoaded("harvestcraft"))
    addShapelessRecipe("harvestcraft:freshmilkItem", ["SimpleWoodenBucket:itemWoodenBucket_milk"]);
