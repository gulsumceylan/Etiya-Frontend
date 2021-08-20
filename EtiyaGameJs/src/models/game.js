export default class Game{
    constructor(id,name,unitPrice,minAge){
        if (!id || !name || !unitPrice || !minAge ) {
           console.log("Geçersiz Oyun") 
        }

        this.id=id;
        this.name=name;
        this.unitPrice=unitPrice;
        this.minAge=minAge;
    }
}