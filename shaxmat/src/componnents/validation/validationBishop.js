export const validationBishop = (state,start,end)=>{
    let maxNum = Math.max(end,start)
    let minNum = Math.min(end,start)
  
if ((maxNum - minNum) % 7 === 0 ){
    let i = minNum + 7
    for(; i < maxNum ; i += 7){
        if(state[i] !== '1'){
            return false
        }
    }
    return true
}
if ((maxNum - minNum) % 9 === 0 ){
    let i = minNum + 9
    for(; i < maxNum ; i += 9){
        if(state[i] !== '1'){
            return false
        }
    }
    return true
}
return false
}