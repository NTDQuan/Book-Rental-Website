import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar/NavBar.js';
import RouterOutlet from '../src/Components/Router.js'
import ShopPage from './pages/ShopPage.js';
import Footer from './Components/Footer/Footer.js';
import HomePage from './pages/HomePage.js'
import LoginPage from './pages/LoginPage.js'
function App() {
    return (
        <div>
            <NavBar/>
            <RouterOutlet/>
            <Footer/>
        </div>       
    );
}

export default App;