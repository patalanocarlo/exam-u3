import './App.css';
import MyNavbar from './components/MyNavBar';
import SelectGenre from './components/MySelectionGeneres';
import MyFilm1 from './components/Myfilm1';
import MyFilm2 from './components/Myfilm2';
import MyFilm3 from './components/MyFilm3'; 
import MyFooter from './components/Myfooter';
import MySection from './components/MySection';
function App() {
  return (
    <div className="App">
    < MyNavbar/>
    <SelectGenre/>
    <h1  className='container'  style={{color:"white"}}>Trending Now</h1>
    < MyFilm1/>
    <h1  className='container' style={{color:"white" }}>Watch it again</h1>
    < MyFilm2/>
    <h1 className='container' style={{color:"white" }}>New Releases</h1>
    < MyFilm3/>
    <h1 className='container' style={{color:"white" }}>Cosa vogliamo vedere oggi?</h1>
    < MySection/>
    < MyFooter/>
    </div>

  );
}

export default App;
