import styled from "styled-components";

export const FormsInput = styled.input`
    border: 0 ;
    border-bottom: 1px solid #3e6e44;
    padding: 10px;
   :focus-visible{
       border :0 !important;
       border-bottom: 1px solid #3e6e44;
   }
`

export const Forms = styled.div`
    display: flex;
    flex-direction: column;
    border: 10px double #3e6e44;
    box-shadow: 3px 3px 8px 3px #3e6e44;
    border-radius: 8px;
    padding: 20px;
    width: 20%;
`

export const FormBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const TextTitle = styled.p`
    color: #3e6e99;
    font-size: 20px;
    font-weight: 700;
`
export const ErrorMsg = styled.span`
    margin-top: 5px;
    color: red;
    text-align: center;
    background:${props=> props.msg ? '#e1e1ca73' : ''} ;
    border: ${props=> props.msg ? '1px solid red': '' } ;
    position: relative;
    height: 30px;
    border-radius: 8px;
    font-size: 14px;
    padding-top: 5px;
    box-shadow:${props=> props.msg ? '3px 3px 3px #000':''};
    ::before{
        content: '';
        border-right: 7px solid transparent;
        border-left: 7px solid transparent; 
        border-bottom: ${props => props.msg ? '7px solid red': '' } ; 
        position: absolute;
        top:-8px;
    }
`
export const PositionButtonLeft = styled.div`
    display: flex;
    justify-content: end;
    margin: 10px 10px 0 0;
`
export const Button = styled.button`
    background: #3e6e44;
    color: #fff ;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
`