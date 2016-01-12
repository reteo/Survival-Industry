recipes.removeShaped(<Sync:Sync_ItemPlaceholder>);

val daylightsensor = <minecraft:daylight_detector>;
val lapisblock = <ore:blockLapis>;
val quartz = <ore:gemQuartz>;
val cherenkov = <si.core:itemCherenkovsingularity>;
val emerald = <ore:gemEmerald>;
val redstoneblock = <ore:blockRedstone>;

recipes.addShaped(<Sync:Sync_ItemPlaceholder>, [[daylightsensor, lapisblock, daylightsensor],[quartz, cherenkov, quartz],[emerald, redstoneblock, emerald]]);
