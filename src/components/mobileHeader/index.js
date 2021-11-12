import {Link, useHistory} from 'react-router-dom';
import Search from '../../components/search';
import Genre from '../../components/genre';
import {useAuthDispatch, useAuthState, logout} from '../../context';
import Style from './style';

const MobileHeader = () => {
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
          <header id="mobile-header">
            <div className="top-header">
              <div className="mobile-header-left">
                <div className="logo">
                      <Link to="/"><img src="/assets/images/purpule-logo.png" alt="logo"/></Link>
                </div>
              </div>
              <div className="mobile-header-right">
                <div className="search">
                    <Search />
                </div>
                {userLoginHandler()}
              </div>
            </div>
            <div className="bottom-header">
                <ul className="mobile-nav-items">
                    <li className="mobile-nav-item">
                      <a href="#">GENRE</a>
                      <Genre/>
                    </li>
                    <li className="mobile-nav-item"><Link to="/top-rated">TOP RATED</Link></li>
                    <li className="mobile-nav-item"><Link to="/popular">POPULAR</Link></li>
                </ul>
            </div> 
          </header>
      </Style>
    )
  }
  
  export default MobileHeader;