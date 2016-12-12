jQuery(document).ready(function(){
    
    
    var circle1 = jQuery('.circle1');
    var aBox = jQuery('.aBox');
    var aboutBox = jQuery('.aboutBox');
    var aLetter = jQuery('.aBox span');
    var about = jQuery('.aboutBox span');
    
    
    function showMenu(){
        
        circle1.on('mouseenter', function(){
           aLetter.css('left', '13.2'+'%')
                  .css('transition', '500ms');
          aboutBox.css('opacity', '1')
                  .css('transition', '500ms');
        });
        
        circle1.on('mouseout', function(){
            aLetter.css('left', '15.78'+'%')
                   .css('transition', '500ms');
           aboutBox.css('opacity', '0')
                   .css('transition', '500ms');
        });
        
        aBox.on('mouseenter', function(){
           aLetter.css('left', '13.2'+'%')
                  .css('transition', '500ms');
          aboutBox.css('opacity', '1')
                  .css('transition', '500ms');
        });
        
        aboutBox.on('mouseenter', function(){
           aLetter.css('left', '13.2'+'%')
                  .css('transition', '500ms');
          aboutBox.css('opacity', '1')
                  .css('transition', '500ms');
        });
        
        
        
        
    };
    showMenu();
    
    


    
    
}); // end of DOM

   