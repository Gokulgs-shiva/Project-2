$(document).ready(function () {
    $(".navbar-nav li .a-cus").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
