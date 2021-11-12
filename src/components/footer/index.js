import {Link} from 'react-router-dom';
import Style from './style';

const Footer = () => {
    return(
        <Style>
            <div className="website-create">
                <span>Created by <a href="https://www.linkedin.com/in/kimia-nikkhah-17b709222" target="blank">Kimia Nikkhah</a></span> 
            </div>
            <div className="media-images">
                <a href="https://github.com/kimia2328" target="blank"><img src="/assets/images/github.png" alt="github"/></a>
                <a href="https://www.linkedin.com/in/kimia-nikkhah-17b709222" target="blank"><img src="/assets/images/linkedin.png" alt="linkedin"/></a>
            </div>  
        </Style>
    )
    
}

export default Footer;