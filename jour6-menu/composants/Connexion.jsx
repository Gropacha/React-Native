import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react';
import { Button } from 'react-native';

const Connexion = ({navigation}) => {
        const [login, setLogin] = useState('');

    return (
        <View style={styles.box}>
          <Text style={styles.titre}>Connexion...</Text>
          <TextInput style={styles.input} placeholder='login' value={login} onChange={(text)=> setLogin(text)}/>
          <TextInput style={styles.input} placeholder='password'/>
          <Text style={{padding:5}}>Pas de compte? Cliquez sur le lien ci-dessous</Text>
          <Button title='Création de compte' onPress={()=>{navigation.navigate('creer compte', {query:login})}}/>
        </View>
      )
    }
    
    export default Connexion
    
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