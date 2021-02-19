import Welcome from './Welcome';
import Clock from './Clock';
import './App.css';
import List from './List';


const data = ['mary', 'john', 'bull', 'cat'];

function App() {
  return (
    <div className="App">
      <Welcome>
        Vadik
      </Welcome>
      <Clock/>
      <List data={data} />
    </div>
  );
}

export default App;
