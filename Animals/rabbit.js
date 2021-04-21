import Animal from './animal.js'
export default class Rabbit extends Animal {

    constructor(type,speed) {
        super(type);
        this.speed = speed;
        this.printDescription();
        this.showImage();
    }
    printDescription()
    {
        this.elementAnimal.childNodes[1].innerText = "The Rabbit Speed is:" + this.speed + "kg";
       
    }

    showImage(){
        this.elementAnimal.childNodes[0].src = "./images/img02.jpg";
    }

}