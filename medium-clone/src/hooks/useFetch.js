import {useState, useEffect} from 'react';
import axios from 'axios';
import useLocalStorage from './useLocalStorage';


const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage('token');

  const baseUrl = 'https://conduit.productionready.io/api';
  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : ''
        }
      }
    };

    if (!isLoading) {
      return;
    }

    axios(`${baseUrl}${url}`, requestOptions)
      .then(res => setResponse(res.data))
      .catch(error => setError(error.response.data))
      .finally(() => setIsLoading(false));

  }, [isLoading, options, url]);

  return [{isLoading, response, error}, doFetch];
};

export default useFetch;
