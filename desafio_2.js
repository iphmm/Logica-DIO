let nick = prompt("Qual é o seu nick?");
let vitorias = prompt("Quantas vitórias você teve nessa season?");
let derrotas = prompt("E quantas derrotas?");
let saldo = saldoRanqueado(vitorias, derrotas);
let nivelRanqueado = nivelRanqueado(saldo);

console.log(`O ${nick} tem um saldo de: ${saldo} e está no ranque ${nivelRanqueado}`);


function saldoRanqueado(vitorias, derrotas){
    return vitorias - derrotas;
}

function nivelRanqueado(saldo){
    if(saldo < 10){
        return "Ferro";
    }
    else if (saldo > 11 && saldo < 20){
        return "Bronze";
    }
    else if (saldo > 21 && saldo < 50){
        return "Prata";
    }
    else if (saldo > 51 && saldo < 80){
        return "Ouro";
    }
    else if (saldo > 81 && saldo < 90){
        return "Diamante";
    }
    else if (saldo > 91 && saldo < 100){
        return "Lendário";
    }
    else {
        return "Imortal";
    }
}

//Testadp no Playcode