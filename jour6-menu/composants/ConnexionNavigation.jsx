import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Connexion from './Connexion';
import CreerCompte from './CreerCompte';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ConnexionNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen component={Connexion} name='connexion'/>
            <Stack.Screen component={CreerCompte} name='creer compte'/>
        </Stack.Navigator>
      )
}

export default ConnexionNavigation

const styles = StyleSheet.create({})