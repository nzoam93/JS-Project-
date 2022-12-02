import Bubble from "../bubble";

class Level1{
    constructor(){
        this.numBubbles = 2;
        this.bubbles = [];
        this.setBackgroundImage();
        this.createBubble();
        this.placeBubbles();
    }

    setBackgroundImage(){
        let topPart = document.getElementById("topPart");
        topPart.style.backgroundImage = "url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";


    }

    createBubble(){
        let topPart = document.getElementById("topPart");
        for(let i = 0; i < this.numBubbles; i++){
            let bubble = document.createElement("div")
            bubble.setAttribute("id", `bubble${i+1}`)
            bubble.classList.add("smallBubble");
            topPart.appendChild(bubble);
            // let bubbleID = document.getElementById(`bubble${i+1}`)
            this.bubbles.push(new Bubble(bubble, 5, 5)); //storing bubbles
        }
    }

    placeBubbles(){
        // let bubble1 = document.getElementById("bubble1")
        let bubble1 = this.bubbles[0]; //bubble instance
        bubble1.xPos = 150;
        bubble1.yPos = 150;

        // let bubble2 = document.getElementById("bubble2")
        let bubble2 = this.bubbles[1];
        bubble2.xPos = 300;
        bubble2.yPos = 150;


    }
}

export default Level1;
