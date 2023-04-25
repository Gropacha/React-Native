import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import React, {useContext} from 'react';
import { ProfilContext } from '../contexts/profilContext';
import { SelectionContext } from '../contexts/selectionContext';

const Profil = ({navigation}) => {
    const {profil, logout} = useContext(ProfilContext);
    const {choixCocktails} = useContext(SelectionContext);

    function deconnexion(){
        navigation.navigate('Menu',{screen:"Connexion"});
        logout();
    }

    return  <View style={styles.box}>
        {profil.isLogged?
            <View style={styles.box}> 
                    <Text style={styles.titre}>Bienvenue {profil.nom}</Text>
                    {choixCocktails.length!==0 && <>
                    <Text style={{fontSize:18}}>Voici la liste de vos cocktails sélectionnés :</Text>
                        <FlatList 
                                data={choixCocktails}
                                numColumns={1}
                                renderItem={ ({item}) => 
                                
                                <View style={{marginBottom:5}}>
                                    <Text style={styles.titreCocktail}>{item}</Text>   
                                </View>
                                
                                }
                                keyExtractor={item=>item}
                            />
                    </>}
                    <Button onPress={()=>deconnexion()} title='deconnexion' color='purple'/>
            </View>
        :
            <View style={styles.box}>
                    <Text style={styles.titre}>Veuillez vous identifier pour accéder à votre profil </Text>
            </View>
        }
        </View>
}

export default Profil

const styles = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titre:{
        fontSize:30 
    },
    input:{
        fontSize:25,
        borderWidth:2,
        padding:10,
        margin:10,
        width:300,
        backgroundColor:"#fff"
    },
    titreCocktail:{fontSize:20, fontWeight:700, alignSelf:'center'} 
})