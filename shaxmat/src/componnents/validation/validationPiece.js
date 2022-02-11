
   
// "rnbqkbnrpppppppp11111111111111111111111111111111RNBQKBNRPPPPPPPP"

import { validationBishop } from "./validationBishop"
import { validationRook } from "./validationRook"
import { validationKnight } from "./validationKnigth"
import { validationKing } from "./validationKing"
import { validationBlackPawn, validationWhitePawn } from "./validationPawn"




export const movePiece =(name,y)=>{
    switch (name){
        case "r":
            return  <div id={'s'+y}>&#9814;</div>
        case 'n':
            return <div id={'s'+y}>&#9816;</div> 
        case "b":
            return <div id={'s'+y}>&#9815;</div> 
        case "q":
            return <div id={'s'+y}>&#9813;</div>
        case 'k':
            return <div id={'s'+y}>&#9812;</div> 
        case "p":
            return <div id={'s'+y}>&#9817;</div> 
        case 'R':
            return <div id={'s'+y}>&#9820;</div> 
        case "N":
            return <div id={'s'+y}>&#9822;</div>
        case 'B':
            return <div id={'s'+y}>&#9821;</div>
        case "Q":
            return <div id={'s'+y}>&#9819;</div>
        case 'K':
            return <div id={'s'+y}>&#9818;</div>
        case "P":
            return <div id={'s'+y}>&#9823;</div>
        default: return  <div id={'s'+y}>{' '}</div>;
    }
}

const white = ['q', 'k', 'b', 'n', 'r', 'p']
const black = [ 'Q', 'K', 'B', 'N', 'R','P']



const moveHintChessPiece =(startPiece,endPiece,start,end,state)=>{

    switch (startPiece){
        case "r":
          return  validationRook(state,start,end)
        case 'n':
           return validationKnight(start,end)
        case "b":  
            return validationBishop(state,start,end)
        case "q":
            return validationBishop(state,start,end) || validationRook(state,start,end)
        case 'k':
            return validationKing(start,end,state,'r')        
        case "p":
           return validationWhitePawn(state,start,end,endPiece)        
        case 'R':
            return  validationRook(state,start,end)
        case "N":
            return validationKnight(start,end)
        case 'B':
            return validationBishop(state,start,end)
        case "Q":
            return validationBishop(state,start,end) || validationRook(state,start,end)
        case 'K':
            return validationKing(start,end,state,'R')
        case "P":
          return validationBlackPawn(state,start,end,endPiece)
        default: 
          return  true 
    }

}


export const changeFish=(state,start,end)=>{ 
    const whiteEnd = white.includes(state[end])
    const whiteStart = white.includes(state[start])
    const blackEnd = black.includes(state[end])
    const blackStart = black.includes(state[start])
   
    if(!moveHintChessPiece(state[start],state[end],start,end,state)) return {nextPiece:false, state}

    if(state[end]==='1' && end < 56){
        [state[start],state[end]] =[state[end],state[start]]
        return {nextPiece:true, state}
    }
    if(state[start] === state[end]){
        return {nextPiece:false, state}
    }
    if((whiteEnd && whiteStart) || (blackEnd && blackStart) ){
        return {nextPiece:false, state}
    }
    if((blackEnd && whiteStart) || (whiteEnd && blackStart)){
        if(state[start] === 'P' && (end >= 0 && end <=7)){
            state[end]= 'Q'
            state[start] = '1'
            return {nextPiece:true, state}
        }    
      
    }
    if(state[start] === 'p' && (end >= 56 && end <=63)){
        state[end]= 'q'
        state[start] = '1'
        return {nextPiece:true, state}
    }
    state[end]= state[start]
    state[start] = '1'       
     return {nextPiece:true, state}
   
}
