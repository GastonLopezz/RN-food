import React ,{useState} from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [searchState, setSearchState] = useState('');
  const [searchApi, businesses, errorMessage] = useBusinesses();

  const filterResultsByPrice = (price) => {
    //price == '$' || '$$' || '$$$'
    return businesses.filter(result=>{
      return result.price === price;
    })
  };
  return <>
        <SearchBar 
          searchState={searchState} 
          onChange={change=>setSearchState(change)}
          onSubmit={()=>searchApi(searchState)}/> 
        {errorMessage ? 
        <Text>{errorMessage}</Text>:
        null
        }
        <ScrollView>
        <ResultsList  businesses= {filterResultsByPrice('$')} title={'Cost Effective'}/>
        <ResultsList  businesses= {filterResultsByPrice('$$')} title={'Bit Pricier'}/>
        <ResultsList  businesses= {filterResultsByPrice('$$$')} title={'Big Spender'}/>
        </ScrollView>
      </>
}

const styles = StyleSheet.create({

});
export default SearchScreen;