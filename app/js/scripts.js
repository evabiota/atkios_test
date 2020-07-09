$(document).ready(function(){
  $(".form-control").focus(function(){
        $(this).css({"background":"#889CA8", "outline":"none"})
        })
        $(".form-control").blur(function(){
        $(this).css({"background":"transparent"})
        })
});