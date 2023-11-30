/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function DetailRecipeScreen() {
  return (
    <>
      <View>
        <ImageBackground
          source={require('../assets/sandwitch.jpg')}
          style={{height: 400, width: '100%'}}>
          <Text>
            {' '}
            <Icon name="rocket" size={30} color="#900" />;
          </Text>
        </ImageBackground>
      </View>
      <View
        style={{
          height: 400,
          backgroundColor: 'white',
          borderRadius: 30,
          marginTop: -40,
        }}>
        <View></View>
      </View>
    </>
  );
}
