
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
        } else {
            $('#nav').removeClass('menu-scroll').addClass('menu');
            // $('#on-scroll-space').animate({
            //     height: '0px'
            // });
        }

    })


});



















