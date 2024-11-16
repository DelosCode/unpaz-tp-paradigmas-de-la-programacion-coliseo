class Arma {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
}

export class ArmaFilosa extends Arma{
    constructor(nombre, tipo, longitud, filo){
        super(nombre, tipo)
        this.longitud = longitud;
        this.filo = filo;
        this.valorAtaque = this.filo * this.longitud
    }
}


export class ArmaContundente extends Arma{
    constructor(nombre, tipo, peso){
        super(nombre, tipo);
        this.peso = peso;
        this.valorAtaque = peso;

}
}
