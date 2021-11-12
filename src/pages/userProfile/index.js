import Style from './style';

const UserProfile = () => {
    return(
        <Style>
            <div className="background">
				<div className="user-profile">
                    <div className="user-photo">
                        <img src="/assets/images/user-profile.jpg" alt="user"/>
                    </div>
					<div className="user-information">
                        <p>Kimia Nikkhah</p>
                        <p>kimianikkhah2328@gmail.com</p>
                        <div className="media-images">
                            <a href="https://github.com/kimia2328" target="blank"><img src="/assets/images/github.png" alt="github"/></a>
                            <a href="https://www.linkedin.com/in/kimia-nikkhah-17b709222" target="blank"><img src="/assets/images/linkedin.png" alt="linkedin"/></a>
                        </div>
					</div>	
				</div>
			</div>
        </Style>
    )
}

export default UserProfile;