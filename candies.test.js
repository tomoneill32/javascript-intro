const searchCandies = require('./candies')
const verifyFirstLetter = require('./filter')

describe('searchCandies', () => {
  it('produces an array of all the candies when searching for no string at the start and a maxprice of 1000', () => {
    expect(searchCandies('', 100000)).toEqual([ 'Aero', 'Skitties', 'Mars', 'Maltesers', 'Skittles', 'Starburst', 'Ricola', 'Polkagris', 'Pastila', 'Mentos', 'Raffaello', 'Gummi bears', 'Fraise Tagada' ]);
  });
  it('returns Mars Malteasers and Mentos when searching first string m', () => {
    expect(searchCandies('M', 10000)).toEqual(['Mars', 'Maltesers', 'Mentos']);
  });
  it('returns mars and malteasers for "Ma"', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers' ]);
  })
  it('filters the array of candies that are lower than the given max price', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  })
  it ('filters by first letters and price', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  })
  it ('filters by first letters and price', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  })
});