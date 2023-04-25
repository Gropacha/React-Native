import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native'
import React, {useContext} from 'react'
import { ExoContext } from '../contexts/exoContext'


const Exo1 = () => {
   const {zoom, dispatch, zoomPlus, setZoomPlus, zoomMoins, setZoomMoins} = useContext(ExoContext);
  return (
    <View style={{}}>
      <View style={{}}>
        <View style={{flexDirection:"row", alignItems:'center'}}>
            <Button title="Zoom" onPress={()=>dispatch({type:"ZOOM", payload:zoomPlus}) }/> 
            <Text>Niveau de zoom en % : </Text>
            <TextInput style={{marginLeft:10}} onChangeText={(text)=>setZoomPlus(text)} value={zoomPlus} placeholder='niveau de zoom en %'/>
        </View>

        <View style={{flexDirection:"row", alignItems:'center'}}>
            <Button title="Dezoom" onPress={()=>dispatch({type:"DEZOOM", payload:zoomMoins}) }/>
            <Text>Niveau de dézoom en % : </Text>
            <TextInput style={{marginLeft:10}} onChangeText={(text)=>setZoomMoins(text)} value={zoomMoins} placeholder='niveau de zoom en %'/>
        </View>

        <Button title="Cache" onPress={()=>dispatch({type:"CACHE"}) }/>
        <Button title="Init" onPress={()=>dispatch({type:"INIT"}) }/>
      </View>

      <View style={{alignSelf:'center'}}>
        <Image source={{uri:"https://source.unsplash.com/random/100x200"}} style={ zoom }/>
      </View>


    </View>
  )
}

export default Exo1

const styles = StyleSheet.create({})