function check(arrform){
    console.log('submit all forms');
    let arrX = [-1, -1, -1, -1, -1, -1, -1, -1];
    let arrY = [-1, -1, -1, -1, -1, -1, -1, -1];
    for(let i=0; i< arrform.length; i++) {
        const str = arrform[i]['className'];
        const form = arrform[i]['form'];
        let ans = $(`input[name=${str}]:checked`, form).val();
        ans = parseInt(ans);
        switch(str){
            case 'northbound-outer':
                arrY[0] = ans;
                break;
            case 'northbound-inner':
                arrY[1] = ans;
                break;
            case 'northbound-leave-outer':
                arrY[2] = ans;
                break;
            case 'northbound-leave-inner':
                arrY[3] = ans;
                break;
            case 'southbound-outer':
                arrY[4] = ans;
                break;
            case 'southbound-inner':
                arrY[5] = ans;
                break;
            case 'southbound-leave-outer':
                arrY[6] = ans;
                break;
            case 'southbound-leave-inner':
                arrY[7] = ans;
                break;
            case 'westbound-outer':
                arrX[0] = ans;
                break;
            case 'westbound-inner':
                arrX[1] = ans;
                break;
            case 'westbound-leave-outer':
                arrX[2] = ans;
                break;
            case 'westbound-leave-inner':
                arrX[3] = ans;
                break;
            case 'eastbound-outer':
                arrX[4] = ans;
                break;
            case 'eastbound-inner':
                arrX[5] = ans;
                break;
            case 'eastbound-leave-outer':
                arrX[6] = ans;
                break;
            case 'eastbound-leave-inner':
                arrX[7] = ans;
                break;
            default:
                break;
        }
    }
    console.log('ArrX');
    console.log(arrX);

    console.log('ArrY');
    console.log(arrY);

    console.log(isValid(arrX, arrY));
}

function displayResult(form, className, id='none'){
    console.log('button is click');
    const str = `input[name=${className}]:checked`;
    let option = parseInt($(str, form).val());
    console.log(`${className}: ${option}`);
    //let source = getImageSource(className, parseInt(ans));

    switch(className){
        case 'northbound-outer': case 'northbound-inner':
            if(option === 0){
                $("#"+id).attr({"src": "close.png"});
            } else if(option === 1){
                $("#"+id).attr({"src": "northbound-straight.png"});
            } else if(option === 2){
                $("#"+id).attr({"src": "northbound-straight-right.png"});
            } else if(option === 3){
                $("#"+id).attr({"src": "northbound-straight-left.png"});
            } else if(option === 4){
                $("#"+id).attr({"src": "northbound-right.png"});
            } else if(option === 5){
                $("#"+id).attr({"src": "northbound-left.png"});
            }
            break;
        case 'northbound-leave-outer':
        case 'northbound-leave-inner':
            console.log('northbound-leave-inner/outer');
            if(option === 0){
                $("#"+id).attr({"src": "close.png"});
            } else if(option === 1){
                $("#"+id).attr({"src": "northbound-straight.png"});
            }
            break;
        case 'southbound-outer':
        case 'southbound-inner':

            if(option === 0){
                $("#"+id).attr({"src": "close.png"});
            } else if(option === 1){
                $("#"+id).attr({"src": "southbound-straight.png"});
            } else if(option === 2){
                $("#"+id).attr({"src": "southbound-straight-right.png"});
            } else if(option === 3){
                $("#"+id).attr({"src": "southbound-straight-left.png"});
            } else if(option === 4){
                $("#"+id).attr({"src": "southbound-right.png"});
            } else if(option === 5){
                $("#"+id).attr({"src": "southbound-left.png"});
            }
                break;
        case 'southbound-leave-outer':
        case 'southbound-leave-inner':
            console.log('southbound-leave-inner/outer');
            if(option === 0){
                $("#"+id).attr({"src": "close.png"});
            } else if(option === 1){
                //return 'southbound-straight.png';
                $("#"+id).attr({"src": "southbound-straight.png"});
            }

            break;
        case 'westbound-outer':
        case 'westbound-inner':

            if(option === 0){
                $("#"+id).attr({"src": "close.png"});
            } else if(option === 1){
                $("#"+id).attr({"src": "westbound-straight.png"});
            } else if(option === 2){
                $("#"+id).attr({"src": "westbound-straight-right.png"});
            } else if(option === 3){
                $("#"+id).attr({"src": "westbound-straight-left.png"});
            } else if(option === 4){
                $("#"+id).attr({"src": "westbound-right.png"});

            } else if(option === 5){
                $("#"+id).attr({"src": "westbound-left.png"});
            }
            break;
        case 'westbound-leave-outer':
        case 'westbound-leave-inner':
            if(option === 0){
                $("#"+id).attr({"src": "close.png"});
            } else if(option === 1){
                $("#"+id).attr({"src": "westbound-straight.png"});
            }
            break;
        case 'eastbound-outer':
        case 'eastbound-inner':
            if(option === 0){
                $("#"+id).attr({"src": "close.png"});
            } else if(option === 1){
                $("#"+id).attr({"src": "eastbound-straight.png"});
            } else if(option === 2){
                $("#"+id).attr({"src": "eastbound-straight-right.png"});
            } else if(option === 3){
                $("#"+id).attr({"src": "eastbound-straight-left.png"});
            } else if(option === 4){
                $("#"+id).attr({"src": "eastbound-right.png"});

            } else if(option === 5){
                $("#"+id).attr({"src": "eastbound-left.png"});
            }
            break;
        case 'eastbound-leave-outer':
        case 'eastbound-leave-inner':
            console.log('eastbound-leave-outer/inner');
            if(option === 0){
                console.log('inside close');
                $("#"+id).attr({"src": "close.png"});
            } else if(option === 1){
                console.log('inside straight');
                $("#"+id).attr({"src": "eastbound-straight.png"});
            }
            break;
        default:
            break;
    }

    //$("#image1").attr({"src":source});
}

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

function getImageSource(className, option){
    let result = '';
    switch(className){
        case 'northbound-outer': case 'northbound-inner':
            if(option === 0){
                result = 'close.png';
            } else if(option === 1){
                result = 'northbound-straight.png';
            } else if(option === 2){
                result = 'northbound-straight-right.png';
            } else if(option === 3){
                result = 'northbound-straight-left.png';
            } else if(option === 4){
                result = 'northbound-right';
            } else if(option === 5){
                result = 'northbound-left';
            }
            return result;
            break;
        // case 'northbound-inner':
        //     arrY[1] = ans;
        //     break;
        case 'northbound-leave-outer':
            //arrY[2] = ans;
            break;
        case 'northbound-leave-inner':
            //arrY[3] = ans;
            break;
        case 'southbound-outer':
            //a/rrY[4] = ans;
            break;
        case 'southbound-inner':
            //arrY[5] = ans;
            break;
        case 'southbound-leave-outer':
            //arrY[6] = ans;
            //break;
        case 'southbound-leave-inner':
            console.log('southbound-leave-inner');
            if(option === 0){
                return 'close.png';
            } else if(option === 1){
                return 'southbound-straight.png';
            }

            break;
        case 'westbound-outer':
            //arrX[0] = ans;
            break;
        case 'westbound-inner':
            //arrX[1] = ans;
            break;
        case 'westbound-leave-outer':
            //arrX[2] = ans;
            break;
        case 'westbound-leave-inner':

            break;
        case 'eastbound-outer':
            //arrX[4] = ans;
            break;
        case 'eastbound-inner':
            //arrX[5] = ans;
            break;
        case 'eastbound-leave-outer':
            //arrX[6] = ans;
            break;
        case 'eastbound-leave-inner':
            //arrX[7] = ans;
            break;
        default:
            break;
    }
    return result;
}



