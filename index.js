const readline = require('readline-sync');
let propriedadesCSS = []

console.log('Informe as propriedades de CSS para ordenar de A-Z, informe SAIR para terminar.');

let input;
while (input !== 'SAIR') {
  input = readline.question('> ');
  if (input !== 'SAIR') {
    propriedadesCSS.push(input);
  };
};

propriedadesCSS.sort();

console.log(`Propriedades CSS ordenadas de A-Z:`);
for (propriedadeCSS of propriedadesCSS) {
  console.log(propriedadeCSS);
};





