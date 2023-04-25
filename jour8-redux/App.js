import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import A from './composants/A';
import B from './composants/B';
import Exo1 from './composants/Exo1';
import { ExoContextProvider } from './contexts/exoContext';
import { Provider } from 'react-redux';
import { myStore } from './redux/store';
import C from './composants/C';
import Exo2 from './composants/Exo2';

// //ANCIENNE METHODE
// import { createStore } from 'redux';
// function myReducer(state=0, action){
//   switch(action){
//     case 'ACTION' : return 10;
//     default : return state;
//   }
// }
// const myStore = createStore(myReducer); // createContext()
// myStore.dispatch('ACTION'); // modifie le store
// myStore.getState(); // récupérer la valeur stocker dans le store

export default function App() {
  return (
    <Provider store={myStore}>
    <ExoContextProvider>
    <View style={styles.container}>
      {/* <Text>Jour8 redux!</Text> */}
      {/* <A/> */}
      {/* <B/> */}
      {/* <Exo1/> */}
      <C/>
      <Exo2/>
      <StatusBar style="auto" />
    </View>
    </ExoContextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : 30
  }
});
