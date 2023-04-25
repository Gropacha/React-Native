// vous pouvez l'appel comme vous voulez 
// dans ce fichier que l'on va créer un state global 

import { createContext , useState } from "react" // cette fonction qui permet de créer un état global

export const ProfilContext = createContext() ; // store 

export function ProfilContextProvider (props){ 
    // un composant qui va emballer l'intégralité de notre application 
    // rdv 10h50 @ toute suite !!
    // Provider => Fournir à l'ensemble de notre App le state global
    const [profil , setProfil] = useState({
        nom : "Alain" ,
        email : "a@yahoo.fr",
        password : "123456",
        isLogged : false
    })
    // rdv 13h35 bon appétit !!!!!!!!!

    function login(crediantials){ // identifiants (connexion)
        const cloneProfil = {...profil}
        if(crediantials.email === profil.email && crediantials.password === profil.password ){
            cloneProfil.isLogged = true 
            setProfil(cloneProfil)
            return true; // les identifiants sont corrects
        }
        return false
    }

    function logout(){ // change la valeur isLogged de profil => true => false (déconnexion)
        const cloneProfil = {...profil} ; 
        cloneProfil.isLogged = false 
        setProfil(cloneProfil)
    }

    // le context n'est pas PERSISTANT => modifier dans la RAM les valeurs du profils
    // MAIS si le smartphone s'éteint ou modification code => les valeurs modifiées sont 
    // remise à zero
    return <ProfilContext.Provider value={{ profil , login , logout}} >
        {props.children}
        {/** children est une propriété spéciale de props 
         * permet d'afficher les composants à l'intérieur d'un autre 
         */}
    </ProfilContext.Provider>
}