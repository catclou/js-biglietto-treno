// 1) prompt per chiedere all'utente i km da percorrere
const chilometri = prompt("Quanti chilometri vuoi percorrere (in cifre)?");
console.log(chilometri);

// 2) prompt per chiedere l'età del passeggero
const età = prompt("Quanti anni hai (in cifre)?");
console.log(età);

// 3) calcolare i km richiesti moltiplicando per 0.21
// 4) condizione if per sapere se è minorenne e applicare nel caso true il 20% di sconto
// 5) condizione if per sapere se è over 65 e applicare nel caso true il 40% di sconto
// 6) i risultati dovranno avere massimo due decimali (provare ad usare .toFixed(2))