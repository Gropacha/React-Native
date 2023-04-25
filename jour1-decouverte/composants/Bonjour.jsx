import {Text, StyleSheet} from 'react-native'

export function Bonjour(){
    return <Text style={styles.miseEnFormeP}>Bonjour</Text> // ATTENTION PAS DE guillemets ou de backticks
// attention : PAS d'espaces dans les props
}

const styles = StyleSheet.create({
    miseEnFormeP:{
        color : "blue",
        fontSize:40
    }
})