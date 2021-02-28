import {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


const Authentication = (props) => {
  const isLogin = props.match.path === '/login';
  const pageTitle = isLogin ? 'Sing In' : 'Sing Up';
  const descriptionText = isLogin ? 'Need an account?' : 'Have an account?';
  const descriptionLinc = isLogin ? '/register' : '/login';
  const apiUrl = isLogin ? '/users/login' : '/users';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false);
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    if (!response) {
      return;
    }
    localStorage.setItem('token', response.user.token);
    setIsSuccessfulSubmit(true);
  }, [response]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = isLogin ? {email, password} : {email, password, username};

    doFetch({
      method: 'post',
      data: {
        user
      }
    });
  };

  if (isSuccessfulSubmit) {
    return <Redirect to='/'/>;
  }

  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>{pageTitle}</h1>

            <p className='text-xs-center'>
              <Link to={descriptionLinc}>{descriptionText}</Link>
            </p>

            <form onSubmit={handleSubmit}>
              <fieldset>
                {!isLogin && (
                  <fieldset className='form-group'>
                    <input
                      type="text"
                      className='form-control form-control-lg'
                      placeholder='User Name'
                      value={username}
                      onChange={e => setUserName(e.target.value)}/>
                  </fieldset>
                )}

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
                  {pageTitle}
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
