import { games } from "../data/games.js"
import { DataError } from "../models/dataError.js"

export default class GameService2 {

    constructor() {
        this.strategyGames = []
        this.fpsGames = []
        this.errors = []
    }

    loadGames() {
        for (let game of games) {
            if (this.validateGame(game) || this.validateName(game)) {
            } else {
                switch (game.type) {
                    case "Strategy":
                        this.strategyGames.push(game)
                        break;
                    case "FPS":
                        this.fpsGames.push(game)
                        break;
                    default:
                        this.errors.push(new DataError("Geçersiz veri: ", game))
                        break;
                }
            }
        }
        console.log(this.fpsGames);
        console.log(this.strategyGames);
        console.log(this.errors);

    }

    validateGame(game) {
        let requiredFiels = ["id", "name", "unitPrice", "type"]
        let hasErrors = false;
        for (let field of requiredFiels) {
            if (!game[field]) {
                this.errors.push(new DataError("Geçersiz Oyun: " + game.name))
                hasErrors = true;
            }
        }
        return hasErrors;
    }

    validateName(game) {

        let hasError = false;
        for (let i = 0; i < games.length; i++) {
            if (game.name == games[i].name && games.indexOf(game) != i) {
                this.errors.push(new DataError("Bu isimde bir oyun var: ", games[i].name))
                hasError = true;
                games.splice(i, 1);
                if (game.type === "Strategy") {
                    this.strategyGames.push(game)
                } else {
                    this.fpsGames.push(game)
                }
            }
        }
        return hasError;
    }
}