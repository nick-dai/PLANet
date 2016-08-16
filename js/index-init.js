// jQuery's init function (Objects here are loaded _before_ all of HTML are loaded.)
$(document).ready(function() {
    // Initialize right-sliding menu.
    $(".button-collapse").sideNav({
        menuWidth: $(document).width(),
        edge: "right",
        closeOnClick: true
    });
});
