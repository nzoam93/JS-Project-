import Character from "./character";
import Bubble from "./bubble"
import Bonus from "./bonus";
import Level1 from "./levels/level1";
import Level2 from "./levels/level2";
import Homepage from "./levels/homepage";


document.addEventListener("DOMContentLoaded", () => {
    //creating the character
    const ele = document.getElementById("character");
    const char = new Character("Bob", ele);

    //we want to run this uninvoked function on keydown
    //all callbacks invoked function style. Loses context
    //therefore, I need to BIND it with char so it knows what "this" is
    document.addEventListener("keydown", char.move.bind(char));

    //allows the shoot functionality
    document.addEventListener("keydown", char.shoot.bind(char));

    //creating the homescreen
    new Homepage();



    //creating the playButton listener
    let playButton = document.getElementById("playButton");
    playButton.addEventListener("click", ()=>{
        //starting on level 1 when you first click the play button
        new Level2();

    })

    //creating the pauseButton listener
    let pauseButton = document.getElementById("pauseButton");
    pauseButton.addEventListener("click", ()=>{
        Bubble.stopTimedLoop();
        // clickedAlready = false;
    })

})
//creating the bubble
// const bubbleTestEle = document.getElementById("bubbleTest");
// const bubbleTest = new Bubble(bubbleTestEle);
