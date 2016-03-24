$(document).ready(function() {
	$("#article-quote1").mouseover(function(){$("#article-quote1").css({"border":"#CCC 1px solid","box-shadow":"0 0 10px #999","cursor":"pointer"});$("#article-quote1 pre").css("color","#de7d46");}).mouseout(function(){$("#article-quote1").css({"border":"#fff 1px solid","box-shadow":"0 0 10px #fff"});$("#article-quote1 pre").css("color","#333");});
	$("#article-quote2").mouseover(function(){$("#article-quote2").css({"border":"#CCC 1px solid","box-shadow":"0 0 10px #999","cursor":"pointer"});$("#article-quote2 pre").css("color","#de7d46");}).mouseout(function(){$("#article-quote2").css({"border":"#fff 1px solid","box-shadow":"0 0 10px #fff"});$("#article-quote2 pre").css("color","#333");});
	$("#article-quote1").click(function(){window.open("性能调优.html","_self")})
	$("#article-quote2").click(function(){window.open("JS判断基本和引用类型.html","_self")})
	$("#click-nav").hide();
	$("#ion-navigate").mouseover(function(){$("#ion-navigate").css("color","#f7ce88");}).click(function(){$("#click-nav").slideDown("slow");}).mouseout(function(){$("#ion-navigate").css("color","#000");});
		/*$(document).not("#click-nav").click(function(){$("#click-nav").slideUp("slow");$("#ion-navigate").show("");});   */
	$("#ion-close").mouseover(function(){$("#ion-close").css("color","#f7ce88");}).mouseout(function(){$("#ion-close").css("color","#000");}).click(function(){$("#click-nav").slideUp("slow");$("#ion-navigate").show("");});

});
