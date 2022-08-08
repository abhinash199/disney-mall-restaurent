import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Food from './components/food';
import {useState} from "react";
import {
  Routes,
  Route,
  Link
} from "react-router";
import Feedback from './components/Feedback';
import About from './components/About';
import Footer from './components/Footer';
import Menulist from './components/Menulist';
import {Data} from "./components/Data";

function App() {
  const [data, setdata] = useState(Data)
  return (
     <>
     <Header/>
     <Routes>
     <Route exact path="/" element={<Homepage/>} />
     <Route path='/food' element={<Food/>} />
     <Route path='/menu' element={<Menulist item={data} />} />
     <Route path='/feedback' element={<Feedback/>} />
     <Route path='/about-us' element={<About/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
