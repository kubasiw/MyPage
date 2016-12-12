jQuery(document).ready(function(){
    
    
    var circle1 = jQuery('.circle1');
    var circle1b = jQuery('.circle1b');
    var Aletter = jQuery('.circle1 span');
    var bout = jQuery('.circle1b span');
    
    
    function showMenu(){
        
        circle1.on('mouseenter', function(){
            Aletter.css('left', '13.3'+'%')
                   .css('transition', '500ms');
               bout.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        circle1b.on('mouseenter', function(){
            Aletter.css('left', '13.3'+'%')
                   .css('transition', '500ms');
               bout.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        circle1.on('mouseout', function(){
            Aletter.css('left', '15.75'+'%')
                   .css('transition', '500ms');
               bout.css('opacity', '0')
                   .css('transition', '500ms');
        });
        
        circle1b.on('mouseout', function(){
            Aletter.css('left', '15.75'+'%')
                   .css('transition', '500ms');
               bout.css('opacity', '0')
                   .css('transition', '500ms');
        });
        
    };
    showMenu();
    
    


    
    
}); // end of DOM

   