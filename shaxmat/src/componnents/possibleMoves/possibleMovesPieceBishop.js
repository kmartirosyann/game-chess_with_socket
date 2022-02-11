

export const possibleMovesPieceBishop =(state,start,herPiece,yourPiece)=> {


    let res = []
    for(let i = start; i < 64; i+=9){
        if(i % 8 === 0 && i !== start){
            break
        }
       if(herPiece.includes(state[i])){
           res.push(i)
           break
       }
       if(yourPiece.includes(state[i]) ){
           if(i !== start){
            break
           }
      
       }
       
     res.push(i)
    }
    for(let i = start ; i < 64; i+=7){
        if(i % 8 === 0 ){
            res.push(i)
            break
        }
        if(herPiece.includes(state[i])){
            res.push(i)
            break
        }
        if(yourPiece.includes(state[i]) ){
            if(i !== start){
             break
            }
        }
        res.push(i)
    }

    for(let i = start; i >= 0; i-=9){
        if(i % 8 === 0 && i !== start){
            res.push(i)
            break
        }
       if(herPiece.includes(state[i])){
           res.push(i)
           break
       }
       if(yourPiece.includes(state[i]) ){
           if(i !== start){
            break
           }
      
       }
       
     res.push(i)
    }
    for(let i = start ; i >= 0; i-=7){
        if(i % 8 === 7 ){
            res.push(i)
            break
        }
        if(herPiece.includes(state[i])){
            res.push(i)
            break
        }
        if(yourPiece.includes(state[i]) ){
            if(i !== start){
             break
            }
        }
        res.push(i)
    }
  return res
}
