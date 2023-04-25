import { StyleSheet, Text, View, Image, Button, Vibration } from 'react-native'
import React, {useState} from 'react'

const Exo2 = () => {
    const [size, setSize] = useState(20); /**essai du useState */
    const onPressPlus = ()=> size<160?setSize(size + 10): '';
    const onPressMoins = ()=> size>20?setSize(size - 10): '';
    const ONE_SECOND_IN_MS = 1000;
    const PATTERN = [
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
      1 * ONE_SECOND_IN_MS,
    ];
    const testPatternVibraion = [50,400,50,400,500,400,500,400,50,400];
  return (
    <View>
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Button color={'red'} title={'Diminuer taille titre'} onPress={onPressMoins} />
              <Button color={'gold'} title={'Agrandir taille titre'} onPress={onPressPlus} />
          </View>

              <View style={{height:30}}/>
              <Text style={{fontSize:size, fontWeight:900, alignSelf:'center', color:"#00FF00"}}>Bonjour !!!</Text>
              <View style={{height:30}}/>
              <Button title="Terminator" onPress={() => Vibration.vibrate(testPatternVibraion)} />
              
              <View style={{height:30}}/>
              <Button title="Annuler Vibration" onPress={() => Vibration.cancel()} />
              <View style={{height:30}}/>
              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginBottom:25}}>
                <Image source={{uri : "https://source.unsplash.com/random/110x109", width:110, height:110}}/>
                <Image source={{uri : "https://source.unsplash.com/random/110x110", width:110, height:110}}/>
                <Image source={{uri : "https://source.unsplash.com/random/110x111", width:110, height:110}}/>
              </View>

              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', marginBottom:25}}>
                <Image source={{uri : "https://source.unsplash.com/random/109x109", width:110, height:110}}/>
                <Image fadeDuration={5000} source={{uri : "https://source.unsplash.com/random/109x110", width:110, height:110}}/>
                <Image blurRadius={1} source={{uri : "https://source.unsplash.com/random/109x111", width:110, height:110}}/>
              </View>
    </View>
  )
}

export default Exo2

const styles = StyleSheet.create({})

// Créer le composant Exo2 
// titre Exo 2
// contient 6 images de dimensions 110x110
// mettre 3 premières images l'une à côté de l'autre
// mettre les 3 suivantes l'une à côté de l'autre