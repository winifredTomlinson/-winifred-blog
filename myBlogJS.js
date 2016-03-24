$(document).ready(function() {
/*function TimedMsg()
{
var t=setTimeout(function(){$("#quote").show();},500)
}
*/
	$("#main1").bind("mouseover",function(){$("#articleTitle1").css("display","none");$( "#img1" ).css({ "top": "0px", "left": "0px", "width": "330px", "height": "360px" }).stop().animate({ "top": "-25px", "left": "-25px", "width": "396px", "height": "432px", "opacity": "0.5" }, 500);$("#quote1").show();/*TimedMsg();*/},false);
	$("#main1").bind("mouseout",function(){$("#articleTitle1").show();$("#quote1").hide();
	$( "#img1" ).stop().animate({ "top": "0", "left": "0", "width": "330px", "height": "360px", "opacity": "0.7" }, 500);});
	
		$("#main2").bind("mouseover",function(){$("#articleTitle2").css("display","none");$( "#img2" ).css({ "top": "0px", "left": "0px", "width": "330px", "height": "360px" }).stop().animate({ "top": "-25px", "left": "-25px", "width": "396px", "height": "432px", "opacity": "0.5" }, 500);$("#quote2").show();/*TimedMsg();*/},false);
	$("#main2").bind("mouseout",function(){$("#articleTitle2").show();$("#quote2").hide();
	$( "#img2" ).stop().animate({ "top": "0", "left": "0", "width": "330px", "height": "360px", "opacity": "0.7" }, 500);});
	
		$("#main3").bind("mouseover",function(){$("#articleTitle3").css("display","none");$( "#img3" ).css({ "top": "0px", "left": "0px", "width": "330px", "height": "360px" }).stop().animate({ "top": "-25px", "left": "-25px", "width": "396px", "height": "432px", "opacity": "0.5" }, 500);$("#quote3").show();/*TimedMsg();*/},false);
		
	$("#main3").bind("mouseout",function(){$("#articleTitle3").show();$("#quote3").hide();
	$( "#img3" ).stop().animate({ "top": "0", "left": "0", "width": "330px", "height": "360px", "opacity": "0.7" }, 500);});
	
		$("#main4").bind("mouseover",function(){$("#articleTitle4").css("display","none");$( "#img4" ).css({ "top": "0px", "left": "0px", "width": "330px", "height": "360px" }).stop().animate({ "top": "-25px", "left": "-25px", "width": "396px", "height": "432px", "opacity": "0.5" }, 500);$("#quote4").show();/*TimedMsg();*/},false);
	$("#main4").bind("mouseout",function(){$("#articleTitle4").show();$("#quote4").hide();
	$( "#img4" ).stop().animate({ "top": "0", "left": "0", "width": "330px", "height": "360px", "opacity": "0.7" }, 500);});
	
	
	
	
	$("#click-nav").hide();
	$("#ion-navigate").mouseover(function(){$("#ion-navigate").css("color","#f7ce88");}).click(function(){$("#click-nav").slideDown("slow");}).mouseout(function(){$("#ion-navigate").css("color","#000");});
		/*$(document).not("#click-nav").click(function(){$("#click-nav").slideUp("slow");$("#ion-navigate").show("");});   */
	$("#ion-close").mouseover(function(){$("#ion-close").css("color","#f7ce88");}).mouseout(function(){$("#ion-close").css("color","#000");}).click(function(){$("#click-nav").slideUp("slow");$("#ion-navigate").show("");});
//setTimeout("alert('5 seconds!')",5000)

});
function showHint(){
	var xmlhttp;
	if (str.length==0)
  { 
  document.getElementById("txtHint").innerHTML="";
  return;
  }
	if(window.XMLHttpRequest){
	xmlhttp = new XMLHttpRequest;
		}
	else{
		xmlhttp =new ActiveXObject("Microsoft XMLHTTP");
		}
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readystate == 4 && xmlhttp.status == 200){
			document.getElementById("txt1").innerHTML = xml.responseText;
			}
		}
	xmlhttp.open("GET", "file:///E|AppServ/www/ajax/search.php/?q="+str, true);
	xmlhttp.send();
	}
