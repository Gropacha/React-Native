import { StyleSheet, Text, View , TextInput , Button, Image } from 'react-native'
import React , {useState , useEffect} from 'react'
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';

const Cocktails = () => {
  const [recherche , setRecherche] = useState("")
  const [requete, setRequete] = useState('');
  const [resultats , setResultats] = useState([]);

    // exécutés lors du lancement de l'app
    useEffect( function(){
        setRequete("mojito")
    }, [])

    // useEffect(function(){
    //     fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito")
    //     // requete AJAX = GET
    //     .then(reponse => reponse.json())
    //     // réponse de la requête ajax { status = 200 , headerReponse : {} , data : "{}" }
    //     .then(data => setResultats(data.drinks)); 
    //     // data les valeurs attendues au format javascript collection 
    // } , [])
   
    useEffect(function(){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+requete)
        // requete AJAX = GET
        .then(reponse => reponse.json())
        // réponse de la requête ajax { status = 200 , headerReponse : {} , data : "{}" }
        .then(data => setResultats(data.drinks)); 
        // data les valeurs attendues au format javascript collection 
    } , [requete]);

  // hook useState() useEffect() => OBLIGATOIREMENT DANS LE COMPOSANT
  // ils ne doivent pas être utilisés dans la vue 

  return (
    <View style={styles.box}>
        <View style={ styles.search }>
            <TextInput 
                placeholder='rechercher' 
                value={recherche}
                onChangeText={(toto) => {setRecherche(toto)}} 
                style={styles.input} 
                keyboardType="default"/>
            <Button title="rechercher" onPress={() => { setRequete(recherche)}} />
        </View>
        <View style={styles.resultat}>
            { (resultats!==null)?
                    <FlatList 
                        data={resultats}
                        renderItem={ ({item}) => 
                        
                        <View>
                            <Image source={{uri : item.strDrinkThumb, width:'100%', height:400}}/>
                            <Text style={styles.titreCocktail}>{item.strDrink}</Text>
                            <Text style={styles.instructionCocktail}>{item.strInstructions}</Text>
                        </View>
                        
                        }
                        keyExtractor={item => item.idDrink}
                    />:<Text>utiliser le formulaire ci dessus pour avoir une liste de cocktails</Text>
                }
  
        </View>
    </View>
  )
}

export default Cocktails

const styles = StyleSheet.create({
    box: { paddingHorizontal : 10},
    search : { flexDirection: "row" },
    input:{ padding : 5,  borderColor : "black", borderWidth : 1 , marginRight :10,   flex:1},
    resultat : {  marginTop : 10 },
    titreCocktail:{
        fontSize:20,
        fontWeight:700,
        alignSelf:'center'
    },
    instructionCocktail:{
        borderBottomWidth:2,
        borderBottomColor:'purple',
        marginBottom:20,
        paddingBottom:10
    }
})