import { StyleSheet, Text, View, Image } from "react-native";
import { React } from 'react';

const Galerie = () =>{
    return (
<View style={{marginBottom:30}}>
    <Text>Galerie</Text>
    <Image source={require("../assets/favicon.png")}/>
    <Image source={{uri : "https://source.unsplash.com/random/400x200", width:400, height:200}}/>
</View>
    )
}

export default Galerie;