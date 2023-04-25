import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const Article = (props) => {
    return (
        <View>
            <Text style={styles.titre}>{strUcFirst(props.article.titre)}</Text>
            <Text style={styles.contenu}>{strUcFirst(props.article.contenu)}</Text>
            <View style={styles.btnlike}>
                <Text style={styles.like}>Nombre de like : {props.article.nb}  </Text>
                <Button title={'Like'} onPress={()=>props.augmenterLikeArticle(props.article.id)}/>
            </View>
        </View>
    )
}

export default Article

function strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}

const styles = StyleSheet.create({
  titre:{
    fontSize:25,
    fontWeight:700,
    color:'purple'
  },
  contenu:{
    fontSize:18,
    fontFamily:'sans-serif'
  },
  like:{
    fontSize:16,
    fontFamily:'sans-serif'
  },
  btnlike:{
    flexDirection:'row',
    alignItems:'baseline'
  }
})
