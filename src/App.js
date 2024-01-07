import './App.css';
import Banner from './Assets/Pages/Banner';
import Hero from './Assets/Pages/Hero';
import NavBar from './Assets/Pages/NavBar';
import Popular from './Assets/Pages/Popular';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <Popular/>
     <Banner/>
    </div>
  );
}

export default App;
