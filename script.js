var arryslide=[
    {
        title:"Basic template        ",
        img:"image2.jpg",
        content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages an        "
    },
    {
        title:"seconde template        ",
        img:"banner3.jpg",
        content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages an        "
    },
    {
        title:"third template        ",
        img:"banner4.jpg",
        content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages an        "
    }
]
var myimg=document.getElementById("img");
var mytitle=document.getElementById("basic");
var mycontent=document.getElementById("paragraphe");

var i=0;
function slidshownext(){
      myimg.src=arryslide[i].img;
      mytitle.textContent=arryslide[i].title;
      mycontent.textContent=arryslide[i].content;

      if(i<arryslide.length-1){
          i++;
      }
      else{
          i=0;
      }

}

function slidshowprevieus(){
    myimg.src=arryslide[i].img;
    mytitle.textContent=arryslide[i].title;
    mycontent.textContent=arryslide[i].content;

    if(i>0){
        i--;
    }
    else{
        i=arryslide.length-1;
    }

}

var inptname=document.getElementById("inptname");
var inptemail=document.getElementById("inptemail");
var inptpassword=document.getElementById("inptpwd");
var errname=document.getElementById("errname");
var erremail=document.getElementById("erremail");
var errpwd=document.getElementById("errpwd");




function validatform(){
   if(inptname.value=="" || inptname.value==null){
       inptname.style.border="2px solid red";
       errname.textContent="you must write your name ";

       return false;
   }
 if(inptemail.value=="" || inptemail.value==null){
    inptemail.style.border="2px solid red";
    erremail.textContent="you must write your email ";

    return false;
}
if(inptpassword.value.length<=6){
    inptemail.style.border="2px solid red";
    errpwd.textContent="your password must be greater than 6";

    return false;
}

else {
    return true;
}





}