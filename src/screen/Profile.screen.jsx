/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';

export default function Profilescreen() {
  const [Data, setData] = React.useState('');

  const getProfile = async () => {
    const user = await AsyncStorage.getItem('users');
    setData(user);
  };

  React.useEffect(() => {
    async () => {
      setTimeout(() => {
      }, 2000);
    };
  }, []);
  console.log(Data);
  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: 300,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#EFC81A',
        }}>
        <ImageBackground
          source={Data.photo}
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'cyan',
          }}></ImageBackground>
      </View>
      <Button onPress={getProfile}>Refresh</Button>
    </ScrollView>
  );
}
