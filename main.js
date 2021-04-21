import AnimalFactory from './Util/animalFactory.js'
import aData from './Data/data.js'

//self invoke function to initialize the animal factory and listeners 
(function init(){
const animals = AnimalFactory.createAnimalsFromJson(aData);

let aList = document.getElementById("Animals_div");
let notShowList = [];

for (let item = 0; item < animals.length; item++) {
    aList.appendChild(animals[item]);
}

document.getElementById('Animals_div')
    .addEventListener('click', event => {
        notShowList.push(event.target);
        event.target.classList.add("do_not_show")
    })

document.getElementById('btn_show_pinguines')
    .addEventListener('click', event => {
        displayHiddenAnimals(notShowList);
        aList.classList.add("filterPinguin");
    })

document.getElementById('show_all_animals')
    .addEventListener('click', event => {
        displayHiddenAnimals(notShowList);
        aList.classList.remove("filterPinguin");
    })
})()

function displayHiddenAnimals(notShowList){
    for(let i= 0 ; i<notShowList.length; i++)
        notShowList[i].classList.remove("do_not_show");
}
