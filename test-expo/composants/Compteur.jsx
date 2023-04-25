import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react';


const Compteur = () => {
    const [count, setCount] = useState(0);
    const onPressPlus = () => setCount(count + 1);
    const onPressMoins = () => setCount(count - 1);
    return (
    <View>
      <Text>Compteur</Text>
      <View style={{flexDirection:"row", alignItems:'baseline'}}>
        <Button title={'-'} onPress={onPressMoins}/>
        <Button title={'+'} onPress={onPressPlus}/>
        <Text>{count}</Text>
      </View>
    </View>
  )
}

export default Compteur

const styles = StyleSheet.create({})
