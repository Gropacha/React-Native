// composant racine (root) de notre projet
// divisé en 3 parties

 
// les import des fonctionnalités qui sont stockées dans le dossier node_modules
// React Native utilise le système de module ES6
// il n'y a ./ devant les noms des librairies => recherche dans le dossier node_modules (grâce au fichier de configuration)
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Bonjour } from './composants/Bonjour';
import { Exo1 } from './composants/Exo1';
import { deuxieme as Deuxieme } from './composants/Deuxieme';
import { Boucle } from './composants/Boucle';
 
// le composant => fonction javascript App()
// qui doit s'appeler OBLIGATOIREMENT App
// elle return du JSX (mix entre JS, HTML, XML)
// HMR => Hot Module Reload
export default function App() {
  return (
    <View style={styles.container}>
      <Bonjour/>
      <Exo1/>
      {/**Composant => un peu comme si on créé une balise */}
      {/**commentaire en jsx */}
      <Text style={styles.text}>Introduction au React Native</Text>
      <Text style={styles.text}>Group CDA</Text>
      <Deuxieme/>
      <Boucle/>
      <StatusBar style="auto" />
    </View>
  );
}

// <Text></Text> => correspond au balise html de titre, p, texte en général
// <View></View> => <div>
// <StatusBar style="auto"/> => composant orphelin (/ en fin obligatoire) zone en haut de l'écran
// JSX plus contraint que le HTML
// en JSX style={styles.container} : props ou propriété

// facultatif
// permet de mettre en form le composant
// genre de CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    paddingTop: 30,
    // justifyContent: 'center',
  },
  text: {
    color: '#e50',
    fontSize: 30,
    fontWeight: 900
  }
});
