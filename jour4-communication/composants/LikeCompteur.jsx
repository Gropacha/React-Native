import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native';
import SvgLike from '../assets/hand-thumbs-up-fill.svg'

const LikeCompteur = (props) => {
  return (
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Button title='+' onPress={()=> {props.augmenter(props.compteur.id)}}/>
      <Text>{props.compteur.nb}</Text>
      <SvgLike width={'50px'} height={'50px'} fill={'#3B5998'} />
      {/* exécuter une fonction qui a été transmise comme props du parent vers l'enfant */}
    </View>
  )
}

export default LikeCompteur

const styles = StyleSheet.create({})