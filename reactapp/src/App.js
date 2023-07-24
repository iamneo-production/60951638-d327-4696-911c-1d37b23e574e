import './App.css';
// import NewComponent from './components/registration';
// import LoginWrapper from './components/registration';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Registration from "./components/registration";
import About from './components/aboutus';
import Contact from './components/contact';
import Search from './components/search';
import Seat from './components/seat';
import Payment from './components/payment';
// import Profile from './components/profile';
import { Provider } from 'react-redux';
import store from './components/store';
import Help from './components/help';
import Feedback from './components/feedback';
function App() {
  return (
    <Provider store={store}>
   
      <Routes>

        <Route exact path="/" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/search" element={<Search/>}/>
         <Route path="/seat" element={<Seat/>}/>
         <Route path="/pay" element={<Payment/>}/>
         <Route path="/help" element={<Help/>}/>
         <Route path="/feedback" element={<Feedback/>}/>
         {/* <Route path="/profile" element={<Profile/>}/> */}
        
      </Routes>
 
      </Provider>
    
  );
}

export default App;
