import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Formulaire } from  './composants/Formulaire';
import { Exo1 } from './composants/Exo1';
import { TouchableElement } from './composants/TouchableElement';
import  Galerie    from './composants/Gallerie';
import Exo2 from './composants/Exo2';
import Touchable from './composants/Touchable';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Touchable/>
      <StatusBar style="auto" />
      <Exo2/>
      <Formulaire/>
      <Exo1/>
      <TouchableElement/>
      <Galerie/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25
    },
});
