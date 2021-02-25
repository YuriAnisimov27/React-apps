import {useState} from 'react';
import {Link} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{response, isLoading, error}, doFetch] = useFetch('/users/login');

  console.log('useFetch', response, isLoading, error);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('data', email, password);

    doFetch({
      method: 'post',
      data: {
        user: {
          email: 'qq@qq.qq',
          password: '123456'
        }
      }
    });
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
                  className='btn btn-lg btn-primary pull-xs-right' disabled={isLoading}>
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
