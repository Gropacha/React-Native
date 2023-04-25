import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Exo2 = () => {

    const userProfil = useSelector((store)=>{return store.reducerProfil})
    const dispatch = useDispatch();
  return ( 
        // { false &&<View><Button title='augmenter de 5' onPress={()=>{dispatch({type:'AUGMENTER', increment:5})}} /></View>}
        <View>
          {!userProfil.isLogged?
          <View>
            <Button title='Connexion' onPress={()=>{dispatch({type:'LOGIN'})}} />
          </View>
          :
          <View>
            <Text>Bonjour {userProfil.login}</Text>
            <Button title='Déconnexion' onPress={()=>{dispatch({type:'LOGOUT'})}} /> 
          </View>
          } 
        </View>
  )
}

export default Exo2

const styles = StyleSheet.create({})