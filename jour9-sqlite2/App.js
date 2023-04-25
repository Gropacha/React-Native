import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Platform } from 'react-native';
import * as SQLITE from "expo-sqlite"
import {useEffect , useState} from "react"
import Formulaire from './composants/Formulaire';
import Articles from './composants/Articles';
import { ArticleContextProvider } from './contexts/articleContext';

function openDB(){
  if(Platform.OS === "web"){
    return {
      transaction : () => {
        return {
          executeSql : () => {} 
        }
      }
    }
  }
  return SQLITE.openDatabase("demo3.sqlite");
}


const db = openDB() ; 

export default function App() {

  useEffect( function(){
    db.transaction(function(tx){
      tx.executeSql(`CREATE TABLE IF NOT EXISTS articles (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    titre VARCHAR(200),
                    contenu TEXT ,
                    dt_creation DATETIME DEFAULT CURRENT_TIMESTAMP
                  )`,
                    [],
                    function(transact, resultat){ console.log("table article créé ou déjà créé") },
                    function(transact , err){ console.log("erreur lors de la création") })
    })
  } , [])

  return (
    <ArticleContextProvider>
      <View style={styles.container}>
        <Text style={styles.titre}>Utiliser SQLITE dans React Native</Text>
        <Formulaire db={db}/>
        <Articles db={db}/>
        <StatusBar style="auto" />
      </View>
    </ArticleContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : 30
  },
  titre:{
    textAlign : "center",
    fontSize : 20
  }
});