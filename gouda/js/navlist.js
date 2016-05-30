$(function(){
    $.getJSON("gouda.json",function(data){
        var ohtml="";
        $.each(data.navlist,function(key,value){
            $.each(value,function(k,v){
                 var url = location.href;
                                        //起始值               结束值
                 var aa=url.substring(url.indexOf("?") + 1, url.length);
                var bb=decodeURI(aa); //解码
                var head=$(".header h1").text(bb);  //标题
               // console.log(bb) 
                if(k==bb){  
                    $.each(v,function(k,v){
                       // console.log(v.imgURL)
                        ohtml+='<a href="./fenlei/show.html?'+v.name+'"><img src="img/'+v.imgURL+'" alt=""><span>'+v.name+'</span></a>';
                        $(".main").html(ohtml)
                    })
                }
                
            })
        })
    })
})


         