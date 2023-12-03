/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import {Button} from 'react-native-paper';
import {black} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import recipeList from '../api/recipe.json';

export default function Kategoriscreen({navigation, route}) {
  const {jenis} = route.params;
  const qin = recipeList?.filter(item => item.type === jenis);
  console.log(jenis);
  return (
    <ScrollView>
      <View>
        <View style={{padding: 20}}>
          <View>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.goBack();
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'absolute',
                  zIndex: 1,
                  gap: 5,
                }}>
                <Icon name="angle-left" size={30} color="black" />
                <Text style={{color: 'black'}}>Back</Text>
              </View>
            </TouchableWithoutFeedback>
            <Text style={{fontSize: 30, width: '100%', textTransform: 'capitalize', textAlign: 'center'}}>
              {jenis}
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

        <View style={{padding: 15, gap: 15}}>
          {recipeList
            .filter(item => item.type == jenis)
            .map((item, key) => (
              <View key={key}>
                <View
                  style={{
                    backgroundColor: '#FFEAD2',
                    width: '100%',
                    padding: 10,
                    borderRadius: 20,
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={{height: 85, width: 85, borderRadius: 20}}></Image>
                  <View style={{width: '55%', marginLeft: 15}}>
                    <Text style={{fontSize: 20}}>{item.title}</Text>
                    <Text>{item.desk}</Text>
                    <Text>by {item.made}</Text>
                  </View>
                  <View style={{justifyContent: 'center', right: 0}}>
                    <TouchableWithoutFeedback
                      onPress={() => Linking.openURL(item?.youtube?.link)}>
                      <Icon name="play" size={30} color="#fe976a" />
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
}
