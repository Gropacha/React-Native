import { StyleSheet, Text, View , TextInput, Button , FlatList } from 'react-native'
import React , {useState, useEffect} from 'react'

const PaysCorrection = () => {

  const [pays, setPays] = useState([])
  const [recherche , setRecherche] = useState("")
  const [searchBtn , setSearchBtn] = useState(0)

  useEffect( function(){
    fetch("https://restcountries.com/v3.1/name/francec")
    .then(reponse => reponse.json())
    .then(data => setPays(data))
  }, [])

  useEffect( function(){
    if(searchBtn > 0){
        fetch("https://restcountries.com/v3.1/name/"+recherche)
        .then(reponse => reponse.json())
        .then(data => setPays(data))
    }
  }, [searchBtn])

  return (
    <View>
        <View style={styles.searchBox}>
            <TextInput value={recherche} onChangeText={(text) => { setRecherche(text)}} placeholder='rechercher' style={styles.input} />
            <Button title="go" onPress={() => { setSearchBtn( searchBtn + 1) }}/>
        </View>
      { pays.length ===  0  
        ?
        <Text>rechercher un pays</Text>  
        :
        <FlatList data={pays} renderItem={( {item}) => <View>
            <View style={styles.boxTitre}>
                <Text style={styles.titre}>{item.name.official} </Text>
                <Text style={styles.titre}>{item.flag}</Text>
            </View>
            <Text>population : {item.population}</Text>
            <Text>devises : {item.currencies && Object.values(item.currencies).map(function(devise , index){
                return <Text key={index}>{'\n'} {devise.name} {devise.symbol}</Text>
            })}</Text>
        </View>} />
    }
    </View>
  )
}

export default PaysCorrection

const styles = StyleSheet.create({
    searchBox : {
        flexDirection: "row" ,
        justifyContent: "space-between"
    },
    input : {
        borderColor : "black",
        borderWidth : 1 ,
        padding : 5 ,
        flex: 1,
        marginRight: 10
    },
    boxTitre : {
        flexDirection: "row" ,
        justifyContent: "space-between",
        alignItems:"baseline"
    },
    titre : {
        fontSize: 20,
        marginTop : 20
    }
})