/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function Loginscreen() {
  return (
    <View style={{alignItems: 'center', width: '100%'}}>
      <View
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          overflow: 'hidden',
          marginTop: 100,
        }}>
        <ImageBackground
          source={require('../assets/profile.jpg')}
          style={{width: 200, height: 200}}></ImageBackground>
      </View>
      <View>
        <Text
          style={{
            marginTop: 30,
            fontSize: 30,
            color: '#fdc6ae',
            textAlign: 'center',
          }}>
          Welcome !
        </Text>
        <Text style={{textAlign: 'center'}}>
          Log in to your exiting account.
        </Text>
        <View style={{width: 300, marginTop: 15, gap: 15}}>
          <TextInput
            label="Email"
            mode='outlined'
            secureTextEntry
            iconColor='black'
            left={<TextInput.Icon icon={() => <Image source={require("../assets/user.png")}></Image>} />}
          />
          <TextInput
            label="Password"
            mode='outlined'
            secureTextEntry
            iconColor='black'
            left={<TextInput.Icon icon={() => <Image source={require("../assets/lock.png")}></Image>} />}
          />
        </View>
      </View>
    </View>
  );
}
