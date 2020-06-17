import React from 'react'
import {SafeAreaView, View ,Text, FlatList, StyleSheet, Image, Dimensions} from 'react-native'


const App = () => {

  const restaurants = [
    {
        "id": 15333482,
        "name": "Pago Restaurant",
        "image": "https://media-cdn.tripadvisor.com/media/photo-o/15/7a/f4/02/pago-balcony.jpg",
        "location": "Shanghai/Çin",
        "likes": 122,
        "isPopular": false,
        "isOpenNow": true
    },
    {
        "id": 2368427,
        "name": "Hummingbird Eatery",
        "image": "https://media-cdn.tripadvisor.com/media/photo-o/13/1a/83/ae/hummingbird-eatery-bandung.jpg",
        "location": "Quebec/Kanada",
        "likes": 325,
        "isPopular": false,
        "isOpenNow": false
    },
    {
        "id": 10860074,
        "name": "Tjokro Restaurant",
        "image": "https://media-cdn.tripadvisor.com/media/photo-o/0c/df/a0/0b/getlstd-property-photo.jpg",
        "location": "Beijing/Çin",
        "likes": 91,
        "isPopular": true,
        "isOpenNow": true
    },
    {
        "id": 13321239,
        "name": "Fava",
        "image": "https://media-cdn.tripadvisor.com/media/photo-o/12/f8/ef/ae/2017-1223-15411200-largejpg.jpg",
        "location": "Çeşme/Türkiye",
        "likes": 182,
        "isPopular": false,
        "isOpenNow": false
    },
    {
        "id": 12144979,
        "name": "Street Grill & Friends",
        "image": "https://media-cdn.tripadvisor.com/media/photo-o/0e/62/12/8f/getlstd-property-photo.jpg",
        "location": "New York/ABD",
        "likes": 120,
        "isPopular": true,
        "isOpenNow": false
    },
    {
        "id": 3157556,
        "name": "Purnawarman Restaurant",
        "image": "https://media-cdn.tripadvisor.com/media/photo-o/10/93/99/74/purnawarman-restaurant.jpg",
        "location": "Taipei/Tayvan",
        "likes": 78,
        "isPopular": false,
        "isOpenNow": false
    },
    {
        "id": 6650362,
        "name": "Miss Bee Providore",
        "image": "https://media-cdn.tripadvisor.com/media/photo-o/13/21/85/50/venue.jpg",
        "location": "Venice/İtalya",
        "likes": 560,
        "isPopular": false,
        "isOpenNow": true
    },
    {
        "id": 12153371,
        "name": "Luxury",
        "image": "https://media-cdn.tripadvisor.com/media/photo-o/0e/b0/5e/31/live-cooking-area.jpg",
        "location": "Napoli/İtalya",
        "likes": 32,
        "isPopular": true,
        "isOpenNow": false
    },
    {
        "id": 6650363,
        "name": "Fresco Restaurant",
        "image": "https://media-cdn.tripadvisor.com/media/photo-o/10/77/52/6f/view-from-the-restaurant.jpg",
        "location": "Madrid/İspanya",
        "likes": 90,
        "isPopular": true,
        "isOpenNow": false
    },
    {
        "id": 7761473,
        "name": "Restaurant Damai",
        "image": "https://media-cdn.tripadvisor.com/media/photo-o/09/d1/62/30/damai-restaurant.jpg",
        "location": "Rio de Janeiro/Brezilya",
        "likes": 114,
        "isPopular": false,
        "isOpenNow": true
    }
]




  return(
    <SafeAreaView style={{flex:1}}>
      <View style={{alignItems:'center'}}>
        <FlatList
        data={restaurants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => (
        <View style={styles.container}>
          <Text>asdasd</Text>
        </View>>
        
          )  }
        />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      flexDirection:'column',
      width:Dimensions.get('window').width/(10/9),
      height:Dimensions.get('window').height/(10/5),
      backgroundColor:'#bdc3c7',
      marginBottom:5,
      marginTop:5
  },
  image:{
      width:Dimensions.get('window').width/(10/9),
      height:Dimensions.get('window').height/(10/5),

  }
})

export default App