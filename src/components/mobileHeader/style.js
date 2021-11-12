import styled from "styled-components";

const Style = styled.div`
    ul {
            list-style:none;
            padding: 0;
            margin: 0;
        }
        a {
            text-decoration: none;
            color: #ffffff;
        }
    #mobile-header {
            
            .top-header {
                .mobile-header-left {
                    .logo {
                        a {
                            img {
                                max-width: 150px;
                            }
                        }
                    }
                }
                padding: 30px;
                display: flex;
                justify-content: space-between;
                .mobile-header-right {
                    display: flex;
                    flex-direction: row;
                    background-color: transparent;
                    .header-icon {
                        margin-top: 3px;
                        .login {
                            padding: 10px 20px;
                            font-size: .7rem;
                            border-radius: 2rem;
                            background-color: #A232FF; 
                            color: #ffffff; 
                            border: 3px solid #A232FF;
                            transition: all .3s;
                            font-weight: bold;
                            &:hover {
                                background-color: transparent; 
                                color: #B941FF; 
                            }
                        }
                        .profile, .logout {
                            cursor: pointer;
                            padding: 10px 10px;
                            margin: -10px 0 0 5px ;
                            font-size: .7rem;
                            border-radius: 2rem;
                            background-color: #A232FF; 
                            color: #ffffff; 
                            border: 3px solid #A232FF;
                            transition: all .3s;
                            font-weight: bold;
                            &:hover {
                                background-color: transparent; 
                                color: #B941FF; 
                            }
                        }
                    }    
                }
            }

            .bottom-header {
                padding: 20px 0 30px 0;
                .mobile-nav-items {
                    display: flex;
                    justify-content: center;
                    .mobile-nav-item {
                        margin: 0 25px;
                            a{
                                transition: all .2s ease;
                                padding-bottom: 3px;
                                &:hover {
                                    border-bottom: 2px solid #A232FF;
                                }
                            }
                            
                            &:hover > .genre-list {
                                display: block;
                            }
                            .genre-list {
                                z-index: 1;
                                position: absolute;
                                background-color: #032541;
                                border: 2px solid #A232FF;
                                border-radius: 1rem;
                                margin-left: -5px;
                                display: none; 
                                li {
                                padding: 5px 10px;
                                transition: all .8s ease;
                                &:hover {
                                    background-color: #A232FF; 
                                }
                                &:first-child{
                                    border-radius: .8rem .8rem 0 0 ;
                                }
                                &:last-child{
                                    border-radius: 0 0 .8rem .8rem;
                                }
                                }
                            }
                    }
                }
            }
            
        }

   /************responsive************/   
   @media (max-width:630px) {
       
   }  
`;

export default Style;