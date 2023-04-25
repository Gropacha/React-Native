import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react';


const Compteur = () => {
    const [count, setCount] = useState(0);
    const onPressPlus = () => setCount(count + 1);
    const onPressMoins = () => setCount(count - 1);
    return (
    <View style={{flexDirection:"row", alignItems:'baseline', borderWidth:2, borderColor:'blue', margin:10}}>
      <Text style={{margin:20, fontSize:20, fontWeight:700}}>Compteur solitaire</Text>      
        <Button title={'-'} onPress={onPressMoins}/>
        <Button title={'+'} onPress={onPressPlus}/>
        <Text style={{margin:20, fontSize:20, fontWeight:700}}>   {count}</Text>
    </View>
  )
}

export default Compteur

const styles = StyleSheet.create({})
