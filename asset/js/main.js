window.onscroll = function() { myFunction() };

var navlist = document.getElementById("navlist");
var sticky = navlist.offsetTop;

/* Function to stick the nav bar */
function myFunction() {
    // console.log(sticky)
    console.log(window.pageYOffset - sticky)
    if (window.pageYOffset >= sticky + 10) {
        navlist.classList.add("sticky")
    } else {
        navlist.classList.remove("sticky");
    }
}


$(document).ready(function() {
    $(".arrows").click(function() {
        var x = $(window).scrollTop();
        $('html, body').animate({ scrollTop: x + 700 })
    });
});




var words = ['CodeMeetUp'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 10,
    speed = 70;
var wordflick = function() {
    setInterval(function() {
        // if (forwards) {
        //   if (offset >= words[i].length) {
        //     ++skip_count;
        //     if (skip_count == skip_delay) {
        //       forwards = false;
        //       skip_count = 1;
        //     }
        //   }
        // }
        // else {
        //   if (offset == 0) {
        //     forwards = true;
        //     i++;
        //     offset = 0;
        //     if (i >= len) {
        //       i = 0;
        //     }
        //   }
        // }
        part = words[i].substr(0, offset);
        if (skip_count <= 1) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        $('.word').text(part);
    }, speed);
};

$(document).ready(function() {
    wordflick();
});