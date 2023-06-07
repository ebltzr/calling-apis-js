
//Im an object and will do something when that something is done either it will be resolved or rejected i will do the resolution (a function called resolve) if its resolved and will do the rejection behavior (a function called reject) if its rejected
const simonsPromise = new Promise((resolve, reject) => {
    console.log('I promise to make dinner');

    const headsOrTails = Math.floor(Math.random() * 2) ? 'heades' : 'tails';
    if (headsOrTails === 'heads') {
        resolve(); //this will go into the .then() then this is chained onto this promise
    } else {
        reject(); // this will go into the .catch() that is chained onto this promise
    }
});

// for every promist object i can chain .then and .catch
// .then will execute AFTER the promise finishes
// .catch will execute AFTER the promise finishes
simonsPromise.then( () => {
    console.log('After promise fulfilled')
}).catch(() => {
    console.log('After promise rejected')
});