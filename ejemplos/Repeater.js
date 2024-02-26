import { Repeater } from '../index.js';
function hola() {
    console.log('Hola');
}

function adios() {
    console.log('Adios');
}
const repeater = new Repeater(4, 1000, false, hola, adios);

repeater.start();