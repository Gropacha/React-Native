import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Accueil = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.titre}>Accueil</Text>
    </View>
  )
}

export default Accueil

const styles = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titre:{
        fontSize:30,   
    }
})