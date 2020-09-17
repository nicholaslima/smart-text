
import styled from 'styled-components';

export const InputStyle = styled.input` 
    font-family: Fira Code;
    font-size: 21px;
    padding: 14px;
    border: 0px solid white;
    border-radius: 5px;
    margin-top: 10px;
    &&:focus{
        border: 2px solid #8257E5;
    }

    &&::placeholder{
        color: black;
    }

`;