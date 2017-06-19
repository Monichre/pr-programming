
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
    "items": 1,
    "autoPlay": true,
    "loop": true,
    "smartSpeed":500
    });

    $(".bhide").click(function(){
    $(".hideObj").slideDown();
    $(this).hide(); //.attr()
    return false;
    });
    $(".bhide2").click(function(){
    $(".container.hideObj2").slideDown();
    $(this).hide(); // .attr()
    return false;
    });

    function sdf_FTS(_number,_decimal,_separator)
    {
    var decimal=(typeof(_decimal)!='undefined')?_decimal:2;
    var separator=(typeof(_separator)!='undefined')?_separator:'';
    var r=parseFloat(_number)
    var exp10=Math.pow(10,decimal);
    r=Math.round(r*exp10)/exp10;
    rr=Number(r).toFixed(decimal).toString().split('.');
    b=rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1"+separator);
    r=(rr[1]?b+'.'+rr[1]:b);

    return r;
    }

    setTimeout(function(){
    $('#counter').text('0');
    $('#counter1').text('0');
    $('#counter2').text('0');
    setInterval(function(){

    var curval=parseInt($('#counter').text());
    var curval1=parseInt($('#counter1').text().replace(' ',''));
    var curval2=parseInt($('#counter2').text());
    if(curval<=707){
    $('#counter').text(curval+1);
    }
    if(curval1<=12280){
    $('#counter1').text(sdf_FTS((curval1+20),0,' '));
    }
    if(curval2<=245){
    $('#counter2').text(curval2+1);
    }
    }, 2);

    }, 500);

    // this is the styling for the mobile and scrolling fixed nav bar on the top



    $(window).scroll(function(){

        var menuSetting = $(window).scrollTop();

        if (menuSetting > 30) {
            $('#nav').removeClass('menu').addClass('menu-scroll');
            $('#on-scroll-space').animate({
                height: '50px'
            });
            $('#on-scroll-space').css('z-index', '1000');
        } else {
            $('#nav').removeClass('menu-scroll').addClass('menu');
            $('#on-scroll-space').css('z-index', '0');
        }

    });

    var wordsArray = [
            'Exercise Regiments',
            'Nutritonal Plans',
            'Motivation',
            'Research Based Programming',
            'Inspiration',
            'Networking'
        ];

    function wordAnimation(){
        wordsArray.forEach(function(word){
            $('#words').text(word);
        });
    }

wordAnimation();


    // for the bio slides about paul
    var commentSlider = {
  
  'config' : {
    'container' : $('#wrapper')
  },
    
  'init' : function(config) {
      if(config && typeof(config) == 'object') {
        $.extend(commentSlider.config, config);
      }
    
      //caching dom elements
      //wrapper
      commentSlider.$container = commentSlider.config.container;

      //all paragraph tags
      commentSlider.$paragraphs = commentSlider.$container.
        find('p');
    
      //all li tags
      commentSlider.$dots = commentSlider.$container.
        find('ul.dots-wrap > li');
    
      //first li within ul.dots-wrap
      commentSlider.$firstDot = commentSlider.$container.
        find('ul.dots-wrap > li:first-child');
    
      //first p tag within module wrapper
      commentSlider.$firstParagraph = commentSlider.$container.
        find('p:first-child');
      
      //setting first dot with .active class
      commentSlider.$firstDot.addClass('active');

      //setting first paragraph tag with .active class
      commentSlider.$firstParagraph.addClass('activeText');
    
      //initializing functions and defining their parameters
      commentSlider.currentItem(commentSlider.$paragraphs, commentSlider.$dots);
      commentSlider.setActiveDot(commentSlider.$dots);
      commentSlider.timer();
  },
  
  //timer function runs necesary functions every five seconds
  'timer' : function() {
    setInterval(function(){ 
      
    }, 5000);
  }, //timer function end
  
  //grabs current numerical class of dot clicked
  'dotNumber' : function($dot) {
    var dotClassArray = [];
    var dotClassList = dotClassArray.push($dot.attr('class'));
    var splitArray = dotClassArray.toString().split(' ');
    
    for(i = 0; i < splitArray.length; i++) {
      if (splitArray[i] === "dot") { 
        splitArray.splice(i, 1);
        var dotClickedNumber = splitArray[i];
        commentSlider.paragraphNumber(dotClickedNumber, commentSlider.$paragraphs);
      }
    }
  },//end dotNumber
  
  'paragraphNumber' : function(dotClickedNumber, $paragraphs) {
    $paragraphs.each(function() {
        var $paragraph = $(this);
        var paragraphClass = $paragraph.attr('class');    
       
        if(paragraphClass === dotClickedNumber) {          
          $paragraph.addClass('activeText');
          $paragraph.siblings().removeClass('activeText').addClass('slideLeft');
          setTimeout(function () { 
             $paragraph.siblings().removeClass('slideLeft');    
          }, 400);          
        }
    });
  },//end paragraphNumber
  
  //currentItem function gives every paragraph and dot a numerical class
  //based on their array position
  'currentItem' : function($paragraphs, $dots) {
    $paragraphs.each(function(i) {
      var $paragraph = $(this);
      $paragraph.addClass([] + i);
    });
    
    $dots.each(function(i) {
      var $dot = $(this);
      $dot.addClass([] + i);
    });
  },//end currentItem
  
  //setActiveDot adds class active to whichever dot is clicked
  'setActiveDot' : function($dots) {
    $dots.each( function() {
      var $dot = $(this);
      $dot.on('click', function() {
        if($dot.hasClass('active')) {
          return false;
        } else {
          $dot.addClass('active');
          $dot.siblings().removeClass('active');
        }
        commentSlider.dotNumber($dot);      
      });
    });
  }//end setActiveDot
};
  
//initializes the entire thing by calling the init function  
$(document).ready(commentSlider.init);



});



















