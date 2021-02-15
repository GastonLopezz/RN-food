import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({ title, businesses, navigation }) => {
    if(!businesses.length){
        return null;
    }
  return <View style={styles.container}> 
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data= {businesses}
        keyExtractor={(result)=> result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) =>{
            return (
                <TouchableOpacity
                    onPress={()=>navigation.navigate('ResultsShow',{ id: item.id })}>
                    <ResultsDetail business={item}/>
                </TouchableOpacity>
            )
        }}
        />
  </View>;
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginBottom: 10
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default withNavigation(ResultsList);