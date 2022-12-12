// Disaplay the current day and time
var todayDate = moment().format('DD MMM, YYYY [at] hh:mm:ss a')
$("currenDay").html(todayDate);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
    console.log("Ready!")
    // Get saved text from local storage
    varsavedText = localStorage.getItem("text");
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

    function timeTracker(){
        // Get current time
        var timeNow = moment().hour();

        // Loop over time blocks
        $(".time-block").each(function(){
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for the colour indicators
            if (blockTime < timeNow){
                $(this).addClass("past");
            } else if (blockTime === timeNow){
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }
        });
    },

    // Get item from local storage
    $(".time-block .description").each(function() {
        var time = $(this).parent().attr("id");
        $(this).val(savedText[time]);
    });

    timeTracker();
});


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

  