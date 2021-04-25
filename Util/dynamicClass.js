import Elephant from '../Animals/elephant.js';
import Rabbit from '../Animals/rabbit.js';
import Penguin from '../Animals/penguin.js';
//add here new classes
const classes = { Elephant,Rabbit,Penguin };
//Factory function that performs a lookup against an object of class name.
//class mappings and returns reference to the class
export default function dynamicClass (name) {
  return classes[name];
}