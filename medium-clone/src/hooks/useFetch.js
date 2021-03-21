import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import useLocalStorage from './useLocalStorage';


const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage('token');

  const baseUrl = 'https://conduit.productionready.io/api';
  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    let skipGetResponseAfterDestroy = false;

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
      .then(res => {
        if (!skipGetResponseAfterDestroy) {
          setResponse(res.data);
        }
      })
      .catch(error => {
        if (!skipGetResponseAfterDestroy) {
          setError(error.response.data);
        }
      })
      .finally(() => setIsLoading(false));

    return () => {
      skipGetResponseAfterDestroy = true;
    };
  }, [isLoading, options, url, token]);

  return [{isLoading, response, error}, doFetch];
};

export default useFetch;
