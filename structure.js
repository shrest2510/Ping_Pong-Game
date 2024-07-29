window.onload = function() {
    let can = document.getElementById("table");
    let draw_ = can.getContext('2d');

    // Creating Ball and adding its properties
    const ball = {
        x: can.width / 2,
        y: can.height / 2,
        radius: 10,
        velX: 5,
        velY: 5,
        speed: 5,
        color: "green"
    };

    // Dividing screen one for user and other for computer
    const sep = {
        x: can.width / 2,
        y: 0,
        height: 10,
        width: 2,
        color: "orange"
    };

    // Creating the bar
    const user = {
        y: (can.height - 100) / 2,
        x: 0,
        height: 100,
        width: 10,
        score: 0,
        color: "red"
    };

    const cpu = {
        y: (can.height - 100) / 2,
        x: can.width - 10, // to display inside canvas
        height: 100,
        width: 10,
        score: 0,
        color: "red"
    };

    function drawRectangle(x, y, w, h, color) {
        draw_.fillStyle = color;
        draw_.fillRect(x, y, w, h);
    }

    function drawCircle(x, y, r, color) {
        draw_.fillStyle = color;
        draw_.beginPath();
        draw_.arc(x, y, r, 0, Math.PI * 2, true);
        draw_.closePath();
        draw_.fill();
    }

    function drawScore(text, x, y) {
        draw_.fillStyle = "white";
        draw_.font = "60px Arial";
        draw_.fillText(text, x, y);
    }

    function drawSeparator() { // create gap b/w lines
        for (let i = 0; i <= can.height; i += 20) {
            drawRectangle(sep.x, sep.y + i, sep.width, sep.height, sep.color);
        }
    }

    // Call your drawing functions here to test
    function helper(){
        drawSeparator();
        drawCircle(ball.x, ball.y, ball.radius, ball.color);
        drawRectangle(user.x, user.y, user.width, user.height, user.color);
        drawRectangle(cpu.x, cpu.y, cpu.width, cpu.height, cpu.color);
        drawScore(0, can.width / 4, can.height / 5);
        drawScore(0, 3 * can.width / 4, can.height / 5);
    }

    function call_back(){ // making screen black then again printing ball
        helper();
    }

    let fPS=50;
    let looper=serInterval(call_back,1000/fPS);
};


