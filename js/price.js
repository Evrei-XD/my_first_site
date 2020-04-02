
          
                                       
           
         $("img.lazy").lazyload({effect: "fadeIn", effectspeed: 3000, event : "sporty"    });  
             
            $('.section_title').click(function(ev) {
                 
                 $(this).next('div.toggler').slideToggle(function(){
                 $(this).parent().toggleClass('current');
                    
                  $(this).find( $("img.lazy").trigger("sporty")); 
                 
                 });
        
              ev.stopPropagation();
    
              });  
               
                
               
               
               
               $('.main_section_title').click(function(ev) {
                  
                      $(this).next('div.holder').slideToggle(function(){
                      $(this).parent().toggleClass('current');
                      
                      $(this).find( $("img.lazy").trigger("sporty")); 
                  
                });
        
                         ev.stopPropagation();
    
               });  
               
               
               
               
               
                  $('.left_side span').click(function(ev) {
                  
                      $(this).next('div.side_holder').slideToggle(function(){
                      $(this).parent().toggleClass('current');
                       
                  });
        
               ev.stopPropagation();
    
               });  
               
               
               
               
                
               
                 
               
               
          
                
               
               
      //             $(window).bind("load", function() {       setTimeout(function() {             $('.overlay').fadeOut();       },1000);      }); 
               
                
               
               
               