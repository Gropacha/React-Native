import React , {useContext} from 'react'
import Formulaire from "./Formulaire"
import Profil from './Profil';
import Accueil from './Accueil';

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProfilContext} from "../contexts/profilContext"

const Tab = createBottomTabNavigator();

const Menu = () => {
    const { profil } = useContext(ProfilContext);
    // 15h32 bon café @ toute suite !!
  return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='home' component={ Accueil } options={{
                    tabBarIcon : () => {
                        return <MaterialCommunityIcons name="home" color="black" size={20} />
                    }
                }} /> 
                { profil.isLogged 
                    ?
                    <Tab.Screen name='profil' component={ Profil } options={{
                        tabBarIcon : () => {
                            return <MaterialCommunityIcons name="account-star" color="black" size={20} />
                        }
                    }}/> 
                    :
                    <Tab.Screen name='connexion' component={ Formulaire } options={{
                        tabBarIcon : () => {
                            return <MaterialCommunityIcons name="login" color="black" size={20} />
                        }
                    }}/> 
                }
            </Tab.Navigator>
        </NavigationContainer>
  )
}

export default Menu
