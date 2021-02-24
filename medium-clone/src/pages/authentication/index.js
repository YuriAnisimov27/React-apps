import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSubmitting) {
      return;
    }

    axios('https://conduit.productionready.io/api/users/login', {
      method: 'post',
      data: {
        user: {
          email: 'qq@qq.qq',
          password: '123456'
        }
      }
    })
      .then(res => console.log('success', res))
      .catch(err => console.error('error', err))
      .finally(() => setIsSubmitting(false));

  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    console.log(email, password);
  };

  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Login</h1>

            <p className='text-xs-center'>
              <Link to='register'>Need An Account?</Link>
            </p>

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className='form-group'>
                  <input
                    type="email"
                    className='form-control form-control-lg'
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                </fieldset>

                <fieldset className='form-group'>
                  <input
                    type="password"
                    className='form-control form-control-lg'
                    placeholder='Password'
                    autoComplete='on'
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                </fieldset>

                <button
                  type='submit'
                  className='btn btn-lg btn-primary pull-xs-right' disabled={isSubmitting}>
                  Sing In
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
