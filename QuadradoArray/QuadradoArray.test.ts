import { test, expect } from 'vitest'; // Adicione este import!
import { elevarQuadrado, elevarQuadradoForEach } from "./quadradoArray";

test('eleva ao quadrado 3,5,7,8,9,1 para ser igual a 9, 25, 49, 64, 81, 1', () => {
    // Fecha o parêntese do expect antes do .toEqual
    expect(elevarQuadrado([3, 5, 7, 8, 9, 1])).toEqual([9, 25, 49, 64, 81, 1]); 
});

test('eleva ao quadrado 3,5,7,8,9,1 para ser igual a 9, 25, 49, 64, 81, 1', () => {
    expect(elevarQuadradoForEach([3, 5, 7, 8, 9, 1])).toEqual([9, 25, 49, 64, 81, 1]);
});