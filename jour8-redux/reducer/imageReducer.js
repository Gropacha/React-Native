export function reduce(state, {type, payload}){
    switch (type) {
        case "ZOOM" : pay=Number.parseInt(payload); return {width:state.width*(1+pay/100), height:state.height*(1+pay/100)};
        case "DEZOOM" : pay=Number.parseInt(payload); return {width:state.width*(1-pay/100), height:state.height*(1-pay/100)};
        case "CACHE" : return {width:0, height:0};
        case "INIT" : return {width:200, height:200};
        default : return state;
    }
}