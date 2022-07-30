import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Food from './components/food';
import {
 
  Routes,
  Route,
  Link
} from "react-router";
import Feedback from './components/Feedback';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
     <>
     <Header/>
     <Routes>
     <Route exact path="/" element={<Homepage/>} />
     <Route path='/food' element={<Food/>} />
     <Route path='/feedback' element={<Feedback/>} />
     <Route path='/about-us' element={<About/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
