import { createContext, useEffect , useState } from "react"

export const SelectionContext = createContext();

export function SelectionContextProvider(props){

    const [liste, setListe] = useState([])

    useEffect( function(){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
          .then(reponse => reponse.json())
          .then(data => setListe(data.drinks))
      } , [])

      const [choixCocktails, setChoixCocktails] = useState([]);

      function ajouterCocktail(cocktail){
          const cloneChoix = [...choixCocktails];
          const index = cloneChoix.findIndex(item=>item==cocktail);
          if (index===-1) {
              cloneChoix.push(cocktail); 
              setChoixCocktails(cloneChoix);
              return true;
          }
          return false;
      }
  
      function enleverCocktail(cocktail){
          const cloneChoix = [...choixCocktails];
          const index = cloneChoix.findIndex(item=>item==cocktail);
          if (index!==-1) {
              cloneChoix.splice(index,1); 
              setChoixCocktails(cloneChoix);
              return true;
          }
          return false;
      }
    function selectionner(nom){
        const cloneListe = [...liste];
        const index = cloneListe.findIndex(function(item){ return item.strDrink === nom });
        cloneListe[index].selected = true;
        setListe(cloneListe); 
        ajouterCocktail(nom);
    }
    function deselectionner(nom){
        const cloneListe = [...liste];
        const index = cloneListe.findIndex(function(item){ return item.strDrink === nom });
        cloneListe[index].selected = false;
        setListe(cloneListe); 
        enleverCocktail(nom);
    }

    

    return <SelectionContext.Provider value={{liste , selectionner , deselectionner, choixCocktails}}>
        {props.children}
    </SelectionContext.Provider>
}