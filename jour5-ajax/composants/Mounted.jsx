import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'

const Mounted = () => {
// const [nb, setNb] = useState(0);
useEffect(function(){
// traitement ici n'est exécuté que 1 seule fois au moment de l'affichage du composant
console.log("Le composant 'Mounted' vient d'être monté");
// il est exécuté uniquement 1 seule fois
}, []);


  return (
    <View>
    </View>
  )
}

export default Mounted

const styles = StyleSheet.create({})