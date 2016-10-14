/** JMODexamples
  * mod.json
  * Authors: (c) 2016 Sven Kayser
  * Licence: MIT
  **/


/*
    Let's add some coffe to the game. Reference class: com.jeffpeng.jmod.actions.AddFluid
*/

	var coffee = addFluid("Coffee");
	    coffee.temperature(celcius(90.0)); // Since the internal MineCraft temperature system is somewhat ambigious, there are celcius() and fahrenheit()
	    coffee.density(1000);
	        /* Coffee is basically hot water, so it shares it's density. Density is calculated kg/m³ relative to gravity and atmospheric pressure, 
	         *  with air having neutral density of 0. Negative values indicate matter lighter than air, making it flow upwards.
	         */
	    coffee.viscosity(1000);
	        /* Coffee is as viscous as water. Higher viscosity means slower ticking of the resoluting block as of viscosity/200 = tickrate.
	         */
	    coffee.setColor(102,61,0); // RGB
	    coffee.hasBucket(); // Has a bucket. 
	    //coffee.isPoisonous(); // No, coffee isn't poisonous.
	    //coffee.isGaseous(); // No, coffee is no gas. Making a fluid gaseous doesn't affect it's density, and therefore not it's flow direction.
	
	log("jmodlogtest");
 	if(isModLoaded('SurvivalIndustry')){
		log("si loaded");
	}

/*
	The centrifuge is awesome (unless you are in it). Let's centrifuge some sand to see what's really in it. Reference class: com.jeffpeng.jmod.actions.rotarycraft.AddCentrifugeRecipe
*/
	var sandCentrifuge = RotaryCraft.addCentrifugeRecipe("sand");   // First we define a target to centrifuge and cache the returned object
		sandCentrifuge.addOutput("minecraft:sand:1",5.0); 			// There is 5% red sand in it apperently
		sandCentrifuge.addOutput("minecraft:spider_eye",2.0);		// Who would have guessed that sand is made of 2% spider eyes??
		sandCentrifuge.addOutput("minecraft:diamond",0.5).addOutput("minecraft:emerald",0.25);	// We can also chain this - for 0.5% diamonds and 0.25% emeralds
		sandCentrifuge.addFluidOutput("lava@20",20.0);				// Actually there's a lot of lava in sand. Outregeous. There can be only one fluid output. Every new
																	// fluid output will overwrite the previous one																		
		sandCentrifuge.addOutput("minecraft:gold_block",10.0);		// Gold? Gold?? That's just worthless gold....
		
