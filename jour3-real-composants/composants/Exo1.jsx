import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';
import BouncyCheckox from 'react-native-bouncy-checkbox';

export const Exo1 = () => {
    const [size, setSize] = useState(10);
    const [myColor, setMyColor] = useState('red');
    const [myText, setMyText] = useState('Envoyer');
    const onPress = () => {setMyColor(myColor==='red'?'blue':'red'); setMyText(myText==='Envoyer'?'Déjà envoyé':'Envoyer')};
    const onPress2 = () => setSize(size + 5);
  return (
    
    <View style={styles.box}>
        <Text style={styles.titre}>exo 1 : formulaire d'email</Text>
        <TextInput style={styles.input} placeholder="Votre email"/>
        <TextInput style={styles.input} placeholder="Sujet"/>
        <TextInput style={styles.input} placeholder='Description' multiline={true} numberOfLines={15} />
        <Button onPress={onPress} title={myText} /*onPress={()=>{Alert.alert('le bouton du formulaire d\'email a été pressé')}}*/ color={myColor} />
        <BouncyCheckox onPress={onPress2} text="accepter les conditions" style={{marginBottom:15, marginTop:15}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    box : { paddingHorizontal:10, alignItems:'flex-start' },
    input : { borderColor: 'blue', padding:5, borderWidth:2, marginBottom:10, width:'100%' },
    titre : { fontSize:25, color: 'blue', fontWeight:600, alignSelf:'center'},
    })