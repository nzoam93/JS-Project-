import Bubble from "./bubble";

class Game {

    constructor(){
        this.bubbles = [];

    }

    animate(){
        this.animationLoop = setInterval(() => {
            console.log("Hi from game")
        })
    }

    timedLoop(){
        this.bubbleMoving = setInterval(()=>this.move(),100);
    }
}
