import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Accueil from './Accueil';
import {NavigationContainer} from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import Profil from './Profil';
import Formulaire from './Formulaire';
import { ProfilContext, ProfilContextProvider } from '../contexts/profilContext';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useContext } from 'react';
import React from 'react'

const Menu = ({navigation}) => {
    const Menu = createBottomTabNavigator();
  const { profil } = useContext(ProfilContext);
  return (
      <View style={styles.container}>
    <NavigationContainer>
      <Menu.Navigator 
        id='menuPrincipal'
        screenOptions={{
          tabBarActiveBackgroundColor:'#dfd',
          tabBarStyle : { borderWidth:3, borderColor:'green'},
          tabBarShowLabel : true

      }}>
        <Menu.Screen 
          name="Accueil" 
          component={Accueil}
          options={{
            tabBarIcon : function(){
              return <MaterialCommunityIcons name ="home" color="black" size={40} />
            }
          }} />
          
                {profil.isLogged ?
                        <Menu.Screen 
                        name="Profil" 
                        component={Profil}
                        options={{
                        tabBarIcon : function(){
                            return <MaterialCommunityIcons name ="account" color="black" size={40} />
                        }
                        }} />

                :

                        <Menu.Screen 
                        name="Connexion" 
                        component={Formulaire}
                        options={{
                        tabBarIcon : function(){
                            return <MaterialCommunityIcons name ="lock-open" color="black" size={40} />
                        }
                        }} />

                }
        </Menu.Navigator>

        {false&& <><Formulaire/>
        <Profil/> </>}
        <StatusBar style="auto" />
      </NavigationContainer>
      </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
      }
})