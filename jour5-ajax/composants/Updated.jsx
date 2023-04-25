import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Button } from 'react-native';

const Updated = () => {
    const [nb, setNb] = useState(0);

    useEffect((function(){
        console.log('Le composant Updated a son localstate nb qui a été modifié : ', nb);

    }), [nb]);

  return (
    <View>
      <Button title={nb.toString()} onPress={()=>{setNb(nb + 1)}}/>
    </View>
  )
}

export default Updated

const styles = StyleSheet.create({})