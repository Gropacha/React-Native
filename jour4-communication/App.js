/*******************************
 **** composant parent App ***** 
 *******************************/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  ScrollView } from 'react-native';
import Premier from './composants/Premier';
import Diapositive from './composants/Diapositive';
import Compteur from './composants/Compteur';
import Like from './composants/Like';
import { useState } from 'react';
import LikeCompteur from './composants/LikeCompteur';
import Article from './composants/Article';

export default function App() {

const liste = [
    { largeur:10, hauteur:60, unite:'cm'},
    { largeur:20, hauteur:50, unite:'dm'},
    { largeur:30, hauteur:40, unite:'m'},
    { largeur:40, hauteur:30, unite:'km'},
    { largeur:50, hauteur:20, unite:'mm'},
    { largeur:60, hauteur:10, unite:'h'}
];

const galerie = [
    "https://source.unsplash.com/random/100x100" ,
    "https://source.unsplash.com/random/100x101",
    "https://source.unsplash.com/random/100x102"
];

const [likes, setLikes] = useState([
                            {id:1, nb:3},
                            {id:2, nb:10},
                            {id:3, nb:15},
                            {id:4, nb:7}
                          ]);

const modifierLike = (id)=>{
  const cloneLikes = [...likes];
  const compteAmodifier = cloneLikes.find(function(item){return item.id===id});
  const index = cloneLikes.indexOf(compteAmodifier);
  cloneLikes[index].nb++;
  setLikes(cloneLikes);
};
const [data, setData] = useState([
  {id:1, titre:'article 1', contenu:'un article chanceux', nb:777},
  {id:2, titre:'article 2', contenu:'lorem ipsum 2', nb:2},
  {id:3, titre:'article 3', contenu:'lorem ipsum 3', nb:10},
  {id:4, titre:'article 4', contenu:'lorem ipsum 4', nb:9},
  {id:5, titre:'article 5', contenu:'lorem ipsum 5', nb:67}
]);

const augmenterLike = (id) => { 
  const cloneData = [...data];
  const compteData = cloneData.find(function(item){return item.id===id});
  const indexLike = cloneData.indexOf(compteData);
  cloneData[indexLike].nb++;
  setData(cloneData);
};

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{fontSize:25, borderBottomColor:'red', borderBottomWidth: 3}}>Expo Go de Jacques-André</Text>
        {data.map(function(item, index) {
          return <Article 
          key={index}
          article={item}
          augmenterLikeArticle={augmenterLike}/>
        })}
        <Compteur/>
        {likes.map(function(item, index){
          return <LikeCompteur 
          key={index} 
          compteur={item} 
          augmenter={modifierLike}/>
        })}
        {/* {
          liste.map(({largeur, hauteur, unite},index)=>
            <Premier largeur={largeur}
                      hauteur={hauteur}
                      unite={unite}
                      key={index}/>
                            // key : props spéciale qui permet à React Native de distinguer
                            //les différents éléments <Premier/> de la liste
          )
        }
        {
          galerie.map( (uriGalerie, index)=> <Diapositive uri={uriGalerie} key={index}/>)
        } */}
        <StatusBar hidden={true} style="auto" />
        
      </ScrollView>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cec',
    // marginTop:32,
    paddingLeft:10,
    paddingRight:10
  },
});

// créer un nouveau composant Diapositive 
// ce composant contient un composant Image dont largeur est de 100 et hauteur de 100
// l'uri de l'image va être transmis par une props uri du parent (App)

// dans le composant Parent "App" => créer un tableau galerie qui contient les valeurs suivantes :
// ["https://source.unsplash.com/random/200x100" , "https://source.unsplash.com/random/200x101", "https://source.unsplash.com/random/200x102"]

// dans la vue du composant App faire une boucle .map() sur chaque élément du tableau et envoyé l'url comme props du composant Diapositive