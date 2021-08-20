import Game from "./models/game.js";
import User from "./models/user.js";
import GameService from "./services/gameService.js";
import SellingService from "./services/sellingService.js";
import UserService from "./services/userService.js";

let user1=new User(1,"Gülsüm",23)
let user2=new User(2,"Melisa",16)
let user3=new User(3,"Naz",12)

let userSercice=new UserService();
userSercice.add(user1);
userSercice.add(user2);
userSercice.add(user3);

//userSercice.remove(2);

console.log(userSercice.list())

let game1=new Game(1,"GTA 5",100,15);
let game2=new Game(2,"Need for Speed",75,10);
let game3=new Game(3,"Call Of Dutty",150,18);

let gameService=new GameService();
gameService.add(game1);
gameService.add(game2);
gameService.add(game3);

//gameService.remove(3);

console.log(gameService.list());

let sellingService=new SellingService();
sellingService.sell(user1,game1)
sellingService.sell(user3,game3)
