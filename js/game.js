class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gamestate");
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        });
    }

    update(state){
        database.ref("/").update({
            gamestate: state
        });
    }

    async start(){
        if(gameState == 0){
            form = new Form();
            form.display();
            
            player = new Player();

            var playerCountRef = await database.ref("PlayerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
        }

        car1 = createSprite(200, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(400, 200);
        car4 = createSprite(500, 200);

        car1.addImage("white", car1p);
        car2.addImage("red", car2p);
        car3.addImage("blue", car3p);
        car4.addImage("black", car4p);

        cars = [car1, car2, car3, car4];
    }

    play(){
        form.hide();
        textSize(20);
        //text("Game Start!!", 200, 150);
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            var displayPos = 130;
            
            var index = 0;
            var x = 175;
            var y = 0;


            background("grey");
            image(track, 0, -displayHeight*14, displayWidth, displayHeight*16)
            

            for(var plyr in allPlayers){
                index++;
                x += 200;
                y = displayHeight - allPlayers[plyr].distance;   
                
                if(index === 2 || index === 3 || index === 4){
                    cars[index-1].x = x+50;  
                }
                else
                cars[index-1].x = x;

                cars[index-1].y = y;
                
                if(index === player.index){
                    fill("red");
                    //ellipseMode(RADIUS);
                    ellipse(cars[index-1].x, cars[index-1].y, 100, 100);

                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }

                displayPos += 20;
                textSize(15);
                //text(allPlayers[plyr].name + ":" + allPlayers[plyr].distance, 120, displayPos);
            }
            
        }

        if(keyIsDown(UP_ARROW)&& player.index != null){
            player.distance += 50;
            player.updateName();
        }

        if(player.distance > 13000)
            gameState = 2;

        drawSprites();
    }

    end(){
        console.log("Game End");
    }
}