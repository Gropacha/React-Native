import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export const Formulaire = () => {
  return (
    <View style={styles.box}>
        <Text>Créer un formulaire</Text>
        <TextInput style={styles.input} placeholder="Votre nom"/>
        <TextInput placeholder='Commentaire' multiline={true} numberOfLines={5} style={styles.input}/>
        <Button title="Soumettre" onPress={()=>{}} style={{}} />
    </View>
  )
}


const styles = StyleSheet.create({
    box : { paddingHorizontal:10, alignItems:'flex-start' },
    input : { borderColor:'red', padding:5, borderWidth:2, marginBottom:10, width:'100%' }
})

// cas pratique créer un nouveau composant Exo1
// titre => exo 1
// champ input monologne => email
// champ input monologne => sujet
// champ input multiligne => description
// bouton de soumission
// ajouter ce formulaire sous le formulaire Form