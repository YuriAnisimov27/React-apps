import {BrowserRouter} from 'react-router-dom';
import {CurrentUserProvider} from './context/currentUser';
import Routes from './pages/routes';
import TopBar from './components/topBar';


function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <TopBar/>
        <Routes/>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
