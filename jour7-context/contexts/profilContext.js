// je peux nommer ce fichier comme je veux
// et c'est à l'intérieur de ce fichier que je vais créer un state global

import {createContext, useState} from "react" // cette fonction permet de créer un état global



export const ProfilContext = createContext(); // store


export function ProfilContextProvider(props){ 
    //un composant qui va emballer l'intégralité de notre application
    // fournisseur
    const [profil, setProfil] = useState ({
        nom  : 'Alain',
        email : "alain@yahoo.fr",
        password : "123456",
        isLogged  : false,
    })

    


    function login(credentials){// identifiants en anglais
        const cloneProfil = {...profil};
        if(credentials.email===profil.email && credentials.password===profil.password){
            cloneProfil.isLogged = true;
            setProfil(cloneProfil);
            return true;
        }
        return false;
    }

    function logout(){ // force la valeur de isLogged du profil à false (déconnexion)
        const cloneProfil = {...profil};
        cloneProfil.isLogged = false;
        setProfil(cloneProfil);
    }

    // le context n'est pas PERSISTANT => modification dans la RAM les valeurs du profil, MAIS si le smartphone s'éteint ou modification du code => les valeurs modifées sont remises à zéro

    // bientôt nous verrons la persistance des données avec SQLite

    return <ProfilContext.Provider value={{profil, login, logout}}>
        {/**ATTENTION export un objet, faire une destructuration à l'import */}
        {props.children}
        {/** children est une propriété spéciale de props
         * qui permet d'afficher les composants à l'intérieur d'un autre
         */}
    </ProfilContext.Provider>

}