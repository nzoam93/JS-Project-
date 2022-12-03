import CollisionDetection from "./collisionDetection";

class Bubble{
    constructor(ele, xVel, yVel){
        this.ele = ele;
        let rect = this.ele.getBoundingClientRect();
        this.xPos = rect.left; //instead of recalcuating, we are storing the info
        this.yPos = rect.top;
        this.width = rect.width;
        this.height = rect.height;
        this.xVel = xVel;
        this.yVel = yVel; //allows it to be seen everywhere
        this.bubbleMoving; //used in the timedLoop
        this.timedLoop();
    }

    timedLoop(){
        this.bubbleMoving = setInterval(()=>this.move(),100);
    }

    static stopTimedLoop(){
        console.log(bubbleMoving)
        clearInterval(bubbleMoving);
    }

    //this should happen within a SetInterval
    move(){

        this.xPos += this.xVel;
        this.yPos += this.yVel;
        this.ele.style.left = this.xPos + "px";
        this.ele.style.top = this.yPos + "px";
        this.hitWall();
        this.hitGround();
        // console.log(yVel + "in the move function")

        //collisionDetection
        let collisionDetector = new CollisionDetection(this.ele, true)
        collisionDetector.bubbleCollision();
    }

    //have the velocity change x-dir if it hits the wall
    hitWall(){
        let ground = document.getElementById("bottomPart");
        let rect = ground.getBoundingClientRect();
        let groundLeft = rect.left;
        let groundRight = rect.right;

        if(this.xPos >= (groundRight - this.width)){
            this.xVel = -this.xVel;
        }
        else if(this.xPos <= groundLeft) {
            this.xVel = -this.xVel;
        }
    }

    //have the velocity change y-dir when it hits the ground or a specified y-height
    hitGround(){
        let ground = document.getElementById("bottomPart");
        let rect = ground.getBoundingClientRect();
        let groundY = rect.top;

        if(this.yPos >= groundY - this.height){
            this.yVel = -this.yVel;
        }
        else if(this.yPos <= (groundY - 120)) {
            this.yVel = -this.yVel;
        }

    }
}

export default Bubble;
