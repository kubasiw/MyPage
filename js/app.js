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
            aLetter.css('left', '13.2'+'%')
                   .css('color', 'black')
                   .css('transition', '500ms');
            aboutBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            jQuery(this).css('background-color', '#5C67DA')
                        .css('transition', '500ms');
        });
        
        circle1.on('mouseout', function(){
            aLetter.css('left', '15.78'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            aboutBox.css('display', 'none');
            circle1.css('background-color', '#515151')
                   .css('transition', '500ms');
        });
        
        
        aBox.on('mouseover', function(){
            aLetter.css('left', '13.2'+'%')
                   .css('transition', '500ms');
            aboutBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle1.css('background-color', '#5C67DA')
                   .css('transition', '500ms');
        });
        
        aboutBox.on('mouseover', function(){
            aLetter.css('left', '13.2'+'%')
                   .css('transition', '500ms');
            aboutBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle1.css('background-color', '#5C67DA')
                   .css('transition', '500ms');
        });
        
        
        // jQuery for B
        
        
        circle2.on('mouseover', function(){
            bLetter.css('left', '46.55'+'%')
                   .css('color', 'black')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            jQuery(this).css('background-color', '#975CDA')
                        .css('transition', '500ms');
        });
        
        circle2.on('mouseout', function(){
            bLetter.css('left', '49.17'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            beBox.css('display', 'none');
            circle2.css('background-color', '#6D6D6D')
                   .css('transition', '500ms');
        });
        
        
        bBox.on('mouseover', function(){
            bLetter.css('left', '46.55'+'%')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle2.css('background-color', '#975CDA')
                   .css('transition', '500ms');
        });
        
        beBox.on('mouseover', function(){
            bLetter.css('left', '46.55'+'%')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            circle2.css('background-color', '#975CDA')
                   .css('transition', '500ms');
        });
        
        
        // jQuery for C
        
        
        circle3.on('mouseover', function(){
            cLetter.css('left', '79.85'+'%')
                   .css('color', 'black')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            jQuery(this).css('background-color', '#5CDA9B')
                        .css('transition', '500ms');
        });
        
        circle3.on('mouseout', function(){
            cLetter.css('left', '82.47'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            ceBox.css('display', 'none');
            circle3.css('background-color', '#8C8C8C')
                   .css('transition', '500ms');
        });
        
        
        cBox.on('mouseover', function(){
            cLetter.css('left', '79.85'+'%')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle3.css('background-color', '#5CDA9B')
                   .css('transition', '500ms');
        });
        
        ceBox.on('mouseover', function(){
            cLetter.css('left', '79.85'+'%')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            circle3.css('background-color', '#5CDA9B')
                   .css('transition', '500ms');
        });
        
    };
    showMenu();
    
    


    
    
}); // end of DOM

   