// JavaScript File


    var getKnowledge = 30;
    
    //knowledge
    function knowledge(){
      
      var interval = setInterval(decrease, 4000);
      
      document.getElementById("knowledgeScore").innerHTML = getKnowledge;
      
      function decrease(){
         
          
           if(getKnowledge >= 0){
            getKnowledge = getKnowledge - 1;
            document.getElementById("knowledgeScore").innerHTML = getKnowledge;
           
           }
           
           if(getKnowledge == -1){
             document.getElementById("knowledgeScore").innerHTML = "\u2639";
             document.getElementById("speech").innerHTML = "Game Over"; 
           }
      }
      
    }
    
    
    //health
    

    var getHealthy = 30;
     
    function health(){
      
      var interval = setInterval(decrease, 4000);
      
      document.getElementById("healthinessScore").innerHTML = getHealthy;
      
      function decrease(){
         
          
           if(getHealthy >= 0){
            getHealthy = getHealthy - 1;
            document.getElementById("healthinessScore").innerHTML = getHealthy;
               
           }
           
           if(getHealthy == -1){
             document.getElementById("healthinessScore").innerHTML = "\u2639";
             document.getElementById("speech").innerHTML = "Game Over"; 
           }
      }
      
    }
    
    
    //happiness
    
    var getHappy = 30;
    
   function happiness(){
      
      var interval = setInterval(decrease, 4000);
      
      document.getElementById("happinessScore").innerHTML = getHappy;
      
      function decrease(){
         
          
           if(getHappy >= 0){
            getHappy = getHappy - 1;
            document.getElementById("happinessScore").innerHTML = getHappy;
               
           }
           
           if(getHappy == -1){
             document.getElementById("happinessScore").innerHTML = "\u2639";
             document.getElementById("speech").innerHTML = "Game Over"; 
           }
      }
      
    }
    
    
    
    function food(){
        getHealthy = getHealthy + 1;
        getHappy = getHappy + 1;
        document.getElementById("healthinessScore").innerHTML = getHealthy; 
        document.getElementById("happinessScore").innerHTML = getHealthy; 
    }
    
  
  
    
    function fitness(){
        getHealthy = getHealthy + 2;
        document.getElementById("healthinessScore").innerHTML = getHealthy; 
    }
    
    
    function play(){
        
        if(getHappy >= 40){
              getHealthy = getHealthy - 1;
              getKnowledge = getKnowledge - 1;
        }
        
        if(getHappy > 0){
            getHappy = getHappy + 2;
        }
        
    }
    
    
    function learn(){
        getKnowledge = getKnowledge + 1;
    }
    
    



    

    function shuriSays(){
        var randomResponse = ['Time for me to workout!', 'I\'m bored', 'I\'m hungry', 'Oooh! my TV Show is on', 'I have a test tomorrow'];
        var interval = setInterval(shuriSpeak(), 4000);
    
    
       function shuriSpeak(){
        var speech = randomResponse[Math.floor(Math.random()*randomResponse.length)];
     
        document.getElementById("speech").innerHTML = speech;
       }
    
    }
    
    
    
    
    
    //Game Start
    function gameStart(){
        knowledge();
        happiness();
        health();
        shuriSays();
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    