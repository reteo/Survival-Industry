//clear original Ztones base block recipes.
removeRecipes("Ztones:auroraBlock");
removeRecipes("Ztones:stoneTile");

// Replace them with our own recipes.
addShapedRecipe("Ztones:auroraBlock@8",[
  ["dyeRed", "minecraft:glass", "dyeBlue" ], 
  ["dyeLightGray","dyeYellow", "dyeGray" ], 
  ["dyeWhite", "minecraft:glass", "dyeBlack" ]]);

addShapedRecipe("Ztones:stoneTile@32",[
  ["minecraft:stone", "Ztones:auroraBlock", "minecraft:stone" ], 
  ["Ztones:auroraBlock", "minecraft:stone", "Ztones:auroraBlock" ],
  ["minecraft:stone", "Ztones:auroraBlock", "minecraft:stone" ]]);

// Now, purge all ztones' recipes and replace them with chisel configurations.
if(isModLoaded("chisel")){
  var ztonesTypes = [
    "azur","bitt","cray","iszm","jelt",
    "korp","kryp","lair","lave","mint",
    "myst","reds","reed","roen","sols",
    "sync","tank","vect","vena","zone",
    "zech","zorg","zome","zion","agon",
    "fort","zkul","zest","zane","zeta",
    "zoea","zyth","ztyl"];
  
// Glaxx will need to be handled separately.
  removeRecipes("Ztones:tile.glaxx:*");
  
  Chisel.addGroup("ztones");
  Chisel.addGroup("glaxx");
  
  Chisel.addVariation("ztones", "Ztones:tile.glaxx");
  Chisel.addVariation("ztones", "Ztones:stoneTile");

// The rest can be handled using a looped script.
  for(var meta = 0; meta < 16; meta++) Chisel.addVariation("glaxx","Ztones:tile.glaxx:"+meta);
  
  for(var type in ztonesTypes){
   Chisel.addVariation("ztones", "Ztones:tile."+ztonesTypes[type]+"Block");
   removeRecipes("Ztones:tile."+ztonesTypes[type]+"Block:*");
   Chisel.addGroup(ztonesTypes[type]);
   for(var meta = 0; meta < 16; meta++) Chisel.addVariation(ztonesTypes  [type],"Ztones:tile."+ztonesTypes[type]+"Block:"+meta);
    }
}

