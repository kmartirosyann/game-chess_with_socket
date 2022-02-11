

export const possibleMovesPieceKnigth =(state,start,yourPiece)=> {

  let arr = [start+17,start-17,start-15,start+10,start-6,start+15,start+6,start-10]
  let res = []

    if(start % 8 === 1) arr.splice(6)
    if(start % 8 === 0) arr.splice(5)
    if(start % 8 === 6) arr.splice(3,2)
    if(start % 8 === 7) arr.splice(2,3)

    for(let i = 0; i < arr.length;i++ ){
        if(yourPiece.includes(state[arr[i]]) || state[arr[i]] === '1'){
            res.push(arr[i])
        }
    }
    
  return res
}
