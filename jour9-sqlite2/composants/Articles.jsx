import { StyleSheet, Text, View, ScrollView , Button } from 'react-native';
import React , { useEffect , useState,  useContext } from 'react';
import { ArticleContext } from '../contexts/articleContext';

const Articles = ({db}) => {
    const {articleAmodifier, modifier} = useContext(ArticleContext);
    const [articles , setArticles] = useState([]);
    useEffect( function(){
        db.transaction(function(tx){
            // https://www.sqlite.org/lang_datefunc.html
            tx.executeSql(`SELECT id , titre , contenu , strftime('%d/%m/%Y' , dt_creation ) AS date FROM articles ;` ,
                    [] ,
                    function( transact, resultat){ 
                        // console.log( resultat.rows._array )
                        setArticles(resultat.rows._array)
                    },
                    function( transact , err){ 
                        console.log("ERREUR lors du SELECT" , err)
                    }
            );
        });
    } , [articles]);

    function supprimer(id){
        db.transaction(function(tx){
            tx.executeSql(`DELETE FROM articles WHERE id = ? `, 
                    [id] , 
                    function(transact, resultat){
                        console.log("DELETE success"); 
                    },
                    function(transact , err){
                        console.log("DELETE échec", err)
                    });
        });
    };



  return (
    <ScrollView>
        <View style={styles.box}>
        <Text>Liste des articles en base de données</Text>
            { articles.map(function(article){
                return <View key={article.id} style={styles.article}>
                        <Text>{ article.titre }</Text>
                        <Text>{ article.contenu }</Text>
                        <Text>{ article.date }</Text>
                        <View style={styles.actions}>
                            <Button title="modifier" onPress={ () => modifier(article) } color="orange"/>
                            <Button title="supprimer" onPress={ () => supprimer(article.id) } color="red"/>
                        </View>
                    </View>
            } ) }
        </View>
    </ScrollView>
  )
}
export default Articles
const styles = StyleSheet.create({
    box : {padding : 10 },
    scroll:{ flex : 1 },
    article : { borderBottomWidth : 1 , borderBottomColor : "black" , paddingBottom : 10 , marginBottom : 10} , 
    actions : { flexDirection : "row" , justifyContent: "space-evenly" , marginVertical : 10}
});

// cas pratique modifier 

// créer un context articleContext 

// { titre : "" , contenu : "" , id : 0}

// fonction modifier => cette fonction afficher l'article que vous voulez modifier dans la console 

// lorsque vous cliquez sur le bouton modifier =>