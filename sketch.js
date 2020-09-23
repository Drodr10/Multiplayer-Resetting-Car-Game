var database, gameState = 0, playerCount, form, player, game;
var allPlayers;
var car1p, car1, car2p, car2, car3p, car3, car4p, car4, cars;
var track;


function preload(){
    car1p = loadImage("images/car1.png");
    car2p = loadImage("images/car2.png");
    car3p = loadImage("images/car3.png");
    car4p = loadImage("images/car4.png");

    track = loadImage("images/track.jpg");

}

function setup(){

    database = firebase.database();
    createCanvas(displayWidth,displayHeight-150);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2)
        game.end();
    
}

