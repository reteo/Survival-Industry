/* Ex Machina - The RotaryCraft Companion to Ex Nihilo.
 *
 * This jmod is designed to integrate RotaryCraft into Ex Nihilo in a way to
 * Allow the two mods to work together for a seamless skyblock experience.
 *
 * The jmod includes the following features:
 * * Repairable crooks and hammers.
 * * Transfer of high-level drops from the sifter to the Centrifuge.
 * * Allow RotaryCraft grinder and extractor to process sifter/centrifuge drops.
 * * Design an alternate form of bedrock to use with the bedrock breaker.
 */


// Split material drops between sifter and centrifuge.

loadjs("sifting.js");

// Make ore blocks (for extractor) using stone and ore gravel.

loadjs("ore-recipes.js")

// Obsidian Concrete; used with Bedrock Breaker to make bedrock dust.

loadjs("obsidian-concrete.js");
