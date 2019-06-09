function noOutlet(arrX, arrY){
    // If all outbound lanes are close and atleast one incoming lane is open
    const isX = x => x === 0;
    const add = (x, y) => x +y;
    const sum = x => x.reduce(add);
    const checkOutbound = [2,3,6,7];
    const checkInbound = [0,1,4,5];
    const validate = (x, f, g) => x.map(i =>f(g[i])? 1: 0);

    const sumOutX = sum(validate(checkOutbound, isX, arrX));
    const sumOutY = sum(validate(checkOutbound, isX, arrY));
    const sumInX = sum(validate(checkInbound, isX, arrX));
    const sumInY = sum(validate(checkInbound, isX, arrX));

    return add(sumOutY, sumOutX) === 8 && add(sumInX, sumInY) < 8;
}

let a = noOutlet([1,1,0,0,3,3,0,0],[1,1,0,0,3,3,0,0]);
console.log(a);
let b = noOutlet([1,1,0,1,3,3,0,0],[1,1,0,0,3,3,0,0]);
console.log(b);
