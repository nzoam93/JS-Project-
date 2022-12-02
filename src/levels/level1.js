import Bubble from "../bubble";

class Level1{
    constructor(){
        this.numBubbles = 2;
        this.createBubble();
        this.placeBubbles();
    }

    createBubble(){
        let topPart = document.getElementById("topPart");
        for(let i = 0; i < this.numBubbles; i++){
            let bubble = document.createElement("div")
            console.log(bubble)
            bubble.setAttribute("id", `bubble${i+1}`)
            bubble.classList.add("smallBubble");
            topPart.appendChild(bubble);
            let bubbleID = document.getElementById(`bubble${i+1}`)
            console.log(bubbleID)
            let newBubble = new Bubble(bubbleID)
            console.log(newBubble)

        }
    }

    placeBubbles(){
        let bubble1 = document.getElementById("bubble1")
        bubble1.style.left = "150px";
        bubble1.style.top = "150px";

        let bubble2 = document.getElementById("bubble2")
        bubble2.style.left = "300px";
        bubble2.style.top = "150px";


    }
}

export default Level1;
