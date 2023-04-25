import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const C = () => {
    const valeur = useSelector((store)=>{return store.reducerNb})
    const dispatch = useDispatch();
  return (
    <View>
      <Text>{valeur}</Text>
      <Button title='augmenter de 1' onPress={()=>dispatch({type:'AUGMENTER'})}/>
    </View>
  )
}

export default C

const styles = StyleSheet.create({})