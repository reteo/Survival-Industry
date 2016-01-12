val bedrockdust = <RotaryCraft:rotarycraft_item_powders:4>;
val iron = <ore:ingotIron>;
val quartzblock = <ore:blockQuartz>;

recipes.removeShaped(<enhancedportals:frame>);

recipes.addShaped(<enhancedportals:frame>, [[bedrockdust, iron, bedrockdust],[iron, quartzblock, iron],[bedrockdust, iron, bedrockdust]]);
