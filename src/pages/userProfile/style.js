import styled from 'styled-components';

const Style = styled.div`
    .background{
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

        .user-profile {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 1rem;
            color: #ffffff;
            text-align: center;
            background-color: rgba(0,0,0,0.5);
            padding: 100px 70px;

            .user-photo {
                    img {
                        max-width: 100px;
                        border-radius: 6rem;
                    }
            }
            .user-information {
                
                .media-images {
                    a {
                        img {
                            max-width: 40px;
                        }
                    }
                }
            }
        }
    }
`;

export default Style;