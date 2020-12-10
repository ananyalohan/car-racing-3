
var database
var gameState=0, playerCount;
var player,form,game;
var allPlayers;


function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database= firebase.database()
    game= new Game()
    game.getState()
    game.start()
}

function draw(){
 if( playerCount===4){
     game.update(1)
 }
 if(gameState===1){
     clear();
     game.play()
 }
}
