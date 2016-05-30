;
(function () {


    $.getJSON("gouda.json", function (data) {
        //渲染键值
        var ohtml = "";
        var oml = "";
        // console.log(data)
        $.each(data.dapei, function (key, val) {
            $.each(val, function (key, v) {
                //console.log(key)
                ohtml += "<a href='#'>" + key + "</a>"
            })
        })
        $('.title').html(ohtml);

        //在不点击的情况下让其显示内容
        $.each(data.dapei, function (key, va) {
            $.each(va, function (key, vra) {
                $.each(vra, function (key, vi) {
                    oml += "<li><a href='../xiangqing.html?"+vi.tit+"'><img src='img/" + vi.imgURL + "'></a><div class='body'><h4>" + vi.tit.substring(7) + "</h4><p><span>" + vi.pirce + "</span><a href='#'>" + vi.btn + "</a></p></div></li>"

                })

            })
        })

        $('.main').html(oml);

        //点击标题


        $('.title').on('click', "a", function () {
            //给其标题添加样式
            $(this).addClass('border').siblings().removeClass('border');
            var key = $(this).html();
            var otml = "";
            var vl = data.dapei;
            for (i in vl) {
                $.each(vl[i], function (k, v) {
                    //判断他的是否等于key值
                    if (k == key)(
                        //console.log(k)
                        $.each(v, function (k, vr) {
                            otml += "<li><a href='../xiangqing.html?"+vr.tit+"'><img src='img/" + vr.imgURL + "'></a><div class='body'><h4>" + vr.tit.substring(7) + "</h4><p><span>" + vr.pirce + "</span><a href='#'>" + vr.btn + "</a></p></div></li>"
                        })
                    )

                })
                $('.main').html(otml);
            }

        })

    })




})(Zepto);