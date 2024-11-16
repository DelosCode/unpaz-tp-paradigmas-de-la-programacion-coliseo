class Armadura{
    constructor(tipo){
        this.tipo = tipo;
    }
}


export class Casco extends Armadura{
    constructor(tipo){
        super(tipo);
        this.puntosArmaduraExtra = 10;
        this.destrezaExtra = 0;
    }

}

export class Escudo extends Armadura{
    constructor(tipo){
        super(tipo);
        this.puntosArmaduraExtra = 5;
        this.destrezaExtra = 0.1;
    }
}

