
import { test, describe } from 'vitest';
import data from '../src/data/data.json'

describe('Superheroes Data', () => {
    test('prints superhero names', () => {
        data.forEach(card => {
        console.log(card.name);
        });
    });
});
