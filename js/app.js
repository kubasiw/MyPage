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
    
    // menu C vars
    var circle3 = jQuery('.circle3');
    var cBox = jQuery('.cBox');
    var ceBox = jQuery('.ceBox');
    var cLetter = jQuery('.cBox span');
    var contact = jQuery('.ceBox span');
    
    function showMenu(){
        
        // jQuery for A
        
        circle1.on('mouseover', function(){
            aLetter.css('left', '-22.22'+'%')
                   .css('color', 'black')
                   .css('transition', '500ms');
            aboutBox.css('display', 'block');
            jQuery(this).css('background-color', '#18D8D8')
                        .css('transition', '500ms');
        });
        
        circle1.on('mouseout', function(){
            aLetter.css('left', '39'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            aboutBox.css('display', 'none');
            circle1.css('background-color', '#E72727')
                   .css('transition', '500ms');
        });
        
        
        aBox.on('mouseover', function(){
            aLetter.css('left', '13.2'+'%')
                   .css('transition', '500ms');
            aboutBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle1.css('background-color', '#18D8D8')
                   .css('transition', '500ms');
        });
        
        aboutBox.on('mouseover', function(){
            aLetter.css('left', '13.2'+'%')
                   .css('transition', '500ms');
            aboutBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle1.css('background-color', '#18D8D8')
                   .css('transition', '500ms');
        });
        
        
        // jQuery for B
        
        
        circle2.on('mouseover', function(){
            bLetter.css('left', '-22.22'+'%')
                   .css('color', 'black')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            jQuery(this).css('background-color', '#1818D8')
                        .css('transition', '500ms');
        });
        
        circle2.on('mouseout', function(){
            bLetter.css('left', '39'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            beBox.css('display', 'none');
            circle2.css('background-color', '#E7E727')
                   .css('transition', '500ms');
        });
        
        
        bBox.on('mouseover', function(){
            bLetter.css('left', '46.55'+'%')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle2.css('background-color', '#1818D8')
                   .css('transition', '500ms');
        });
        
        beBox.on('mouseover', function(){
            bLetter.css('left', '46.55'+'%')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            circle2.css('background-color', '#1818D8')
                   .css('transition', '500ms');
        });
        
        
        // jQuery for C
        
        
        circle3.on('mouseover', function(){
            cLetter.css('left', '-22.22'+'%')
                   .css('color', 'black')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            jQuery(this).css('background-color', '#9245DF')
                        .css('transition', '500ms');
        });
        
        circle3.on('mouseout', function(){
            cLetter.css('left', '39'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            ceBox.css('display', 'none');
            circle3.css('background-color', '#6DBA20')
                   .css('transition', '500ms');
        });
        
        
        cBox.on('mouseover', function(){
            cLetter.css('left', '79.85'+'%')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle3.css('background-color', '#9245DF')
                   .css('transition', '500ms');
        });
        
        ceBox.on('mouseover', function(){
            cLetter.css('left', '79.85'+'%')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            circle3.css('background-color', '#9245DF')
                   .css('transition', '500ms');
        });
        
    };
    showMenu();
    
    function lookForSection(){
        
        var anchor = jQuery("nav a");
        
        circle1.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1000);
        });
        
        circle2.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1000);
        });
        
        circle3.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1000);
        });
        
        anchor.on('click', function(){
            
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1000);
            
        });
    };
    lookForSection();
    
    
//    anchor.on('click', function(){  // po kliknięciu w anczor ...
//        var id = jQuery(this).attr('href'); // do id pobieramy jego href
//        var elemOffset = jQuery(id).offset(); // wyszukujemy dzieki stringowi id offset tagu z takimsamym id
//        //console.log(elemOffset);
//        jQuery('html, body').animate({scrollTop: elemOffset.top},3000);
//    });
    
    


    
    
}); // end of DOM

   