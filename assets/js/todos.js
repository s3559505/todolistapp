//check off speicic to dos by clickings

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});


// click on x to delete
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text'").keypress(function (event) {
    if (event.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
        //create new a li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'> </i> </span>" + toDoText + "</li>")
    }
});


$(".fa-plus").click(function () {
    $("input[type='text").fadeToggle();
});