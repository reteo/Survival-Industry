// Ender Utilities
recipes.removeShaped(<enderutilities:enderpart>);
recipes.removeShaped(<enderutilities:enderpart:1>);
recipes.removeShaped(<enderutilities:enderpart:2>);
recipes.removeShaped(<enderutilities:enderpart:20>);
recipes.removeShaped(<enderutilities:enderpart:21>);
recipes.removeShaped(<enderutilities:enderpearlreusable>);
recipes.removeShaped(<enderutilities:enderarrow>);

// Gating Ender Utilities
recipes.addShaped(<enderutilities:enderpart:20> * 3, [[stick, stick, stick],[cherenkov, cherenkov, cherenkov],[stick, stick, stick]]);
recipes.addShaped(<enderutilities:enderpart:21> * 3, [[thread, thread, thread],[leather, cherenkov, leather],[thread, thread, thread]]);
recipes.addShaped(<enderutilities:enderpearlreusable>, [[goldnugget, enderpearl, goldnugget],[cherenkov, redstoneblock, cherenkov],[goldnugget, enderpearl, goldnugget]]);
recipes.addShaped(<enderutilities:enderarrow> * 4, [[null, goldnugget, cherenkov],[null, arrow, goldnugget],[arrow, null, null]]);
recipes.addShaped(<enderutilities:enderpart> * 3, [[iron, iron, iron],[cherenkov, cherenkov, cherenkov],[iron, iron, iron]]);
recipes.addShaped(<enderutilities:enderpart:1> * 3, [[gold, gold, gold],[cherenkov, cherenkov, cherenkov],[iron, iron, iron]]);
recipes.addShaped(<enderutilities:enderpart:2> * 3, [[iron, cherenkov, iron],[gold, diamond, gold],[obsidian, cherenkov, obsidian]]);
