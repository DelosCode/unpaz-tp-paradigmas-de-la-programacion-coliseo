class Gladiador {
    constructor(tipo){
        this.tipo = tipo;
        this.vida = 100;
        this.armas = [];
        this.armaduras = [];
    }

    agregarArma(armaNueva){
        this.armas.push(armaNueva)
        return `Arma "${armaNueva.nombre}" agregada con éxito.`
    }

    agregarArmadura(armaduraNueva){
        this.armaduras.push(armaduraNueva);
        return `Armadura "${armaduraNueva.tipo}" agregada con éxito.`
    }

    obtenerPuntosArmadura(){
        let puntosArmadura = this.armaduras.reduce((cont, armadura) => cont + armadura.puntosArmaduraExtra, 0)
        return puntosArmadura
    }

    aumentarDestreza(){
        return 0;
    }

    obtenerDefensa(){
        return 0
    }

    obtenerPoderArma(){
        let poderArma = this.armas.reduce((cont, arma) => cont + arma.valorAtaque, 0)
        return poderArma
    }

    obtenerPoderAtaque(){
        return 0;
    }

    atacar(rival){

        let danio = (this.obtenerPoderAtaque() - rival.obtenerDefensa());
        rival.vida -= danio > 0 ? danio : 0
    }
}

export class Mirmillon extends Gladiador{

    constructor(tipo, fuerza){
        super(tipo);
        this.fuerza = fuerza;
        this.destreza = 15;
    }

    agregarArma(armaNueva){
        if (this.armas.length == 0){
            return super.agregarArma(armaNueva)
        } else {
            return `Inventario lleno, Los gladiadores Mirmillon no pueden tener más de un arma. Arma actual: ${this.armas[0].nombre}`
        }
    }

    agregarArmadura(armaduraNueva){
        if ((this.armaduras.length < 2) && (! this.armaduras.some((armadura) => armadura.tipo == armaduraNueva.tipo))){
            return super.agregarArmadura(armaduraNueva)
        } else {
            return `El inventario está lleno o el gladiador ya posee la armadura. 
        Armaduras actuales: ${this.armaduras.map((armadura) => armadura.tipo).join(", ")}`
        }
    }

    aumentarDestreza(){
        if (this.armaduras.some((armadura) => armadura.tipo == "Escudo")){
            return this.destreza + (this.destreza * this.armaduras.reduce((cont, armadura) => cont += armadura.destrezaExtra, 0))
        } else {
            return this.destreza;
        }
    } 

    obtenerDefensa(){
        return super.obtenerPuntosArmadura() + this.aumentarDestreza()
    }

    obtenerPoderAtaque(){
        return super.obtenerPoderArma() + this.fuerza
    }

}

export class Dimachaerus extends Gladiador{
    constructor(tipo, destreza){
        super(tipo);
        this.destreza = destreza;
        this.fuerza = 10;
    }

    agregarArma(armaNueva){
        if (this.armas.length < 3){
            return super.agregarArma(armaNueva)
        } else {
            let armasActuales = this.armas.map((arma) => arma.nombre).join(", ")
            return `Inventario lleno, Los gladiadores Dimachaerus no pueden tener más de 3 armas. Armas actuales: ${armasActuales}.`
        }
    }

    agregarArmadura(armaduraNueva){
        return `El guerrero Dimachaerus no utiliza armadura.`
    }

    aumentarDestreza(){
        return `Al no poseer armadura, no se puede aumentar la destreza del Dimachaerus (lo puedes hacer en su creación)`
    }

    obtenerDefensa(){
        return this.destreza / 2
    }

    obtenerPoderAtaque(){
        return super.obtenerPoderArma()
    }

    atacar(rival){
        super.atacar(rival)
        this.destreza ++;
    }


}
