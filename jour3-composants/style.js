import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:25
      // flexDirection:"column" // par défaut dispostion en colonne
      },
      zone1 : {
        backgroundColor:"#D90012",
        flex:Math.PI, width:"100%", 
        flexDirection:'row',
        justifyContent:'space-around',
        /** répartit les éléments suivant la flexDirection
        center | flex-start | flex-end | space-evenly | space-between | space-around*/
        alignItems:'baseline'
        /**aligne dans la direction ortognale de la flexDirection
        center | flex-start | flex-end | baseline
        */
      },
      color : {
        color: 'blue'
      },
      menu : {
        fontSize: 45,
        fontWeight: 600,
        borderBottomWidth: 5,
        borderBottomColor : 'white'
      }
  });
  
  // dans la zone bleue
  // Ajouter 4 textes et les caler dans les 4 coins