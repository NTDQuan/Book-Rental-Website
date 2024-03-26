import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import "./ToolBar.css"

const ToolBarDefault = () => {
    return (
        <div className="ToolBar_default">
            <Link to="/auth/login">
                <button className='Login_button' type='button'>Login</button>
            </Link>
        </div>
    )
}

export default ToolBarDefault