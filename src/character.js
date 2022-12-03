import Projectile from "./projectile";

class Character{
    constructor(name, ele){
        this.name = name;
        this.ele = ele;
        this.numLives = 3;
        
    }

    // sayHi(){
    //     console.log(`Hi from ${this.name}`)
    // }

    move(e){
        // console.log(e);

        //this is if I want the char to move only a certain percentage of the screen
        let bottomPart = document.getElementById("bottomPart")
        let bottomRect = bottomPart.getBoundingClientRect();
        let screenWidth = bottomRect.right - bottomRect.left;
        console.log(screenWidth + "screenWidth")

        let vel = 10;
        let rect = this.ele.getBoundingClientRect();
        let xPos = rect.left;
        if(e.keyCode =="37"){
            //to move a certain percentage
            // this.ele.style.left = xPos - (screenWidth*0.01) + "px";
            this.ele.style.left = xPos - vel +"px";
        } else if(e.keyCode == "39"){
            this.ele.style.left = xPos + vel +"px";
        } else if(e.keyCode == "32"){ //space bar
            this.shoot();
        }
        //wrap around
        this.wrapAround(xPos);
    }

    shoot(){
        let rect = this.ele.getBoundingClientRect();
        let xPos = rect.left;
        let width = rect.width;
        let middle = xPos + width / 2;

        let topPart = document.getElementById("topPart");
        let projectile = document.createElement("div")
        projectile.setAttribute("id", `projectile`)
        topPart.appendChild(projectile);
        let projectileID = document.getElementById(`projectile`)
        new Projectile(projectileID)

    }

    wrapAround(xPos){
        let ground = document.getElementById("bottomPart");
        let rect = ground.getBoundingClientRect();
        let groundLeft = rect.left;
        let groundRight = rect.right;
        if (xPos < groundLeft){
            this.ele.style.left = groundRight - 50 + "px";
        }
        else if (xPos > groundRight - 50){
            this.ele.style.left = groundLeft + 5 + "px";
        }
    }



}

export default Character;
