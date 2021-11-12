import styled from "styled-components";

const Style = styled.div`
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: #ffffff;
    }
    .main {
        background: linear-gradient(to top , #010C15, #032541);
        background-size: cover;
        width: 100%;
        color: #ffffff;
        position: absolute;
        .movie-list {
            width: 90%;
            margin: 0 auto;
            ul {
                display: flex;
                flex-wrap: wrap;
                text-align: center;
                flex: 1 1 25;
                li {
                   width: 20%;
                   margin: 20px 0;
                   a {
                    max-width: 200px;
                    position: relative;
                    display: block; 
                    margin: 0 auto;
                        &::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0,0,0,0.8);
                        display: none;
                        top: 0;
                        left: 0;
                        border-radius: 1rem;
                        
                        }
                        
                        &:hover::after {
                            display: block;
                        }
                        &:hover > .imdb-hover {
                            display: block;
                        }
                        .poster{
                            width: 100%;
                            height: auto;  
                            border-radius: 1rem;          
                        }  
                        .imdb-hover {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            display: none;
                            z-index: 1;
                            img {
                                max-width: 50px;  
                            }
                            p{
                                
                            }
                        } 
                    }
                   
                }
            }
        }

    }

    /**************responsive**************/
@media (max-width:1120px) {
    .main {
        .movie-list {
            ul {
                li {
                    width: 25%;
                    a {
                        max-width: 200px;
                    }
                }
            }
        }
    }
    
}
    @media (min-width:900px){
        #mobile-header {
            display: none;
        }
    }

    @media (max-width:900px) {
        .main {
            header {
                display: none;
            }
            #mobile-header {
                display: block;
            }
            .movie-list {
            width: 70%;
            margin: 0 auto;
            ul {
                li {
                    width: 50%;
                    a {
                        max-width: 200px;
                    }
                }
            }
            }
        } 
    }

    @media (max-width:700px) {
        .main {
            .movie-list {
                ul {
                    li {
                        a {
                            max-width: 150px;
                        }
                    }
                }
            }
        }   
    }


`;

export default Style;