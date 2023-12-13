/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Touchable} from 'react-native';

export default function Profilescreen({navigation}) {
  const [Data, setData] = React.useState('');

  const getProfile = async () => {
    const user = await AsyncStorage.getItem('users');
    setData(user);
  };

  React.useEffect(() => {
    async () => {
      setTimeout(() => {}, 2000);
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
          source={{uri : 'https://i.pinimg.com/736x/3e/41/5d/3e415dedb34d86f997028d92917a60d0.jpg'}}
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'cyan',
            borderRadius: 80,
            overflow: 'hidden'
          }}></ImageBackground>
        <Text style={{marginTop: 10, fontSize: 20, color: 'black'}}>Ainul yaqin</Text>
      </View>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <View
          style={{
            // height: 300,
            width: '95%',
            padding: 25,
            marginTop: -40,
            borderRadius: 20,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: '#fff',
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('EditProfile');
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  style={{
                    textShadowColor: 'black',
                    textShadowOffset: {width: 1, height: 1},
                    textShadowRadius: 2,
                  }}
                  name="user"
                  size={30}
                  color="#fdc6ae"
                />
                <Button fon style={{color: 'yellow', fontSize: 15}}>
                  <Text style={{color: 'black'}}>Edit Profile</Text>
                </Button>
              </View>
              <Icon
                style={{
                  textShadowColor: 'black',
                  textShadowOffset: {width: 1, height: 1},
                  textShadowRadius: 2,
                }}
                name="angle-right"
                size={30}
                color="#fdc6ae"
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={{backgroundColor: 'grey', width: '100%',height: 0.5, marginVertical: 5}}></View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Upcoming');
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  style={{
                    textShadowColor: 'black',
                    textShadowOffset: {width: 1, height: 1},
                    textShadowRadius: 2,
                  }}
                  name="bookmark"
                  size={30}
                  color="#fdc6ae"
                />
                <Button fon style={{color: 'yellow', fontSize: 15}}>
                  <Text style={{color: 'black'}}>My Recipe</Text>
                </Button>
              </View>
              <Icon
                style={{
                  textShadowColor: 'black',
                  textShadowOffset: {width: 1, height: 1},
                  textShadowRadius: 2,
                }}
                name="angle-right"
                size={30}
                color="#fdc6ae"
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={{backgroundColor: 'grey', width: '100%',height: 0.5, marginVertical: 5}}></View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Upcoming');
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  style={{
                    textShadowColor: 'black',
                    textShadowOffset: {width: 1, height: 1},
                    textShadowRadius: 2,
                  }}
                  name="bookmark"
                  size={30}
                  color="#fdc6ae"
                />
                <Button fon style={{color: 'yellow', fontSize: 15}}>
                  <Text style={{color: 'black'}}>Save</Text>
                </Button>
              </View>
              <Icon
                style={{
                  textShadowColor: 'black',
                  textShadowOffset: {width: 1, height: 1},
                  textShadowRadius: 2,
                }}
                name="angle-right"
                size={30}
                color="#fdc6ae"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View
        style={{flexDirection: 'row', marginTop: 10, marginBottom: 20, paddingLeft: 20}}>
        <Button style={{backgroundColor: 'red'}}>
          <Text style={{color: '#fff', width: 30}}>LogOut</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
