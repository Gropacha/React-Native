import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as SQLITE from "expo-sqlite";
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native';

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
  return SQLITE.openDatabase("todo4.sqlite");
}


const db = openDB() ; 

export default function App() {

  const [aFaire, setAFaire] = useState('');
  

  useEffect( function(){
    db.transaction(function(tx){
      tx.executeSql(`CREATE TABLE IF NOT EXISTS todo (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    contenu TEXT ,
                    status BOOLEAN
                  )`,
                    [],
                    function(transact, resultat){ 
                      console.log("table todo créé ou déjà créé");
                     },
                    function(transact , err){
                      console.log("erreur lors de la création");
                    });
    })
  } , []);

function ajouter(truc){ 
  db.transaction(function(tx){
    tx.executeSql(`INSERT INTO todo (contenu, status) VALUES ( ?, ? );`,
                  [truc, true],
                  function(transact, resultat){ 
                    console.log("INSERT "+truc);
                  setListeTodo((truc)=>[...listeTodo, truc]);
                  setAFaire('');
                },
                  function(transact , err){ 
                    console.log("erreur INSERT", err );
                  });
  });

}

const [listeTodo, setListeTodo] = useState([]);

    useEffect( function(){
        db.transaction(function(tx){
            // https://www.sqlite.org/lang_datefunc.html
            tx.executeSql(`SELECT id , contenu, status  FROM todo ;` ,
                    [] ,
                    function( transact, resultat){ 
                        // console.log( resultat.rows._array )
                        setListeTodo(resultat.rows._array);  
                    },
                    function( transact , err){ 
                        console.log("ERREUR lors du SELECT" , err)
                    }
            );
        });
    } , [listeTodo]);

  return (
    <View style={styles.container}>
      <Text>TODO liste</Text>
      <TextInput value={aFaire} placeholder='à faire' onChangeText={(text)=>{setAFaire(text)}}/>
      <Button title='ajouter' onPress={()=>{ajouter(aFaire)}}/>
      <ScrollView>
          <View style={styles.box}>
            <Text>Liste des choses à faire</Text>
                { listeTodo.map(function(todo){
                    return <View key={todo.id+Math.random()} style={styles.todo}>
                            <Text>{ todo.contenu }</Text>    
                        </View>
                } ) }
            </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box : {padding : 10 },
  todo : { borderBottomWidth : 1 , borderBottomColor : "black" , paddingBottom : 10 , marginBottom : 10}
});
