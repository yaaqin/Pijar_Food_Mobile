/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import recipeList from '../api/recipe.json';

function HomeScreen({navigation}) {
  const [keyword, setKeyword] = React.useState('');
  const menuCategory = [
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('../assets/soup.png')}
        />
      ),
      type: 'Soup',
    },
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('../assets/seafood.png')}
        />
      ),
      type: 'SeaFood',
    },
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('../assets/fast-food.png')}
        />
      ),
      type: 'FastFood',
    },
    {
      icon: (
        <Image
          style={{objectFit: 'cover', width: 45, height: 45}}
          source={require('../assets/drink.png')}
        />
      ),
      type: 'Drink',
    },
  ];
  const newRecipe = [
    {
      menu: require('../assets/sandwitch.jpg'),
      foodName: 'Sandwitch',
    },
    {
      menu: require('../assets/vietnam-seafood.jpg'),
      foodName: 'Vietnam Seafood',
    },
    {
      menu: require('../assets/oxtail-soup.jpg'),
      foodName: 'Oxtail Soup',
    },
    {
      menu: require('../assets/chicken-soup.jpg'),
      foodName: 'Chicken Soup',
    },
  ];
  // const popularRecipe = [
  //   {
  //     foodName: 'Ice Green Tea',
  //     foodPicture: require('../assets/ice-green-tea.jpg'),
  //     desk: ['Fresh', 'Cold'],
  //     rating: 4.7,
  //   },
  //   {
  //     foodName: 'Burger',
  //     foodPicture: require('../assets/burger.jpg'),
  //     desk: ['Spicy', 'Hot'],
  //     rating: 4.9,
  //   },
  //   {
  //     foodName: 'Fried Anchovies',
  //     foodPicture: require('../assets/menu-2.png'),
  //     desk: ['Spicy', 'Salted'],
  //     rating: 4.4,
  //   },
  //   {
  //     foodName: 'Dungeness Crab',
  //     foodPicture: require('../assets/Dungeness-crab.jpg'),
  //     desk: ['Spicy', 'Salted'],
  //     rating: 4.8,
  //   },
  // ];
  return (
    <ScrollView>
      <View style={styles.root}>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
          }}>
          <View style={{paddingRight: 10, width: '90%'}}>
            <Searchbar
              width="80%"
              placeholder="Search Pasta, Bread, etc"
              value={keyword}
              style={styles.searchBox}
              onChangeText={text => setKeyword(text)}
            />
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Hamburger')}>
            <Image
              source={require('../assets/more.png')}
              style={{height: 30, width: 30}}></Image>
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.heading1}>Popular for You</Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          {menuCategory.map((item, key) => (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => {
                navigation.navigate('Kategori', item.type);
              }}>
              <View>
                <View
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: '#FFEAD2',
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
            </TouchableWithoutFeedback>
          ))}
        </View>
        <View
          style={{
            marginTop: 5,
            paddingTop: 5,
          }}>
          <Text style={styles.heading2}>New Recipes</Text>
          {/* New recipe content start */}
          <ScrollView horizontal={true}>
            <View style={{flexDirection: 'row', gap: 5}}>
              {recipeList
                ?.filter(recipe => recipe.isNew)
                .map((item, key) => (
                  <TouchableWithoutFeedback
                    key={key}
                    onPress={() => {
                      navigation.navigate('Detail_Recipe', item);
                    }}>
                    <View>
                      <ImageBackground
                        source={{uri: item.image}}
                        imageStyle={{borderRadius: 20}}
                        style={styles.boxShadow}>
                        <Text style={styles.textWithShadow}>{item.title}</Text>
                      </ImageBackground>
                    </View>
                  </TouchableWithoutFeedback>
                ))}
            </View>
          </ScrollView>
        </View>
        {/* New recipe content end */}

        <Text style={styles.heading1}>Popular Recipes</Text>
        <View style={{gap: 5}}>
          {/* popular food content start */}
          {recipeList
            ?.filter(recipe => recipe.isPopular)
            .map((item, key) => (
              <TouchableWithoutFeedback
                key={key}
                onPress={() => {
                  navigation.navigate('Detail_Recipe', item);
                }}>
                <View
                  style={{
                    gap: 20,
                    flexDirection: 'row',
                    backgroundColor: '#FFEAD2',
                    borderRadius: 15,
                    padding: 5,
                  }}>
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      style={{width: 64, height: 64, borderRadius: 16}}
                      source={{uri: item.image}}
                    />
                  </View>
                  <View>
                    <Text style={{fontSize: 16, color: 'black'}}>
                      {item.title}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text>{item.desk}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 5,
                        alignItems: 'center',
                        marginTop: 3,
                      }}>
                      <Image source={require('../assets/stars.png')} />
                      <Text>{item.rating}</Text>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  searchBox: {
    backgroundColor: '#FFEAD2',
    borderColor: 'black',
  },
  heading1: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    color: 'black',
    backgroundColor: '#fdc6ae',
    borderRadius: 15,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  heading2: {
    marginBottom: 10,
    backgroundColor: '#fdc6ae',
    borderRadius: 15,
    paddingHorizontal: 7,
    paddingVertical: 5,
    fontSize: 20,
    color: 'black',
  },
  textWithShadow: {
    justifyContent: 'flex-end',
    paddingLeft: 7,
    paddingTop: 130,
    fontSize: 15,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  boxShadow: {
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 1,
    shadowRadius: 5,
    width: 130,
    height: 160,
  },
});

export default HomeScreen;
