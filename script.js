// JavaScript File

 /*  //variable to display character text
   var text = document.getElementById("speech");
   
   //function to hide text
   function hideText(){
       text.style.display="none";
   }
   
   //function to set timer to hide text
   function hideTextTimer(){
       setTimeout(hideText, 3000);
   }
   
   
   //hide start button
   function startGame(){
   document.getElementById("start").style.display = "none";
   hunger();
   }
   */

  
  //set variable, setInterval = js library timer function, millisecond

  //every 4 sec -1 food
    var getHungry = 30;
    
    function hunger() {
      
      document.getElementById("happinessScore").innerHTML = getHungry;
      
      var interval = setInterval(decrease, 4000);
      
      function decrease(){
          if(getHungry >= 0){
            getHungry = getHungry - 1;
            document.getElementById("happinessScore").innerHTML = getHungry;
          }
          
          if(getHungry == -1){
              
            document.getElementById("happinessScore").innerHTML = "\u2639";
            //'<img src=\'path/img1.jpg\'>;
            document.getElementById("speech").innerHTML = "Game Over"; 
            
            //diasble buttons so user can't push buttons
            document.getElementById("food").disabled = true;
            document.getElementById("play").disabled = true;
            document.getElementById("fitness").disabled = true;
            document.getElementById("learn").disabled = true;
            
            //show restart button
            redoButton.style.display = "block";
          }
          if(getHungry == 20){
             text = "Feed Me"; 
             
          }
      }
    }
    
    function food(){
        getHungry = getHungry + 2;
        
        document.getElementById("happinessScore").innerHTML = getHungry;
    }
    
    
     //hide play again button
   //var redoButton = document.getElementById("playAgain").style.visibility = "hidden";
   
   //restart game
   function restartGame(){
       getHungry = 30;
       document.getElementById("food").disabled = false;
       document.getElementById("play").disabled = false;
       document.getElementById("fitness").disabled = false;
       document.getElementById("learn").disabled = false;
       var redoButton = document.getElementById("playAgain").style.display = "none";
   }
// JavaScript File