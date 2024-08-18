var n= document.querySelectorAll(".drum").lenght;

for(var i=0; i<n; i++){
    document.querySelector(".drum")[i].addEventListener("click",function(){
 alert("I got clicked");
});
}



