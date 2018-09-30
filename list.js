import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { Card, Header } from 'react-native-elements'; // 0.19.1

import "@expo/vector-icons"; // 6.3.1

  const listings = [
  {title:'Books for 5th std CBSE',img:'http://i2.wp.com/www.mykottayam.com/wp-content/uploads/2017/10/myKottayam_74_years_of_used_books_sale_26.jpg', category:'School Books'},
  {title:'Left over veg food 200 plates',img:'https://delectablereveries.files.wordpress.com/2016/11/shaadi.jpg?w=1000', category:'Food'},
  {title:'Clothes for girls age 10. 100 pieces',img:'https://c8.alamy.com/comp/G2G0R8/rack-of-old-vintage-clothes-G2G0R8.jpg', category:'Clothes'},
  {title:'Sports goods: footballs, cricket bats and balls, 100 nos',img:'http://p.imgci.com/db/PICTURES/CMS/224700/224773.jpg', category:'Sports'},
  {title:'Old vehicle. Petrol. 10 years. 10000kms',img:'http://www.motorbazee.com/imagedata/advertiseTruck/Tata+ACE+Zip-160112151704545.jpg', category:'Transport'},
  {title:'Books for 5th std CBSE',img:'http://i2.wp.com/www.mykottayam.com/wp-content/uploads/2017/10/myKottayam_74_years_of_used_books_sale_26.jpg', category:'School Books'},
  {title:'Left over veg food 200 plates',img:'https://delectablereveries.files.wordpress.com/2016/11/shaadi.jpg?w=1000', category:'Food'},
  {title:'Clothes for girls age 10. 100 pieces',img:'https://c8.alamy.com/comp/G2G0R8/rack-of-old-vintage-clothes-G2G0R8.jpg', category:'Clothes'},
  {title:'Sports goods: footballs, cricket bats and balls, 100 nos',img:'http://p.imgci.com/db/PICTURES/CMS/224700/224773.jpg', category:'Sports'},
  {title:'Old vehicle. Petrol. 10 years. 10000kms',img:'http://www.motorbazee.com/imagedata/advertiseTruck/Tata+ACE+Zip-160112151704545.jpg', category:'Transport'}
  ];

export default class App extends Component {

  render() {
    return (
      <View style={styles.main}>
      <Header backgroundColor = '#fff'
        leftComponent={{ icon: 'menu', color: '#000' }}
        centerComponent={{ text: 'Dayaa', style: { color: '#000' } }}
        rightComponent={{ icon: 'search', color: '#000' }}
      />
        <ScrollView >
        <View style={styles.container}>
           {
             listings.map(function(listing, i){
            return ( <Card>
                  <View>
                    <Image
                     style={styles.image}
                    resizeMode="cover"
                    source={{uri: listing.img}}/>
                    <Text style = {styles.title}>
                    {listing.title}
                    </Text>
                    <Text style={styles.category}>
                    in {listing.category}
                    </Text>
                  </View>
               </Card>
               );
           })
           }
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    paddingTop:10
  },
  header:{
    paddingTop:10
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
  },
  image: {
    height:200,
  },
  title: {
    paddingTop: 10
  },
  category:
  {
    paddingTop: 5,
    color:'#F2784B'
  }
});