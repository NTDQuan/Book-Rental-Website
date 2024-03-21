import CoverImage from "../image/home_cover.jpg"
import CoverImageComponent from "../Components/CoverImage/CoverImageComponent.js"
import "./style/HomePage.css"

function HomePage() {
    return(
        <div className="Wrapper">
            <CoverImageComponent
                content={
                    <div className="Home_Cover_Text">
                        <a>Welcome to Rent A Book !</a>
                    </div>
                }
            
            />
        </div>

    );
}

export default HomePage;