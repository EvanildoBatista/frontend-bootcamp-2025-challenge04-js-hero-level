console.log("## Classificador de Nível de Herói ##");

const heroes = [
  [ 'Destemido Estrela', 7500 ],
  [ 'Brilhante Protetor', 511 ],
  [ 'Invencível Cavaleiro', 6325 ],
  [ 'Sombrio Guardião', 2872 ],
  [ 'Brilhante Guerreiro', 1851 ],
  [ 'Destemido Guerreiro', 13421 ],
  [ 'Corajoso Titã', 9500 ],
  [ 'Ágil Guardião', 7441 ],
  [ 'Silencioso Sentinela', 6597 ],
  [ 'Corajoso Falcão', 8500 ],
  [ 'Veloz Protetor', 1422 ],
  [ 'Silencioso Vingador', 3000 ],
  [ 'Brilhante Vingador', 0 ],
  [ 'Invencível Guerreiro', 1000 ],
  [ 'Brilhante Sentinela', 1001 ],
  [ 'Misterioso Guardião', 2000 ],
  [ 'Radiante Cavaleiro', 2001 ],
  [ 'Veloz Lenda', 5000 ],
  [ 'Ágil Falcão', 5001 ],
  [ 'Poderoso Protetor', 7000 ],
  [ 'Valente Vingador', 7001 ],
  [ 'Corajoso Lenda', 8000 ],
  [ 'Valente Sombra', 8001 ],
  [ 'Poderoso Cavaleiro', 9000 ],
  [ 'Poderoso Vingador', 9001 ],
  [ 'Ágil Titã', 10000 ],
  [ 'Corajoso Sombra', 10001 ],
  [ 'Corajoso Guardião', 10002 ]
];

console.log('Há ' + heroes.length + ' heróis cadastrados.');
console.log('Checando o XP de cada herói...');
for(let i=0; i < heroes.length; i++) {
    let name = heroes[i][0];
    let level = heroes[i][1];
    let levelName = '';

    if(level <= 1000){
        levelName = 'Ferro';
    } else if(level <= 2000){
        levelName = 'Bronze';
    } else if(level <= 5000){
        levelName = 'Prata';
    } else if(level <= 7000){
        levelName = 'Ouro';
    } else if(level <= 8000){
        levelName = 'Platina';
    } else if(level <= 9000){
        levelName = 'Ascendente';
    } else if(level <= 10000){
        levelName = 'Imortal';
    } else {
        levelName = 'Radiante';
    }
    console.log('O Herói de nome ' + name + ' está no nível de ' + levelName);
}