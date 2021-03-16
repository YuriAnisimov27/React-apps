import {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {CurrentUserContext} from '../context/currentUser';


const TopBar = () => {
  const [currentUserState] = useContext(CurrentUserContext);
  console.log('currentUserState.currentUser', currentUserState.currentUser)

  return (
    <nav className='navbar navbar-light'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>Medium</Link>
        <ul className='nav navbar-nav pull-xs-right'>
          <li className='nav-item'><NavLink className='nav-link' to='/' exact>Home</NavLink></li>
          {currentUserState.isLoggedIn === false && (
            <>
              <li className='nav-item'><NavLink className='nav-link' to='/login'>Sing In</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' to='/register'>Sing Up</NavLink></li>
            </>
          )}
          {currentUserState.isLoggedIn && (
            <>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/articles/new'>
                  <i className='ion-compose'/>
                  &nbsp; New Post
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink className='nav-link' to='/settings'>
                  <i className='ion-gear-a'/>
                  &nbsp; Settings
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink className='nav-link' to={`/profiles/${currentUserState.currentUser.username}`}>
                  <img className='user-pic' src={currentUserState.currentUser.image || 'https://cdn3.iconfinder.com/data/icons/cool-avatars-2/190/00-07-2-512.png'} alt="avatar"/>
                  &nbsp; {currentUserState.currentUser.username}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
