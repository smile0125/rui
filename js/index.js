$(function () {
    $(".bta").click(function(){
        $(this).addClass("active").parent().siblings().children("a").removeClass("active")
    });

   $(".work-img").bind("mouseenter mouseleave",function (e) {
     $(this).find(".blue-bg").fadeToggle(200);
   })
});