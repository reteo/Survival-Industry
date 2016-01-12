recipes.removeShaped(<GardenStuff:lattice>);
recipes.removeShaped(<GardenStuff:lattice_wood>);
recipes.removeShaped(<GardenStuff:lattice_wood:1>);
recipes.removeShaped(<GardenStuff:lattice_wood:2>);
recipes.removeShaped(<GardenStuff:lattice_wood:3>);
recipes.removeShaped(<GardenStuff:lattice_wood:4>);
recipes.removeShaped(<GardenStuff:lattice_wood:5>);

val ironbars = <ore:barsIron>;
val iron = <ore:ingotIron>;
val oakplanks = <minecraft:planks>;
val spruceplanks = <minecraft:planks:1>;
val birchplanks = <minecraft:planks:2>;
val jungleplanks = <minecraft:planks:3>;
val acaciaplanks = <minecraft:planks:4>;
val darkoakplanks = <minecraft:planks:5>;
val stick = <ore:stickWood>;

recipes.addShaped(<GardenStuff:lattice>, [[null, ironbars, null],[ironbars, iron, ironbars],[null, ironbars, null]]);
recipes.addShaped(<GardenStuff:lattice_wood>, [[null, stick, null],[stick, oakplanks, stick],[null, stick, null]]);
recipes.addShaped(<GardenStuff:lattice_wood:1>, [[null, stick, null],[stick, spruceplanks, stick],[null, stick, null]]);
recipes.addShaped(<GardenStuff:lattice_wood:2>, [[null, stick, null],[stick, birchplanks, stick],[null, stick, null]]);
recipes.addShaped(<GardenStuff:lattice_wood:3>, [[null, stick, null],[stick, jungleplanks, stick],[null, stick, null]]);
recipes.addShaped(<GardenStuff:lattice_wood:4>, [[null, stick, null],[stick, acaciaplanks, stick],[null, stick, null]]);
recipes.addShaped(<GardenStuff:lattice_wood:5>, [[null, stick, null],[stick, darkoakplanks, stick],[null, stick, null]]);
