import Animal from './animal.js'
export default class Elephant extends Animal {

    constructor(type,weight) {
        super(type);
        this.weight = weight;
        this.printDescription()
        this.showImage();
    }

    printDescription()
    {
        this.elementAnimal.childNodes[1].innerText = "The Elephant Weight is:" + this.weight + "kg";
    }

    showImage(){
        this.elementAnimal.childNodes[0].src = "./images/img01.jpg";
    }
        

}