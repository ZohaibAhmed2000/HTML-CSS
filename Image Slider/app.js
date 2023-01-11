let flag = 2;
let slides = document.getElementsByClassName("slide");
console.log(slides)




const control = (x)=>{
    flag = flag + x;
    slideshow(flag);
}



const slideshow = (num)=>{
    if(num === slides.length){
        num = 0;
        flag = 0;
    }
    if(num < 0){
        num = slides.length - 1;
        flag = slides.length - 1;
    }

    for(y of slides){
        y.style.display = 'none'
    }

    slides[num].style.display = 'block';
}
slideshow(flag);




// function chunkArrayInGroups(arr, size) {
//     let newArr = [];

//     while(arr.length > 0){
//         newArr.push(arr.splice(0,size))
//     }
//     return newArr;
    
//   }
//   console.log( chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) );

  






















































