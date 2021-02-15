$(document).ready(function() {
    $("button").click(mySchedule);

    function mySchedule()
    {

        let selectSchedule = $("input[name=schedule]:checked").val();
        let event;
        let time;

        switch (selectSchedule) {
            case "monday":
                event = "work";
                time = "3 PM to 11PM";
                break;
            case "tuesday" :
                event = "work";
                time = "3 PM to 11PM";
                break;
            case "wednesday"  :
                event = "Shopping";
                time = " 4PM to 6PM";
                break;
            case "thursday"  :
                event = "Work";
                time = "5 PM to 9PM";
                break;
            case "friday"  :
                event = "Yoga";
                time = "1PM to 2PM";
                break;
            case "saturday"  :
                event = "Homework";
                time = "11 Am to 5PM";
                break;
            case "sunday" :
                event = "Church";
                time = "4 PM to 5PM";
                break;
            default:
                event = "Error";
                time = "Error";
        }
        // get the data-schedule from the selected radio button
        //var getSchedule = selectSchedule.data("schedule");

        $("#message").text(`Event : ${event}    ,     Time : ${time} `);


    }
});

