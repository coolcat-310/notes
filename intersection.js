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

    if(test_adjacentLane(laneY_north_enter)){
        console.log('pass');
    } else {
        warning_messages.laneY_north_enter_error = 'Warning: Northbound Lanes Entering the Intersection may cause accidents.';
    }

    if(test_adjacentLane(laneY_south_enter)){
        console.log('pass');
    } else {
        warning_messages.laneY_south_enter_error = 'Warning: Southbound Lanes Entering the Intersection may cause accidents.';
    }

    if(test_adjacentLane(laneX_east_enter)){
        console.log('pass');
    } else {
        warning_messages.laneX_east_enter_error = 'Warning: Eastbound Lanes Entering the Intersection may cause accidents.';
    }

    if(test_adjacentLane(laneX_west_enter)){
        console.log('pass');
    } else {
        warning_messages.laneX_west_enter_error = 'Warning: Westbound Lanes Entering the Intersection may cause accidents.';
    }

    const north_accross = test_accrossLane(laneY_north_enter, laneY_north_outer);
    const south_accross = test_accrossLane(laneY_south_enter, laneY_south_outer);

    const east_accross = test_accrossLane(laneX_east_enter, laneX_east_outer);
    const west_accross = test_accrossLane(laneX_west_enter, laneX_west_outer);

    if(north_accross.inner && north_accross.outer){
        console.log('pass Inner')
    }else{
        if(!north_accross.inner){
            warning_messages.LaneY_northbound_error_inner = 'Warning. Northbound Inner Lane is Close.';
        }
        if(!north_accross.outer){
            warning_messages.LaneY_northbound_error_outer = 'Warning. Northbound Outer Lane is Close.';
        }

    }
    if(south_accross.inner && south_accross.outer){
        console.log('pass Inner')
    }else{
        if(!south_accross.inner){
            warning_messages.LaneY_southbound_error_inner = 'Warning. Southbound Inner Lane is Close.';
        }
        if(!south_accross.outer){
            warning_messages.LaneY_southbound_error_outer = 'Warning. Southbound Outer Lane is Close.';
        }

    }
    if(east_accross.inner && east_accross.outer){
        console.log('pass Inner')
    }else{
        if(!east_accross.inner){
            warning_messages.LaneX_eastbound_error_inner = 'Warning. Eastbound Inner Lane is Close.';
        }
        if(!east_accross.outer){
            warning_messages.LaneX_eastbound_error_outer = 'Warning. Eastbound Outer Lane is Close.';
        }

    }
    if(west_accross.inner && west_accross.outer){
        console.log('pass Inner')
    }else{
        if(!west_accross.inner){
            warning_messages.LaneX_westbound_error_inner = 'Warning. Westbound Inner Lane is Close.';
        }
        if(!west_accross.outer){
            warning_messages.LaneX_westbound_error_outer = 'Warning. Westbound Outer Lane is Close.';
        }
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


// let i = new Intersection('a', [1,2,3,4,5,6,7,8],[ 10, 11,12,13,14,15,16, 12]);
// console.log(i.getName());
// i.setIsValid(true);
// i.setIsConfirm(true);
//
// //console.log(i.toString());

let j = new Intersection("b");
console.log(j.toString());
console.log(isValid(j.getLaneX(), j.getLaneY()));