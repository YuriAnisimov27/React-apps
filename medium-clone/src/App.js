import {BrowserRouter} from 'react-router-dom';
import Routes from './pages/routes';


function App() {
  return (
    <div>
      <h3>Welcome</h3>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
