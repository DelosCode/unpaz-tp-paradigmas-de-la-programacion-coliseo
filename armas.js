class Armas {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    obtenerTipo(){
        return this.tipo
    }

    obtenerValorAtaque(){
        return 0;
    }
}

export class ArmasFilo extends Armas{
    constructor(nombre, tipo, longitud, filo){
        super(nombre, tipo)
        this.longitud = longitud;
        this.filo = filo;
    }

    obtenerValorAtaque(){
        return this.filo * this.longitud
    }
}


export class ArmasContundentes extends Armas{
    constructor(nombre, tipo, peso){
        super(nombre, tipo);
        this.peso = peso
    }

    obtenerValorAtaque(){
        return this.peso
    }

}

