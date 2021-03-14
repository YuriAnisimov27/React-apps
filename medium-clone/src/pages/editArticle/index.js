import {useEffect, useState} from 'react';
import useFetch from '../../hooks/useFetch';
import ArticleForm from '../../components/article';


const EditArticle = ({match}) => {
  const slug = match.params.slug;
  const apiUrl = `/articles/${slug}`;
  const [{response: fetchArticleResponse}, doFetchArticle] = useFetch(apiUrl);
  const [{response: updateArticleResponse, error: updateArticleError}, doUpdateArticle] = useFetch(apiUrl);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    doFetchArticle();
  }, [doFetchArticle]);

  const handleSubmit = () => {

  };

  return (
    <ArticleForm
      onSubmit={handleSubmit}
      errors={(updateArticleError && updateArticleError.errors) || {}}
      initialValues={initialValues}/>
  );
};

export default EditArticle;
