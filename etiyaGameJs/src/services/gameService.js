export default class GameService{

    constructor(){
        this.games=[];
    }

    add(game){
        this.games.push(game)
    }

    remove(id){ 

        let indexToRemove = -1 

        for (let index = 0; index < this.games.length; index++) {

            if(this.games[index].id===id){
                indexToRemove=index
            }
        }

        if (indexToRemove===-1){

            console.log("Böyle bir oyun yok")
            
        }else{

            this.games.splice(indexToRemove,1);

        }    
    }

    list(){
        return this.games;
    }
}