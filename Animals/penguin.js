import Animal from './animal.js'
export default class Penguin extends Animal {

    constructor(type,swimmingSpeed) {
        super(type);
        this.swimmingSpeed = swimmingSpeed
        this.printDescription()
        this.showImage();
    }
    printDescription()
    {
        this.element.childNodes[1].innerText = "The Penguine swimming speed is:" + this.swimmingSpeed + "kg";
    }

    showImage(){
        this.element.childNodes[0].src = "./images/img03.jpg";
    }

}