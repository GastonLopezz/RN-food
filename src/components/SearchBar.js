import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({searchState, onChange, onSubmit}) => {
  return <View style={styles.background}>
        <FontAwesome name='search' style={styles.iconStyle}/>
        <TextInput 
            placeholder={'Search'} 
            style={styles.inputStyle} 
            value={searchState} 
            onChangeText={change=>onChange(change)}
            onEndEditing={()=>onSubmit()}/>
      </View>;
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#B9B8B8',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 20
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});
export default SearchBar;