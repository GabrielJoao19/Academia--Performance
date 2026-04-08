import {test, expect} from 'vitest';
import { extraiPares } from './extraiPares';

test('pegando apenas numeros pares de arrays', () => {
    expect(extraiPares([8, 3, 9, 5, 6, 12])).toEqual([8,6,12])
})