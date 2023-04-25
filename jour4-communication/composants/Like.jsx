/*****************************
 *** composant enfant Like *** 
 * ***************************/

import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import  Svg  from '../assets/hand-thumbs-up-fill.svg';
import React, {useState} from 'react';

const Like = () => {
    const [like, setLike] = useState(0);
    return (<View style={{flexDirection:'row'}}>
                <TouchableWithoutFeedback  onPress={()=>{setLike(like + 1 )}} >
                    <Svg width={'50px'} height={'50px'} fill={'#3B5998'}/>
                </TouchableWithoutFeedback>
                <Text style={{fontSize:30}}>{like}</Text>
            </View>
     )
}

export default Like

const styles = StyleSheet.create({})

// props => App => Composant enfant
// Like state local que l'on modifie avec setLike => mettre à jour la vue
// Essayer d'envoyer des 'infos' du parent vers l'enfant et réciproquement
// 
// 
