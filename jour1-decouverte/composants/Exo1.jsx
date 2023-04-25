import {Text, StyleSheet} from 'react-native';

export const Exo1 = () => <Text style={styles.rose30}>Je suis Exo1</Text>;
// attention : PAS d'espaces dans les props


const styles = StyleSheet.create({
    rose30:{
        color : "pink",
        fontSize: 30,
        fontWeight: 900
    }
})