class Homepage{
    constructor(){
        this.setBackgroundImage();
    }

    setBackgroundImage(){
        let topPart = document.getElementById("topPart");
        topPart.style.backgroundImage = "url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
}

export default Homepage

//not working for some reason.
//even if I take out the backgroundimage from the CSS sheet
