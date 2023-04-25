import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './style';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.zone1}>
            <Text style={{fontSize:35}}>Introduction</Text>
            <Text>à la mise en</Text>
            <Text>forme</Text>
        </View>

    <View style={{
        backgroundColor:'green',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flex:2*Math.PI
      }}>
        <View style={{ backgroundColor:'white', width:100, height:100}}/>
        <View style={{ backgroundColor:'pink', width:100, height:100}}/>
        <View style={{ backgroundColor:'purple', width:100, height:100}}/>
        <View style={{ backgroundColor:'maroon', width:100, height:100}}/>
        <View style={{ backgroundColor:'lightgrey', width:100, height:100}}/>
        <View style={{ backgroundColor:'darkgrey', width:100, height:100}}/>
        <View style={{ backgroundColor:'white', width:100, height:100}}/>
        <View style={{ backgroundColor:'pink', width:100, height:100}}/>

    </View>
{/*exercice : mettre du texte dans les 4 coins d'une View*/}
      <View style={{
      		flexDirection:'column',
      		justifyContent:'space-between',
      		backgroundColor:"#0033A0",
      		flex:Math.PI,
     			width:"100%"
      }}>
          <View style={{
              flexDirection:'row',
              justifyContent:'space-between'
          }}>
                  <Text style={{color:'yellow'}}>Haut gauche</Text>
                  <Text style={{color:'yellow'}}>Haut droite</Text>
          </View>
          <View style={{
              flexDirection:'row',
              justifyContent:'space-between'
          }}>
                  <Text style={{color:'yellow'}}>Bas gauche</Text>
                  <Text style={{color:'yellow'}}>Bas droite</Text>
          </View>
      </View>
      
{/*fin exercice : mettre du texte dans les 4 coins d'une View*/}

      <View style={{
        backgroundColor:"#F2A800",
        flex:Math.PI, width:"100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
          <Text style={[styles.color, styles.menu]}>Accueil</Text>
          <Text style={[styles.color, styles.menu]}>Profil</Text>

      </View>
      {/*<StatusBar hidden={true} />*/}
      <StatusBar style='auto'/>
    </View>
  );
}

