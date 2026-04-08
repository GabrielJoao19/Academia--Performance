export const extraiPares = (numeros: number[]) => {
    const pares = numeros.filter(num => num%2 === 0);

    return pares;
}