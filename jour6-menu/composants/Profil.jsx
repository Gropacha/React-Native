import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const Profil = ({navigation}) => {
  return (
    <View style={styles.box}>
        <Text style={styles.titre}>Profil</Text>
        <MaterialCommunityIcons name='account' size={50} color='black' />
        <Button title='Modifier mot de passe' onPress={()=>{navigation.navigate('modifier login')}}/>
       
    </View>
  )
}

export default Profil

const styles = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titre:{
        fontSize:30,   
    }
})