import styled from "styled-components";


export const Nav = styled.div`
    background-color: #322c2cd6;
    position: fixed;
    width: 100%;
    ul{
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        list-style-type: none;
        margin: 0 20px;
   li{
    color: #fff;
    padding: 20px;
   }
    }

    `
    export const HelpMove = styled.li`
       
        padding: 20px;
    
    `
    export const Checked = styled.div`
      background: #fff;
      width: 40px;
      height: 20px;  
      border-radius: 10px;
      padding: 1px;
      display: flex;
      justify-content: ${props =>props.jsc};
      div{
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: green;
          margin: 1px;
      }
    
    `
    export const Avatar = styled.li`
    background: #fff;
    border-radius: 50%;  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0;
    height: 0;
    p{
        color: #000;
    }
    `