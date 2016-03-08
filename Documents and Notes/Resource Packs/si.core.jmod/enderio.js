removeRecipes( "EnderIO:blockStirlingGenerator");
removeRecipes( "EnderIO:blockCombustionGenerator");
removeRecipes( "EnderIO:blockZombieGenerator");
removeRecipes( "EnderIO:blockSolarPanel");
removeRecipes( "EnderIO:blockSolarPanel:1");
removeRecipes( "EnderIO:blockSagMill");
removeRecipes( "EnderIO:blockAlloySmelter");
removeRecipes( "EnderIO:blockCapBank");
removeRecipes( "EnderIO:blockCapBank:1");
removeRecipes( "EnderIO:blockCapBank:2");
removeRecipes( "EnderIO:blockCapBank:3");
removeRecipes( "EnderIO:blockCrafter");
removeRecipes( "EnderIO:blockFarmStation");
removeRecipes( "EnderIO:blockKillerJoe");
removeRecipes( "EnderIO:blockVat");
removeRecipes( "EnderIO:itemMaterial:7");


hideFromNEI("EnderIO:blockStirlingGenerator");
hideFromNEI("EnderIO:blockCombustionGenerator");
hideFromNEI("EnderIO:blockZombieGenerator");
hideFromNEI("EnderIO:blockSolarPanel");
hideFromNEI("EnderIO:blockSolarPanel:1");
hideFromNEI("EnderIO:blockSagMill");
hideFromNEI("EnderIO:blockAlloySmelter");
hideFromNEI("EnderIO:blockCapBank");
hideFromNEI("EnderIO:blockCapBank:1");
hideFromNEI("EnderIO:blockCapBank:2");
hideFromNEI("EnderIO:blockCapBank:3");
hideFromNEI("EnderIO:blockCrafter");
hideFromNEI("EnderIO:blockFarmStation");
hideFromNEI("EnderIO:blockKillerJoe");
hideFromNEI("EnderIO:bucketNutrient_distillation");
hideFromNEI("EnderIO:bucketHootch");
hideFromNEI("EnderIO:bucketRocket_fuel");
hideFromNEI("EnderIO:bucketFire_water");
hideFromNEI("EnderIO:blockNutrient_distillation");
hideFromNEI("EnderIO:blockHootch");
hideFromNEI("EnderIO:blockRocket_fuel");
hideFromNEI("EnderIO:blockFire_water");
hideFromNEI("EnderIO:itemMaterial:7");


hideFromNEI("EnderIO:itemPowderIngot:0");
hideFromNEI("EnderIO:itemPowderIngot:1");
hideFromNEI("EnderIO:itemPowderIngot:2");
hideFromNEI("EnderIO:itemPowderIngot:3");
hideFromNEI("EnderIO:itemPowderIngot:4");
hideFromNEI("EnderIO:itemPowderIngot:8");

removeOreDict("EnderIO:itemPowderIngot:0","dustCoal");
removeOreDict("EnderIO:itemPowderIngot:1","dustIron");
removeOreDict("EnderIO:itemPowderIngot:2","dustGold");
removeOreDict("EnderIO:itemPowderIngot:3","dustCopper");
removeOreDict("EnderIO:itemPowderIngot:4","dustTin");
removeOreDict("EnderIO:itemPowderIngot:8","dustWheat");

removeSmeltingRecipes("EnderIO:itemPowderIngot:1");
removeSmeltingRecipes("EnderIO:itemPowderIngot:2");
removeSmeltingRecipes("EnderIO:itemPowderIngot:3");
removeSmeltingRecipes("EnderIO:itemPowderIngot:4");
removeSmeltingRecipes("EnderIO:itemPowderIngot:8");

var electricalSteel 	=	"EnderIO:itemAlloy:0";
var energeticAlloy  	=	"EnderIO:itemAlloy:1";
var vibrantAlloy  		=	"EnderIO:itemAlloy:2";
var redstoneAlloy  		=	"EnderIO:itemAlloy:3";
var conductiveIron  	=	"EnderIO:itemAlloy:4";
var pulsatingIron	  	=	"EnderIO:itemAlloy:5";
var darkSteel		  	=	"EnderIO:itemAlloy:6";
var soularium		  	=	"EnderIO:itemAlloy:7";

var fusedQuartz			=	"EnderIO:blockFusedQuartz:0";
var qcGlass    			=	"EnderIO:blockFusedQuartz:1";
var efQuartz   			=	"EnderIO:blockFusedQuartz:2";
var eqcGlass   			=	"EnderIO:blockFusedQuartz:3";
var bfQuartz   			=	"EnderIO:blockFusedQuartz:4";
var bqcGlass   			=	"EnderIO:blockFusedQuartz:5";

var eioSilicon			=	"EnderIO:itemMaterial:1";

var aluminumFlakes 		= 	"RotaryCraft:rotarycraft_item_modextracts:27";
var coalCoke 			=	"RotaryCraft:rotarycraft_item_compacts:8";

RotaryCraft.addGrinderRecipe("ingotAluminum",aluminumFlakes);

RotaryCraft.addBlastFurnaceRecipe	(electricalSteel,	 600,1,0,[["ingotSteel","itemSilicon",null],[null,null,null],[null,null,null]]);
RotaryCraft.addBlastFurnaceRecipe	(electricalSteel,	 600,1,0,[["ingotHSLA","itemSilicon",null],[null,null,null],[null,null,null]]);
RotaryCraft.addBlastFurnaceRecipe	(energeticAlloy,	1000,1,0,[["dustRedstone","ingotGold","dustGlowstone"],[null,null,null],[null,null,null]]);
RotaryCraft.addBlastFurnaceRecipe	(vibrantAlloy,		1450,1,0,[["ingotEnergeticAlloy","pearlEnder",null],[null,null,null],[null,null,null]]);
RotaryCraft.addBlastFurnaceRecipe	(conductiveIron,	 600,1,0,[["dustRedstone","ingotIron",null],[null,null,null],[null,null,null]]);
RotaryCraft.addBlastFurnaceRecipe	(redstoneAlloy,		 600,1,0,[["dustRedstone","itemSilicon",null],[null,null,null],[null,null,null]]);
RotaryCraft.addBlastFurnaceRecipe	(pulsatingIron,		1000,1,0,[["pearlEnder","ingotIron",null],[null,null,null],[null,null,null]]);
RotaryCraft.addBlastFurnaceRecipe	(darkSteel,			1200,1,0,[["ingotSteel","blockObsidian",null],[null,null,null],[null,null,null]]);
RotaryCraft.addBlastFurnaceRecipe	(darkSteel,			1200,1,0,[["ingotHSLA","blockObsidian",null],[null,null,null],[null,null,null]]);
RotaryCraft.addBlastFurnaceRecipe	(soularium,			1450,1,0,[["soulsand","ingotGold",null],[null,null,null],[null,null,null]]);

RotaryCraft.addBlastFurnaceAlloying	(fusedQuartz,	"minecraft:quartz"	,600).required(4).setXP(1);
RotaryCraft.addBlastFurnaceAlloying	(qcGlass,		"minecraft:sand"	,600).required(1).setXP(1);
RotaryCraft.addBlastFurnaceAlloying	(efQuartz,		"minecraft:quartz"	,600).required(4).setXP(1).input(1,"minecraft:glowstone_dust",100,4);
RotaryCraft.addBlastFurnaceAlloying	(eqcGlass,		"minecraft:sand"	,600).required(1).setXP(1).input(1,"minecraft:glowstone_dust",100,4);
RotaryCraft.addBlastFurnaceAlloying	(bfQuartz,		"minecraft:quartz"	,600).required(4).setXP(1).input(1,"minecraft:dye:0",100,4);
RotaryCraft.addBlastFurnaceAlloying	(bqcGlass,		"minecraft:sand"	,600).required(1).setXP(1).input(1,"minecraft:dye:0",100,4);
RotaryCraft.addBlastFurnaceAlloying (eioSilicon,	"minecraft:sand"	,800).input(1,aluminumFlakes,25,1).input(1,"minecraft:coal:0",25,1);
RotaryCraft.addBlastFurnaceAlloying (eioSilicon,	"minecraft:sand"	,800).input(1,aluminumFlakes,25,1).input(1,"minecraft:coal:1",25,1);
RotaryCraft.addBlastFurnaceAlloying (eioSilicon,	"minecraft:sand"	,800).input(1,aluminumFlakes,25,1).input(1,coalCoke,25,1).addBonus();


