class GameOver{
    constructor(){
        this.setBackgroundImage();
        this.stopLoops();
    }

    setBackgroundImage(){
        //restyling background image
        let topPart = document.getElementById("topPart");
        topPart.style.backgroundImage = "url('https://www.shutterstock.com/image-vector/game-over-retro-futuristic-glow-260nw-2178685625.jpg')";

        //putting info into the page
        let arr = ["guess you shouldn't have gotten hit, huh?",
        "how about next time you DON'T get hit",
        "try avoiding the bubbles"];

        let gameTitleInfo = document.getElementById("gameTitle");
        gameTitleInfo.style.display = "block"
        gameTitleInfo.innerHTML = arr[Math.floor(Math.random()*arr.length)]; //math.random to choose something random
    }

    stopLoops(){
        //clear the intervals
        //alternatively, just set variable gameOver to true. And have the
        //...game take over the logic (only do loops if gameOver=false)
    }

}

export default GameOver;
