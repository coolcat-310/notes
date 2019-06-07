function test_adjacentLane(obj){
    let ans;
    switch(obj.inner){
        case(5): case(0):
            ans = true;
            break;
        case(4): case(2):
            ans = (obj.outer === 0 || obj.outer === 4);
            break;
        case(3): case(1):
            ans = !(obj.outer === 3 || obj.outer === 5);
            break;
        default:
            ans = false;
    }
    return ans;
}
console.log('test inner:0');
console.log(test_adjacentLane({inner: 0, outer: 0}));
console.log(test_adjacentLane({inner: 0, outer: 1}));
console.log(test_adjacentLane({inner: 0, outer: 2}));
console.log(test_adjacentLane({inner: 0, outer: 3}));
console.log(test_adjacentLane({inner: 0, outer: 4}));
console.log(test_adjacentLane({inner: 0, outer: 5}));

console.log('test inner:1');
console.log(test_adjacentLane({inner: 1, outer: 0}));
console.log(test_adjacentLane({inner: 1, outer: 1}));
console.log(test_adjacentLane({inner: 1, outer: 2}));
console.log(test_adjacentLane({inner: 1, outer: 3}));
console.log(test_adjacentLane({inner: 1, outer: 4}));
console.log(test_adjacentLane({inner: 1, outer: 5}));

console.log('test inner:2');
console.log(test_adjacentLane({inner: 2, outer: 0}));
console.log(test_adjacentLane({inner: 2, outer: 1}));
console.log(test_adjacentLane({inner: 2, outer: 2}));
console.log(test_adjacentLane({inner: 2, outer: 3}));
console.log(test_adjacentLane({inner: 2, outer: 4}));
console.log(test_adjacentLane({inner: 2, outer: 5}));

console.log('test inner:3');
console.log(test_adjacentLane({inner: 3, outer: 0}));
console.log(test_adjacentLane({inner: 3, outer: 1}));
console.log(test_adjacentLane({inner: 3, outer: 2}));
console.log(test_adjacentLane({inner: 3, outer: 3}));
console.log(test_adjacentLane({inner: 3, outer: 4}));
console.log(test_adjacentLane({inner: 3, outer: 5}));

console.log('test inner:4');
console.log(test_adjacentLane({inner: 4, outer: 0}));
console.log(test_adjacentLane({inner: 4, outer: 1}));
console.log(test_adjacentLane({inner: 4, outer: 2}));
console.log(test_adjacentLane({inner: 4, outer: 3}));
console.log(test_adjacentLane({inner: 4, outer: 4}));
console.log(test_adjacentLane({inner: 4, outer: 5}));

console.log('test inner:5');
console.log(test_adjacentLane({inner: 5, outer: 0}));
console.log(test_adjacentLane({inner: 5, outer: 1}));
console.log(test_adjacentLane({inner: 5, outer: 2}));
console.log(test_adjacentLane({inner: 5, outer: 3}));
console.log(test_adjacentLane({inner: 5, outer: 4}));
console.log(test_adjacentLane({inner: 5, outer: 5}));