import { createContext, useReducer, useState  } from "react";


function reduce(state, {type, payload}){
    switch (type) {
        case "ZOOM" : pay=Number.parseInt(payload); return {width:state.width*(1+pay/100), height:state.height*(1+pay/100)};
        case "DEZOOM" : pay=Number.parseInt(payload); return {width:state.width*(1-pay/100), height:state.height*(1-pay/100)};
        case "CACHE" : return {width:0, height:0};
        case "INIT" : return {width:200, height:200};
        default : return state;
    }
}

export const ExoContext = createContext();

export function ExoContextProvider(props){
    const [zoom, dispatch] = useReducer(reduce, {width:200, height:200});
    const [zoomPlus, setZoomPlus] = useState('1');
    const [zoomMoins, setZoomMoins] = useState('1');
    return <ExoContext.Provider value={{zoom, dispatch, zoomPlus, setZoomPlus, zoomMoins, setZoomMoins}}>
        {props.children}
    </ExoContext.Provider>
}

