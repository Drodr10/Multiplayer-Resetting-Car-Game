class Form{
    constructor(){
        this.input= createInput("Name: ");
        this.playButton = createButton("Play!");
        this.resetButton = createButton("Reset");
        this.greeting = createElement("h3");
        this.title = createElement("h2");
    }

    display(){
        this.title.html("Multiplayer Car Racing");
        this.title.position(displayWidth/2, 25);

        this.input.position(displayWidth/4, displayHeight/2);
        this.playButton.position(displayWidth/4, displayHeight/2 + 30);
        this.resetButton.position(displayWidth/8*7, displayHeight/8);


        this.playButton.mousePressed(
            () => {
                this.input.hide();
                this.playButton.hide();

                player.name = this.input.value();

                playerCount++;

                player.index = playerCount;

                player.updateName();
                player.updateCount(playerCount);
                
                this.greeting.html("Hello, " + player.name + "!");
                this.greeting.position(displayWidth/2, displayHeight/2);
            }
        )

        this.resetButton.mousePressed(
            () => {
                game.update(0);
                player.updateCount(0);
            }
        );
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.playButton.hide();
    }

}