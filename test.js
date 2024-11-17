// Realizamos las importaciones correspondientes

import { Coliseo} from "./coliseo.js"
import { Mirmillon, Dimachaerus } from "./gladiadores.js"
import { Casco, Escudo } from "./armaduras.js"
import { ArmaFilosa, ArmaContundente } from "./armas.js"

// Instanciamos las armas

let espada = new ArmaFilosa("Espada", "Arma de filo", 20, 0.7)
let daga = new ArmaFilosa("Daga", "Arma de filo", 10, 0.3)
let hacha = new ArmaFilosa("Hacha", "Arma de filo", 14, 0.5)

let maza = new ArmaContundente("Maza", "Arma contundente", 25)
let martillo = new ArmaContundente("Martillo", "Arma contundente", 25)

// Instanciamos las armaduras

let escudo = new Escudo("Escudo")
let casco = new Casco("Casco")

// Instanciamos a los gladiadores

let mirmillon = new Mirmillon("Mirmillon", 20)
let dimachaerus  = new Dimachaerus("Dimachaerus", 20)

// Pruebas de los métodos de los gladiadores

// Agregar armas

console.log(mirmillon.agregarArma(espada))
console.log(mirmillon.agregarArma(daga)) // Los Mirmillones no pueden tener más de un arma

console.log(dimachaerus.agregarArma(martillo)) 
console.log(dimachaerus.agregarArma(hacha)) 
console.log(dimachaerus.agregarArma(espada)) 
console.log(dimachaerus.agregarArma(maza)) // Los Dimachaerus no pueden tener más de 3 armas

// Agregar Armaduras
console.log(mirmillon.agregarArmadura(escudo))
// console.log(mirmillon.agregarArmadura(casco))

console.log(dimachaerus.agregarArmadura(escudo)) // Los Dimachaerus no utilizan armaduras

// Obtener puntos de armadura

console.log(mirmillon.obtenerPuntosArmadura())

console.log(dimachaerus.obtenerPuntosArmadura()) // resultara en 0 porque los Dimachaerus no utilizan armaduras

// Aumentar destreza en caso de utilizar escudo

console.log(mirmillon.aumentarDestreza())

console.log(dimachaerus.aumentarDestreza())

// Obtener defensa

console.log(mirmillon.obtenerDefensa())

console.log(dimachaerus.obtenerDefensa())


// Obtener el poder total de la sumatoria de todas las armas

console.log(mirmillon.obtenerPoderArma())

console.log(dimachaerus.obtenerPoderArma())

// Obtener el poder de ataque de cada gladiador

console.log(mirmillon.obtenerPoderAtaque())

console.log(dimachaerus.obtenerPoderAtaque())

// Instanciamos el Coliseo

let coliseo = new Coliseo()

// Agregar gladiadores

console.log(coliseo.agregarGladiador(mirmillon))

console.log(coliseo.agregarGladiador(dimachaerus))

console.log(coliseo.agregarGladiador(dimachaerus)) // en este caso el límite don dos gladiadores por duelo

// Eliminar Gladiadores

console.log(coliseo.eliminarGladiador("Dimachaerus"))
console.log(coliseo.eliminarGladiador("Dimachaerus"))

// Agregar al gladiador eliminado

console.log(coliseo.agregarGladiador(dimachaerus))


// Duelo

console.log(coliseo.duelo())
