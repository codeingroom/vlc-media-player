console.log("Work");
var vd=document.getElementById("video_value");
var mn=document.getElementById("main");
var rts=document.getElementById("rt");
var lfs=document.getElementById("lf");
var mins=document.getElementById("min");
var secs=document.getElementById("sec");
var pos=document.getElementById("progs");
var cps=document.getElementById("cp");
var stg=document.getElementById("starting");
var bks=document.getElementById("bk");
var bks1=document.getElementById("bk1");
var cans=document.getElementById("canc");

var play_btn=document.getElementById("play");
var res=document.getElementById("full");

var a="play";
var b="full";

function play_video(){
if(a=="play"){
vd.play();
play_btn.innerHTML="<i class='fa-solid fa-pause'></i>";
a="pause";
}else{
	vd.pause();
	play_btn.innerHTML="<i class='fa-solid fa-play'></i>";
	a="play";
}
}
function fullscr(){
	if(b=="full"){
	mn.requestFullscreen();
	res.innerHTML="<i class='fa-solid fa-window-restore'></i>";
	b="restore";
	}else{
		document.exitFullscreen();
		res.innerHTML="<i class='fa-solid fa-expand'></i>";
		b="full";
	}
}
function backward(){
	vd.currentTime=vd.currentTime-10;
}
function forward(){
	vd.currentTime=vd.currentTime+10;
}
function dura(){
	var m=Math.floor(vd.duration/60);
	var s=vd.duration;
	console.log(m);
	
if(s<10){
	rts.innerHTML=m+":"+"0"+Math.floor(s);	
	}else{
		
		rts.innerHTML=Math.floor(m/60)+":"+m+":"+Math.floor(s-m*60);
	}
	
	
	
}
var ad=document.getElementById("ico");
let icon="<i class='fa-solid fa-volume-high' style='margin: 10px;' onclick='volc()'></i>";
function volumefun(sendvalue){
	vd.volume=sendvalue/100;
	if(vd.volume==0.01){
		ad.innerHTML="<i class='fa-solid fa-microphone-slash' style='margin: 10px;' onclick='volc()'></i>";
	
	}else{
		ad.innerHTML=icon;
	}
	
}


function gettime(){
	var se=Math.floor(vd.currentTime);
	var mn=Math.floor(se/60);
	var gk=mn*60;
	var ps=se-gk;
	var per=100*vd.currentTime/vd.duration;
	if(se<10){
		secs.innerHTML="0"+se;
		
		
	}else{
		if(ps<10){
			secs.innerHTML="0"+ps;
			
			
		}else{
			secs.innerHTML=ps;
			
		}
		if(se>60){
			mins.innerHTML=Math.floor(se/60);
		}
		
	}
	
	pos.style.width=per+"%";
	
	
	
}

cps.onclick=function(e){
	vd.currentTime=(e.offsetX/cps.offsetWidth) * vd.duration;
}

stg.onclick=function(){
	vd.currentTime=0;
}
bks.onclick=function(){
	document.getElementById("next").style.display="flex";
	vd.style.filter="blur(10px)";
}
bks1.onclick=function(){
	document.getElementById("next").style.display="flex";
	vd.style.filter="blur(10px)";
}
cans.onclick=function(){
	document.getElementById("next").style.display="none";
	vd.style.filter="none";
}
function about(){
	document.getElementById("next1").style.display="flex";
	vd.style.filter="blur(10px)";
}
function canc1(){
	document.getElementById("next1").style.display="none";
	vd.style.filter="none";
}

let fd="volume";

function volc(){
	if(fd=="volume"){
		vd.muted=true;
		ad.innerHTML="<i class='fa-solid fa-microphone-slash' style='margin: 10px;' onclick='volc()'></i>";
		fd="unmu";
	}else{
		vd.muted=false;
		ad.innerHTML=icon;
		fd="volume";
	}
}