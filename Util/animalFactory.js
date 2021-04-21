import dynamicClass from './dynamicClass.js'

export default class AnimalFactory {

    static createAnimalsFromJson(aData) {

        let results = [];
        for (let item = 0; item < aData.length; item++) {
            let animalClass = this.capitalizeFirstLetter(aData[item].type);
            let classAnimal= dynamicClass(animalClass);
            if(classAnimal !== undefined)//if invalid object wont create it
            {
                let createdAnimal = new classAnimal(aData[item].type, aData[item].weight);
                results.push(createdAnimal.elementAnimal);
            }
        }
        return results;
    }
    static capitalizeFirstLetter(classNameString) {
        return classNameString.charAt(0).toUpperCase() + classNameString.slice(1);
    }

}
