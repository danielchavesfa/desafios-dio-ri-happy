const listaDeHerois = [
  { nome: 'Reginaldo Holy Field ', xp: 944 },
  { nome: 'Padre Maceta Pobre', xp: 3159 },
  { nome: 'Power Guido', xp: 11032 },
  { nome: 'Tokokara Nakombe', xp: 4458 },
  { nome: "Tang D'Gergelim", xp: 4507 },
  { nome: 'Ana Maria Praga', xp: 10992 },
  { nome: 'Gordofredo', xp: 11223 },
  { nome: 'Bruxa Do Setentenhum', xp: 14637 },
  { nome: 'Britney Taka Spears ', xp: 16328 },
  { nome: 'Lombardi', xp: 1213 },
];

const ranks = {
  ferro: [0, 1000],
  bronze: [1001, 2000],
  prata: [2001, 5000],
  ouro: [5001, 7000],
  platina: [7001, 8000],
  ascendente: [8001, 9000],
  imortal: [9001, 10000],
  radiante: [Infinity],
};

listaDeHerois.forEach(verificarRank);

function apresentacaoDoHeroi(nome, nivel) {
  nivel = nivel[0].toUpperCase() + nivel.substring(1);
  return `O Herói de nome ${nome} está no nível ${nivel}.`;
}

function verificarRank({ nome, xp }) {
  let nivel;

  for (const [rank, [min, max]] of Object.entries(ranks)) {
    const ehInfinito = min === Infinity;
    const estaNoIntervaloMinMax = xp >= min && xp <= max;

    if (ehInfinito || estaNoIntervaloMinMax) {
      nivel = rank;
      break;
    }
  }

  console.log(apresentacaoDoHeroi(nome, nivel));
}

// RESULTADO FINAL:

/*
  O Herói de nome Reginaldo Holy Field  está no nível Ferro.
  O Herói de nome Padre Maceta Pobre está no nível Prata.
  O Herói de nome Power Guido está no nível Radiante.
  O Herói de nome Tokokara Nakombe está no nível Prata.
  O Herói de nome Tang D'Gergelim está no nível Prata.
  O Herói de nome Ana Maria Praga está no nível Radiante.
  O Herói de nome Gordofredo está no nível Radiante.
  O Herói de nome Bruxa Do Setentenhum está no nível Radiante.
  O Herói de nome Britney Taka Spears  está no nível Radiante.
  O Herói de nome Lombardi está no nível Bronze.
*/
