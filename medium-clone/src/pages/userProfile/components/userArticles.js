import {useEffect} from 'react';
import {getPaginator, limit} from '../../../utils';
import {stringify} from 'query-string';
import useFetch from '../../../hooks/useFetch';


const getApiUrl = ({username, offset, isFavorites}) => {
  const params = isFavorites
    ? {limit, offset, favorited: username}
    : {limit, offset, author: username};

  return `/articles?${stringify(params)}`;
};

const UserArticles = ({username, location, isFavorites}) => {
  const {offset, currentPage} = getPaginator(location.search);
  const apiUrl = getApiUrl({username, offset, isFavorites});
  const [{response, error, isLoading}, doFetch] = useFetch(apiUrl);

  console.log('response', response);

  useEffect(() => {
    doFetch()
  }, [doFetch]);

  return (
    <div>User articles</div>
  );
};

export default UserArticles;
