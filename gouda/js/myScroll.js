;(function(w,d){
    var myScroll;
    function loaded(){
        myScroll=new iScroll("aa",{
            vScroll:false,
            hScroll:true,
            hScrollbar:false
        })
        myScroll=new iScroll("bb",{
            vScroll:false,
            hScroll:true,
            hScrollbar:false
        })
    }
    window.addEventListener("load",loaded,false);
})(window,document);