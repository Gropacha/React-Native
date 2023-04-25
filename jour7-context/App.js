
import { StyleSheet, Text, View } from 'react-native';
import {  ProfilContextProvider } from './contexts/profilContext';
import { SelectionContextProvider } from './contexts/selectionContext';
import Menu from './composants/Menu';



export default function App() {
  
  return (
    <ProfilContextProvider>
      <SelectionContextProvider>
        <Menu/>
      </SelectionContextProvider>
    </ProfilContextProvider>
  );
}

const styles = StyleSheet.create({
  
});
