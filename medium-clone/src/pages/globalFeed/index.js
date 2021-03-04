import {useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import Feed from '../../components/feed';


const GlobalFeed = () => {
  const apiUrl = `/articles?limit=10&offset=0`;
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className='home-page'>
      <div className='banner'>
        <div className='container'>
          <h1>Medium</h1>
          <p>A place to share knowledge</p>
        </div>
      </div>

      <div className='container page'>
        <div className='row'>
          <div className='col-md-9'>
            {isLoading && <p>Loading</p>}
            {error && <p>Error!</p>}
            {!isLoading && response && <Feed articles={response.articles}/>}
          </div>
          <div className='col-md-3'>
            Popular Tags
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
