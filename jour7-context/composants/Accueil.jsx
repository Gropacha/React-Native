import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native'
import React  from 'react'
import { useContext } from 'react';
import { ProfilContext} from '../contexts/profilContext';
import { SelectionContext } from '../contexts/selectionContext';

const Accueil = () => {
  const {profil} = useContext(ProfilContext);
  const {liste, selectionner, deselectionner} = useContext(SelectionContext);



// ajouterCocktail("rhum")?console.log('ajout de rhum'): console.log("erreur");

  return (
    <View style={styles.box}>
            { (liste!==null)?
                    <FlatList 
                        data={liste}
                        numColumns={2}
                        renderItem={ ({item}) => 
                        
                        <View style={{marginBottom:30}}>
                            <Image source={{uri : item.strDrinkThumb, width:200, height:200}}/>
                            <Text style={styles.titreCocktail}>{item.strDrink}</Text>
                            {profil.isLogged && <Button onPress={()=>{item.selected?deselectionner(item.strDrink):selectionner(item.strDrink)}} title={item.selected?'déjà ajouté':'ajouter'} color={item.selected?'pink':'green'}/>}
                        </View>
                        
                        }
                        keyExtractor={item => item.idDrink}
                    />:<Text>problème d'accès à l'API</Text>
                }
  
        </View>
  )
}

export default Accueil

const styles = StyleSheet.create({
    box:{flex:1, justifyContent:'center', alignItems:'center', marginTop : 10},
    titreCocktail:{fontSize:20, fontWeight:700, alignSelf:'center'} 
})