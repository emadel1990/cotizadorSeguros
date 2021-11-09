
// diferencia de anios
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

// calcula total a pagar segun marca
export function calcularMarca(marca){
    let incremento;

    switch(marca){
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;    
        default:
            break;
    }

    return incremento;
}

// calcula total a pagar segun plan
export function calcularPlan(plan){
    return (plan[0] === 'basico' ? 1.30 : 1.50)
}

//muestra uppercase primer letra
export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1); 
}