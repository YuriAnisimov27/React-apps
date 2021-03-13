import {useState, useEffect, useContext} from 'react';
import ArticleForm from '../../components/article';
import useFetch from '../../hooks/useFetch';
import {Redirect} from 'react-router-dom';
import {CurrentUserContext} from '../../context/currentUser';


const CreateArticle = () => {
  const apiUrl = '/articles';
  const [{response, error}, doFetch] = useFetch(apiUrl);
  const [currentUserState] = useContext(CurrentUserContext);

  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: []
  };
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);

  const handleSubmit = article => {
    console.log('handle submit', article);
    doFetch({
      method: 'post',
      data: {
        article
      }
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }

    setIsSuccessfulSubmit(true);
  }, [response]);

  if (currentUserState.isLoggedIn === false) {
    return (
      <Redirect to='/'/>
    );
  }

  if (isSuccessfulSubmit) {
    return (
      <Redirect to={`/articles/${response.article.slug}`}/>
    );
  }

  return (
    <div>
      <ArticleForm
        errors={(error && error.errors) || {}}
        initialValues={initialValues}
        onSubmit={handleSubmit}/>
    </div>
  );
};

export default CreateArticle;
