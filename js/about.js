





   
  
   $(document).ready(function() {
       
       
       
       
       
       var i = 0; 
       $( "a.video-link" ).mouseover(function() {
       
       
              $( this ).find("video")[0].play();
               $( this ).find("video").addClass('play, playing');
                 $( this ).find("video").removeClass('pause, paused');
                
       //        $( ".about-title h1" ).text( "Играем в пейнтбол" );
          //     $(".details-link", this).addClass('open');
                  
          })
  
       .mouseout(function() {
            
       $( this ).find("video")[0].pause();
       $( this ).find("video").addClass('pause, paused');
        $( this ).find("video").removeClass('play, playing');
//      $( ".about-title h1" ).text( "Игры в пейнтбол" );
   //   $(".details-link").removeClass('open');
      
        });
       
       
       
       
       
       
       
       
       
        
       
        
         });
         
       