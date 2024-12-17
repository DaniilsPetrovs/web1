$(document).ready(function () {
    $("#band").click(() => console.log("you clicked me, jquery works!"))

    $("#search").hover(function () {
        var div = $("#search");
        div.animate({ width: '300px' }, "slow");
    });
    $("#search").mouseleave(function () {
        var div = $("#search");
        div.animate({ width: '62px' });
    });

    $(".dates").click(function (e) {
       if (e.target.dataset.close) {
            $(e.target).parent().hide();
       }
    });
});

const tabs = document.querySelectorAll("#navbar a");
tabs.forEach((tab) => {
    tab.addEventListener("mouseenter", (e) => {
        e.target.style.scale = "1.3";
    }) 
    tab.addEventListener("mouseleave", (e) => {
        e.target.style.scale = "1";
    }) 
})

const gradButton = document.querySelector("#gradient-button");

