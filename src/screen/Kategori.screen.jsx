/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import { Button } from 'react-native-paper';
import {black} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function Kategoriscreen() {
  return (
    <View>

    <View style={{padding: 20}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            gap: 5
          }}>
          <Icon name="angle-left" size={30} color="black" />
          <Text style={{color: 'black'}}>Back</Text>
        </View>
        <Text style={{fontSize: 30, width: '100%', textAlign: 'center'}}>
          Soup
        </Text>
      </View>
    </View>
      <View
        style={{
          height: 2,
          backgroundColor: 'black',
          marginTop: 5,
          marginBottom: 5,
        }}></View>
      <View style={{padding: 15, gap: 20}}>
        <View
          style={{backgroundColor: '#FFEAD2', width: '100%',padding: 10, borderRadius: 20,  flexDirection: 'row'}}>
            <Image source={require("../assets/chicken-soup.jpg")} style={{height: 85, width: 85, borderRadius:20}}></Image>
            <View style={{width: '55%', marginLeft: 15}}>
                <Text style={{fontSize: 25}}>Nama Recipe</Text>
                <Text>Nama Recipe</Text>
                <Text>by Gojek</Text>
            </View>
            <View style={{justifyContent: 'center', right: 0}}>
            <Icon name="play" size={30} color="#fe976a" />

            </View>
          </View>
      </View>
    </View>

  );
}
