import {BrowserRouter} from 'react-router-dom';
import Routes from './pages/routes';
import TopBar from './components/topBar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <TopBar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
