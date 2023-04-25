import { StyleSheet, Text, View , TextInput, Button } from 'react-native'
import React , {useContext , useState} from 'react'
import { ProfilContext } from "../contexts/profilContext"

const Formulaire = ({navigation}) => {

  const { profil, login , logout } = useContext(ProfilContext);
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [message , setMessage] = useState("")
  
   function authentification(){
    const identifiants = {
      email : email ,
      password : password
    }
    //console.log(identifiants)
    const verif = login(identifiants)
    //console.log(profil)
    if(verif){ // si je n'ai pas de message = "" => je peux vider le formulaire
      // vider le formulaire et le message et redirection avec la page de connexion
      setEmail("")
      setPassword("")
      setMessage("")
      navigation.navigate("home")
    }else {
      // sinon j'affiche un message 
      setMessage("identifiants invalides")
    }
  }

  return (
    <View style={styles.box}>
      { profil.isLogged  
        ? 
         <Button  onPress={() => logout()} title="deconnexion" />
        : 
          <View>
            <Text>Formulaire</Text>
            <TextInput placeholder='email' style={styles.input} onChangeText={(text) => setEmail(text)} value={email}/>
            <TextInput placeholder='password' style={styles.input} onChangeText={(text) => setPassword(text)} value={password} />
            <Button title="soumettre" onPress={() => authentification()}/>
            {message.length > 0  && <Text style={styles.alert}>{message}</Text>}
          </View>
      }
      
    </View>
  )
}

export default Formulaire

const styles = StyleSheet.create({
    box : { margin : 10},
    input : { borderWidth : 1 , borderColor : "black" , padding : 5 , marginBottom : 10},
    alert : { padding : 10 , color : "red"}
})
