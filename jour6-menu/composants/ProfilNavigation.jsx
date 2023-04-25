import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profil from './Profil';
import ModifPass
 from './ModifPass';
const Stack = createNativeStackNavigator();

const ProfilNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen component={Profil} name='profil'/>
        <Stack.Screen component={ModifPass} name='modifier login'/>
    </Stack.Navigator>
  )
}

export default ProfilNavigation

const styles = StyleSheet.create({})