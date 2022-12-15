// Disaplay the current day and time

var timeStamp = dayjs().format('DD MMM, YYYY [at] hh:mm:ss a');
$('#currentDay').text(timeStamp);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

    // Get saved text from local storage

    var savedText = localStorage.getItem("text");
    if (savedText) {
        savedText = JSON.parse(savedText);
    } else {
        savedText = {};
    };
    // saveBtn event listener
    $(".saveBtn").on("click", function(){
        // Get nearby values of the event listener
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        savedText[time] = text;
        localStorage.setItem("text", JSON.stringify(savedText));
    }),

    
    // Get item from local storage
    $(".time-block .description").each(function() {
        var time = $(this).parent().attr("id");
        $(this).val(savedText[time]);
    });

    

});


function timeTracker(){
    // Get current time
    var timeNow = dayjs().hour();

    // Loop over time blocks
    $(".time-block").each(function(){
        var blockTime = parseInt($(this).attr("id"));

        // To check the time and add the classes for the colour indicators
        if (blockTime < timeNow){
            $(this).addClass("past");
        } else if (blockTime === timeNow){
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
}

timeTracker();