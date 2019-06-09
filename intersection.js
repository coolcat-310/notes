class Intersection{
    constructor(name, laneX = [0,1,1,1,3,4, 1,1 ], laneY=[1,1,1,1,4,3,1,0], isValid = false, isConfirm = false){
        this.name = name;
        this.laneX = laneX;
        this.laneY = laneY;
        this.isValid = isValid;
        this.isConfirm = isConfirm;
    }

    getName(){
        return this.name;
    }
    setName(newName){
        this.name = newName;
    }
    getLaneX(){
        return this.laneX;
    }
    setLaneX(newLanes){
        this.laneX = newLanes;
    }
    getLaneY(){
        return this.laneY;
    }
    setLaneY(newLanes){
        this.laneY = newLanes;
    }
    getisValid(){
        return this.isValid;
    }
    setIsValid(newValid){
        this.isValid = newValid;
    }
    getisConfirm(){
        return this.isConfirm;
    }
    setIsConfirm(newConfirm){
        this.isConfirm = newConfirm;
    }
    toString(){
        return `Intersection:\n\tName: ${this.name}\n\tLaneX: ${this.laneX}\n\tLaneY: ${this.laneY}\n\tisValid: ${this.isValid}\n\tisConfirm: ${this.isConfirm}`;
    }
}
const isEqual = (x,y) => x === y;

function isValid(arrX,arrY){
    let warning_messages = {
        laneY_north_enter_error: null,
        laneY_south_enter_error: null,
        laneX_east_enter_error: null,
        laneX_west_enter_error: null,
        LaneY_northbound_error_inner: null,
        LaneY_northbound_error_outer: null,
        LaneY_southbound_error_inner: null,
        LaneY_southbound_error_outer: null,
        LaneX_westbound_error_inner: null,
        LaneX_westbound_error_outer: null,
        LaneX_eastbound_error_inner: null,
        LaneX_eastbound_error_outer: null,
        no_outlet: null,
        count: 0
    };
    // focus on laneY  in the north direction
    const laneY_north_enter = {outer: arrY[0], inner: arrY[1]};
    const laneY_north_outer = {outer: arrY[2], inner: arrY[3]};

    // focus on laneY  in the south direction
    const laneY_south_enter = {outer: arrY[4], inner: arrY[5]};
    const laneY_south_outer = {outer: arrY[6], inner: arrY[7]};

    // focus on laneX in the east direction
    const laneX_east_enter = {outer: arrX[0], inner: arrX[1]};
    const laneX_east_outer = {outer: arrX[2], inner: arrX[3]};

    // focus on laneX in the west direction
    const laneX_west_enter = {outer: arrX[4], inner: arrX[5]};
    const laneX_west_outer = {outer: arrX[6], inner: arrX[7]};

    if(noOutlet(arrX, arrY)){
        warning_messages.no_outlet = 'Warning: No outlet in the Intersection';
        warning_messages.count++;
    }

    if(!test_adjacentLane(laneY_north_enter)){
        warning_messages.laneY_north_enter_error = 'Warning: Northbound Lanes Entering the Intersection may cause accidents.';
        warning_messages.count++;
    }

    if(!test_adjacentLane(laneY_south_enter)){
        warning_messages.laneY_south_enter_error = 'Warning: Southbound Lanes Entering the Intersection may cause accidents.';
        warning_messages.count++;
    }

    if(!test_adjacentLane(laneX_east_enter)){
        warning_messages.laneX_east_enter_error = 'Warning: Westbound Lanes Entering the Intersection may cause accidents.';
        warning_messages.count++;
    }

    if(!test_adjacentLane(laneX_west_enter)){
        warning_messages.laneX_west_enter_error = 'Warning: Eastbound Lanes Entering the Intersection may cause accidents.';
        warning_messages.count++;
    }

    const north_accross = test_accrossLane(laneY_north_enter, laneY_north_outer);

    if(!north_accross.inner){
        warning_messages.LaneY_northbound_error_inner = 'Warning. Northbound Inner Lane is Close.';
        warning_messages.count++;
    }
    if(!north_accross.outer){
        warning_messages.LaneY_northbound_error_outer = 'Warning. Northbound Outer Lane is Close.';
        warning_messages.count++;
    }

    const south_accross = test_accrossLane(laneY_south_enter, laneY_south_outer);

    if(!south_accross.inner){
        warning_messages.LaneY_southbound_error_inner = 'Warning. Southbound Inner Lane is Close.';
        warning_messages.count++;
    }
    if(!south_accross.outer){
        warning_messages.LaneY_southbound_error_outer = 'Warning. Southbound Outer Lane is Close.';
        warning_messages.count++;
    }

    const east_accross = test_accrossLane(laneX_east_enter, laneX_east_outer);

    if(!east_accross.inner){
        warning_messages.LaneX_eastbound_error_inner = 'Warning. Eastbound Inner Lane is Close.';
        warning_messages.count++;
    }
    if(!east_accross.outer){
        warning_messages.LaneX_eastbound_error_outer = 'Warning. Eastbound Outer Lane is Close.';
        warning_messages.count++;
    }

    const west_accross = test_accrossLane(laneX_west_enter, laneX_west_outer);

    if(!west_accross.inner){
        warning_messages.LaneX_westbound_error_inner = 'Warning. Westbound Inner Lane is Close.';
        warning_messages.count++;
    }
    if(!west_accross.outer){
        warning_messages.LaneX_westbound_error_outer = 'Warning. Westbound Outer Lane is Close.';
        warning_messages.count++;
    }

    return warning_messages;
}

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

//Test case 1
let a = new Intersection("case 1", [2,1,1,1,4,1,0,1],[1,3, 1,1,1,1,1,1]);

console.log(isValid(a.getLaneX(), a.getLaneY()));
let ansA = isValid( a.getLaneX(), a.getLaneY());
a.setIsValid(ansA.count === 0);
console.log(a.toString());

let b = new Intersection("case 2", [2,2, 1,1,1,0,1,1],[1,1,0,1,1,3,1,1]);

console.log(isValid(b.getLaneX(), b.getLaneY()));
let ansB = isValid( b.getLaneX(), b.getLaneY());
b.setIsValid(ansB.count === 0);
console.log(b.toString());

let c = new Intersection("case 3", [1,1,1,1,0,0,1,1],[4,4,1,1,1,4,1,1]);

console.log(isValid(c.getLaneX(), c.getLaneY()));
let ansC = isValid( c.getLaneX(), c.getLaneY());
c.setIsValid(ansC.count === 0);
console.log(c.toString());

let d = new Intersection("case 4", [4,1,0,0,1,1,0,0],[1,1,0,0,1,1,0,0]);

console.log(isValid(d.getLaneX(), d.getLaneY()));
let ansD = isValid( d.getLaneX(), d.getLaneY());
d.setIsValid(ansD.count === 0);
console.log(d.toString());

// let i = new Intersection('a', [1,2,3,4,5,6,7,8],[ 10, 11,12,13,14,15,16, 12]);
// console.log(i.getName());
// i.setIsValid(true);
// i.setIsConfirm(true);
//
// //console.log(i.toString());

// let j = new Intersection("b");
// console.log(j.toString());
// console.log(isValid(j.getLaneX(), j.getLaneY()));
// X: outerr, inner,  outer, inner
//let k = new Intersection("c", [1,1, 0,1, 3,3, 1,1], [1,3, 1,1, 5,1,0,0]);
// let k = new Intersection("c", [1,3, 1,1, 5,1,0,0],[1,1, 0,1, 3,3, 1,1]);
// console.log(k.toString());
// console.log(isValid(k.getLaneX(), k.getLaneY()));
//
// let l = new Intersection("d", [2,3,1,1,5,3,0,0],[1,4,1,1,1,3,0,0]);
// console.log(isValid(l.getLaneX(), l.getLaneY()));
// let ansl = isValid(l.getLaneX(), l.getLaneY());
// l.setIsValid(ansl.count === 0);
// console.log(l.toString());
//
// let m = new Intersection("e", [4,1,0,1,5,5,0,0],[2,3,1,1,1,1,1,1]);
//
// console.log(isValid(m.getLaneX(), m.getLaneY()));
// let ans = isValid(m.getLaneX(), m.getLaneY());
// m.setIsValid(ans.count === 0);
// console.log(m.toString());
//
// let n = new Intersection("f", [1,1,0,0,3,3,0,0],[1,1,0,0,3,3,0,0]);
//
// console.log(isValid(n.getLaneX(), n.getLaneY()));
// let ansn = isValid( n.getLaneX(), n.getLaneY());
// n.setIsValid(ansn.count === 0);
// console.log(n.toString());
