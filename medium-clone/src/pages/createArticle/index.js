import ArticleForm from '../../components/article';
import useFetch from '../../hooks/useFetch';

const CreateArticle = () => {
  const apiUrl = '/articles';
  const [{response, error}, doFetch] = useFetch(apiUrl);
  const initialValues = {
    title: 'Default Article Title',
    description: '',
    body: '',
    tagList: ['foo', 'bar']
  };
  const handleSubmit = article => {
    console.log('handle submit', article);
    doFetch({
      method: 'post',
      data: {
        article
      }
    });
  };

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
