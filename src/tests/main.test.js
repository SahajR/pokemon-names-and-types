import {
    expect
} from 'chai';
import p from '../index.js';

describe('pokemon-names-and-types', () => {
    describe('all', () => {
        it('should be an array of strings', () => {
            expect(p.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });
        
        it('should contain `Bulbasaur`', function() {
            expect(p.all).to.include('Bulbasaur');
        });
    });

    describe('random', function() {
        it('should return a random item from the starWars.all', function() {
            var randomItem = p.random();
            expect(p.all).to.include(randomItem);
        });

        it('should return an array of random items if passed a number', function() {
            var randomItems = p.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(p.all).to.include(item);
            });
        });

    });
});
