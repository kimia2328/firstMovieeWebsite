import styled from "styled-components";

const Style = styled.div`
    .login{
        position: relative;
        background: url("/assets/images/login-background.jpg") no-repeat center;
        background-size: cover;
        height: 100vh;
        width: 100%;
        &::before {
            content: "";
            background-color: rgba(0,0,0,0.8);
            background-size: cover;
            height: 100vh;
            width: 100%;
            position: absolute;
        }
    }

    form {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        background-size: cover;
        padding: 0 60px;
        text-align: center;
        color: #ffffff;
        .logo {
            
                img {
                    max-width: 150px;
                    margin-bottom: 40px;
                }
             
        }
        .login-information {
            .email,.password {
                margin: 20px 0;
                position: relative;
                img {
                    max-width: 30px;
                    position: absolute;
                    top: 7px;
                    left: 10px;   
                }
                input {
                    padding: 13px 60px;
                    border: 2px solid #ffffff;
                    border-radius: 2rem;
                    background: transparent;
                    color: #ffffff;
                    ::placeholder {
                            color: #ffffff;
                    }
                        
                }
            }
        }
        button {
            margin: 40px 0;
            padding: 10px 30px;
            font-size: 1rem;
            border: 2px solid #ffffff;
            border-radius: 2rem;
            background: transparent; 
            color: #ffffff;
            cursor: pointer;
            &:hover {
                background-color: #A232FF; 
                border: 2px solid #A232FF;
                color: #ffffff;
            }
        }
    }
`;

export default Style;