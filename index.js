var n=document.querySelectorAll(".drum").length;

for(var i=0; i<n; i++){
     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    

      var buttonClick= this.innerHTML;
      switch (buttonClick) {
        case "w":
          var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
          break;

          case "a":
            var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      
        default:
          break;
      }
      

      
  });

}



