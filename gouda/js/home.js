$(function(){
    var banner="",nav="",list="";
    $.getJSON("gouda.json",function(data){
        $.each(data.banner,function(key,value){
            banner+='<div class="swiper-slide"><img src="img/'+value.imgURL+'"></div>';
            $(".banner").html(banner);
        })
        /*导航*/
        $.each(data.navlist,function(key,value){
           $.each(value,function(k,v){
                nav+='<a href="navlist.html?'+k+'" ><span></span>'+k+'</a>';
                $(".nav").html(nav);
           })
            
        })
        /*主题列表*/
        $.each(data.bigList,function(key,value){
            //console.log(value.imgURL)   
            list+='<a href="xiangqing.html?'+value.tit+'"><img src="img/'+value.imgURL+'"  data-echo="img/'+value.imgURL+'"><p>'+value.tit.substring(0,20)+'</p><p><span>'+value.pirce+'</span><button>'+value.btn+'</button></p></a>';
            $(".list").html(list)
        })
    })
})

/*页脚*/
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
        $(this).find("span").addClass("bg").parents("li").siblings().find("span").removeClass("bg")
    });
    
   


/*搜索*/
$(function(){
    $("#txt").on("focus",function(){
        $(this).prev("span").css({background:"#E50069"});
        $(this).prev("span").html("<");
        $(this).next("a").css({background:"#E50069"});
        $(this).next("a").html("搜索");
        $(".content").empty();
        $(".header #sp").on("click",function(){
                location.href="index.html";
        })
    })
            
       $("#btn").on("click",function(){
             
                var txt=$("#txt").val();
                var ohtml="";
                $.ajax({
                    url:"https://api.douban.com/v2/movie/search",
                    type:"GET",
                    data:{q:txt},
                    dataType:"jsonp",                    
                    success:function(data){
                        console.log(data)
                        $.each(data.subjects,function(k,v){
                            //console.log(v.images.small)
                             ohtml+='<div class="movie"><img src="'+v.images.small+'" alt=""><p><span class="title">'+v.title+'<span><span>'+v.year+'年</span><span>编号：'+v.id+'</span></p></div>';
                                $(".content").html(ohtml)
                        })
                       
                    }
                })
            
        })
})