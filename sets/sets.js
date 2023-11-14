class Tuple {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    product() {
        return this.x * this.y * this.z;
    }

    toString() {
        return `${this.x}, ${this.y}, ${this.z}`
    }
}

function timeIt(callback, repetitions) {
    const start = performance.now();
    for (let i = 0; i < repetitions; i++) {
        callback(i);
    }
    const end = performance.now();
    return end - start;
}

function perfRun(callback, repetitions, trials, name, init=null) {
    console.log('Run:', name)
    for(let i=0; i<trials; ++i) {
        if(init!=null) init(i);
        const time = timeIt(callback, repetitions);
        console.log(`Trial ${i} took ${time}`);
    }
    console.log();
}

const mySet = new Set();
const mySetStr = new Set();
const myArray = [];
const count = 100000;
const uniques = 1000;
const tuples = []
for(let i=0;i<count;i++) {
    tuples.push(new Tuple(i%uniques+4,i%uniques-7,i%uniques+100));
}

// Add objects to the Set
perfRun((i) => {
    const tuple = tuples[i]
    mySet.add(tuple);
}, count, 5, `Add ${count} objects with ${uniques} values to empty Set`, (trial)=>mySet.clear());
console.log('Set size', mySet.size);
console.log();
console.log();

// Add objects to the String Set
perfRun((i) => {
    const tuple = tuples[i]
    mySetStr.add(tuple.toString());
}, count, 5, `Add ${count} objects with ${uniques} values  to empty String Set`, (trial)=>mySetStr.clear());
console.log('String set size', mySetStr.size);
console.log();
console.log();


// Add objects to the Array
perfRun((i) => {
    const tuple = tuples[i].toString();
    if(myArray.indexOf(tuple)<0) {
        myArray.push(tuple);
    }
}, count, 5, `Add ${count} objects with ${uniques} values to empty Array implementation of set`, (trial)=>myArray.splice(0,myArray.length));
console.log('Array size', myArray.length);
console.log();
console.log();

// Lookup objects in the Set
perfRun((i) => {
    const tuple = tuples[i];
    return mySet.has(tuple);
}, count, 5, `Time to lookup ${count} objects in Set`);

// Lookup objects in the String Set
perfRun((i) => {
    const tuple = tuples[i];
    return mySetStr.has(tuple.toString());
}, count, 5, `Time to lookup ${count} objects in String Set`);

// Lookup objects in the Array
perfRun((i) => {
    const tuple = tuples[i].toString();
    return myArray.indexOf(tuple)>=0;
}, count, 5, `Time to lookup ${count} objects in Array implementation of Set`);

// Remove objects from the Set
perfRun((i) => {
    const tuple = tuples[i];
    mySet.delete(tuple);
}, count, 1, `Time to remove ${count} objects from Set`);
// console.log(`Set size: ${mySet.size}`);
// console.log();
// console.log();

// Remove objects from the Set
perfRun((i) => {
    const tuple = tuples[i];
    mySetStr.delete(tuple.toString());
}, count, 1, `Time to remove ${count} objects from String Set`);
// console.log(`String set size: ${mySetStr.size}`);
// console.log();
// console.log();

// Remove objects from the Set
perfRun((i) => {
    const tuple = tuples[i].toString();
    const ind = myArray.indexOf(tuple);
    if(ind>=0) myArray.splice(ind,1);
}, count, 1, `Time to remove ${count} objects from Array implementation of Set`);
// console.log(`Array size: ${myArray.length}`);
// console.log();
// console.log();
