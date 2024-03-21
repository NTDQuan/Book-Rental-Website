import "./CoverImage.css"
import CoverImage from "../../image/home_cover.jpg"
import PropTypes from "prop-types";

const CoverImageComponent = ({ content }) => {
    return (
        <div className="Home_Cover_Container">
            <div className="Home_Cover_Image">
                <img src={CoverImage} alt="home_cover"/>
            </div>
            <div className="Home_Cover_Overlay">
                
            </div>
            <div>{content}</div>
        </div>
    );
}

CoverImageComponent.prototype = {
    content: PropTypes.node
}

export default CoverImageComponent;