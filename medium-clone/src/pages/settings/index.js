import {useContext} from 'react';
import {CurrentUserContext} from '../../context/currentUser';
import useFetch from '../../hooks/useFetch';
import BackendErrorMessages from '../../components/backendErrorMessages';


const Settings = () => {
  const [currentUserState] = useContext(CurrentUserContext);
  const apiUrl = '/user';
  const [{response, error}, doFetch] = useFetch(apiUrl);

  const handleSubmit = () => {
    console.log('submitted');
  };

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
                    placeholder='URL of profile picture'/>
                </fieldset>

                <fieldset className='form-group'>
                  <input
                    type="text"
                    className='form-control form-control-lg'
                    placeholder='User Name'/>
                </fieldset>

                <fieldset className='form-group'>
                  <textarea
                    className='form-control form-control-lg'
                    rows='8'
                    placeholder='Short Biography'/>
                </fieldset>

                <fieldset className='form-group'>
                  <input
                    type="email"
                    className='form-control form-control-lg'
                    placeholder='Email'/>
                </fieldset>

                <fieldset className='form-group'>
                  <input
                    type="password"
                    className='form-control form-control-lg'
                    placeholder='Password'/>
                </fieldset>

                <button type='submit' className='btn btn-lg btn-primary pull-xs-right'>Update</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
