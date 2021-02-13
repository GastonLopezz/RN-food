import React ,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchState, setSearchState] = useState('');
  console.log(searchState);
  return <View>
        <SearchBar searchState={searchState} onChange={change=>setSearchState(change)}/>
        <Text>{searchState}</Text>
      </View>
}

const styles = StyleSheet.create({

});
export default SearchScreen;