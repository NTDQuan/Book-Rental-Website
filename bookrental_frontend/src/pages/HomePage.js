import Footer from "../Components/Footer/Footer.js";
import CoverImage from "../image/home_cover.jpg"
import "./style/HomePage.css"

function HomePage() {
    return(
        <div className="Wrapper">
            <div className="Home_Cover_Container">
                <div className="Home_Cover_Image">
                    <img src={CoverImage} alt="home_cover"/>
                </div>
                <div className="Home_Cover_Overlay">
                    
                </div>
                <div className="Home_Cover_Text">
                    <a>Welcome to Rent A Book !</a>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default HomePage;