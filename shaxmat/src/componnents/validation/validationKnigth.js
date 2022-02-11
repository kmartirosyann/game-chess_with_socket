export const validationKnight = (start,end)=>{
    if(end - start <= 17 || end - start >= -17){
               if(Math.floor(end / 8) === Math.floor(start / 8)){
                   return false
               }
           if(end - start=== 17 || end - start === 6 || end - start === 15 || end - start === 10){
               
               return true
           }
           if(end - start=== -17 || end - start === -6 || end - start === -15 || end - start === -10){
               return true
           }
              
               return false
           }
           return false
}