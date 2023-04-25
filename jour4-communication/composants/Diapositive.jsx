/************************************
 *** composant enfant Diapositive *** 
 * **********************************/


import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Diapositive = ({uri}) => { // ne pas oublier les accolades pour récuper les props destructurées
  return (
      <Image source={{uri:uri, width:100, height:100}}/>
      )
    }
    
    {/* ATTENTION ne pas mettre d'espaces autour des : */}
export default Diapositive

const styles = StyleSheet.create({})