import styled from "styled-components";

const Style = styled.div`
    .main{
        .background {
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover; 
            background-position: center center;
            position: relative;
            height: 100vh;
            width: 100%;
            &::before {
            content: "";
            background-color: rgba(0,0,0,0.8);
            background-size: cover;
            width: 100%;
            height: 100%;
            position: absolute;
        }
        }
        .content {
            width: 100%;
            color: #ffffff;
            position: relative;
            display: flex;
            justify-content: space-between;
            .poster {
                padding: 30px 0 0 30px;
                img {
                    border-radius: 2rem;
                }
            }
            .information {
                padding: 30px 100px 10px 30px;
                p {
                    
                    display: flex;
                    .title {
                        padding-right: 50px;
                    }
                    .language {
                        padding-right: 12px;
                    }
                    .overview {
                        padding-right: 15px;
                    }
                    .release-date {
                        padding-right: 30px;
                    }
                    .genres-item{
                        margin-left: 30px;  
                    } 
                    img {
                        max-width: 35px;
                        padding-right: 45px;
                    }
                }
            }
        }
    } 

    
    /*************responsive**************/

     @media (max-width:850px){
         .main{
             .background {
                height: unset;
             }
             .content {
            flex-direction: column;
            justify-content: center;
            .poster {
                img {
                    max-width: 200px;
                }
            }
            .information {
                
            }
        }  
         }
         
    }
`;

export default Style;