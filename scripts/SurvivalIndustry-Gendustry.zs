val tin = <ore:ingotTin>;
val glasspane = <ore:paneGlass>;
val bedrock = <minecraft:bedrock>;

recipes.removeShaped(<gendustry:MutagenTank>);

recipes.addShaped(<gendustry:MutagenTank>, [[tin, glasspane, tin],[tin, glasspane, tin],[tin, bedrock, tin]]);
