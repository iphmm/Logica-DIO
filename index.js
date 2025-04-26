let nome = prompt("Digite o nome do heroi");
let XP = prompt("Digite a quantidade de XP");
let elo;
if (XP <= 1000){
    elo = "Ferro";
} 
else if(XP > 1001 && XP <= 2000){
    elo = "Bronze";
}
else if(XP > 2001 && XP <= 5000){
    elo = "Prata";
}
else if(XP > 6001 && XP <= 7000){
    elo = "Ouro";
}
else if(XP > 7001 && XP <= 8000){
    elo = "Platina";
}
else if(XP > 8001 && XP <= 9000){
    elo = "Ascendente";
}
else if(XP > 9001 && XP <= 10000){
    elo = "Imortal";
}
else{
    elo = "Radiante";
}
console.log("O Herói: " +nome+ ", está no elo: " + elo)