
import styled from 'styled-components';

export const Notivication = styled.div`
position: absolute;
background-color: #fff;
border-radius: 4px;
font-size: 14px !important;
padding: 5px;
display: ${props=>props.dpl ? 'block':'none'};
::before{
    content: '';
    position: absolute;
    left: 12px;
    top:-7px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #fff;

}

`

export const Message = styled.div`
position: absolute;
padding: 10px;
display: ${props=>props.msg ? 'block':'none'};
box-shadow: 3px 3px 8px 3px #981212;
background: #fff;
border: 1px solid #981212;
color: #981212;
right: 50px;
top: 200px;

`


