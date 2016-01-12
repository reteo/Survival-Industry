val cherenkov = <si.core:itemCherenkovsingularity>;
val obsidian = <ore:blockObsidian>;

// Extra Utilities 
recipes.removeShaped(<ExtraUtilities:decorativeBlock1:1>);

// Extra Utilities Gating
recipes.addShaped(<ExtraUtilities:decorativeBlock1:1>, [[null, obsidian, null],[obsidian, cherenkov, obsidian],[null, obsidian, null]]);
