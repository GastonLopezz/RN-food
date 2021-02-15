import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// import { Container } from './styles';

const ResultsList = ({ title, businesses }) => {
  return <View> 
      <Text style={styles.title}>{title}</Text>
      <Text>Businesses: {businesses.length} </Text>
      <FlatList
        horizontal
        data= {businesses}
        keyExtractor={(result)=> result.id}
        renderItem={({ item }) =>{
            return <Text>{item.name}</Text>
        }}
        />
  </View>;
}

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;