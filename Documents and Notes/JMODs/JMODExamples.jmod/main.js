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


