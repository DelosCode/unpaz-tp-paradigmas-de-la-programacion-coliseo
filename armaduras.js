class Armadura{
    constructor(tipo){
        this.tipo = tipo;
    }

    obtenerPuntosArmaduraExtra(){
        return 0;
    }

    obtenerDestrezaExtra(){
        return 0;
    }
    
}

export class Casco extends Armadura{
    constructor(tipo){
        super(tipo)
    }

    obtenerPuntosArmaduraExtra(){
        return 10;
    }
}

export class Escudo extends Armadura{
    constructor(tipo){
        super(tipo);
    }

    obtenerPuntosArmaduraExtra(){
        return 5
    }

    obtenerDestrezaExtra(){
        return 0.1
    }
}

