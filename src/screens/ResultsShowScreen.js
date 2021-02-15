import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [business, setBusiness] = useState(null);
    
    console.log(business);

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`);
        setBusiness(response.data);
    };

    useEffect(()=>{
        getResult(id);
    },[])

    if(!business){
        return null;
    }
  return <View> 
      <Text>{business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={(photo)=>photo}
        renderItem= {({item})=>{
            return <Image style={styles.image}source={{uri: item}}/>
        }}/>
  </View>;
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width: 250
    }
});

export default ResultsShowScreen;