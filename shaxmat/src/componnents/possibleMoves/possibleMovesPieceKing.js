

export const possibleMovesPieceKing =(state,start,yourPiece)=> {
  
  let arr = [start,start - 8, start -7 ,start + 1,start + 9, start + 8,start - 9, start + 7,start -1 ]
  
    if((start + 1) % 8 === 0) arr.splice(2,3)

    if(start  % 8 === 0)  arr.splice(6)
 
  return arr.filter(item => item >= 0 && !yourPiece.includes(state[item]))
}
 

