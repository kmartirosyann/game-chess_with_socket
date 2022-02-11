



export const validationRook =(state,start,end)=>{

    let res = true
    let maxNum = Math.max(end,start)
    let minNum = Math.min(end,start)

    if((end - start) % 8 === 0  ){
        let i = minNum + 8
        for(; i < maxNum; i+=8 ){
           if (state[i] !== '1'){
              return  false 
           }
        }  
        return true
    }
    if(Math.floor(end / 8) === Math.floor(start / 8)){
        let i = minNum + 1    
        for(; i < maxNum; i++ ){
            if (state[i] !=='1'){
              return  false 
            }
         } 
        return true
    }
    if(Math.floor(end / 8) !== Math.floor(start / 8)){
       return false
    }
    return res
}