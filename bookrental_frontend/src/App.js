import HomePage from './pages/HomePage.js'
import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar/NavBar.js';
import ShopPage from './pages/ShopPage.js';

function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path="/shop" element={<ShopPage/>}/>
            </Routes>
        </div>       
    );
}

export default App;