import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Compteur from './composants/Compteur';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test Expo Go!</Text>
      <Compteur/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
