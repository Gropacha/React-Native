import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const Unmounted = () => {
    useEffect(function(){
        return ()=> {
            console.log("Le composant 'Unmounted' est supprimé de l'écran");
        }
    }, []);

    useEffect(function(){
        // traitement ici n'est exécuté que 1 seule fois au moment de l'affichage du composant
        console.log("Le composant 'Unmounted' vient d'être monté");
        // il est exécuté uniquement 1 seule fois
        }, []);
        
  return (
    <View>
      <Text>Unmounted</Text>
    </View>
  )
}

export default Unmounted

const styles = StyleSheet.create({})