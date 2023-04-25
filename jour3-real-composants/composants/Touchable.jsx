import React, {useState} from 'react';
import {StyleSheet, 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';

import AndroidLogo from '../assets/android2.svg';
import YinYangLogo from '../assets/yin-yang.svg'


const Touchable = () => {
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(true);

  return (
    <View style={styles.box}>
        <Text>Logo SVG</Text>
        <YinYangLogo width={'50px'} height={'50px'} fill={'black'} />
        <AndroidLogo width={'50px'} height={'50px'} fill={'gold'} />
        <Text>Touchable</Text>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>

            <TouchableOpacity style={styles.touchable}>
                <Image source={require('../assets/favicon.png')}/>
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableNativeFeedback 
                onPress={() => {
                    setRippleColor(randomHexColor());
                    // setRippleOverflow(rippleOverflow);
                }}  
                background={TouchableNativeFeedback.Ripple(
                    rippleColor, false
                    // rippleOverflow,
                )} 
                >
                    <View style={styles.touchable}>
                        <Text style={styles.text}>clic</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

            <TouchableHighlight onPress={()=>{}} style={styles.touchable} activeOpacity={0.6} underlayColor='#DDDDDD'>
            <Image source={require('../assets/favicon.png')}/>
            </TouchableHighlight>

            <TouchableWithoutFeedback onPress={()=>{}}>
            <Image source={require('../assets/favicon.png')}/>
            </TouchableWithoutFeedback>
        </View>
    </View>
  );
};
export default Touchable;

const randomHexColor = () => {
    return '#000000'.replace(/0/g, function () {
      return Math.round(Math.random() * 16).toString(16);
    });
  };


const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 10,
    paddingVertical:20
  },
  touchable: {
    width:100,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'grey',
    borderColor:'black',
    borderWidth: 2,
    borderRadius:50
  },
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  text: {alignSelf: 'center'}
});

