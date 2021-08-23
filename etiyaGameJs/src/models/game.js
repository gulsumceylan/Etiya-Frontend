export default class Game{
    constructor(id,name,unitPrice,minAge,type){
        if (!id || !name || !unitPrice || !minAge || !type) {
           console.log("Geçersiz Oyun") 
        }

        this.id=id;
        this.name=name;
        this.unitPrice=unitPrice;
        this.minAge=minAge;
        this.type=type
    }
}