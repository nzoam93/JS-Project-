import Bubble from "../bubble";

class Level2{
    constructor(){
        this.totalBubbles = 3; //higher because big bubbles pop into smaller ones
        this.numBubbles = 1;
        this.bubbles = [];
        this.setBackgroundImage();
        this.createBubble();
        this.placeBubbles();
    }

    setBackgroundImage(){
        //change the background image
        let topPart = document.getElementById("topPart");
        topPart.style.backgroundImage = "url('https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
        document.getElementById("level").innerHTML = "Level 2"
    }

    createBubble(){
        let topPart = document.getElementById("topPart");
        for(let i = 0; i < this.numBubbles; i++){
            let bubble = document.createElement("div")
            bubble.setAttribute("id", `bubble${i+1}`)
            bubble.classList.add("mediumBubble"); //medium bubble here
            topPart.appendChild(bubble);
            this.bubbles.push(new Bubble(bubble, 5, 5)); //storing bubbles
        }
    }

    placeBubbles(){

        //getting the position of the bottom so I can reference that to place the bubble
        let bottomPart = document.getElementById("bottomPart");
        let bottomRect = bottomPart.getBoundingClientRect();
        let bottomHeight = bottomRect.top;


        let bubble1 = this.bubbles[0]; //bubble instance
        console.log(bubble1)
        bubble1.xPos = 150;
        bubble1.yPos = bottomHeight - 200;
    }
}

export default Level2;
