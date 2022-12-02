import Character from "./character";
import Bubble from "./bubble"
import Bonus from "./bonus";
import Level1 from "./levels/level1";
import Homepage from "./levels/homepage";


document.addEventListener("DOMContentLoaded", () => {
    //creating the character
    const ele = document.getElementById("character");
    const char = new Character("Bob", ele);
    char.sayHi();

    //we want to run this uninvoked function on keydown
    //all callbacks invoked function style. Loses context
    //therefore, I need to BIND it with char so it knows what "this" is
    document.addEventListener("keydown", char.move.bind(char));

    //creating the bubble
    const bubbleTestEle = document.getElementById("bubbleTest");
    const bubbleTest = new Bubble(bubbleTestEle);

    //creating the homescreen
    new Homepage();

    //creating the playButton listener
    let playButton = document.getElementById("playButton");
    let clickedAlready = false;
    let bubbleMoving;
    playButton.addEventListener("click", ()=>{
        //starting on level 1 when you first click the play button
        new Level1();
        if(!clickedAlready){
            bubbleMoving = setInterval(()=>bubbleTest.move(20,20),200);
            clickedAlready = true;
        }
    })

    //creating the pauseButton listener
    let pauseButton = document.getElementById("pauseButton");
    pauseButton.addEventListener("click", ()=>{
        clearInterval(bubbleMoving)
        clickedAlready = false;
    })

})



//allows character to move
//
