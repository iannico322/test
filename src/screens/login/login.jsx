import { Button } from "../../components/buttons/button"
import { Input } from "../../components/input-text/input"
import { Logo } from "../../components/magkahiosa-logo/logo"
import './login.css'

export const Login = () => {
  return (
    <div className="login-screen">
        <code className="" >&#169; USTP - SITE Programmer's Varsity 2022</code>
     <div className="forgot">
     <div className="form-container">
        
            <form>
                
            <h3>Forgot password</h3>
                <Input
                text = "New password"
                placeholder = "New password"
                />
                <Input
                    text = "Confirm assword"
                    placeholder = "Confirm assword"
                />
                <Button
                   
                    text = "Login"
                />
                
                <h4 className="back">←  back</h4>
                 
            </form>
            
        </div>
    </div>
    <div className="login">
   
        <div className="logo">
            <Logo
                ih= "20%"
                iw = "20%"
            />
        </div>
        <div className="form-container">
            <form>
            <h3>Log in to your account</h3>
                <Input
                text = "Email Address"
                placeholder = "Email Address"
                />
                <Input
                    text = "Password"
                    placeholder = "Password"
                />
                <Button

                    text = "Login"
                />
                <div className="hr">
                    <div></div>
                    <div></div>
                </div>
                 <p className="forgot-pass-text">Forgot your password?
                    <br />Contact your administrator</p>

                
            </form>
            
        </div>
        
    </div>
    
    </div>
  )
}
// const forgot_pass = document.querySelector('.forgot-pass-text')
// const forgot = document.querySelector('.forgot')
// const login = document.querySelector('.login')
// const back = document.querySelector('.back')


// back.addEventListener('click',()=>{
//     login.style.opacity = "100%"
//     forgot.style.opacity = "0%"
//     forgot.style.zIndex = "1"
 
// })
// forgot_pass.addEventListener('click',()=>{
//     login.style.opacity = "0%"
//     forgot.style.zIndex = "2"
//     forgot.style.opacity = "100%"
// })
