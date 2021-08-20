export default class SellingService{

    sell(user,game){
        if (game.minAge>user.age) {
            console.log("Yaşınız "+ game.name +" oyunu için uygun değildir.");
        }else{
            console.log(user.name+ " " + game.name+ " Oyununu Satın aldı");
        }
    }
}