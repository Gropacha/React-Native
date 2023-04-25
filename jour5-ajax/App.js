import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Mounted from './composants/Mounted';
import Updated from './composants/Updated';
import { Button } from 'react-native';
import { useState } from 'react';
import Unmounted from './composants/Unmounted';
import Cocktails from './composants/Cocktails';
import Pays from './composants/Pays';
import PaysCorrection from './composants/PaysCorrection';

export default function App() {
  const [show,setShow] = useState(true);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
                          {false && <>
                        <Text style={{fontSize:20, textAlign:'center', paddingTop:10}}>Test de useEffect mounted</Text>
                        <Mounted/>
                        <Updated/>
                        <View style={{margin:30}}>
                        <Button title='show/hide' onPress={()=>{setShow(!show)}}/>
                        {show&&<Unmounted/>}
                        {/* équivalent à : {show?<Unmounted/>:''} */}
                        </View>
                        {/* composant dans lequel, on a champ de saisie :
                        <TextInput/> saisir un cocktail
                        <Button/>
                        <View> => update de la vue en fonction du retour de la requête Ajax
                        
                        au clic sur le bouton, récupérer le texte saisi input et lancer une requête Ajax*/}
                          </>}
      {false&&<Cocktails/>}     
                
      <PaysCorrection/>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:25
  },
});
