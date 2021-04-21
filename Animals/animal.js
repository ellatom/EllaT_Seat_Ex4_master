export default class Animal {

    constructor(typeA) {
        this.typeA =typeA;
        this.elementAnimal = this.createElement();
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.className = "itemList" +"_"+this.typeA; // itemList pinguin
        let atext = document.createElement("p");
        let aImage = document.createElement("img");
        this.element.appendChild(aImage);
        this.element.appendChild(atext);
        return this.element;
    }
}
