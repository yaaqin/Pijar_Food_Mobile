/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Searchbar} from 'react-native-paper';

function App() {
  const [keyword, setKeyword] = React.useState('');
  const menuCategory = [
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('./assets/soup.png')}
        />
      ),
      type: 'Soup',
    },
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('./assets/seafood.png')}
        />
      ),
      type: 'SeaFood',
    },
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('./assets/fast-food.png')}
        />
      ),
      type: 'FastFood',
    },
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('./assets/drink.png')}
        />
      ),
      type: 'Drink',
    },
  ];
  const newRecipe = [
    {
      menu: require('./assets/sandwitch.jpg'),
      foodName: 'Sandwitch',
    },
    {
      menu: require('./assets/vietnam-seafood.jpg'),
      foodName: 'Vietnam Seafood',
    },
    {
      menu: require('./assets/oxtail-soup.jpg'),
      foodName: 'Oxtail Soup',
    },
    {
      menu: require('./assets/chicken-soup.jpg'),
      foodName: 'Chicken Soup',
    },
  ];
  const popularRecipe = [
    {
      foodName: 'Ice Green Tea',
      foodPicture: require('./assets/ice-green-tea.jpg'),
      desk: ['Fresh', 'Cold'],
      rating: 4.7,
    },
    {
      foodName: 'Burger',
      foodPicture: require('./assets/burger.jpg'),
      desk: ['Spicy', 'Hot'],
      rating: 4.9,
    },
    {
      foodName: 'Fried Anchovies',
      foodPicture: require('./assets/menu-2.png'),
      desk: ['Spicy', 'Salted'],
      rating: 4.4,
    },
    {
      foodName: 'Dungeness Crab',
      foodPicture: require('./assets/Dungeness-crab.jpg'),
      desk: ['Spicy', 'Salted'],
      rating: 4.8,
    },
  ];
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.root}>
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <View style={{paddingRight: 10, width: '90%'}}>
                <Searchbar
                  width="80%"
                  placeholder="Search Pasta, Bread, etc"
                  value={keyword}
                  style={styles.searchBox}
                  onChangeText={text => setKeyword(text)}
                />
              </View>
              <Image
                source={require('./assets/menu.png')}
                style={{height: 30, width: 30}}></Image>
            </View>
            <Text style={styles.heading1}>Popular for You</Text>
            <View
              style={{
                gap: 20,
                flexDirection: 'row',
              }}>
              {menuCategory.map(item => (
                <View>
                  <View
                    style={{
                      width: 64,
                      height: 64,
                      backgroundColor: '#F3EEEA',
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {item.icon}
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 5,
                      color: 'black',
                    }}>
                    {item.type}
                  </Text>
                </View>
              ))}
            </View>
            <Text style={styles.heading1}>New Recipes</Text>
            {/* New recipe content start */}
            <ScrollView horizontal={true}>
              <View style={{flexDirection: 'row', gap: 5}}>
                {newRecipe.map((item, key) => (
                  <View key={key}>
                    <ImageBackground
                      source={item.menu}
                      imageStyle={{borderRadius: 16}}
                      style={styles.boxShadow}>
                      <Text style={styles.textWithShadow}>{item.foodName}</Text>
                    </ImageBackground>
                  </View>
                ))}
              </View>
            </ScrollView>
            {/* New recipe content end */}

            <Text style={styles.heading1}>Popular Recipes</Text>
            <View style={{marginTop: 10, gap: 5}}>
              {/* popular food content start */}
              {popularRecipe.map(item => (
                <View
                  style={{
                    gap: 20,
                    flexDirection: 'row',
                    backgroundColor: '#F3EEEA',
                    borderRadius: 15,
                    padding: 5,
                  }}>
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      style={{width: 64, height: 64, borderRadius: 16}}
                      source={item.foodPicture}
                    />
                  </View>
                  {/* Popular food Description start */}
                  <View>
                    <Text style={{fontSize: 16, color: 'black'}}>
                      {item.foodName}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      {item.desk.map(value => (
                        <Text>{value}, </Text>
                      ))}
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 5,
                        alignItems: 'center',
                        marginTop: 3,
                      }}>
                      <Image source={require('./assets/stars.png')} />
                      <Text>{item.rating}</Text>
                    </View>
                  </View>
                  {/* Popular food Description end */}
                </View>
              ))}
              {/* popular food content end */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  searchBox: {
    backgroundColor: '#EFEFEF',
    borderColor: 'black',
  },
  heading1: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    color: 'black',
  },
  textWithShadow: {
    justifyContent: 'flex-end',
    paddingLeft: 7,
    paddingTop: 130,
    fontSize: 15,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 20,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: 130,
    height: 160,
  },
});

export default App;
