import './App.css';
import Form from './Components/Form'

function App() {
  return (
    <div className="App">
    <Form myData={'This is from props'} message={'This is also from props'} note={'A note from Chris'} music={'this is music'} record={1}/>
    </div>
  );
}

export default App;
