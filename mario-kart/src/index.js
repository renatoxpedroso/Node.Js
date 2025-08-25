const player1 = {
  Nome: "Mario",
  Velocidade: 4,
  Manobrabilidade: 3,
  Poder: 3,
  Pontos: 0
};

const player2 = {
  Nome: "Luigi",
  Velocidade: 3,
  Manobrabilidade: 4,
  Poder: 4,
  Pontos:0
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case (random < 0.33):
            result = "Reta";
            break;
        case (random < 0.66):
            result = "Curva";
            break;
        default:
            result = "Confronto";
            break;
    }

    return result;

}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round ++) {
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();

        switch (block) {
            case "Reta":
                console.log("Bloco: 🏎️  Acelerando na reta!");
                break;
            case "Curva":
                console.log("Bloco: 🛑 Reduzindo a velocidade na curva!");
                break;
            case "Confronto":
                console.log("Bloco: ⚔️ Preparando para o confronto!");
                break;
        }

        let rollDice1 = await rollDice();
        let rollDice2 = await rollDice();

        console.log(`🎲 ${character1.Nome} rolou: ${rollDice1}`);
        console.log(`🎲 ${character2.Nome} rolou: ${rollDice2}`);

        let testSkill1 = 0;
        let testSkill2 = 0;

        switch (block) {
            case "Reta":
                testSkill1 = character1.Velocidade;
                testSkill2 = character2.Velocidade;
                break;
            case "Curva":
                testSkill1 = character1.Manobrabilidade;
                testSkill2 = character2.Manobrabilidade;
                break;
            case "Confronto":
                testSkill1 = character1.Poder;
                testSkill2 = character2.Poder;
                break;
        }

        if (rollDice1 + testSkill1 > rollDice2 + testSkill2) {
            console.log(`🏁 ${character1.Nome} venceu está rodada!`);
            character1.Pontos += 1;
            if (character2.Pontos > 0) {
                character2.Pontos -= 1;
            }
        } else if (rollDice2 + testSkill2 > rollDice1 + testSkill1) {
            console.log(`🏁 ${character2.Nome} venceu está rodada!`);
            character2.Pontos += 1;
            if (character1.Pontos > 0) {
                character1.Pontos -= 1;
            }
        } else {
            console.log(`🏁 Empate na rodada!`);
        }
    }
}

async function declareWinner(character1, character2) {
    console.log(`\n🏆 Placar Final:`);
    console.log(`${character1.Nome}: ${character1.Pontos} pontos`);
    console.log(`${character2.Nome}: ${character2.Pontos} pontos`);

    if (character1.Pontos > character2.Pontos) {
        console.log(`\n🎉 ${character1.Nome} é o grande vencedor!`);
    } else if (character2.Pontos > character1.Pontos) {
        console.log(`\n🎉 ${character2.Nome} é o grande vencedor!`);
    } else {
        console.log(`\n🤝 A corrida terminou em empate!`);
    }

}

(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.Nome} e ${player2.Nome} começando...\n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
