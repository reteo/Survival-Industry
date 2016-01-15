
val wood = <ore:logWood>;
val planks = <ore:plankWood>;

recipes.removeShaped(<battlegear2:shield.wood>);
recipes.addShaped(<battlegear2:shield.wood>, [[null, planks, null],[planks, wood, planks],[null, planks, null]]);
