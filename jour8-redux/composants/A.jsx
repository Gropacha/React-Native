import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'


const A = () => {
    const [nb, setNb] = useState(0);
  return (
    <View style={styles.box}>
      <Text>{nb}</Text>
        <View style={styles.button}>
            <Button  title='Augmenter' onPress={()=>setNb(nb+1)} color='green'/>
        </View>
        <View style={styles.button}>
            <Button  title='Diminuer' onPress={()=>setNb(nb-1)} color='red'/>
        </View>
        <View style={styles.button}>        
            <Button  title='Remise à zéro' onPress={()=>setNb(0)} color='black'/>
        </View>
    </View>
  )
}

export default A

const styles = StyleSheet.create({
    box:{
    alignItems: 'center',
    justifyContent: 'center'
    },
    button:{
        paddingBottom:2
    }
})