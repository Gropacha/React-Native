import {  StyleSheet, Text, View , ScrollView , Image , Button } from 'react-native'
import React , { useContext} from 'react'
import {ProfilContext} from "../contexts/profilContext"
import {SelectionContext} from "../contexts/selectionContext"

const Accueil = () => {
  
  const {profil} = useContext(ProfilContext)
  const {liste , selectionner} = useContext(SelectionContext)

  return (
    <View>
      <Text>Accueil</Text>
        <ScrollView>
          <View style={styles.resultats}>
            {liste.map(function(item , key){
              return <View style={styles.cocktail} key={key}>
                <Text>{item.strDrink}</Text>
                <Image source={{ uri : item.strDrinkThumb }} style={styles.img}/>
                {profil.isLogged && <Button onPress={() => selectionner(item.strDrink)} title={item.selected ? "selectionné" : "ajouter"} color={ item.selected ? "pink" : "blue" }/> }
              </View>
            })}
          </View>
        </ScrollView>
    </View>
  )
}
export default Accueil
const styles = StyleSheet.create({
  resultats : { flexDirection : "row" , flexWrap : "wrap" , justifyContent : "space-between"},
  cocktail : { width : "49%",marginBottom : 10}, 
  img : { marginBottom: 5 , width : "100%", height : 150}
})