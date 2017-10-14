// We will need a creative tab for Survival Industry food.
addCreativeTab("ProgressiveFood.food","Survival Industry Food","ProgressiveFood:foodJPMorningSupreme");

/* This may require objects to complete correctly; objects can then add to each other
 * to properly tally ingredients and steps in the process. Every item must have both
 * an item ID and an Ore Dictionary entry to universalize recipes. */

function Crop(itemID, oreDict, buff) {
    this.type = "ingredient";
    this.hunger = 1;
    this.saturation = 0.0;
    this.itemID = itemID;
    if (buff != null)
        addItem(itemID, "CoreFood", 64, "ProgressiveFood.food").fooddata(FoodData(this.hunger, this.saturation, false, false).buffdata(buff[0], buff[1], buff[2], buff[3]));
    else
        addItem(itemID, "CoreFood", 64, "ProgressiveFood.food").fooddata(FoodData(this.hunger, this.saturation, false, false));
}

function Meat(itemID, oreDict, buff) {
    this.type = "ingredient";
    this.hunger = 1;
    this.saturation = 0.0;
    this.itemID = itemID;
    if (buff != null)
        addItem(itemID, "CoreFood", 16, "ProgressiveFood.food").fooddata(FoodData(this.hunger, this.saturation, true, false).buffdata(buff[0], buff[1], buff[2], buff[3]));
    else
        addItem(itemID, "CoreFood", 16, "ProgressiveFood.food").fooddata(FoodData(this.hunger, this.saturation, true, false));
}

function Utensil(itemID, oreDict) {
    this.type="utensil";
    this.hunger = 0;
    this.saturation = 0.0;
    this.itemID = itemID;
    addItem(itemID, "CoreItem", 1, "ProgressiveFood.food");
}

// This will only allow shapeless recipes, which is fine with food.  If smelting, only the first item will work.

function Food(itemID, oreDict, process, recipe, buff) {
    // First, define some values.
    var hungerCalc = 0;
    var saturationCalc = 0.5;
    var finalRecipe = [ null ];
    
    // Next calculate the hunger and saturation based on the number of ingredients and the number of steps.  Also, make a recipe out of the oredicts.
    for (i in recipe) { // Every item in the recipe MUST be an object of the "Food", "Crop", "Meat", or "Utensil" class!
        hungerCalc = hungerCalc + recipe[i].hunger;
        saturationCalc = saturationCalc + recipe[i].saturation;
        // if (ingredientType[i] == "utensil")
            // finalRecipe.push(recipe[i].oreDict);  // I need to figure out how to make items in recipes lossless..            
        // else if (ingredientType[i] == "ingredient")
        finalRecipe.push(recipe[i].oreDict);  
    } 
    
    // Now, assign the public-facing values for this object.
    this.type = "ingredient";
    this.itemID = itemID;
    this.hunger = hungerCalc;
    this.saturation = saturationCalc;
    
    // Now to calculate stack size.
    var stacksize = 64 / this.hunger
    
    // Next, create the food in JMOD itself.
    if (buff != null)
        addItem(itemID, "CoreFood", stacksize, "ProgressiveFood.food").fooddata(FoodData(this.hunger, this.saturation, true, false).buffdata(buff[0], buff[1], buff[2], buff[3]));
    else
        addItem(itemID, "CoreFood", stacksize, "ProgressiveFood.food").fooddata(FoodData(this.hunger, this.saturation, true, false));
    
    // Now, let's add the appropriate recipes to the game.
    if (process == "smelt")
        addSmeltingRecipe("ProgressiveFood" + itemID, finalRecipe);
    //else if (process == "mill")
    //    addGrinderRecipe(finalRecipe, "ProgressiveFood" + itemID);
    else if (process == "craft")
        addShapelessRecipe("ProgressiveFood" + itemID, finalRecipe);
    else // if the above did not fit, then something is wrong with the configuration.
        log("ProgressiveFood:" + itemID + ": Invalid Recipe.  Please Fix.");
}

// If things work correctly, this should work.  We'll make bread and toast for example.

//log("FOOD TEST: making wheat");
var wheat = new Crop(wheat, "cropWheat", [ null ]);
//log("FOOD TEST: making bread");
var bread = new Food(bread, "foodBread", "craft", [wheat, wheat, wheat], [ null ]);
//log("FOOD TEST: making toast");
var toast = new Food(toast, "foodToast", "smelt", bread, [ null ]);
