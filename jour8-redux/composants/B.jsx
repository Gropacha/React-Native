import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState, useReducer} from 'react'

function reduce(state, action){
    switch (action.type) {
        case "AUGMENTER" : return state+1;
        case "DIMINUER" : return state -1;
        case "ZERO" : return 0;
        case "AUGMENTER_P" : return state + Number.parseInt(action.payload);
        default : return state;
    }
    return state;
}

// présentation du HOOK useReducer
// il a le même fonction que useState => Hook qui permet gérer l'état du composant
// => state manager
// dans React quand vous utilisez useState, vous utilisez sans le savoir useReducer
// useReducer retourne un tableau avec 2 valeurs :
// le state et une fonction dispatcher
// par contre useReducer prend 2 paramètres (1 fonction et la valeur initial du state)
// cette fonction en paramètre est appelée : reductrice
// dans cette fonction 'reduce', on va stocker l'ensemble des traitements que l'on va effectuer sur le state
// context + reduce => redux

// action : peut être aussi un objet qui contient l'action à faire et une liste de paramètre

const B = () => {
    // const [nb, setNb] = useState(0);

    const [nb, dispatch] = useReducer(reduce, 0);
    const [P, setP] = useState('');

  return (
    <View style={styles.box}>
      <Text>Compteur personalisé : {nb}</Text>
        <View style={styles.button}>
            <Button  title='Augmenter' onPress={()=>dispatch({type:"AUGMENTER"})} color='green'/>
        </View>
        <View style={styles.button}>
            <Button  title='Diminuer' onPress={()=>dispatch({type:"DIMINUER"})} color='red'/>
        </View>
        <View style={styles.button}>        
            <Button  title='Remise à zéro' onPress={()=>dispatch({type:"ZERO"})} color='black'/>
        </View>
        <View style={{flexDirection:'row'}}>     
            <Button  title="Augmenter de" onPress={()=>dispatch({type :"AUGMENTER_P", payload:P})} color='purple'/>
        <TextInput style={{marginLeft:10}} onChangeText={(text)=>setP(text)} value={P} placeholder='entrez un nombre'/>   
        </View>
    </View>
  )
}

export default B

const styles = StyleSheet.create({
    box:{
    // alignItems: 'center',
    justifyContent: 'center'
    },
    button:{
        paddingBottom:2
    }
})