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
    
    // home vars
    
    var circle4 = jQuery('.circle4');
    
    var circleUp = jQuery('.circleArrowUp');
    var circleDown = jQuery('.circleArrowDown');
    
    var upAbout = jQuery('.upAbout');
    var downAbout = jQuery('.downAbout');
    
    var upPort = jQuery('.upPort');
    var downPort = jQuery('.downPort');
    
    var upCont = jQuery('.upCont');
    
    var inAm = jQuery('.inAmSec');
    
    var nav = jQuery('nav');
    
    
    var startPage = jQuery('.start');
    var progressBar = jQuery('.progressBar span');
    
    // starting animations
    
    function start() {
        progressBar.css('width', '100%')
                 .css('background-color', '#ffce00')
                 .css('transition', '3s');
        
        jQuery('.count').each(function () {
            jQuery(this).css('color', 'snow');
            jQuery(this).prop('Counter',0).animate({
                Counter: jQuery(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    jQuery(this).text(Math.ceil(now));
                }
            });
        });
        
        function hideStart() {
            startPage.fadeOut('slow');
            jQuery('body').css('overflow-y', 'visible');
                     
        };
        setTimeout(hideStart,3500);
        
    };
    setTimeout(start, 2000);
    

    
    // sticky menu
    
    var nav = jQuery('nav');
    var allCircle = jQuery('.allCircleBox');
    
    function stickyMenu(){
        var position = nav.offset().top;
        
        jQuery(window).on('scroll', function(){

             var scrollTop = jQuery(window).scrollTop();
             var allCircleBox = jQuery('.allCircleBox');
            
            

             if (scrollTop > (position - position)) {
                nav.addClass('sticky')
                allCircleBox.addClass('stickyBox')
            } else {
                nav.removeClass('sticky')
                allCircleBox.removeClass('stickyBox')
            }
        });
    };
    stickyMenu();
    
//    jQuery(window).on('resize', function(){
//
//        jQuery(window).off('scroll');
//        stickyMenu();
//        
//    });
    
    // adding effects on menu buttons:
    function showMenu(){
        
        // for whole "a" button
        
        circle1.on('mouseover', function(){
            aLetter.css('left', '-22.22'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            aboutBox.css('display', 'block');
            jQuery(this).css('opacity', '1')
                        .css('transition', '500ms');
        });
        
        circle1.on('mouseout', function(){
            aLetter.css('left', '39'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            aboutBox.css('display', 'none');
            circle1.css('opacity', '0.7')
                   .css('transition', '500ms');
        });
        
        
        aBox.on('mouseover', function(){
            aLetter.css('left', '13.2'+'%')
                   .css('transition', '500ms');
            aboutBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle1.css('opacity', '#1')
                   .css('transition', '500ms');
        });
        
        aboutBox.on('mouseover', function(){
            aLetter.css('left', '13.2'+'%')
                   .css('transition', '500ms');
            aboutBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle1.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        
        // for whole "b" button
        
        
        circle2.on('mouseover', function(){
            bLetter.css('left', '-22.22'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            jQuery(this).css('opacity', '1')
                        .css('transition', '500ms');
        });
        
        circle2.on('mouseout', function(){
            bLetter.css('left', '39'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            beBox.css('display', 'none');
            circle2.css('opacity', '0.7')
                   .css('transition', '500ms');
        });
        
        
        bBox.on('mouseover', function(){
            bLetter.css('left', '46.55'+'%')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle2.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        beBox.on('mouseover', function(){
            bLetter.css('left', '46.55'+'%')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            circle2.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        
        // for whole "c" button
        
        
        circle3.on('mouseover', function(){
            cLetter.css('left', '-22.22'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            jQuery(this).css('opacity', '1')
                        .css('transition', '500ms');
        });
        
        circle3.on('mouseout', function(){
            cLetter.css('left', '39'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            ceBox.css('display', 'none');
            circle3.css('opacity', '0.7')
                   .css('transition', '500ms');
        });
        
        
        cBox.on('mouseover', function(){
            cLetter.css('left', '79.85'+'%')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle3.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        ceBox.on('mouseover', function(){
            cLetter.css('left', '79.85'+'%')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            circle3.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        // for whole "HOME" button
        
        circle4.on('mouseover', function(){
           jQuery(this).css('opacity', '1')
                       .css('transition', '500ms');
        });
        
        circle4.on('mouseout', function(){
           jQuery(this).css('opacity', '0.3')
                       .css('transition', '500ms');
        });
        
        // jQuery for arrows
        
        circleUp.on('mouseover', function(){
            jQuery(this).css('opacity', '1')
                        .css('transition', '500ms');
        });
        
        circleUp.on('mouseout', function(){
           jQuery(this).css('opacity', '0.3')
                       .css('transition', '500ms');
        });
        
        circleDown.on('mouseover', function(){
            jQuery(this).css('opacity', '1')
                        .css('transition', '500ms');
        });
        
        circleDown.on('mouseout', function(){
           jQuery(this).css('opacity', '0.3')
                       .css('transition', '500ms');
        });
        
    };
    showMenu();
    
    
    // functions for navigation - looking section on page
    
    function lookForSection(){
        
        var anchor = jQuery("nav a");
        var circleBoxAbout = jQuery('.circleBoxAbout');
        var circleBoxPort = jQuery('.circleBoxPort');
        var circleBoxCont = jQuery('.circleBoxCont');
        
        circle1.on('click', function(){          // while clicking on a circle
            var id = jQuery(this).attr('href');  // id will get href from circA
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as button href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500, function() {
                circleBoxAbout.animate({'opacity':'1'},300);
                circleBoxPort.animate({'opacity':'0'},300);
                circleBoxCont.animate({'opacity':'0'},300);
            });

        });
        
        circle2.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1000, function() {
                circleBoxPort.animate({'opacity':'1'},300);
                circleBoxAbout.animate({'opacity':'0'},300);
                circleBoxCont.animate({'opacity':'0'},300);
            });
        });
        
        circle3.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1500, function() {
                circleBoxCont.animate({'opacity':'1'},300);
                circleBoxPort.animate({'opacity':'0'},300);
                circleBoxAbout.animate({'opacity':'0'},300);
            });
        });
        
        anchor.on('click', function(){
            
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},2000);
        });
        
        circle4.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1000, function() {
                circleBoxAbout.animate({'opacity':'0'},300);
                circleBoxPort.animate({'opacity':'0'},300);
                circleBoxCont.animate({'opacity':'0'},300);
            });
            
    
        });
        
        // functions for arrowButtons in particular section
        
        upAbout.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1000, function() {
                circleBoxAbout.animate({'opacity':'0'},300);
            });
        });
        
        downAbout.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1000, function() {
                circleBoxAbout.animate({'opacity':'0'},300);
                circleBoxPort.animate({'opacity':'1'},300);
            });
        });
        
        upPort.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1000, function() {
                circleBoxPort.animate({'opacity':'0'},300);
                circleBoxAbout.animate({'opacity':'1'},300);
            });
        });
        
        downPort.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1000, function() {
                circleBoxPort.animate({'opacity':'0'},300);
                circleBoxCont.animate({'opacity':'1'},300);
            });
        });
        
        upCont.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},1000, function() {
                circleBoxCont.animate({'opacity':'0'},300);
                circleBoxPort.animate({'opacity':'1'},300);
            });
        });
        
//        jQuery(window).bind('mousewheel', function(event) {
//            if (event.originalEvent.wheelDelta >= 0) {
//                console.log('Scroll up');
//            }
//            else {
//                console.log('Scroll down');
//            }
//        });
        
    };
    lookForSection();
    
    
//    function pageStart() {
//        
//        var myName = jQuery('.myName');
//    
//        myName.animate({'top':'50%', 'font-size':'6'+'vw'},1100)
//              .css('color', '#ffffff')
//              .css('transition', '2550ms')
//              .animate({  borderSpacing: -10.5 }, {
//                    step: function(now,fx) {
//                      jQuery(this).css('-webkit-transform','rotate('+now+'deg)'); 
//                      jQuery(this).css('-moz-transform','rotate('+now+'deg)');
//                      jQuery(this).css('transform','rotate('+now+'deg)');
//                    },
//                    duration:'slow'
//                },'linear');
//
//    };
//    setTimeout(pageStart, 500);
    
    
    
    
}); // end of DOM

   