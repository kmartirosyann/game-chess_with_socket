const black = [ 'Q', 'K', 'B', 'N', 'R','P']
const white = ['q', 'k', 'b', 'n', 'r', 'p']

export const validationWhitePawn = (state,start,end,endPiece)=>{

    if(black.includes(state[end])  && (end === start + 9 || end === start +7)){
        return true
    }

    if(start >= 8 && start <= 15 && (end === start + 8 || end === start + 16)){
        if(endPiece !== '1'){
            return false
        }                     
        return true
    }

    if(start > 15 && end === start + 8){
        if(endPiece !== '1'){
            return false
        } 
      return true
    }
    
    return false
}

export const validationBlackPawn =(state,start,end,endPiece)=>{

    if(white.includes(state[end])  && (end === start - 9 || end === start - 7)){
        return true
    }

    if(start >= 48 && start <= 55 && (end === start - 8 || end === start - 16)){
        if(endPiece !== '1'){
            return false
        } 
      return true
        
    }

   if(start < 48 && end === start - 8){
        if(endPiece !== '1'){
            return false
        } 
      return true
   }
    return false
}