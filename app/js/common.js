$(function() {

	// Custom JS

});
// COUNTER SECTION
//Get element for the counter
var counter = $('#counter');
//Run count function
count(counter, 0, 1167, 1000);

//Count function - element for counter, starting count number, ending count number, time in milliseconds
function count(elem, startnum, endnum, time){

    //Create a variable to store the current counter number and add it to the counter
    var curnum = startnum;
    elem.text(curnum);

    //Work out the speed of the counter
    var speed = time / (endnum - startnum);

    //Create the counter animation
    var timer = window.setInterval(function(){

        //Test if counter has finished
        if(curnum < endnum){
            //Increase the counter by 1 and add it to the counter
            curnum++;
            elem.text(curnum);
        }else{
            //Stop the animation
            clearInterval(timer);
        }

    },speed);

}
 // NAVBAR HOVER UNDERLINE
$(document).ready(function() {
    $('a.menu-trigger').click(function(){
        $('nav ul').slideToggle(500);
    });
    $(window).resize(function(){
        if($(window).width()>500){
            $('nav ul').removeAttr('style');
        }
    })

    // var
    var $nav =  $('.nav-underline'),
        $line = $('<div>').appendTo($nav),
        $activeLi,
        lineWidth,
        liPos;
    function refresh (){
        $activeLi = $nav.find('li.active');
        lineWidth = $activeLi.outerWidth();
        liPos = $activeLi.position().left;
    }
    refresh();
    $nav.css('position', 'relative');

    // line setup
    function lineSet() {
        $line.css({
            'position':'absolute',
            'background-color':'#ffffff',
            'bottom':'0',
            'height': '3px'
        }).animate({
            'left': liPos,
            'width': lineWidth
        }, 200);
    }
    lineSet();

    //onClick
    $nav.find('li').on('click', function() {
        $activeLi.removeClass('active');
        $(this).addClass('active');
        refresh();
        lineSet();
    });
});
/// TOOLTIP
$(document).ready(function(){
    var $parent,
        windowWidth,
        windowHeight;

    // windowSize
    function winSize(){
        windowWidth = $(window).width();
        windowHeight = $(window).height();
    }
    winSize()
    $(window).resize(winSize());


    // hover
    $('.tip__content').each(function(){
        $(this).parent().hover(function(){
            $(this).find('.tip__content').fadeIn('fast');
        }, function(){
            $(this).find('.tip__content').fadeOut('fast');
        })
    })


    // tooltip position
    $(document).mousemove(function(e){
        var mouseY=e.clientY,
            mouseX= e.clientX,
            tooltipHeight,
            tooltipWidth;

        $('.tip__content').each(function(){
            var $tooltip = $(this);
            $parent = $tooltip.parent();
            tooltipHeight = $tooltip.outerHeight();
            tooltipWidth = $tooltip.outerWidth();

            $tooltip.css({
                'left':mouseX,
                'top':mouseY+20
            });
            //reposition
            if (tooltipWidth+mouseX > windowWidth)  {
                $tooltip.css({
                    'left':mouseX-tooltipWidth-20
                });
            }
            if (tooltipHeight+mouseY + 20 > windowHeight)  {
                $tooltip.css({
                    'top':mouseY-tooltipHeight-20
                });
            }

        });//end each

    });//end of mouseover


});//ready


