import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './LoginForm.css'

const LoginForm = () => {
    return (
        <div className="wrapper">
            <box className="form-box-login" component="form" noValidate>
                <div className='login-div'>
                    <h2>Login</h2>
                </div>
                <TextField
                    className="input-box"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    className="input-box"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                
                <div className='container-button' >
                    <Button 
                        className='submit-button'
                        variant="contained"
                        type='submit'
                        fullWidth
                    >Contained</Button>
                </div>
                <Grid container className>
                    <Grid item xs>
                        <Link href="#" variant="body2" underline="none" className='href-text'>
                        Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2" underline="none" className='href-text'>
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
                

            </box>
        </div>        
    );
}

export default LoginForm;