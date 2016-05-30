(function (w, d) {
	$.getJSON("js/gouda.json", function (data) {

		//渲染show.html页面内容
		var hh = location.href;
		var hhlist = hh.substring(hh.indexOf("?") + 1, hh.length);
		var hhHtml = decodeURI(hhlist);
		var listHtml = "";
		$(".tit h1").html('<a href="index.html">返回</a>'+hhHtml);
		$.each(data.fenlei, function (k, v) {
			$.each(v, function (i, val) {
				$.each(val, function (p, w) {
					$.each(w, function (a, b) {
						if (a == hhHtml) {
							for (a in b) {
								listHtml+='<li><a href="../xiangqing.html?'+b[a].list+'"><img src="img/'+b[a].imgs+'"alt=""><h2>'+b[a].list+'</h2><p>'+b[a].prace+'</p></a></li>';
							}
						}
					})
				})

			})
			$(".titMessage ul").html(listHtml);
		})

		//标题部分 
		var ohtml = "";
		$.each(data.fenlei, function (i, v) {
				var olist = '';

				$.each(v, function (i, v) {
					//console.log(i);
					olist += "<span>" + i + "</span>";

					if (i == "场合")
						$.each(v, function (i, v) {
							//console.log(v)
							ohtml += "<a href='show.html?" + v.name + "'><dl><dt><img src='img/" + v.imgURL + "'></dt><dd>" + v.name + "</dd></dl></a>";
						})
					$("#listShow").html(ohtml);

				})
				$("#sortList").html(olist);
			})
			//设置点击事件
		$("#sortList").children("span").eq(0).addClass("bg");
		var a = $("#sortList").find("span").eq(0).text();

		$("#sortList").on('click', "span", function () {

			$(this).addClass("bg").siblings().removeClass("bg");
			var key = $(this).html();
			ohtml = "";
			$.each(data.fenlei, function (i, v) {

				$.each(v, function (i, v) {
					//console.log(i);
					if (i == key) {
						$.each(v, function (i, v) {

							//console.log(v)
							ohtml += "<a href='show.html?" + v.name + "' title=" + v.name + "><dl><dt><img src='img/" + v.imgURL + "'></dt><dd>" + v.name + "</dd></dl></a>";
						})
						$("#listShow").html(ohtml);
					}
				})
			})
		})
	})

})(window, document)