class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        
        this.index = null;


    }

    updateCount(count){
        database.ref('/').update({
            PlayerCount: count
        });
    }
    updateName(){
        var playerIndex = "Players/player" + this.index;
        database.ref(playerIndex).set({
            Name: this.name,
            distance: this.distance
        });
    }
    getCount(){
        var playerCountRef = database.ref('PlayerCount');
        playerCountRef.on("value", (data)=>{
            playerCount = data.val();
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref("Players");
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}