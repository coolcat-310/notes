function test_accrossLane(local, across){
    let ans = {
                inner: null,
                outer: null
    };

    for(let prop in across){
        if(across.hasOwnProperty(prop)) {
            if (across[prop] === 0) {
                ans[prop] = [0, 4, 5].includes(local[prop]);
            } else if (across[prop] === 1) {
                ans[prop] = true;
            }
        }
    }
    return ans;
}
console.log("accross is block and inner is not block(0), right or left turn (4,5)");
console.log(test_accrossLane({inner: 1, outer: 1}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 1, outer: 2}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 1, outer: 3}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 2, outer: 1}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 3, outer: 2}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 3, outer: 3}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 2, outer: 2}, {inner: 0, outer: 0}));

console.log("accross is block but local is block(0) or right or left turn(4,5)");
console.log(test_accrossLane({inner: 0, outer: 0}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 0, outer: 4}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 0, outer: 5}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 4, outer: 0}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 5, outer: 0}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 5, outer: 5}, {inner: 0, outer: 0}));
console.log(test_accrossLane({inner: 4, outer: 4}, {inner: 0, outer: 0}));

console.log("accross is NOT block but local is block(0) or right or left turn(4,5)");
console.log(test_accrossLane({inner: 0, outer: 0}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 0, outer: 4}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 0, outer: 5}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 4, outer: 0}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 5, outer: 0}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 5, outer: 5}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 4, outer: 4}, {inner: 1, outer: 1}));

console.log("accross is NOT block and inner is not block(0), right or left turn (4,5)");
console.log(test_accrossLane({inner: 1, outer: 1}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 1, outer: 2}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 1, outer: 3}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 2, outer: 1}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 3, outer: 2}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 3, outer: 3}, {inner: 1, outer: 1}));
console.log(test_accrossLane({inner: 2, outer: 2}, {inner: 1, outer: 1}));




// console.log(test_accrossLane({inner: 5, outer: 2}, {inner: 0, outer: 0}));
// console.log(test_accrossLane({inner: 0, outer: 0}, {inner: 0, outer: 0}));
//
// console.log(test_accrossLane({inner: 1, outer: 1}, {inner: 1, outer: 0}));