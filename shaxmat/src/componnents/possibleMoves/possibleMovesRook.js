




export const possibleMovesPieceRook =(state,start,yourPiece,hisPiece)=> {

    let res = [];
  
    if(start > 7){
      for(let z = start-8; z >= 0; z-= 8){
       if(hisPiece.includes(state[z])){
           res.push(z)
           break
       }
       if(yourPiece.includes(state[z])){
       break
    }
    res.push(z)
      }
    }

    if(start < 55){
        for(let z = start+8; z <= 63; z+= 8){
         if(hisPiece.includes(state[z])){
             res.push(z)
             break
         }
         if(yourPiece.includes(state[z])){
         break
      }
      res.push(z)
        }
      }
      let x1 = start - (start % 8)
      let x2 = x1 + 8
      let y1 = start -1 
      let y2 = start +1 
      
    for( ;y1 >= x1; y1--){
        if(hisPiece.includes(state[y1])){
            res.push(y1)
            break
        }
        if(yourPiece.includes(state[y1])){
        break
     }
     res.push(y1)
    }
    for( ;y2 < x2; y2++){
        if(hisPiece.includes(state[y2])){
            res.push(y2)
            break
        }
        if(yourPiece.includes(state[y2])){
        break
     }
     res.push(y2)
    }
 
  return res
}
