// We do not want chest loot to short-circuit the progression.

// Legend: Item to remove, [chests to remove it from (null means all chests)]
(function(){
    loot = [
        // Raw Material
        ["minecraft:iron_ingot",            [null]],
        ["minecraft:gold_ingot",            [null]],
        ["minecraft:redstone",              [null]],
        ["minecraft:diamond",               [null]],
        ["minecraft:emerald",               [null]],
        ["Railcraft:ingot",                 [null]],
        ["Railcraft:cube:2",                [null]],
        // Armor
        ["minecraft:iron_helmet",           [null]],
        ["minecraft:iron_chestplate",       [null]],
        ["minecraft:iron_leggings",         [null]],
        ["minecraft:iron_boots",            [null]],
        ["minecraft:golden_helmet",         [null]],
        ["minecraft:golden_chestplate",     [null]],
        ["minecraft:golden_leggings",       [null]],
        ["minecraft:golden_boots",          [null]],
        ["minecraft:diamond_helmet",        [null]],
        ["minecraft:diamond_chestplate",    [null]],
        ["minecraft:diamond_leggings",      [null]],
        ["minecraft:diamond_boots",         [null]],
        // Tools
        ["minecraft:shears",                [null]],
        ["minecraft:iron_pickaxe",          [null]],
        ["minecraft:iron_axe",              [null]],
        ["minecraft:iron_hoe",              [null]],
        ["minecraft:iron_shovel",           [null]],
        ["minecraft:iron_sword",            [null]],
        ["minecraft:diamond_pickaxe",       [null]],
        ["minecraft:diamond_axe",           [null]],
        ["minecraft:diamond_hoe",           [null]],
        ["minecraft:diamond_shovel",        [null]],
        ["minecraft:diamond_sword",         [null]],
        ["minecraft:golden_axe",            [null]],
        ["minecraft:golden_hoe",            [null]],
        ["minecraft:golden_shovel",         [null]],
        ["minecraft:golden_sword",          [null]],
        ["minecraft:golden_pickaxe",        [null]]
    ];
        
    for (var m in loot){
        var item = loot[m];
        if (item[1][0] == null)
            removeChestLoot(item[0]);
        else removeChestLoot(item[0], item[1]);
    }
})();
