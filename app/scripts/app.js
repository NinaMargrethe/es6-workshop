let names = ['Per', 'Pål', 'Espen'];

console.log(...names);


// REST TASK

//Helper function
/*
 * Takes an element and an array and returns
 * true if the array contains the element.
 */
var contains = (list, element) => {
    return list.some(value => {
      return value === element;
    });
};


// SPREAD TASK

var newOwners = [
  {
    id: 1,
    cutId: 1,
    area: 10,
    district: 60,
    firstName: 'Pål',
    lastName: 'Ruud',
    address: 'Tøyen',
    place: 'Oslo',
    c1: 'a',
    c2: 'u',
    c3: '',
    c4: 'bo',
    c5: 't',
    c6: 'a'
  },
  {
    id: 2,
    cutId: 2,
    area: 10,
    district: 60,
    firstName: 'Lars',
    lastName: 'Barlindhaug',
    address: 'Dælenenga',
    place: 'Oslo',
    c1: 'a',
    c2: 't',
    c3: 'd',
    c4: 'gg',
    c5: 'q',
    c6: 'c'
  }];