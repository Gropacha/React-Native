import { createContext , useState } from "react" 

export const ArticleContext = createContext() ; 

export function ArticleContextProvider (props){ 

    const [articleAmodifier , setArticle] = useState({
        titre:"",
        contenu:"",
        id:0
    })
   
    function modifier(item=article){
        setArticle({
            titre:item.titre,
            contenu:item.contenu,
            id:item.id
        })
    }

   
    return <ArticleContext.Provider value={{ articleAmodifier , modifier}} >
        {props.children}
        
    </ArticleContext.Provider>
}