val bedrock = <minecraft:bedrock>;
val piston = <minecraft:piston>;

recipes.removeShaped(<minechem:minechemAtomicManipulator>);

recipes.addShaped(<minechem:minechemAtomicManipulator>, [[piston, piston, piston],[piston, bedrock, piston],[piston, piston, piston]]);
