var myImages =["http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Labrador-Retriever-1.jpg", "http://www.slate.com/content/dam/slate/articles/health_and_science/Science/2017/08/170803_MEDEX_SickDog.jpg.CROP.promo-xlarge2.jpg", "https://www.dogster.com/wp-content/uploads/2017/12/A-puppy-with-a-toy.jpg", "https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg", "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Pomeranian_01.jpeg"];

var captionImages =["ChowChow","Corgi","BullDog","Yorki","Husky"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
