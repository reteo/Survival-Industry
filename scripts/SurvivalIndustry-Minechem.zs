val bedrock = <minecraft:bedrock>;
val bedrockdust = <RotaryCraft:rotarycraft_item_powders:4>;
val piston = <minecraft:piston>;

recipes.removeShaped(<minechem:minechemAtomicManipulator>);

recipes.addShaped(<minechem:minechemAtomicManipulator>, [[piston, piston, piston],[piston, bedrockdust, piston],[piston, piston, piston]]);
