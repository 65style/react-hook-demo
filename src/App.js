// import logo from './logo.svg';
import './App.css';
import ExampleState from './ExampleState'
import ExampleEffect from './ExampleEffect'
import ExampleEffectArgs from './ExampleEffectArgs'
import ExampleContext from './ExampleContext'
import ExampleReducer from './ExampleReducer'
import ExampleUserLogin from './ExampleUserLogin/ExampleUserLogin'

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <ExampleState />
      <ExampleEffect />
      <ExampleEffectArgs />
      <ExampleContext />
      <ExampleReducer />
      <ExampleUserLogin />
    </div>
  );
}

export default App;
