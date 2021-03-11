import ArticleForm from '../../components/article';

const CreateArticle = () => {
  const errors = {};
  const initialValues = {};
  const handleSubmit = data => {
    console.log('handle submit', data);
  };

  return (
    <div>
      <ArticleForm errors={errors} initialValues={initialValues} onSubmit={handleSubmit()}/>
    </div>
  );
};

export default CreateArticle;
