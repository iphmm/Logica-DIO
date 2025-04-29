class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(tipo){
        if(tipo === "mago"){
            return "Usou Magia"
        }
        else if (tipo === "guerreiro"){
            return "Usou espada"
        }
        else if (tipo === "monge"){
            return "usou artes marciais"
        }
        else if (tipo === "ninja"){
            return "usou shuriken"
        } else {
            return "Classe invalida"
        }
    }

    escrever(tipo){
        console.log(`O tipo ${tipo}, atacou e ${this.atacar(tipo)}`);
    }
}
const personagem = new heroi('Gandalf', 300, 'mago');
personagem.escrever("mago");