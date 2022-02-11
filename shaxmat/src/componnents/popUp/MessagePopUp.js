


import { Notivication } from '../styles/Notivication.Style';




export const MessagePopUp = ({getMessage}) => {
    
    return(
    <Notivication dpl={getMessage}>
        {getMessage}
    </Notivication>
)};
