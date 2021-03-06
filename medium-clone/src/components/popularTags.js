import {useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import Loading from './loading';
import ErrorMessage from './errorMessage';
import {Link} from 'react-router-dom';

const flood = ['‌‌‌‌‌', '‌', '‌‌', '‌‌‌‌', '‌‌‌‌‌‌‌', '‌‌‌‌‌', '‌‌‌‌‌', '‌‌‌‌‌‌‌‌', '‌‌‌‌‌‌‌‌‌‌‌', '‌‌‌‌‌‌‌‌‌‌‌', '‌‌‌‌‌‌', '‌‌‌‌‌‌‌‌‌‌', '‌‌‌'];

const PopularTags = () => {
  const [{response, isLoading, error}, doFetch] = useFetch('/tags');

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (isLoading || !response) {
    return <Loading/>;
  }

  if (error) {
    return <ErrorMessage/>;
  }

  return (
    <div className='sidebar'>
      <p>Popular tags</p>
      <div className='tag-list'>
        {response.tags.filter(el => !flood.includes(el)).map(tag => (
          <Link to={`/tags/${tag}`} className='tag-default tag-pill' key={tag}>
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
