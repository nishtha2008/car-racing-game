var database;
var gameState = 0;
var form, player, game, playerCount;


function setup(){
 database = firebase.database();
    createCanvas(500,500);
 game = new Game();
 game.getState();
 game.start();
}

function draw(){
    
}

