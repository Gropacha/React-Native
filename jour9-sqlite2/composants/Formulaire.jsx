import { StyleSheet, Text, View , TextInput , Button } from 'react-native';
import React , {useState, useContext, useEffect} from 'react';
import { ArticleContext } from '../contexts/articleContext';

const Formulaire = ({db}) => {
    const {articleAmodifier} = useContext(ArticleContext);
    const [titre, setTitre] = useState("");
    const [contenu, setContenu] = useState("");
    const [update, setUpdate] = useState(false);

    useEffect( function(){
        setTitre(articleAmodifier.titre);
        setContenu(articleAmodifier.contenu);
        setUpdate(true);
    }, [articleAmodifier]);

    function annuler(){
        setTitre('');
        setContenu('');
        setUpdate(false);
    }


    function ajouter(){
        db.transaction(function(tx){
            tx.executeSql( `INSERT INTO articles ( titre, contenu ) VALUES ( ? , ? );`,
                            [ titre  , contenu ] ,
                            function(transact, resultat){ 
                                console.log( "INSERT réussi" );
                                annuler();
                                
                            },
                            function(transact , err){
                                console.log( "INSERT échec" , err );
                            }
                        );
        });
    }

    function updateArticle(){
        //requete SQL // attention aux virgules entre les paramètres de la fonction executeSql(..., ...., ...., ...,)
        db.transaction(function(tx){
            tx.executeSql( `UPDATE articles SET titre = ? , contenu = ? WHERE id = ? ; `,
                            [ titre  , contenu, articleAmodifier.id ] ,
                            function(transact, resultat){ 
                                console.log( "UPDATE réussi" );
                                annuler();
                                
                            },
                            function(transact , err){
                                console.log( "UPDATE échec" , err );
                            }
                        );
        });

    }
  return (<View style={styles.box}>
                <Text style={styles.titre}>ajouter un nouvel article</Text>
                <TextInput placeholder='titre' value={titre} onChangeText={(text) => setTitre(text)}  style={styles.input}/>
                <TextInput placeholder='contenu' value={contenu} onChangeText={(text) => setContenu(text) } 
                multiline={true} numberOfLines={2}   style={styles.input} />
{ update? 
        <View>
            <Button onPress={updateArticle} title="confirmer" color="pink" />
            <Button onPress={annuler} title="annuler" color="purple" />
        </View>
       :
        <Button onPress={ajouter} title="ajouter" />
    }
        </View>
  );
}

export default Formulaire

const styles = StyleSheet.create({
    titre : {  paddingVertical : 10},
    box : { paddingHorizontal : 10 },
    input : { marginBottom : 10 , borderColor : "black" , borderWidth : 1 , padding : 5 }
});
