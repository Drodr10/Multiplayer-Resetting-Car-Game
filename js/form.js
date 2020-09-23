class Form{
    constructor(){
        this.input= createInput("Name: ");
        this.button = createButton("Play!");
        this.greeting = createElement("h3");
        this.title = createElement("h2");
    }

    display(){
        this.title.html("Multiplayer Car Racing");
        this.title.position(displayWidth/2, 25);

        this.input.position(displayWidth/4, displayHeight/2);
        this.button.position(displayWidth/4, displayHeight/2 + 30);

        

        this.button.mousePressed(
            () => {
                this.input.hide();
                this.button.hide();

                player.name = this.input.value();

                playerCount++;

                player.index = playerCount;

                player.updateName();
                player.updateCount(playerCount);
                
                this.greeting.html("Hello, " + player.name + "!");
                this.greeting.position(displayWidth/2, displayHeight/2);
            }
        )
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

}