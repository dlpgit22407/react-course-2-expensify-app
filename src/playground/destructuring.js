console.log('destructuring')

const person = {
    name: 'Dennis Lee',
    age: 19,
    location: {
       // city: 'Virginia',
        temp: 70
    }
};

const { name = 'Anonymous', age} = person;

//const name = person.name;
//const age = person.age;

//console.log(`${person.name} is ${person.age}.`);
console.log(`${name} is ${age}.`);

//const { city, temp: temperature} = person.location;

//if (city && temperature) {
  //  console.log(`It's ${temperature} in ${city}`);
//}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Pulished'} = book.publisher;

console.log(publisherName);

//Array destruc

const address = ['5901 deep Creek Drive', 'Fredericksburg', 'Virginia', '22407'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$3.50', '$$2.75'];

const [selection, , mcost] = item

console.log(`A medium ${selection} costs ${mcost}`);