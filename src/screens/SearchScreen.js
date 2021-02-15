import React ,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [searchState, setSearchState] = useState('');
  const [searchApi, businesses, errorMessage] = useBusinesses();
  console.log(businesses);

  const filterResultsByPrice = (price) => {
    //price == '$' || '$$' || '$$$'
    return businesses.filter(result=>{
      return result.price === price;
    })
  };
  return <View>
        <SearchBar 
          searchState={searchState} 
          onChange={change=>setSearchState(change)}
          onSubmit={()=>searchApi(searchState)}/> 
        {errorMessage ? 
        <Text>{errorMessage}</Text>:
        null
        }
        <ResultsList businesses= {filterResultsByPrice('$')} title={'Cost Effective'}/>
        <ResultsList businesses= {filterResultsByPrice('$$')} title={'Big Pricier'}/>
        <ResultsList businesses= {filterResultsByPrice('$$$')} title={'Big Spender'}/>
      </View>
}

const styles = StyleSheet.create({

});
export default SearchScreen;