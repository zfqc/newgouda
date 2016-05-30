$(function(){
    var tit="",pirce="",bigImg="",size="",color="";
    $.getJSON("gouda.json",function(data){
        /*解析地址栏*/
        var url=location.href;
        var subURL=url.substring(url.indexOf("?")+1,url.length)
        var bb=decodeURI(subURL);
       $.each(data.bigList,function(key,value){
           
           if(value.tit==bb){
                tit+='<p>'+value.tit+'</p>';
               console.log(value.tit)
               $(".tit").html(tit);
               pirce+='<b>'+value.pirce+'</b><button>'+value.btn+'</button>';
               $(".pirce").html(pirce)
              // console.log(value.img.bigimg)
               $.each(value.img,function(k,v){
                    $.each(v,function(i,l){
                        bigImg+='<div class="swiper-slide"><img src="img/'+l+'"></div>';
                        $(".banner").html(bigImg)
                    })
               })
               $.each(value.size,function(k,v){
                   size+='<a href="">'+v+'</a>';
                   $(".size p").html(size)
               })
               $.each(value.color,function(k,v){
                   console.log(v)
                   color+='<a href="#">'+v+'</a>';
                   $(".color p").html(color)
               })
           }
           
       })
    })
})

//购买数量
var number=$(".num #num");
$(".num #btn1").click(function(){
      if(number.val()==0){
        number.val()=0;
      }else{
          number.val(parseInt(number.val())-1);
      }
})
$(".num #btn2").click(function(){
 
     number.val(parseInt(number.val())+1);
      
})