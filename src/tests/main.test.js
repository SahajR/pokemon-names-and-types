import {
    expect
} from 'chai';
import {pkmn} from '../names.js';
import {pkmnTypes} from '../types.js' 

describe('pokemon-names-and-types', () => {
    describe('all', () => {
        it('should be an array of strings', () => {
            expect(pkmn.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });
        
        it('should contain `Bulbasaur`', function() {
            expect(pkmn.all).to.include('Bulbasaur');
        });
    });

    describe('random', function() {
        it('should return a random item from the list', function() {
            var randomItem = pkmn.random();
            expect(pkmn.all).to.include(randomItem);
        });

        it('should return an array of random items if passed a number', function() {
            var randomItems = pkmn.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(pkmn.all).to.include(item);
            });
        });

    });

    describe('types', () => {
        it('should be weak to Water', () => {
            expect(pkmnTypes.isWeak("Fire", "Water")).to.equal(true);
        });
        it('should be Strong against Water', () => {
            expect(pkmnTypes.isStrong("Electric", "Water")).to.equal(true);
        });
        it('should have Water as a strength', () => {
            expect(pkmnTypes.getSuperEffectiveType("Electric")).to.equal("Water");
        });        
        it('should not have any strengths', () => {
            expect(pkmnTypes.getSuperEffectiveType("Normal")).to.equal("None");
        });
    });

});
