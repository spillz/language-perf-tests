const ARRAY_SIZE = 10000;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Compute dot product for the array
function dotProduct(points) {
    let sum = 0;
    for(let point of points) {
        sum += point.x * point.y;
    }
    return sum;
}

// Compute dot product for the array
function dotProduct2(points) {
    let sum = 0;
    for(let point of points) {
        sum += point[0] * point[1];
    }
    return sum;
}


function makePoints(ARRAY_SIZE) {
    // Fill the array with random points
    let points = [];
    for(let i = 0; i < ARRAY_SIZE; i++) {
        points.push(new Point(Math.random(), Math.random()));
    }
    return points;
}

function main() {

    // Measure performance
    let timedMake = 0;
    let timedDot = 0;
    for (i=0; i<100; ++i) {
        let start = Date.now();
        let points = makePoints(100000);
        timedMake += Date.now()-start;
        start = Date.now();
        let result = dotProduct(points);
        timedDot += Date.now()-start;
    }

    // console.log("Dot product:", result);
    console.log("Point create time taken:", timedMake/1000, "seconds");
    console.log("Dot product time taken:", timedDot/1000, "seconds");
    console.log("Total time taken:", (timedDot+timedMake)/1000, "seconds");
}

main();
