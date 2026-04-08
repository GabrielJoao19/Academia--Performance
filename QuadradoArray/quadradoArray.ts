export const elevarQuadrado = (numeros: number[]) => {
    const resultado : number[] = [];

    for (let i: number = 0; i < numeros.length; i++){
        resultado[i] = numeros[i] * numeros[i];
    }

    return resultado;
}

export const elevarQuadradoForEach = ((numeros: number[]) => {
    const resultado : number[] = [];

    numeros.forEach((numero, i ) => {
        resultado[i] = numero * numero;
    })
    
    return resultado;
})