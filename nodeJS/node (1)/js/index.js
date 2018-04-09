window.onload=function(){
	var oimg=document.querySelector("img")
	var a=true;
	oimg.onclick=function(){
		oimg.style.transition="1s width"
		if(a){
			oimg.style.width=500+"px";
		}else{
			oimg.style.width=300+"px";
		}
		a=!a;
	}
	
	
	
	
	
}
