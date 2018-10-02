$(document).ready(function () {
    // Window width for responsive design
    var documentsize = $(document).width();
    $(window).resize(function () {
        documentsize = $(document).width();
    })

    // Set up variables for toggle buttons
    var flip = false;
    var flip2 = false;

    // Darkens menu toggle to show interactivity
    $("div.cover-2, img#zen").hover(
        function () {
            $("div.cover-2, img#zen").css("filter", "brightness(.94)");
        },
        function () {
            $("div.cover-2, img#zen").css("filter", "brightness(1)");
        });

    // Controls main nev-menu
    $("div.cover-2, img#zen").click(function () {
        $("img#zen, div.cover-2, div.menu, div.options, div.content, div.photo-cover").clearQueue();
        if (!flip) {
            if (documentsize > 992) {
                $("img#zen").animate({
                    left: "10.5vw"
                }, "linear");
                $("img#zen").css("transform", "rotate(90deg)");
                $("div.cover-2").animate({
                    left: "14vw"
                }, "linear");
                $("div.menu").animate({
                    left: "2vw"
                }, "linear");
                $("div.options").animate({
                    left: "18vw"
                }, "linear")
                $("div.content").animate({
                    left: "19vw"
                }, "linear");
                $("div.photo-cover").animate({
                    left: "85.9vw"
                }, "linear");
            } else if (documentsize > 768) {
                $("img#zen").animate({
                    left: "16.5vw"
                }, "linear");
                $("img#zen").css("transform", "rotate(90deg)");
                $("div.cover-2").animate({
                    left: "22vw"
                }, "linear");
                $("div.menu").animate({
                    left: "4vw"
                }, "linear");
                $("div.options").animate({
                    left: "28vw"
                }, "linear")
                $("div.content").animate({
                    left: "30vw"
                }, "linear");
            } else {
                 $("img#zen").animate({
                    left: "72vw"
                }, "linear");
                $("img#zen").css("transform", "rotate(90deg)");
                $("div.cover-2").animate({
                    left: "88vw"
                }, "linear");
                $("div.menu").animate({
                    left: "4vw"
                }, "linear");
                $("div.options").animate({
                    left: "94vw"
                }, "linear")
                $("div.content").animate({
                    left: "96vw"
                }, "linear");
            }

            flip = true;
        } else {
            if (documentsize > 992) {
                $("img#zen").animate({
                    left: "-.5vw"
                }, "linear");
                $("img#zen").css("transform", "rotate(0deg)");
                $("div.cover-2").animate({
                    left: "3vw"
                }, "linear");
                $("div.menu").animate({
                    left: "-9vw"
                }, "linear");
                $("div.options").animate({
                    left: "7vw"
                }, "linear")
                $("div.content").animate({
                    left: "8vw"
                }, "linear");
                $("div.photo-cover").animate({
                    left: "74.9vw"
                }, "linear");
            } else if (documentsize > 768) {
                $("img#zen").animate({
                    left: ".5vw"
                }, "linear");
                $("img#zen").css("transform", "rotate(0deg)");
                $("div.cover-2").animate({
                    left: "6vw"
                }, "linear");
                $("div.menu").animate({
                    left: "-11vw"
                }, "linear");
                $("div.options").animate({
                    left: "12vw"
                }, "linear")
                $("div.content").animate({
                    left: "14vw"
                }, "linear");
            } else {
                $("img#zen").animate({
                    left: "-2vw"
                }, "linear");
                $("img#zen").css("transform", "rotate(0deg)");
                $("div.cover-2").animate({
                    left: "6vw"
                }, "linear");
                $("div.menu").animate({
                    left: "-78vw"
                }, "linear");
                $("div.options").animate({
                    left: "12vw"
                }, "linear")
                $("div.content").animate({
                    left: "14vw"
                }, "linear");
            }

            flip = false;
            flip2 = false;
        }
    });

    // Controls separate .options nav-menu
    $("a.projects").click(function () {
        $("img#zen, div.cover-2, div.menu, div.options, div.content, div.photo-cover").clearQueue();
        if (!flip2) {
            if (documentsize > 992) {
                $("img#zen").css("transform", "rotate(180deg)");
                $("div.content").animate({
                    left: "30vw"
                }, "linear");
                $("div.photo-cover").animate({
                    left: "96.9vw"
                }, "linear");
            } else if (documentsize > 768) {
                $("img#zen").css("transform", "rotate(180deg)");
                $("div.content").animate({
                    left: "46vw"
                }, "linear");
            } else {
                $("img#zen").animate({
                    left: "-2vw"
                }, "linear");
                $("img#zen").css("transform", "rotate(180deg)");
                $("div.cover-2").animate({
                    left: "6vw"
                }, "linear");
                $("div.menu").animate({
                    left: "-78vw"
                }, "linear");
                $("div.options").animate({
                    left: "12vw"
                }, "linear")
                
            }

            flip2 = true;
        } else {
            if (documentsize > 992) {
                $("img#zen").css("transform", "rotate(90deg)");
                $("div.content").animate({
                    left: "19vw"
                }, "linear");
                $("div.photo-cover").animate({
                    left: "85.9vw"
                }, "linear")
            } else if (documentsize > 768) {
                $("img#zen").css("transform", "rotate(90deg)");
                $("div.content").animate({
                    left: "30vw"
                }, "linear");
            } else {
                $("img#zen").animate({
                    left: "-2vw"
                }, "linear");
                $("img#zen").css("transform", "rotate(0deg)");
                $("div.cover-2").animate({
                    left: "6vw"
                }, "linear");
                $("div.menu").animate({
                    left: "-78vw"
                }, "linear");
                $("div.options").animate({
                    left: "12vw"
                }, "linear")
            }

            flip2 = false;
        }
    });
});
