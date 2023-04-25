import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Premier = ({largeur=50, hauteur=50, unite='cm'}) => {
  return (
    <View>
      <Text>Premier {largeur} {hauteur} {unite}</Text>
    </View>
  )
}

export default Premier

const styles = StyleSheet.create({})