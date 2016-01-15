val sand = <ore:sand>;
val bricks = <minecraft:brick_block>;
val magmacream = <minecraft:magma_cream>;

recipes.removeShaped(<Railcraft:machine.alpha:12>);
recipes.addShaped(<Railcraft:machine.alpha:12>,[[sand,bricks,sand],[bricks,magmacream,bricks],[sand,bricks,sand]]);

vanilla.loot.removeChestLoot("villageBlacksmith", <Railcraft:ingot>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <Railcraft:ingot>);
vanilla.loot.removeChestLoot("mineshaftCorridor", <Railcraft:cube:2>);
