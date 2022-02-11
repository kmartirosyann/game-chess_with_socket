export const validationKing =(start,end,state,king)=>{

    if( end === start + 7   ||
          end === start + 8 || 
          end === start + 9 ||
          end === start + 1 ||
          end === start - 1 || 
          end === start - 7 ||
          end === start - 8 || 
          end === start - 9 )
          {
      return true
    }
   
    
  return false
}