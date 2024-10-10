
function contarVocales( frase ) {

    const vocales = 'aeiouAEIOU';
    let contador = 0;
    let vocalesEncontradas = [];


    for (let i = 0; i < frase.length; i++) {
       
    if (vocales.includes(frase[i])) {
        contador++;
        vocalesEncontradas.push(frase[i]);
        }
    }

    return { 
    total: contador,
    vocales: vocalesEncontradas
};
}

const frase = prompt ("Ingresa una frase:");
const resultado = contarVocales(frase);

alert(`Total de vocales: ${resultado.total}\nVocales encontradas: ${resultado.vocales.join(', ')}`);