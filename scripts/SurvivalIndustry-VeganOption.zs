val slime = <ore:slimeball>;
val bedrockdust = <RotaryCraft:rotarycraft_item_powders:4>;
val blankhead = <VeganOption:mobHeadBlank>;

// Adding recipe to make canola oil (vegetable oil)
recipes.addShapeless(<VeganOption:oilVegetable> * 7, [<ore:presserOil>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <minecraft:glass_bottle>, <RotaryCraft:rotarycraft_item_canola:1>]);
recipes.addShapeless(<VeganOption:oilVegetable>, [<ore:presserOil>, <minecraft:glass_bottle>, <RotaryCraft:rotarycraft_item_canola>]);

/* The Vegan Option Wither Skull recipe is making nether stars too easy to obtain.  Replacing the black dye with bedrock dust should remove this shortcut. */
recipes.removeShaped(<minecraft:skull:1>);
recipes.addShaped(<minecraft:skull:1>,[[bedrockdust,slime,bedrockdust],[slime,blankhead,slime],[bedrockdust,slime,bedrockdust]]);
