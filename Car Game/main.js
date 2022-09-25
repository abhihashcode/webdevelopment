const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");

const player = { speed: 5, score: 0 };
// keys
let keys = { ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false };
// console.log(keys);


function keydown(e) {
    e.preventDefault();
    keys[e.key] = true;
    // console.log(e.key);
    // console.log(keys);
}


function keyup(e) {
    e.preventDefault();
    keys[e.key] = false;
    // console.log(e.key);
    // console.log(keys);
    // if (e.key == "ArrowLeft") {
    //     document.querySelector(".car") = offsetLeft + 10;
    // }
}

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

startScreen.addEventListener('click', start);

function playGame() {
    if (player.start) {
        // console.log("i am clicked");
        let car = document.querySelector(".car");
        let road = gameArea.getBoundingClientRect(); //by this method we will get all postion (bottom: 695,height: 695,left: 158,right: 558,top: 0,width: 400,x: 158,y: 0)

        moveLine();
        moveEnemyCar(car);
        // console.log(road);

        if (keys.ArrowUp && player.y > road.top + 120) {
            player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < (road.bottom - 70)) {
            player.y += player.speed;
        }
        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < 350) {
            player.x += player.speed;
        }

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";
        window.requestAnimationFrame(playGame);
        score.innerHTML = "Score:" + player.score++;
    }
}


function isCollide(mainCar, enemyCar) {
    mainCarRect = mainCar.getBoundingClientRect();
    enemyCarRect = enemyCar.getBoundingClientRect();

    return !((mainCarRect.bottom < enemyCarRect.top) || (mainCarRect.top > enemyCarRect.bottom) || (mainCarRect.right < enemyCarRect.left) || (mainCarRect.left > enemyCarRect.right));
}


function moveLine() {
    let lines = document.querySelectorAll(".roadLine");

    lines.forEach((item) => {

        if (item.y >= 700) {
            item.y -= 750;
        }

        item.y += player.speed;
        item.style.top = item.y + "px";
    })
}


function endGame() {
    player.start = false;
    startScreen.classList.remove("hide");
}


function moveEnemyCar(car) {
    let enemies = document.querySelectorAll(".enemy");

    enemies.forEach((item) => {

        if (isCollide(car, item)) {
            console.log("boom hit");
            endGame();
        }

        if (item.y >= 750) {
            item.y = -500;
            item.style.left = Math.floor(Math.random() * 350) + "px";
        }

        item.y += player.speed;
        item.style.top = item.y + "px";

    })
}


function start() {

    // gameArea.classList.remove("hide");
    startScreen.classList.add("hide");
    gameArea.innerHTML = "";

    player.start = true;
    player.score = 0;
    window.requestAnimationFrame(playGame);


    for (let x = 0; x < 5; x++) {
        let roadLine = document.createElement("div");
        roadLine.setAttribute("class", "roadLine");
        roadLine.y = (x * 150);
        roadLine.style.top = roadLine.y + "px";
        gameArea.appendChild(roadLine);
    }

    let car = document.createElement("div");
    car.setAttribute("class", "car");
    // car.innerText = "Hi i am a car div";
    gameArea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    // console.log(car.offsetTop);
    // console.log(car.offsetLeft);

    for (let x = 0; x < 4; x++) {
        let enemyCar = document.createElement("div");
        enemyCar.setAttribute("class", "enemy");
        enemyCar.y = ((x + 1) * 350) * -1;
        enemyCar.style.top = enemyCar.y + "px";
        enemyCar.style.background = "blue";
        enemyCar.style.left = Math.floor(Math.random() * 350) + "px";
        gameArea.appendChild(enemyCar);
    }
}