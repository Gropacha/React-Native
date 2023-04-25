import { Text, View, StyleSheet } from "react-native";

export function deuxieme(){
    return (
        <View style={styles.p}>
            <Text style={styles.p}>Premier texte</Text>
            <Text style={styles.p}>Deuxième texte</Text>
        </View>
    )
}
/**
 *on ne peut pas retourner des composants frères,
 * si besoin, il faut les englober
 * dans un composant parent
 * */

const styles = StyleSheet.create({
    p:{
        fontSize: 25,
        color: 'white',
    }
})