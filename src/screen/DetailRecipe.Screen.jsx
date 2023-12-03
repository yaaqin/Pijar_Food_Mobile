/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Linking,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function DetailRecipeScreen({route, navigation}) {
  const [bodyView, setBodyView] = React.useState('ingredient');
  const ingredientExample = [
    '- 2 slices whole-grain bread (bakery-fresh recommended)',
    '- 1 tablespoon hummus',
    '- 2 slices tomato',
    '- 1/2 small cucumber, thinly sliced lengthwise',
    '- 1 slice low-fat cheese',
  ];
  const {image, title, desk, youtube, made, slug} = route.params;
  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            source={{uri: image}}
            style={{height: 400, width: '100%'}}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.goBack();
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 15,
                }}>
                <Icon name="angle-left" size={30} color="#fdc6ae" />
                <Text style={styles.backBtn}>Back</Text>
              </View>
            </TouchableWithoutFeedback>

            <View
              style={{
                padding: 15,
                paddingBottom: 50,
                bottom: 0,
                position: 'absolute',
                width: '50%',
              }}>
              <Text style={styles.foodName}>{title}</Text>
              <Text style={styles.textResto}>by {made}</Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 400,
            backgroundColor: 'white',
            borderRadius: 30,
            marginTop: -40,
            padding: 12,
          }}>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
            <Button
              onPress={() => setBodyView('ingredient')}
              labelStyle={{
                fontSize: 20,
                padding: 5,
                ...(bodyView === 'ingredient'
                  ? {
                      color: '#18172B',
                      borderBottomColor: '#fdc6ae',
                      borderBottomWidth: 3,
                      borderBottomLeftRadius: 2,
                      borderBottomRightRadius: 2,
                    }
                  : {color: '#666'}),
              }}>
              Ingredient
            </Button>
            <Button
              onPress={() => setBodyView('video')}
              labelStyle={{
                fontSize: 20,
                padding: 5,
                ...(bodyView === 'video'
                  ? {
                      color: '#18172B',
                      borderBottomColor: '#fdc6ae',
                      borderBottomWidth: 3,
                      borderBottomLeftRadius: 2,
                      borderBottomRightRadius: 2,
                    }
                  : {color: '#666'}),
              }}>
              Video
            </Button>
            <Button
              onPress={() => setBodyView('comment')}
              labelStyle={{
                fontSize: 20,
                padding: 5,
                ...(bodyView === 'comment'
                  ? {
                      color: '#18172B',
                      borderBottomColor: '#fdc6ae',
                      borderBottomWidth: 3,
                      borderBottomLeftRadius: 2,
                      borderBottomRightRadius: 2,
                    }
                  : {color: '#666'}),
              }}>
              Comment
            </Button>
          </View>

          {/* body content */}

          {/* ingredient */}

          {bodyView === 'ingredient' ? (
            <View style={{width: '100%', padding: 15}}>
              <View
                style={{
                  backgroundColor: '#FFEAD2',
                  borderRadius: 20,
                  height: 270,
                  padding: 10,
                }}>
                {ingredientExample.map((item, key) => (
                  <View key={key}>
                    <Text
                      style={{color: '#666', fontSize: 14, fontWeight: 400}}>
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          {/* video */}

          {bodyView === 'video' ? (
            <View style={{width: '100%', padding: 5}}>
              <TouchableWithoutFeedback
                onPress={() =>
                  Linking.openURL(
                    youtube?.link
                  )
                }>
                <View
                  style={{
                    backgroundColor: '#FFEAD2',
                    padding: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                    gap: 20,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#fe976a',
                      height: 70,
                      width: 70,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon name="play" size={30} color="#fff" />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#666',
                        fontSize: 22,
                        textTransform: 'capitalize',
                      }}>
                      {title}
                    </Text>
                    <Text style={{color: '#666', fontSize: 15, marginTop: 5}}>
                      {desk}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          ) : null}

          {/* comment */}

          {bodyView === 'comment' ? (
            <View style={{width: '100%', padding: 5}}>
              <View
                style={{
                  backgroundColor: '#FFEAD2',
                  padding: 10,
                  borderRadius: 10,
                  flexDirection: 'row',
                  gap: 20,
                }}>
                <View
                  style={{
                    overflow: 'hidden',
                    height: 70,
                    width: 70,
                    borderRadius: 50,
                  }}>
                  <ImageBackground
                    source={require('../assets/profile.jpg')}
                    style={{
                      backgroundColor: '#fdc6ae',
                      height: 70,
                      width: 70,
                    }}></ImageBackground>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#666',
                      fontSize: 22,
                      textTransform: 'capitalize',
                    }}>
                    Nama User
                  </Text>
                  <Text style={{color: '#666', fontSize: 15, marginTop: 5}}>
                    Message
                  </Text>
                </View>
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {},
  foodName: {
    textTransform: 'capitalize',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    fontSize: 32,
    fontWeight: 600,
    color: 'white',
  },
  textResto: {
    color: 'white',
    fontSize: 15,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  backBtn: {
    color: '#fdc6ae',
    marginLeft: 3,
    fontSize: 17,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
});
