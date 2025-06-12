$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
            createPlatform (500, 650, 200, 20, "black" );
            createPlatform (700, 675, 500, 20, "red");
            createPlatform (675, 500, 352, 20, "green");
            createPlatform  (400, 540,150, 20, "silver");
             createPlatform  (205, 575, 175, 20, "gold");
            





    // TODO 3 - Create Collectables
        createCollectable ("diamond",200, 600, 0, 0.5);
        createCollectable ("diamond",700,600, 0, 0.8);
        createCollectable ("diamond", 700, 500, 0, 0.7 );
        createCollectable ("diamond", 700,575, 0, 0.7 );


    
    // TODO 4 - Create Cannons

         createCannon ("right", 150, 6000);
         createCannon ("right", 200, 6000 );
         createCannon ("top", 1300,6000);
    
      
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
