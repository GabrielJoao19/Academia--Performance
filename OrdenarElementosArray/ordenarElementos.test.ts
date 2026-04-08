import { test, expect } from "vitest";
import { ordenarElementos } from "./ordenarElementos";

test('ordenar as palavras do array de forma decrescente', () => {
    expect(ordenarElementos(['carro', 'boneco', 'ave', 'lapis'])).toEqual(['lapis', 'carro', 'boneco', 'ave']);
});