import React, {useEffect, useState} from 'react';
import yelp from '../api/yelp'

const useBusinesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage,setErrorMessage] = useState('');

  const searchApi = async (search)=>{
    try{
      const response = await yelp.get('/search',{
        params: {
          limit: 50,
          term: search,
          location: 'California'
        }
      });
      setBusinesses(response.data.businesses);
    }catch(err){
      setErrorMessage('Something went wrong')
    }
  }


  useEffect(() => {
    searchApi('restaurants');
  },[]);

  return [searchApi,businesses,errorMessage];
}

export default useBusinesses;