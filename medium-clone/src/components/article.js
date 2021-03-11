import {useState} from 'react';


const ArticleForm = ({onSubmit, errors, initialValues}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [description, setDescription] = useState('');
  const [tagList, setTagList] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({foo: 'foo'});
  };

  return (
    <div className='editor-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>
            BackendErrors
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className='form-group'>
                  <input type="text" className='form-control form-control-lg'
                         placeholder='Article title'/>
                </fieldset>

                <fieldset className='form-group'>
                  <input type="text" className='form-control form-control-lg'
                         placeholder='What Is This Article About?'/>
                </fieldset>

                <fieldset className='form-group'>
                  <textarea className='form-control' rows="8"
                            placeholder='Write Your Article (in markdown)'/>
                </fieldset>

                <fieldset className='form-group'>
                  <input type="text" className='form-control form-control-lg' placeholder='Enter Tags'/>
                </fieldset>

                <fieldset className='form-group'>
                  <button type='submit' className='btn btn-lg pull-xs-right btn-primary'>
                    Publish Article
                  </button>
                </fieldset>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;
