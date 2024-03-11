var logoInTop = false;
var n = 1000;
var temp, temp2 = document.documentElement.offsetHeight;;
var number = 1;
var overLang = false;
var moreText = false;
var general = document.getElementById("general");
var atm = document.getElementById('ATM');
var radars = document.getElementById("radars");
var radcom = document.getElementById("radCom");
var mainProjects = document.getElementById("mainProjects");
var indraPr = document.getElementById("indraPr");
var omae, omae2,bg1,bg2,bg3,bg4,bg5,bg6;
//var jotronPr = document.getElementById("jotronPr");
var locate = document.getElementById("location");
var repeater = setInterval(function() {
		document.getElementById('scrollBar').style.height =100/(document.documentElement.offsetHeight /window.innerHeight) + "vh";
}, 200);
function onLangOver(){
	overLang = true;
}
function onLangOut(){
	overLang = false;
}
function preLoadImages(){
	omae = new Image();
	omae2 = new Image();
	bg1 = new Image();
	bg2 = new Image();
	bg3 = new Image();
	bg4 = new Image();
	bg5 = new Image();
	bg6 = new Image();
	bg1.src ="img/tower.jpg";
	bg2.src ="img/airport_bg.jpg";
	bg3.src ="img/airport_tower.jpg";
	bg4.src ="img/radar.jpg";
	bg5.src ="img/rad_com.jpg";
	bg6.src ="img/blueprint.jpg";
	omae.src="img/omae.jpg";
	omae2.src="img/omae2.jpg";
}
function Scroll(){
		document.getElementById('gnrl').style.backgroundColor = "rgb(0, 140, 235)";
		document.getElementById('gnrl').style.color = "white";
		document.getElementById('tm').style.backgroundColor = "rgb(0, 140, 235)";
		document.getElementById('tm').style.color = "white";
		document.getElementById('rdrs').style.backgroundColor = "rgb(0, 140, 235)";
		document.getElementById('rdrs').style.color = "white";
		document.getElementById('rdcm').style.backgroundColor = "rgb(0, 140, 235)";
		document.getElementById('rdcm').style.color = "white";
		document.getElementById('mainPr').style.backgroundColor = "rgb(0, 140, 235)";
		document.getElementById('mainPr').style.color = "white";
		document.getElementById('ipr').style.backgroundColor = "rgb(0, 140, 235)";
		document.getElementById('ipr').style.color = "white";
		//document.getElementById('jpr').style.backgroundColor = "rgb(0, 140, 235)";
		//document.getElementById('jpr').style.color = "white";
		document.getElementById('loc').style.backgroundColor = "rgb(0, 140, 235)";
		document.getElementById('loc').style.color = "white";
		if(document.getElementById("prfl").checked == true){
				switch(true){
				 case window.scrollY >= general.offsetTop && window.scrollY+window.innerHeight*0.65 < atm.offsetTop:
				 	document.getElementById('gnrl').style.backgroundColor = "white";
				 	document.getElementById('gnrl').style.color = "rgb(0, 140, 235)";
				 	$("#bg").css({"background-image": "url(img/airport_bg.jpg)"});
				 	break;
				 case window.scrollY+window.innerHeight*0.75 >= atm.offsetTop && window.scrollY+window.innerHeight*0.45 < radars.offsetTop:
				 	$("#bg").css({"background-image": "url(img/airport_tower.jpg)"});
				 	document.getElementById('tm').style.backgroundColor = "white";
				 	document.getElementById('tm').style.color = "rgb(0, 140, 235)";
				 	break;
				 case window.scrollY+window.innerHeight*0.45 >= radars.offsetTop && window.scrollY+window.innerHeight*0.45 < radcom.offsetTop:
				 	$("#bg").css({"background-image": "url(img/radar.jpg)"});
				 	document.getElementById('rdrs').style.backgroundColor = "white";
				 	document.getElementById('rdrs').style.color = "rgb(0, 140, 235)";
				 	break;
				 case window.scrollY+window.innerHeight*0.45 >= radcom.offsetTop:
				 	$("#bg").css({"background-image": "url(img/rad_com.jpg)"});
				 	document.getElementById('rdcm').style.backgroundColor = "white";
				 	document.getElementById('rdcm').style.color = "rgb(0, 140, 235)";
				 	break;
			}
		}
		else if(document.getElementById("prjcts").checked == true){
				switch(true){
				 case window.scrollY >= mainProjects.offsetTop && window.scrollY+window.innerHeight*0.2 < indraPr.offsetTop:
				 	document.getElementById('mainPr').style.backgroundColor = "white";
				 	document.getElementById('mainPr').style.color = "rgb(0, 140, 235)";
				 	$("#bg").css({"background-image": "url(img/blueprint.jpg)"});
				 	break;
				 case window.scrollY+window.innerHeight*0.2 >= indraPr.offsetTop && window.scrollY+window.innerHeight*0.2 < locate.offsetTop: /*window.scrollY+window.innerHeight*0.2 < jotronPr.offsetTop:*/
				 	document.getElementById('ipr').style.backgroundColor = "white";
				 	document.getElementById('ipr').style.color = "rgb(0, 140, 235)";
				 	break;
				 /*case window.scrollY+window.innerHeight*0.2 >= jotronPr.offsetTop && window.scrollY+window.innerHeight*0.2 < locate.offsetTop:
				 	document.getElementById('jpr').style.backgroundColor = "white";
				 	document.getElementById('jpr').style.color = "rgb(0, 140, 235)";
				 	break;*/
				 case window.scrollY+window.innerHeight*0.2 >= locate.offsetTop:
				 	document.getElementById('loc').style.backgroundColor = "white";
				 	document.getElementById('loc').style.color = "rgb(0, 140, 235)";
				 	break;
			}
		}
}
dragElement(document.getElementById("scrollBar"));
function dragElement(elmnt) {
  var pos2 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = scrollBarTransitionOn;
  }
  function scrollBarTransitionOn(){
  	$("#UpContainer").fadeOut(100);
  	document.documentElement.style.scrollBehavior = 'auto';
	document.getElementById('scrollBar').style.transition = "0s";
	dragMouseDown();
	}
  function scrollBarTransitionOff(){
  	if ($(window).scrollTop() > 300) {
    $(".UpContainer").addClass('show');
	$("#UpContainer").fadeIn(100);}
  	document.documentElement.style.scrollBehavior = 'smooth';
	document.getElementById('scrollBar').style.transition = "0.14s";
	closeDragElement();
	}
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos4 = e.clientY;
    document.onmouseup = scrollBarTransitionOff;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos2 = pos4 - e.clientY;
    pos4 = e.clientY;
    result = elmnt.offsetTop - pos2;
    if (result> window.innerHeight - elmnt.offsetHeight) result = window.innerHeight - elmnt.offsetHeight;
    if (result< 0) result = 0;
    elmnt.style.top = result + "px";
    window.scrollTo(0, (document.documentElement.offsetHeight /window.innerHeight)*result);
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function languageSwitch(){
	$(":lang(en)").css({"display": "none"});
	$(":lang(ru)").css({"display": "none"});
	$(":lang(ua)").css({"display": "none"});
	var language = $("input[name='language']:checked").val();
	switch(language){
		case "en":{
			$(":lang(en)").fadeIn(250);
			break;
		};
		case "ru":{
			$(":lang(ru)").fadeIn(250);
			break;
		};
		case "ua":{
			$(":lang(ua)").fadeIn(250);
			break;
		}
	}
}
function chapterSwitch(){
	document.getElementById('mainPr').style.backgroundColor = "white";
	document.getElementById('mainPr').style.color = "rgb(0, 140, 235)";
	document.getElementById('gnrl').style.backgroundColor = "white";
	document.getElementById('gnrl').style.color = "rgb(0, 140, 235)";
	document.getElementById('link1').removeAttribute("href");
	document.getElementById('link2').removeAttribute("href");
	document.getElementById('link3').removeAttribute("href");
	var chapter = $("input[name='chapter']:checked").val();
	switch(chapter){
		case "profile":
			buttonClick(profile);
			document.getElementById('link1').href = "#";
			setTimeout(function(){
			$('#profileTab').fadeIn(300);
			$('#profile').fadeIn(300)}, n);
			break;
		case "projects":
			buttonClick(projects);
			setTimeout(function(){
			$('#projectsTab').fadeIn(300);
			$('#projects').fadeIn(300)}, n);
			document.getElementById('link2').href = "#";
			break;
		case "contacts":
			buttonClick(contacts);
			setTimeout(function(){
			$("#bg").css({"background-image": "url(img/tower.jpg)"});
			$('#contactsTab').fadeIn(300);
			$('#contacts').fadeIn(300)}, n);
			document.getElementById('link3').href = "#";
			break;
	}
}
$(window).scroll(function() {
	document.getElementById('scrollBar').style.top = window.scrollY / (document.documentElement.offsetHeight /window.innerHeight) + "px";
    if ($(window).scrollTop() > 300) {
    $(".UpContainer").addClass('show');
  } else {
    $(".UpContainer").removeClass('show');
  }
});
function easterEgg(fuse){
	var audio = new Audio('sounds/Omae.mpeg');
	var triggered = new Audio('sounds/triggered.mp3');
	audio.play();
	document.documentElement.style.backgroundSize = "100vw 100vh";
	document.documentElement.style.backgroundImage = "url(img/omae.jpg)";
	document.body.style.display = "none";
	setTimeout( function(){
		triggered.volume = 0.34;
		triggered.play();
		document.documentElement.style.backgroundImage = "url(img/omae2.jpg)";
	}, 3950);
	setTimeout( function(){
			for(;;);
	}, 4500);
}
function start(){
	$(":lang(ru)").css({"display": "none"});
	$(":lang(ua)").css({"display": "none"});
	document.getElementById('nav').style.animation = 'slideRight 1.9s cubic-bezier(.48,.29,.38,1) 1';
	document.getElementById('nav').style.display = 'block';
	document.body.style.visibility = 'visible';
	setTimeout( function(){
		$('#opening').fadeIn(200);}, 650);
	document.getElementById('logo').style.marginTop = "29vh";
	document.getElementById('logo').style.opacity = "1";
	preLoadImages();
}
function hint(){
	$('#tooltiptext').fadeIn(100);
	document.addEventListener('mousemove', function(ev){
    document.getElementById('tooltiptext').style.transform = 'translateY('+(ev.clientY + window.innerHeight*0.025)+'px)';
    document.getElementById('tooltiptext').style.transform += 'translateX('+(ev.clientX - window.innerWidth*0.015)+'px)';            
},false); 
}
function outHint(){
	$('#tooltiptext').fadeOut(20);
}
 $("#langTab").hover(
  	function(){
	  	temp = this;
	    temp.style.width = "21vw";
	    setTimeout( function(){
	    if(overLang) $(".language").fadeTo(150, 1);}, 750);
    }, 
	function(){
	    $(".language").fadeOut(150);
		setTimeout( function(){
			temp.style.width = "3.9vw";
	}, 200);
	}

);
function buttonClick(as){
	setTimeout(function(){
	document.getElementById('scrollBar').style.top = "0px";}, 210);
	setTimeout(function(){
		Scroll();
	}, n+10);
	if(logoInTop == true){
	$('.navigTab').fadeOut(200);
	$('.fadeOut').fadeOut(200);
}
	setTimeout(function(){
	if(document.documentElement.offsetHeight > window.innerHeight){
		document.getElementById('rail').style.transform = "translateX(0)";
		document.getElementById('scrollBar').style.transform = "translateX(0)";
		document.getElementById('scrollBar').style.opacity = "1";
		document.getElementById('rail').style.opacity = "1";
		document.getElementById('scrollBar').style.height =100/(document.documentElement.offsetHeight /window.innerHeight) + "vh";}
	else{
		document.getElementById('rail').style.transform = "translateX(1.3vw)";
		document.getElementById('scrollBar').style.transform = "translateX(1.3vw)";
		document.getElementById('scrollBar').style.opacity = "0";
		document.getElementById('rail').style.opacity = "0";
	}
},n +1000);
	if(logoInTop == false){
		$("#opening").fadeOut(200);
		document.getElementById("logo").style.marginTop = "11vh";
		logoInTop = true;
		setTimeout(function(){
			n = 300;
			document.getElementById("logo").setAttribute("onclick","opening()");
			document.getElementById("logo").setAttribute("onmouseover","hint()");
			document.getElementById("logo").setAttribute("onmouseout","outHint()");
			document.getElementById("logo").style.cursor = "pointer";
		}, 700);
	}
}
function opening(){
	buttonClick(opening);
	logoInTop = false;
	document.getElementById('link1').removeAttribute("href");
	document.getElementById('link2').removeAttribute("href");
	document.getElementById('link3').removeAttribute("href");
	$('.navInput').attr('checked', 'checked');
	$('.navInput').removeAttr('checked');
	setTimeout(function(){
	$("#bg").css({"background-image": "url(img/tower.jpg)"});
	$('#opening').fadeIn(300);
	document.getElementById('logo').style.transform = "scale(1)";
	$('#tooltiptext').fadeOut(100);
	document.getElementById("logo").style.marginTop = "35vh";}, n);
	document.getElementById("logo").setAttribute("onclick","");
	document.getElementById("logo").style.cursor = "default";
	document.getElementById("logo").setAttribute("onmouseover","");
	document.getElementById("logo").setAttribute("onmouseout","");
	n = 1000;
}
function readMore(button) {
	if (moreText == false){
	  	$(button).siblings("table").find(".item_invisible").fadeIn(200);
	  	button.innerHTML = '<span lang="en">Hide</span><span lang="ru">Скрыть</span><span lang="ua">Приховати</span>';
	  	button.style.color = "white";
		button.style.backgroundColor = "rgb(15, 191, 255)";
		languageSwitch();
		moreText = !moreText;
  	}
  	else{
	  	$(button).siblings("table").find(".item_invisible").fadeOut(200);
	  	setTimeout(function(){
	  	button.innerHTML = '<span lang="en">Read more</span><span lang="ru">Больше</span><span lang="ua">Більше</span>';languageSwitch();}, 200);
	  	moreText = !moreText;
  	}
}
function mouseDown(x){
	x.style.border = "none";
	x.style.backgroundColor = "rgb(209, 209, 209)";
	x.style.color = "rgb(0, 140, 235)";
}
function mouseUp(x){
	x.style.border = "none";
	x.style.color = "rgb(15,191,255)";
	x.style.backgroundColor = "white";
}
function mouseOver(x){
	x.style.backgroundColor = "white";
	x.style.color = "rgb(15,191,255)";
}
function mouseOut(x){
	x.style.backgroundColor = "rgb(15,191,255)";
	x.style.color = "white";
}