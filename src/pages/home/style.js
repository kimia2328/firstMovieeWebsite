import styled from "styled-components";

const Style = styled.div` 
    .background {
        background: linear-gradient(to top , #010C15, #032541);
        background-size: cover;
        background-attachment: fixed;
        width: 100%;
        color: #ffffff;
        position: relative;
    }
    .main {
        a {
            text-decoration:none;
            color: #ffffff;
        }
        ul {
            list-style:none;
            padding: 0;
            margin: 0;
        }
        
    
        .movie-list {
            width: 60%;
            margin: 0 auto;
            ul {
                margin-top: 40px;
                display: flex;
                flex-wrap: wrap;
                text-align: center;
                li {
                   width: 25%; 
                   margin: 20px 0;
                   
                   a {
                    max-width: 150px;
                    position: relative;
                    display: block; 
                    margin: 0 auto;
                    }
                   
                   img {
                    width: 100%;
                    height: auto;  
                    border-radius: 1rem; 
                    transition: transform .5s ease;
                     
                    &:hover {
                        transform: scale(1.2);
                        overflow: hidden;
                    }                
                   }
                }
            }
        }
    }

    /**********responsive***********/
    @media (max-width:1200px){
        .main {
            .movie-list {
            width: 80%;
            margin: 0 auto;
            }
        } 
    }

    @media (min-width:1000px){
        #mobile-header {
            display: none;
        }
    }

    @media (max-width:1000px) {
        .background{
            height: unset;
        }
        .main {
            header {
                display: none;
            }
            #mobile-header {
                display: block;
            }
            .mobile-header-left{
                .logo {
                    a {
                        img {
                            margin-top: -15px;
                        }
                    }
                }
            }    
            .movie-list {
            width: 70%;
            margin: 0 auto;
            ul {
                li {
                    width: 50%;
                    a {
                        width: 200px;
                    }
                }
            }
            }
           
            
        } 
    }

    @media (max-width:630px) {
        .main {
            .movie-list {
            width: 70%;
            margin: 0 auto;
                ul {
                    li {
                        width: 50%;
                        a {
                            max-width: 150px;
                        }
                    }
                }
            }
            .mobile-header-left{
                .logo {
                    a {
                        img {
                            width: 100px;
                            margin-top: 0;
                        }
                    }
                }
            }
            .mobile-header-right {
                .header-icon {
                    .login {
                        padding: 7px 0;
                        font-size: .5rem;
                    }
                    .profile, .logout {
                        padding: 7px 0;
                        font-size: .5rem;
                    }
                }            
                
            }
        } 
    }    
        

    
`;

export default Style;