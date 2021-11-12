import {Link, useHistory} from 'react-router-dom';
import Search from '../../components/search';
import Genre from '../../components/genre';
import {useAuthDispatch, useAuthState, logout} from '../../context';
import Style from './style';

const Header = () => {
  const userData = useAuthState();
  const history = useHistory();
  const dispatch = useAuthDispatch();
  function userLoginHandler() {
    if(userData.token) {
      return(
        <div className="header-icon">
          <Link to="/user-profile" className="profile">PROFILE</Link>
          <button onClick={handleLogOut} className="logout">LOGOUT</button>
        </div>
      )
    } 
    else {
      return(
        <div className="header-icon">
          <Link to="/login" className="login">LOG IN</Link>
        </div>
      )
    }
  }

  const handleLogOut = () => {
    logout(dispatch);
    history.push('/');
  }
    return(
        <Style>
            <header id="myHeader" className="header">
                <div className="header-left">
                  <div className="logo">
                        <Link to="/"><img className="logo.png" src="/assets/images/purpule-logo.png" alt="logo"/></Link>
                  </div>
                </div>
                  <ul className="nav-items">
                      <li className="nav-item">
                        <span>GENRE</span>
                        <Genre/>
                      </li>
                      <li className="nav-item"><Link to="/top-rated">TOP RATED</Link></li>
                      <li className="nav-item"><Link to="/popular">POPULAR</Link></li>
                  </ul>
                <div className="header-right">
                  <div className="search">
                      <Search />
                  </div>
                  {userLoginHandler()}
                </div>
            </header>
        </Style>
    )
}

export default Header;

