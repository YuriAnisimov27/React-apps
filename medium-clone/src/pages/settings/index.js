import {useState, useContext, useEffect} from 'react';
import {CurrentUserContext} from '../../context/currentUser';
import useFetch from '../../hooks/useFetch';
import BackendErrorMessages from '../../components/backendErrorMessages';
import useLocalStorage from '../../hooks/useLocalStorage';
import {Redirect} from 'react-router-dom';


const Settings = () => {
  const [currentUserState, dispatch] = useContext(CurrentUserContext);
  const apiUrl = '/user';
  const [{response, error}, doFetch] = useFetch(apiUrl);

  const [image, setImage] = useState('');
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [, setToken] = useLocalStorage('token');
  const [isSuccessfulLogout, setIsSuccessfulLogout] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    doFetch({
      method: 'put',
      data: {
        user: {
          ...currentUserState.currentUser,
          image,
          userName,
          bio,
          email,
          password
        }
      }
    });
  };

  const logout = (event) => {
    event.preventDefault();

    setToken('');
    dispatch({type: 'LOGOUT'});
    setIsSuccessfulLogout(true);
  };

  useEffect(() => {
    if (!currentUserState.currentUser) {
      return;
    }

    setImage(currentUserState.currentUser.image || '');
    setUserName(currentUserState.currentUser.username);
    setBio(currentUserState.currentUser.bio || '');
    setEmail(currentUserState.currentUser.email);
  }, [currentUserState.currentUser]);

  useEffect(() => {
    if (!response) {
      return;
    }

    dispatch({type: 'SET_AUTHORIZED', payload: response.user});
  }, [response, dispatch]);

  if (isSuccessfulLogout) {
    return <Redirect to='/'/>;
  }

  return (
    <div className='settings-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Your Settings</h1>
            {error && <BackendErrorMessages backendErrors={error.errors}/>}
            <form action="" onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className='form-group'>
                  <input
                    type="text"
                    className='form-control form-control-lg'
                    placeholder='URL of profile picture'
                    value={image}
                    onChange={e => setImage(e.target.value)}/>
                </fieldset>

                <fieldset className='form-group'>
                  <input
                    type="text"
                    className='form-control form-control-lg'
                    placeholder='User Name'
                    value={userName}
                    onChange={e => setUserName(e.target.value)}/>
                </fieldset>

                <fieldset className='form-group'>
                  <textarea
                    className='form-control form-control-lg'
                    rows='8'
                    placeholder='Short Biography'
                    value={bio}
                    onChange={e => setBio(e.target.value)}/>
                </fieldset>

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
                    autoComplete="on"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                </fieldset>

                <button type='submit' className='btn btn-lg btn-primary pull-xs-right'>Update</button>
              </fieldset>
            </form>

            <hr/>
            <button type='button' className='btn btn-outline-danger' onClick={logout}>Or click here to logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
