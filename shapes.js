//To draw circular and rectnagle shapes (Syntax structure to make anything on canvas)
draw_.fillStyle="red"; //For Rectangle
draw_.fillRect(100,100,30,30); // Fill color in the Dimensions of Rectangle
draw_.fillStyle="orange"; // For Circle
draw_.beginPath(); // To draw Circle we first have to beginpath
draw_.arc(100,100,10,0,Math.PI*2,false); // Make circle in x,y axis With radius r and circumfrence from 0 to 2pi and false means to start making circle from anti clockwise direction
draw_.closePath(); // Close the path
draw_.fill(); //Fill  the circle with color
