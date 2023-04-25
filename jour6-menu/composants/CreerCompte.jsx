import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

const CreerCompte = ({navigation, route}) => {
    return (
        <View style={styles.box}>
          <Text style={styles.titre}>Créer un compte</Text>
          <TextInput style={styles.input} placeholder='votre email' value={route.params.query}/>
          <Button title='Annuler' onPress={()=>{navigation.goBack()}}/>
        </View>
      )
    }
    
    export default CreerCompte
    
    const styles = StyleSheet.create({
        box:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        titre:{
            fontSize:30,   
        },
        input:{
            fontSize:25,
            borderWidth:2,
            padding:10,
            margin:10,
            width:300,
            backgroundColor:"#fff"
        }
    })