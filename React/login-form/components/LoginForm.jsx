import {useState} from "react";


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <form className="form">
            <input type="email" id="email" placeholder="enter your email"/>
            <input type="password" id="password" placeholder="enter your password"/>
            <input type="checkbox" id="showPassword" value={showPassword} onChange={handleShowPassword}/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default LoginForm;