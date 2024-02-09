let cA = 1;
let cB = -5;
let cC = 4;

function calcularRaizesQuadraticas(a, b, c) {
    let delta = b ** 2 - 4 * a * c; //Fórmula do discriminante.
    
    if (delta > 0) { //Verifica quando são duas raízes reais distintas.
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [raiz1, raiz2];
    } else if (delta === 0) {
        let raiz = -b / (2 * a); //Quando tem uma raiz real.
        return raiz;
    } else { 
        return "Não-reais";
    }
}

let raizQuadratica = calcularRaizesQuadraticas(cA, cB, cC);
console.log(`Função: f(x) = (${cA})*x^2 + (${cB})x + (${cC}). Raízes: (${raizQuadratica}).`);
