class CollisionDetection{
    constructor(ele, isEnemy){
        this.ele = ele;
        this.isEnemy = isEnemy;
    }

    bubbleCollision(){
        //note: bubble is ele. Need to define the character

        //info about char
        let char = document.getElementById("character");
        let charRect = char.getBoundingClientRect();
        let charX = charRect.left;
        let charY = charRect.top;
        let charWidth = charRect.width;
        let charHeight = charRect.height;

        //info about object
        let objectRect = this.ele.getBoundingClientRect();
        let objectX = objectRect.left;
        let objectY = objectRect.top;
        let objectWidth = objectRect.width;
        let objectHeight = objectRect.height;

        if ((charX + charWidth > objectX && charX < objectX + objectWidth) &&
        (charY + charHeight > objectY && charY < objectY + objectHeight)) {
            if(this.isEnemy){
                console.log("GAME OVER");
            }
        }
    }

    saySup(){
        console.log(this.ele)
    }
}



export default CollisionDetection;
