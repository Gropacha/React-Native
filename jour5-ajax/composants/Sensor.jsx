import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import {
//     accelerometer,
//     gyroscope,
//     setUpdateIntervalForType,
//     SensorTypes
//   } from "react-native-sensors";
//   import { map, filter } from "rxjs/operators";

const Sensor = () => {
    let speed=0;

//     setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms

// const subscription = accelerometer
//   .pipe(map(({ x, y, z }) => x + y + z), filter(speed => speed > 20))
//   .subscribe(
//     speed => console.log(`You moved your phone with ${speed}`),
//     error => {
//       console.log("The sensor is not available");
//     }
//   );

// setTimeout(() => {
//   // If it's the last subscription to accelerometer it will stop polling in the native API
//   subscription.unsubscribe();
// }, 1000);

  return (
    <View>
      <Text>You moved your phone with {speed}</Text>
    </View>
  )
}

export default Sensor

const styles = StyleSheet.create({})