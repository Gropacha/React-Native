import {configureStore} from '@reduxjs/toolkit'

function reducerNb(state=0, {type, increment=1}){
    switch (type){
        case "AUGMENTER" : return(state + increment); // NB_AUGMENTER
        default : return state;
    }
}

const defaultProfil = {login:'a', isLogged:false}

function reducerProfil (state=defaultProfil, {type}){
    switch (type) {
        case "LOGIN" : return {...state, isLogged:true}; //PROFIL_LOGIN
        case "LOGOUT" : return {...state, isLogged:false}; //PROFIL_LOGOUT
        default : return state;
    }
}

const reducer = { // permet de combiner plusieurs fonctions réductrices // pour plus de sécurité préfixer le nom des actions
    reducerNb:reducerNb,
    reducerProfil:reducerProfil
};

export const myStore = configureStore({reducer})


