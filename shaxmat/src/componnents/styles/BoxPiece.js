import styled from "styled-components";

export const ColorBox = styled.div`
    background-color: ${props => props.move ? "#00800040" : props.bg };
    border: 0.2px solid ;
    padding: 13px 19.5px;
    div{
        font-size: 40px;
    }
    div:hover{
      cursor: grab;
    }
    :hover{
        background-color: yellow;
    }
    `
