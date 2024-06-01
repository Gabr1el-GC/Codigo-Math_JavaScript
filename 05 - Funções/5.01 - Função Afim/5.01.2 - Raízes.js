let cA = 3;
let cB = 10;

function calculoRaizesAfim(a, b) {
    if (a !== 0) { // Verifica se 'a' é diferente de zero.
        let raiz = -b / a;
        return raiz;
    } else if (b === 0) { //O '===' é similiar ao '==', mas ele exige que os valores e tipos sejam idênticos.
        return 'A função tem infinitas raízes.';
    } else { //Caso a = 0, b ≠ 0, não tem raízes.
        return 'A função não tem raízes.';
    }
}

let raizAfim = calculoRaizesAfim(cA, cB);
console.log(`Função: f(x) = (${cA})*x + (${cB}). Raiz: ${raizAfim}`)
