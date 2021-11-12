import styled from "styled-components";

const Style = styled.div`
    form {  
        margin-top: -7px;
        margin-right: 30px;
        position: relative;
        align-content: center;
        .search-icon {
            max-width: 30px;
            position:absolute;
            top: 4px;
            left: 10px;
        }                
        input {
            border: 2px solid #A232FF;
            border-radius: 2rem;
            padding: 10px 15px;
            text-indent: 30px;
            background-color: transparent;
            color:#ffffff;
            ::placeholder {
                color: #ffffff;
            }
        }
        .search-scroll{
            background-color: #032541;
            z-index: 10;
            position: absolute;
            top: 40px;
            left: 0;
            max-height: 200px;
            min-width: 200px;
            overflow-y: scroll;
            z-index: 100;
            img {
                max-width: 30px;
                padding-right: 10px;
            }
        }
    }
/***************responsive**************/
    @media (max-width:630px){
        form {  
        margin-top: 0px;
        .search-icon {
            max-width: 20px;
            top: 6px;
        }                
        input {
            padding: 7px 10px;
            text-indent: 30px;
        }
        }
    }
`;

export default Style;