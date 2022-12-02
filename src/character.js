class Character{
    constructor(name, ele){
        this.name = name;
    }

    move(){
        // let div = document.getElementById
        let rect = this.getBoundingClientRect();
        let charX = rect.left;
        let charY = rect.top;
        if(event.keyCode =="37"){
            this.style.left = charX - 5 +"px";
        }
    }
}

export default Character;
