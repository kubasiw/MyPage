jQuery(document).ready(function(){
    
    // menu vars
    // menu A vars
    var circle1 = jQuery('.circle1');
    var aBox = jQuery('.aBox');
    var aboutBox = jQuery('.aboutBox');
    var aLetter = jQuery('.aBox span');
    var about = jQuery('.aboutBox span');
    
    // menu B vars
    var circle2 = jQuery('.circle2');
    var bBox = jQuery('.bBox');
    var beBox = jQuery('.beBox');
    var bLetter = jQuery('.bBox span');
    var creative = jQuery('.beBox span');
    
    function showMenu(){
        
        // jQuery for A
        
        circle1.on('mouseenter', function(){
            aLetter.css('left', '13.2'+'%')
                   .css('transition', '500ms');
            aboutBox.css('opacity', '1')
                    .css('transition', '500ms')
            jQuery(this).css('background-color', '#2D31FF')
                        .css('transition', '500ms');
        });
        
        circle1.on('mouseout', function(){
            aLetter.css('left', '15.78'+'%')
                   .css('transition', '500ms');
            aboutBox.css('opacity', '0')
                   .css('transition', '500ms');
            circle1.css('background-color', 'dimgrey')
                   .css('transition', '500ms');
        });
        
        
        aBox.on('mouseenter', function(){
            aLetter.css('left', '13.2'+'%')
                   .css('transition', '500ms');
            aboutBox.css('opacity', '1')
                    .css('transition', '500ms');
            circle1.css('background-color', '#2D31FF')
                   .css('transition', '500ms');
        });
        
        aboutBox.on('mouseenter', function(){
            aLetter.css('left', '13.2'+'%')
                   .css('transition', '500ms');
            aboutBox.css('opacity', '1')
                    .css('transition', '500ms');
            circle1.css('background-color', '#2D31FF')
                   .css('transition', '500ms');
        });
        
        
        // jQuery for B
        
        
        circle2.on('mouseenter', function(){
            bLetter.css('left', '46.45'+'%')
                   .css('transition', '500ms');
            beBox.css('opacity', '1')
                    .css('transition', '500ms')
            jQuery(this).css('background-color', '#2D31FF')
                        .css('transition', '500ms');
        });
        
        circle2.on('mouseout', function(){
            bLetter.css('left', '49.17'+'%')
                   .css('transition', '500ms');
            beBox.css('opacity', '0')
                   .css('transition', '500ms');
            circle2.css('background-color', 'dimgrey')
                   .css('transition', '500ms');
        });
        
        
        bBox.on('mouseenter', function(){
            bLetter.css('left', '46.45'+'%')
                   .css('transition', '500ms');
            beBox.css('opacity', '1')
                    .css('transition', '500ms');
            circle2.css('background-color', '#2D31FF')
                   .css('transition', '500ms');
        });
        
        beBox.on('mouseenter', function(){
            bLetter.css('left', '46.45'+'%')
                   .css('transition', '500ms');
            beBox.css('opacity', '1')
                    .css('transition', '500ms');
            circle2.css('background-color', '#2D31FF')
                   .css('transition', '500ms');
        });
        
        
        
        
    };
    showMenu();
    
    


    
    
}); // end of DOM

   