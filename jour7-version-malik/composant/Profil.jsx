import { Button, FlatList, StyleSheet, Text, View , Image } from 'react-native'
import React , { useContext } from 'react'
import { ProfilContext } from "../contexts/profilContext"
import { SelectionContext } from "../contexts/selectionContext"

const Profil = ({navigation}) => {
 
  const {profil , logout} = useContext(ProfilContext) 
  const { filteredListe } = useContext(SelectionContext)
  console.log(filteredListe);
  function deconnexion(){
    logout()
    navigation.navigate("home")
  }

  return (
    <View style={styles.box}>
      { profil.isLogged 
      ? 
        <View>
          <Text style={styles.titre}>Bienvenue { profil.nom }</Text>
          <Button onPress={() => deconnexion()} title="2eme deconnexion" color="purple" />
        
          <FlatList 
          data={filteredListe()}
          numColumns={2}
          renderItem={ ({item}) => {  return <Image source={{ uri : item.strDrinkThumb}} style={styles.img}/>}}
          />
        </View>

      : 
        <Text>Veuillez vous connecter pour accéder à votre profil</Text>
      }
      
    </View>
  )
}

export default Profil

const styles = StyleSheet.create({
    box: { alignItems : "center"},
    titre : {fontSize : 20},
    img : { marginBottom: 5 , width : 100 , height : 100}
})
