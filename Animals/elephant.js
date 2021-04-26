import Animal from './animal.js'
export default class Elephant extends Animal {

    constructor(type, properties) {
        super(type);
        this.weight = properties.weight;
        this.printDescription()
        this.showImage();
    }

    printDescription()
    {
        this.element.childNodes[1].innerText = "The Elephant Weight is:" + this.weight + "kg";
    }

    showImage(){
        this.element.childNodes[0].src = "./images/img01.jpg";
    }
        

}