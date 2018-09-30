import React, { Component } from 'react';
export default class Search extends Component {

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