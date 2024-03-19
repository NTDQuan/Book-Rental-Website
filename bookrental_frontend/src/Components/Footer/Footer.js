import Logo from '../../image/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer_container">
                <img src= {Logo}/>
                <a>2024 All right reserverd</a>
            </div>
        </footer>
    );
}

export default Footer;