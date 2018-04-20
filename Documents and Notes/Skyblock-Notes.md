# Ex Machina Procedures:

There are several things that will need to be done to effectively integrate RotaryCraft with Ex Nihilo.  When they are complete, they will become the jmod "Ex Machina."

## Fake Bedrock: Obsidian Concrete

Bedrock is a key component to making the advanced technology in RotaryCraft.  We obviously want there to be bedrock available for the bedrock breaker to work.  However, making a bedrock recipe is a bad idea, simply because it can short-circuit the need for the bedrock breaker.

There is a solution, however.  Next to bedrock, the hardest-to-break material in the game is obsidian.  It's obviously not a solution in and of itself, but obsidian can be made into a recipe that makes something tougher: Obsidian concrete.

To make obsidian concrete, we need to combine obsidian with another really touch material: flint.  Flint, by itself, is easy to collect, but is hard and strong enough to be used in various mods grinders that can break down even obsidian.  So, if it were to be chemically combined with obsidian, we might just have something hard enough to be bedrock-ish.

### Steps to make obsidian Concrete:

1. Use the grinder to make obsidian dust.
2. Use the grinder to make flint dust.
3. On the crafting bench, combine obsidian and flint dusts to make obsidian cement mix.
4. On the crafting bench, combine cobsidian cement mix and flint (not flint dust) to make obsidian concrete mix.
5. Use the liquifaction machine to infuse the obsidian concrete mix with water to make obsidian concrete paste.
6. Use the blast furnace at 1200°C to cook the obsidian concrete paste into obsidian concrete.
7: Place the obsidian concrete and use the bedrock breaker to collect bedrock dust.

## Centrifuge: Replaces sieve for higher-tier materials.

Ex Nihlo's foundational purpose is to provide materials that are not normally available in a skyblock game.  However, it does so in a way that requires effort on the part of the player.  The Sieve is the tool used to this end.

RotaryCraft has a machine very similar to the sieve: The centrifuge.  The centrifuge is designed to efficiently separate materials into their component parts using cetripetal force.  It stands to reason that this should be more effective than the sieve, due to the higher gravities exerted on the material being separated.  This efficiency is demonstrated in the fact that, unlike the sieve, the centrifuge can produce multiple items from each block processed, in some cases, including fluids.  It can also be automated.

In order to encourage RotaryCraft use, we will limit the sieve to the lower-tier materials, sufficient only insofar as it allows RotaryCraft to be started.

### Materials to collect through sifting & centrifuging

Each entry shows the name of the material, it's production ratio (1:x), and the percentage chance of the drop happening.  The production ratio is used by Ex Nihilo, and the percentage is important for the Centrifuge.

Dirt:
* Stones (1,1,2,2,3,3) (61.1%)
* Wheat Seeds (15) (6.7%)
* Grass Seeds (15) (6.7%)
* Melon Seeds (32) (3.1%)
* Pumpkin Seeds (32) (3.1%)
* Sugarcane Seeds (32) (3.1%)
* Carrot Seeds (64) (1.5%)
* Potato Seeds (64) (1.5%)
* Oak Seeds (64) (1.5%) - Called an "acorn"
* Acacia Seeds (90) (1.1%)
* Spruce Seeds (90) (1.1%)
* Birch Seeds (90) (1.1%)

Gravel:
* Flint (4) (25%)
* Coal (8) (12.5%)
* Lapis Lazuli (20) (5%)
* Diamond (128) (.8%)
* Emerald (150) (.7%)
* "Broken" Ores

Sand:
* Cocoa Beans (32) (3.1%)
* Cactus Seeds (32) (3.1%)
* Jungle Seeds (64) (1.5%)
* Mycelium Spores (128) (.8%)
* Certus Quartz
* "Crushed" Ores

Dust:
* Bonemeal (5) (20%)
* Redstone (8) (12.5%)
* Gunpowder (15) (6.7%)
* Glowstone Dust (16) (6.3%)
* Blaze Powder (20) (5%)
* Certus Quartz Dust
* Sky Stone Dust
* "Powdered" Ores

Crushed Netherrack:
* Nether "Broken" Ores

Soul Sand:
* Quartz (1,3) (66.7%)
* Nether Wart (20) (5%)
* Ghast Tear (64) (1.6%)

Crushed End Stone:
* Ender "Broken" Ores
 
Unlike the other materials, which are hardcoded into the mod, the ore entries are configured in the Ex Nihilo config file, and can probably be disabled with a significantly-large enough value.

### Low-Tier Materials (available through Ex Nihilo's sifter)

Low-tier materials are those materials that can be mined up to iron and redstone.  This follows the logic that once you can acquire iron and redstone, you can make and power the centrifuge for the purpose of collecting higher-tier materials.  These materials will also be available from the centrifuge.

Dirt:
* No changes

Gravel: 
* Flint
* Coal

Sand:
* Cocoa
* Cactus Seeds
* Jungle Sapling Seeds
* Mycelium Spores
 
Dust:
* Bonemeal
* Redstone
* Gunpowder

Soul Sand:
* Nether Wart
* Ghast Tear
 
All metal ores will be retained at this point, since:
1. In Survival Industry, Iron is the hardest minable metal.
2. In other modpacks using RotaryCaft: if copper isn't available, gold is required to make the steam engine.

### High-Tier Materials (available only through RotaryCraft's centrifuge)

The high-tier materials are limited to the RotaryCraft centrifuge, which will make the centrifuge a requirement in progression through the higher tiers of the game.  This is just good sense, anyways, since the centrifuge can extract multiple items per block, as opposed to the sieve's one item per block.

Gravel:
* Lapis Lazuli
* Diamond
* Emerald

Soul Sand:
* Quartz

Dust:
* Glowstone Dust
* Blaze Powder

### Centrifuge-specific extractions

The RotaryCraft centrifuge is not limited to the materials the sieve is capable of; RotaryCraft can also extract additional materials from blocks using the centrifuge:

Dirt:
* Grass (.06%) - Not grass block, just grass usually seen above such blocks
* Sand (80%)
* Clay (10%)
* Melon Seeds (.13%)
* Wheat Seeds (2%)
* Pumpkin Seeds (.13%)
* Oak sapling (.03%)

Gravel:
* Sand (75%)
* Flint (50%)

Sand:
* Silicon (10%)
* Saltpeter (10%)
* Redstone (1%)

Clay:
* Grass (2.5%)
* Silicon Powder (75%)
* Dirt (100%)
* Iron Flakes (.5%)
* Gold Flakes (.2%)
* Water (40%) - Fluid goes into centrifuge's reservoir for piping.

This alone means that you can make significantly more progress using the centrifuge than the sieve, so making it as soon as possible is preferable.

### Additions to the sieve

To make RotaryCraft feasable in skyblock, we also need to add an additional drop (in both sieve and centrifuge) for dirt: Canola seeds.  This will make it possible to grow enough canola to make a centrifuge possible.  To prevent this from becoming the main canola source, we'll keep canola production to a small percentage... perhaps 1%.  That will ensure that farming canola remains the most prolific source in the game.

## Grinder and Extractor: Processing ore gravels, ore sands, and ore dusts.

The grinder and extractor are two tiers of ore processing for RotaryCraft.  Each can produce multiple ores for each processed block.  In Ex Nihilo, ore blocks are not used, but ore gravels, ore sands, and ore dusts are, as well as the broken, crushed, and powdered ores sifted from them.

The Grinder can add recipes as needed.  We simply need to add recipes for each ore block and ore item, and they will be ground down to flakes.

However, the tricky part is where the Extractor is concerned.  The extractor does not care about recipes; everything it extracts from are based on the ore dictionary entries associated with the ores.

This sounds simple, but can open the door for infinite duplication exploits; drawers will convert items of one oredict entry to another, so, for example, you're not storing 5 different types of copper ingot.

Why is this an exploit?  Because once you've sieved gravel, and got broken ore, you can then combine it into ore gravel, which can be hammered into crushed ore.  Then you place the crushed ore in a drawer assigned to broken ore.  If the crushed ore and the broken ore have the same oredict, they will stack as broken ore, allowing the ore to be crushed again.  And again.  And again, as many times as necessary to have as many stacks of ore as you need.

*Solution:* We create recipes using 7 broken ores that will make one ore block.  This works, because the ore block will not be processed by the sieve, and will return to 7 broken ores when crushed with a hammer, so this cannot be exploited.  This has the downside that the extractor might be less-efficient than the hammer, seeing as how the average ore processing of the extractor is 5x.  It does, however, provide a benefit when dealing with ores that have a secondary material... such as tungsten or aluminum powder.

Either way. we can add grinder recipes for broken and crushed ores, as well as ore gravel and ore sand, so processing can still proceed apace.

# New Centrifuge System

Reika has decided that the centrifuge will not allow more than 9 drops, which means that 2-step sifting will have to happen for the Centrifuge to work.  As such, we'll break things down as follows:

Dirt:

* Stones (as normal)
* Crop Seeds
  * Wheat Seeds
  * Melon Seeds
  * Pumpkin Seeds
  * Sugarcane Seeds
  * Carrot Seeds
  * Potato Seeds
* Wild Seeds (trees, grass, mycelium, etc.)
  * Grass Seeds
  * Oak Seeds
  * Acacia Seeds
  * Spruce Seeds
  * Birch Seeds
* Fossils
  * Amber
  * Relic
  * Bio Fossil
  * Plant Fossil

Sand:
* (EnderIO) Silicon
* Saltpeter
* Cocoa Beans
* Crushed Soft Metals
  * Indium
  * Tin
  * Lead
  * Cadmium
  * Silver
  * Gold
  * Aluminum
  * Copper
  * Platinum
* Crushed Hard Metals
  * Iron
  * Nickel
  * Uranium 
* Seeds
* Certus Quartz
* Charged Certus Quartz

Gravel:
* Flint
* Crystals
  * Flint
  * Coal
  * Apatite
  * Lapis Lazuli
  * Calcite
  * Lodestone
* Gems
  * Diamond
  * Emerald
  * Ruby
  * Sapphire
  * Peridot
* Broken Soft Metals
  * Indium
  * Tin
  * Lead
  * Cadmium
  * Silver
  * Gold
  * Aluminum
  * Copper
  * Platinum
* Broken Hard Metals
  * Iron
  * Nickel
  * Uranium 
* Fluorite
  * Red
  * Orange
  * Yellow
  * Green
  * Blue
  * Magenta
  * Pink
  * White

Dust:
* Powders
  * Bonemeal
  * Redstone
  * Gunpowder
  * Glowstone Dust
  * Blaze Powder
  * Electrotine
* Powdered Soft Metals
  * Indium
  * Tin
  * Lead
  * Cadmium
  * Silver
  * Gold
  * Aluminum
  * Copper
  * Platinum
* Powdered Hard Metals
  * Iron
  * Nickel
  * Uranium

Soul Sand (kept as-is):
* Nether Quartz
* Nether Wart
* Ghast Tear

Nether Gravel:
* Firestone
* Sulfur
* Thorite Dust
* Ammonium Chloride
* Broken Nether Metals
  * Indium
  * Cadmium
  * Gold
  * Aluminum
  * Copper
  * Iron
  * Nickel
  * Uranium

Ender Gravel:
* Broken Ender Tin
* Broken Ender Silver
* Broken Ender Lead
* Broken Ender Platinum

## Multiple-step problem

All the probabilities of the materials are single-step; meaning that that is the odds of the material being produced given a single run through the sifter/centrifuge.  However, with the changes in the centrifuge, this means that there will be a 2-step process to get the final material for a lot of the materials.

### Possible solution

It would improve centrifuge use if it produced more output than the sifter; after all, if you could get more by using the centrifuge than the sifter, wouldn't you switch?  Reika wanted to use more complex systems of sifting to get around the centrifuge, so why not add recursion into the mix?

The main material has an even chance of dropping any of its materials per sifted material.  The siftable materials then have a small-moderate (perhaps 10%-25%) chance if dropping itself following each sift.  This would increase the chance of drops for each sift, until the block no longer duplicates itself.  This would allow me to use the original percentages in the new intermediate block, while giving it a moderate chance of dropping from the original material (perhaps even the same percentage that the block drops itself with).