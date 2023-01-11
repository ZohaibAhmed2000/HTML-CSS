function palindrome(str) {
    str= str.toLowerCase()
    let word = ""
    for(let i =0; i<=str.length-1; i++){
        if(str[i]=="_" || str[i]==" " || str[i]=="," || str[i]=="." || str[i]== "(" || str[i]== ")" || str[i]== ":" || str[i]== "/" || str[i]== "-")
        {
            continue
        }
        else{
            word += str[i]
        }
        
    }
   console.log(word)
   let check = ""
   for (let i = word.length-1; i>=0; i--){
       check += word[i]
   }
   console.log("check",check)
   if(word == check){
       console.log(true)
   }
   else{
       console.log(false)
   }
    
//   let check = ""
//   for (let i = str.length-1; i>=0; i--){
//       if(str[i]==" "){
//           console.log(i)
//           continue;
          
//       }else if(str[i+1]==" "){
//           check = check + str[i] + " " 
//           console.log("Space Before",i)
//       }
//       else{
//          check += str[i]
//       }
//   }
//   console.log(check)
//   if (str==check){
//   console.log(true);
//   }
//   else{
//     console.log(false)
//   }
}
palindrome("0_0 (: /-\ :) 0-0")