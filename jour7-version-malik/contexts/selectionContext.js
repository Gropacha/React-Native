import { createContext, useEffect , useState } from "react"

export const SelectionContext = createContext();

export function SelectionContextProvider(props){

    const [liste, setListe] = useState([])

    useEffect( function(){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
          .then(reponse => reponse.json())
          .then(data => setListe(data.drinks))
      } , [])

    function selectionner(nom){
        const cloneListe = [...liste];
        const cocktailSelectionne = cloneListe.find(function(item){ return item.strDrink === nom })
        const index = cloneListe.indexOf(cocktailSelectionne)
        cloneListe[index].selected = true
        setListe(cloneListe); 
    }

    function filteredListe(){
        return liste.filter(item  => item.selected)
    }

    return <SelectionContext.Provider value={{liste , selectionner , filteredListe}}>
        {props.children}
    </SelectionContext.Provider>
}