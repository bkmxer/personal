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