import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ResultsDetail = ({business}) => {
  return <View style={styles.container}> 
      <Image source={{ uri: business.image_url}} style={styles.image}/>
      <Text style={styles.name}>{business.name}</Text>
      <Text style={styles.rating}>{business.rating} Stars, {business.review_count} Reviews</Text>
  </View>;
}

const styles = StyleSheet.create({
    container:{
        marginRight: 10
    },
    image:{
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    rating:{
        fontSize: 13,
        color: '#CDCDCD'
    }
});

export default ResultsDetail;