import {
    expect
} from 'chai';
import p from '../names.js';
import ty from '../types.js' 

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

    describe('types', () => {
        it('should be weak to Water', () => {
            expect(ty.isWeak("Fire", "Water")).to.equal(true);
        });
        it('should be Strong against to Water', () => {
            expect(ty.isStrong("Electric", "Water")).to.equal(true);
        });
        it('should have Water as a strength', () => {
            expect(ty.getSuperEffectiveType("Electric")).to.equal("Water");
        });        
        it('should not have any strengths', () => {
            expect(ty.getSuperEffectiveType("Normal")).to.equal("None");
        });
    });

});
