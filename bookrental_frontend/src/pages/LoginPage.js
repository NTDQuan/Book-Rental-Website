import CoverImageComponent from "../Components/CoverImage/CoverImageComponent.js"
import LoginForm from "../Components/Login/LoginForm.js";
import "./style/LoginPage.css"

function LoginPage() {
    return (
        <div className="Wrapper">
            <CoverImageComponent
                content={
                    <div className="Login_Form">
                        <LoginForm/>
                    </div>
                }
            />
        </div>
    );
}

export default LoginPage