import { Text, View, StyleSheet } from "react-native";

export function Boucle(){
    const etudiants = [
        {nom:"Alain", age:20},
        {nom:"Benoit", age:67},
        {nom:"Céline", age:35}
    ];



    return (
    <View>
        <Text style={{color:'yellow', fontSize:25, fontWeight:700}}>faire une boucle</Text>
        {etudiants.map(function(item, index){
            return <Text style={styles.texte} key={(index)}>{item.nom} a {item.age} ans</Text>
        })}
    </View>
    )
}

const styles = StyleSheet.create({
    texte: {
        color: 'green',
        fontSize: 20,
        fontWeight: 700
    }
})