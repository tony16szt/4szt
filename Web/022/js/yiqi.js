// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("我很努力很努力");
	   }else if(Dianji==2){
		   		alert("我会给你我的心");
		   		
	   }else if(Dianji==3){
		   		alert("不会让你等很久");
		   		
	   }else if(Dianji==4){
		   		alert("我会多多给你订小蛋糕蛋挞面包榴莲汉堡炸鸡披萨和好多好多好吃的！");
		   		
	  }else if(Dianji==5){
		   		alert("我会时刻把你放在心里，不打扰你，又绝对不忘记你");
	  }else if(Dianji==6){
		   		alert("遇见你是我最幸福的事，允许我陪在你身边吧");
	  }else if(Dianji==7){
		   		alert("见不到的日子里，我无时无刻不在想你");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("愿我们一帆风顺，最后一定是你和我❤");
	}
	

}
