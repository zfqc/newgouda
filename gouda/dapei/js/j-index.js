
    function auto(li, ul) {
        for (var i = 0, len = ul.children().length; i < len; i++) {
            ul.children().eq(i).find("img").attr("src", "./img/f" + Number(i + 1) + ".png");
        }
        var ourl = "",
            xurl = "";
        ourl = li.find("img").attr("src");
        xurl = ourl.substring(ourl.indexOf("f") + 2, ourl.length);
        li.find("img").attr("src", "./img/bg" + Number(li.index() + 1) + ".png");
    }
    $("#lis").on("tap", "li", function () {
        $(this).index() == 2 ? $(this).unbind("tap") : auto($(this), $("#lis"));
    });
    
    $("#btn").on("click",function/**/(){
        alert(4)
    })
