import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native';


const Pays = () => {
    const [resultats, setResultats] = useState([]);
    const [requete, setRequete] = useState('all');
    const [recherche, setRecherche] = useState('');

    useEffect(function(){
        fetch(`https://restcountries.com/v3.1/${requete}`)
        .then(reponse => reponse.json())
        .then(data => setResultats(data))
    }, [requete]);

  return (
    <View>
      <View style={styles.boxRecherche}>
        <TextInput
            placeholder=' Rechercher '
            value={recherche}
            onChangeText={(texte)=>{setRecherche(texte)}}
            style={styles.inputRecherche}
            keyboardType="default"/>
        <Button title="Rechercher" onPress={() => { setRequete(`name/${recherche}`)}}/>    
      </View>

<ScrollView>
      <View style={styles.boxResultat}>
          {/* <Text>{JSON.stringify(resultats)}</Text> */}
{ (resultats!=null||resultats!=undefined)?
        resultats.map( (item, index) =>  
                    <View key={index}>
                            <Text >{item.name.common} {item.flag} </Text>
                            <Text>Population : {item.population}</Text>
                            <Text>Monnaie : {item.currencies} </Text>
                    </View>
        )
: <Text> Pays non trouvé</Text>
}

      </View>
    </ScrollView>

    </View>
  )
}

export default Pays

const styles = StyleSheet.create({
    boxRecherche:{},
    inputRecherche:{},
    boxResultat:{}
})