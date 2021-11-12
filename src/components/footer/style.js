import styled from "styled-components";

const Style = styled.div`
    a {
        padding: 0;
        margin: 0;
        text-decoration: none;
    }
    .media-images {
        display: flex;
        justify-content: center;
        a{
            img {
            max-width: 30px;
            margin: 10px;
            cursor: pointer;
            }
        }  
    }

    .website-create {
        text-align: center;
        padding: 50px 0 10px 0;
        font-size: 1rem;
        span {
            color: #1F6BFF;
            a {
                color: #1F6BFF;
                &:hover {
                    color: #C324FF;
                }
            }
        }    
    }
`;

export default Style;