import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Header from './Components/Header';
import Hero from './Components/Hero';


function App() {
  return (
    <div className="App container">
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
