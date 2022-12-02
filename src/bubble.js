import CollisionDetection from "./collisionDetection";

class Bubble{
    constructor(ele){
        this.ele = ele;
    }
    //this should happen within a SetInterval
    move(xVel, yVel){
        let rect = this.ele.getBoundingClientRect();
        let xPos = rect.left;
        let yPos = rect.top;
        let newX = xPos + xVel;
        let newY = yPos + yVel;
        this.ele.style.left = newX + "px";
        this.ele.style.top = newY + "px";
        this.hitWall(xPos, xVel);
        this.hitGround(yPos, yVel);
        // console.log(yVel + "in the move function")

        //collisionDetection
        let collisionDetector = new CollisionDetection(this.ele, true)
        collisionDetector.bubbleCollision();
    }

    //have the velocity change x-dir if it hits the wall
    hitWall(xPos, xVel){
    }

    //have the velocity change y-dir when it hits the ground or a specified y-height
    hitGround(yPos, yVel){
        // console.log(`${yPos} is yPos`)
        let ground = document.getElementById("bottomPart");
        let rect = ground.getBoundingClientRect();
        let groundY = rect.top;
        // console.log(`${groundY} is groundY`)

        if(yPos >= groundY ){
            yVel = -yVel;
            // console.log(yVel)
            return yVel;
        }

    }
}

export default Bubble;
