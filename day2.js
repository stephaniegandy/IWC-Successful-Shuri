// JavaScript File


  var getHungry = 30;
    
    function hunger(){
      
      var interval = setInterval(decrease, 4000);
      
      document.getElementById("happinessScore").innerHTML = getHungry;
      
      function decrease(){
         
          
           if(getHungry >= 0){
            getHungry = getHungry - 1;
            document.getElementById("happinessScore").innerHTML = getHungry;
               
           }
           
           if(getHungry == -1){
             document.getElementById("happinessScore").innerHTML = "\u2639";
             document.getElementById("speech").innerHTML = "Game Over"; 
           }
      }
      
    }
    
    function food(){
        getHungry = getHungry + 2;
        document.getElementById("happinessScore").innerHTML = getHungry;
    }