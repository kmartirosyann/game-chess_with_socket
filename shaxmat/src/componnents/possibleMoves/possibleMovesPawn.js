const white = ['q', 'k', 'b', 'n', 'r', 'p']
const black = [ 'Q', 'K', 'B', 'N', 'R','P']

export const possibleMovesWhitePawn =(start,state)=> {

if(start > 7 && start < 16){
    if(start === 15){
        if(state[start+16] !=='1' ){
            if(state[start+8] !=='1' && black.includes(state[start+7])){
                return [start,start+7]
            }
            if(state[start+8] ==='1' && black.includes(state[start+7])){
                return [start,start+7,start+8]
            }
            return [start,start+8]
        }
        return [start,start+8,start+16]
    }
  
    if(start === 8){
        if(state[start+16] !=='1' || state[start+8] !=='1'  ){       
            if(state[start + 8]  !=='1' && black.includes(state[start+9])){
                return [start,start+9]
            }
            if(state[start + 16]  !=='1' && black.includes(state[start+9])){
                return [start,start+8,start+9]
            }
            if(state[start + 8] ==='1' && black.includes(state[start+9])){
                return [start,start+8,start+9]
            }
           
            return [start,start+8]
        }
        if( black.includes(state[start+9])){
            return [start,start+8,start+16,start+9]
        }
        return [start,start+8,start+16]
    }

if(start > 8 && start < 15){
    if(black.includes(state[start+9]) && black.includes(state[start+7])){
        if(state[start+8] ==='1' && state[start+16] !=='1'){
            return [start,start+8,start+9,start+7]
        }
        if(state[start+8] !=='1'){
            return [start,start+9,start+7]
        }
        return [start,start+8,start+16,start+9,start+7]
    }
    if( black.includes(state[start+9])){
        if(state[start+8] ==='1' && state[start+16] !=='1'){
            return [start,start+8,start+9]
        }
        return [start,start+8,start+16,start+9]
    }
    if( black.includes(state[start+7])){
        if(state[start+8] ==='1' && state[start+16] !== '1'){
            return [start,start+7,state+8]
        }
        return [start,start+7,start+8,start+16]
    }
    if(state[start+8] !=='1'){
        return [start]
    }
    if(state[start+16] !=='1'){
        return [start,start+8]
    }
    return[start,start+8,start+16]
}
}

if(start === 24 || start === 32 || start === 40 ||start === 48 ){
    if(state[start+8] !== '1' && black.includes(state[start+9])){
      return [start,start+9]
    }
    if(state[start+8] === '1' && black.includes(state[start+9])){
        return [start,start+8,start+9]
      }
    if(state[start+8] !== '1'){
        return [start]
      }
      return [start,start+8]
}

if(start === 31 || start === 39 || start === 47 ||start === 55 ){
    if(state[start+8] !== '1' && black.includes(state[start+7])){
      return [start,start+7]
    }
    if(state[start+8] === '1' && black.includes(state[start+7])){
        return [start,start+8,start+7]
      }
    if(state[start+8] !== '1'){
        return [start]
      }
      return [start,start+8]
}
if(start > 15 ){
    let res =[start]
    for(let i = start+7; i <= start+9; i+=2){
      if(black.includes(state[i])){
         res.push(i)
      }
      }
      if(state[start+8] === '1'){
        res.push(start+8)
    }
    return res
}


 return[]
}


export const possibleMovesBlackPawn =(start,state)=> {

    if(start > 47 && start < 56){
        if(start === 48){
            if(state[start-16] !=='1' ){
                if(state[start-8] !=='1' && white.includes(state[start-7])){
                    return [start,start-7]
                }
                if(state[start-8] ==='1' && white.includes(state[start-7])){
                    return [start,start-7,start-8]
                }
                return [start,start-8]
            }
            return [start,start-8,start-16]
        }
      
        if(start === 55){
            if(state[start-16] !=='1' || state[start-8] !=='1'  ){       
                if(state[start - 8]  !=='1' && white.includes(state[start-9])){
                    return [start,start-9]
                }
                if(state[start - 16]  !=='1' && white.includes(state[start-9])){
                    return [start,start-8,start-9]
                }
                if(state[start - 8] ==='1' && white.includes(state[start-9])){
                    return [start,start-8,start-9]
                }
               
                return [start,start-8]
            }
            if( white.includes(state[start-9])){
                return [start,start-8,start-16,start-9]
            }
            return [start,start-8,start-16]
        }
    
    if(start > 48 && start < 55){
        if(white.includes(state[start-9]) && white.includes(state[start-7])){
            if(state[start-8] ==='1' && state[start-16] !=='1'){
                return [start,start-8,start-9,start-7]
            }
            if(state[start-8] !=='1'){
                return [start,start-9,start-7]
            }
            return [start,start-8,start-16,start-9,start-7]
        }
        if( white.includes(state[start-9])){
            if(state[start-8] ==='1' && state[start-16] !=='1'){
                return [start,start-8,start-9]
            }
            return [start,start-8,start-16,start-9]
        }
        if( white.includes(state[start-7])){
            if(state[start-8] ==='1' && state[start-16] !== '1'){
                return [start,start-7,state-8]
            }
            return [start,start-7,start-8,start-16]
        }
        if(state[start-8] !=='1'){
            return [start]
        }
        if(state[start-16] !=='1'){
            return [start,start-8]
        }
        return[start,start-8,start-16]
    }
    }
    
    if(start === 24 || start === 32 || start === 40 ||start === 16 ){
        if(state[start-8] !== '1' && white.includes(state[start-7])){
          return [start,start-7]
        }
        if(state[start-8] === '1' && white.includes(state[start-7])){
            return [start,start-8,start-7]
          }
        if(state[start-8] !== '1'){
            return [start]
          }
          return [start,start-8]
    }
    
    if(start === 31 || start === 39 || start === 47 ||start === 55 ){
        if(state[start-8] !== '1' && white.includes(state[start-9])){
          return [start,start-9]
        }
        if(state[start-8] === '1' && white.includes(state[start-9])){
            return [start,start-8,start-9]
          }
        if(state[start-8] !== '1'){
            return [start]
          }
          return [start,start-8]
    }
    if(start < 48 ){
        let res =[start]
        for(let i = start-7; i >= start-9; i-=2){
            
          if(white.includes(state[i])){
             res.push(i)
          }
          }
          if(state[start-8] === '1'){
            res.push(start-8)
        }
        return res
    }
    
     return[]
    }

