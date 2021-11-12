import {useState, useEffect } from "react";
import { loginUser, useAuthDispatch } from "../../../context";
import {useHistory, Link} from "react-router-dom";
import Style from './style';

const Login = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const dispatch = useAuthDispatch();
	useEffect(() => {
        document.title = "moviee";
    },[]);
    

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
			let response = await loginUser(dispatch, {email, password});
			console.log(response);
            if(!response.userName) return;
            history.push('/');
        } catch(error) {
            console.log(error);
        }
    };

    return(
        <Style>
			<div className="login">
				<form>
					<div className="logo"><Link to="/"><img src="/assets/images/white-logo.png" alt="logo"/></Link></div>
					<div className="login-information">
						<div className="email">
							<img src="/assets/images/user.png" alt="user-icon"/>
							<input
								placeholder="Email"
								type='text'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
									
							/>
						</div>
						<div className="password">
							<img src="/assets/images/lock.png" alt="lock-icon"/>
							<input
								placeholder="Password"
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<button onClick={handleLogin} >login</button>	
				</form>
			</div>
        </Style>
    )
}

export default Login;