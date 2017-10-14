/* Just Dyes: This mod adds origin-neutral, single-purpose dyes to the game.  This is because: 
 * bonemeal can also grow plants, lapis lazuli is explicitly a mineral, cactus green doubles as
 * sealant in several mods, ink sacs are specific to squids, and cocoa beans are also a food
 * ingredient.  All the other dyes are explicit dyes, any reference to their source can be a
 * reference to the color instead of the source. 
 * 
 * NOTE: It is recommended you include a mod that includes dye-based flowers, such as
 *       "Pam's Weee! Flowers".
 */

// Before we begin, let's set up the creative tab.
addCreativeTab("JustDyes.general","Just Dyes","JustDyes:itemDyeWhite");


// First, to label the colors.
// Name, color index, vanilla dye meta, source to keep (for alternate uses), number to make of vanilla dye
var colors = [
    ["White",    0, 15,  "minecraft:bone",           3],     // Bonemeal
    ["Blue",    11,  4,  "minecraft:lapis_block",    9],     // Lapis Lazuli
    ["Brown",   12,  3,  null,                       null],  // Cocoa Beans
    ["Green",   13,  2,  null,                       null],  // Cactus Green
    ["Black",   15,  0,  null,                       null]]; // Ink Sac

for (var m in colors){
    color = colors[m];
    // First, add the dye item.
    addItem("CoreDye").set({
      name: "itemDye" + color[0],
      stacksize: 64,
      tab: "JustDyes.general",
      colorIndex: color[1]
    });
    
    // Then, assign it to the Ore Dictionary.
    addOreDict("JustDyes:itemDye"+color[0],  "dye"+color[0]);
    addOreDict("JustDyes:itemDye"+color[0],  "dye");
    
    // Onto the recipes.
    removeRecipes( "minecraft:dye:"+color[2]);
    
    addShapelessRecipe("JustDyes:itemDye"+color[0], ["flower"+color[0]]);  // Results in one dye
    addShapelessRecipe("JustDyes:itemDye"+color[0]+"@8", ["flower"+color[0],"minecraft:glass_bottle","dustRedstone"]); //Results in 8 dyes
    
    if (color[3] != null)  // Keep some vanilla recipes for these materials, since they are important.
        addShapelessRecipe("minecraft:dye:"+color[2]+"@"+color[4], [color[3]]); 
}
