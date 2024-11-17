export class Coliseo{

    constructor(){
        this.gladiadores = []
    }

    agregarGladiador(gladiador){
        if (this.gladiadores.length < 2){
            this.gladiadores.push(gladiador)

            return `Gladiador ${gladiador.tipo} agregado con éxito.`
        } else{
            return `El límite son dos gladiadores por duelo.`
        }
    }

    eliminarGladiador(tipo){
        const index = this.gladiadores.findIndex((gladiador) => gladiador.tipo === tipo)

        if (index != -1){
            this.gladiadores.splice(index, 1)
            return `El gladiador ${tipo} ha sido removido del duelo.`
        }else {
            return "No se encontró el gladiador"
        }
    }
    

    duelo(){

        let ronda = 0;

        while ((this.gladiadores[0].vida > 0) && (this.gladiadores[1].vida > 0)){
            this.gladiadores[0].atacar(this.gladiadores[1]);
            this.gladiadores[1].atacar(this.gladiadores[0]);  
            
            ronda ++;

            console.log(`Ronda ${ronda} finalizada.`)

            console.log(`Vida de ${this.gladiadores[0].tipo}: ${this.gladiadores[0].vida}`)
            
            console.log(`Vida de ${this.gladiadores[1].tipo}: ${this.gladiadores[1].vida}`)
        }   

        if (this.gladiadores[0].vida <= 0){
            return `¡El ganador es ${this.gladiadores[1].tipo}!`
        }else {
            return `¡El ganador es ${this.gladiadores[0].tipo}!`
        }

    }
}