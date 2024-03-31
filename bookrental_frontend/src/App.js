import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/Home.jsx'
import AllBooks from './Pages/AllBooks.jsx'
import About from './Pages/About.jsx'
import Cart from './Pages/Cart.jsx'
import Book from './Pages/Book.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/allbooks' element={<AllBooks/>}/>
                    <Route path='book' element={<Book/>}>
                        <Route path=':bookId' element={<Book/>}/>
                    </Route>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/login' element={<LoginSignup/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
            
        </div>       
    );
}

export default App;