import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import React, {useContext, useState}  from 'react'
import { ProfilContext } from '../contexts/profilContext'

const Formulaire = ({navigation}) => {
    const { profil, login, logout } = useContext(ProfilContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    function authentification(){
        const identifiants = {
            email:email,
            password:password
        }
        if (login(identifiants)) {
            setEmail('');
            setPassword('');
            setMessage('');
            navigation.navigate('Menu',{screen:"Profil"});
        }
        else setMessage('Identifiants incorrects');
    }
  return (
            <View style={styles.box}>

                    <Text style={styles.titre}>Formulaire</Text>
                    <TextInput placeholder="email" style={styles.input} onChangeText={(text)=>setEmail(text)} value={email}/>
                    <TextInput placeholder="password" style={styles.input} onChangeText={(text)=>setPassword(text)} value={password}/>
                    <Button title='soumettre' onPress={()=>{authentification()}}/>
                    {message && <Text style={styles.alert}>{message}</Text>}
            </View>
  )
}

export default Formulaire

const styles = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titre:{
        fontSize:30,   
    },
    input:{
        fontSize:25,
        borderWidth:2,
        padding:10,
        margin:10,
        width:300,
        backgroundColor:"#fff"
    },
    alert:{
        padding:10,
        color:'red'
    }
})