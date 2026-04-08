export const ordenarElementos = (palavras: string[]) => {
    return palavras.sort((a,b) => b.localeCompare(a));
}