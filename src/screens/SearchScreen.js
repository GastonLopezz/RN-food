import React ,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchState, setSearchState] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage,setErrorMessage] = useState('');

  const searchApi = async ()=>{
    try{
      const response = await yelp.get('/search',{
        params: {
          limit: 50,
          term: searchState,
          location: 'Montevideo'
        }
      });
      setBusinesses(response.data.businesses);
    }catch(err){
      setErrorMessage('Something went wrong')
    }
  }

  return <View>
        <SearchBar 
          searchState={searchState} 
          onChange={change=>setSearchState(change)}
          onSubmit={searchApi}/> 
        {errorMessage == '' ? 
        <Text>Found {businesses.length}</Text>:
        <Text>{errorMessage}</Text>
        }
      </View>
}

const styles = StyleSheet.create({

});
export default SearchScreen;