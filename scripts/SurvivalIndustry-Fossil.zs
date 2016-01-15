recipes.removeShaped(<fossil:cultureVat>);
recipes.removeShaped(<fossil:analyzer>);

val relicscrap = <fossil:relicScrap>;
val biofossil = <fossil:bioFossil>;
val iron = <ore:ingotIron>;
val green = <ore:dyeGreen>;
val glass = <ore:blockGlass>;
val bedrock = <minecraft:bedrock>;
val water = <minecraft:water_bucket>.transformReplace(<minecraft:bucket>);

recipes.addShaped(<fossil:cultureVat>, [[glass, green, glass],[glass, water, glass],[iron, bedrock, iron]]);
recipes.addShaped(<fossil:analyzer>, [[iron, relicscrap, iron],[iron, biofossil, iron],[iron, bedrock, iron]]);
