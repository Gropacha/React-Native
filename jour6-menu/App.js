import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from './composants/Accueil';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfilNavigation from './composants/ProfilNavigation';
import ConnexionNavigation from './composants/ConnexionNavigation';

const Menu = createBottomTabNavigator();

export default function App() {
  const profil = {
    nom: 'Alain',
    isConnected: false
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Menu.Navigator 
        id='menuPrincipal'
        screenOptions={{
          tabBarActiveBackgroundColor:'#dfd',
          tabBarStyle : { borderWidth:3, borderColor:'green'},
          tabBarShowLabel : false

      }}>
          <Menu.Screen 
          name="Accueil" 
          component={Accueil}
          options={{
            tabBarIcon : function(){
              return <MaterialCommunityIcons name ="home" color="black" size={40} />
            }
          }} />
          <Menu.Screen 
          name="Profil" 
          component={ProfilNavigation}
          options={{
            tabBarIcon : function(){
              return <MaterialCommunityIcons name="account" color="black" size={40} />
            }
          }} />
          { !profil.isConnected ?
            <Menu.Screen 
            name="Connexion" 
            component={ConnexionNavigation}
            options={{
              tabBarIcon : function(){
                return <MaterialCommunityIcons name="face-man-profile" color="black" size={40} />
              }, title: `Bienvenu ${profil.nom}`
            }} />
          :
            <Menu.Screen 
            name="Connexion" 
            component={ConnexionNavigation}
            options={{
              tabBarIcon : function(){
                return <MaterialCommunityIcons name="lock-open" color="black" size={40} />
              }, title:'Gestion de votre profil'
            }} />

}

           {/**  npm i ... => https://www.npmjs.com/ 
           *  react-native-vector-icons
           * https://www.npmjs.com/package/react-native-vector-icons
           * https://pictogrammers.com/library/mdi/
           */}
        </Menu.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

