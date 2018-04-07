$(function () {
    var arr=["image/big-img1.jpg","image/big-img2.jpg","image/big-img3.jpg",
        "image/big-img4.jpg","image/big-img5.jpg","image/big-img6.jpg"];
    $(".bta").click(function () {
        $(this).addClass("active").parent().siblings().children("a").removeClass("active")
    });

    $(".work-img").bind("mouseenter mouseleave", function (e) {
        $(this).find(".blue-bg").fadeToggle(200);
    });

    $(".showImg").each(function(index,item){
        $(this).click(function(){
            window.open("show.html?"+arr[index], "_block");
        });
    });
});