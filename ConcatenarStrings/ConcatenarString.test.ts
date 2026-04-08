import {test, expect} from 'vitest';
import { concatenarString } from './ConcatenarStrings';

test('Concatena as strings arrays, com , typescript para ficar arrays com typescript', () => {
    expect(concatenarString(['arrays', 'com' , 'typescript'])).toBe('arrays com typescript');

});