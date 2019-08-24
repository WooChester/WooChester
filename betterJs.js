window.onscroll = function() {
balloonDecend();
weHaveTouchdown();
};

function changeIcon(x){
	
	if (document.getElementById("links").className == "reference_links"){
	
		document.getElementById("links").className = "nav_clicked";
		document.getElementById("nav_dropdown").className = "nav_dropdown";
		document.getElementById('barOne').className = "change_barOne";
		document.getElementById('barTwo').className = "change_barTwo";
		document.getElementById('barThree').className = "change_barThree";
		
	
	}
	else{
	
		document.getElementById("links").className = "reference_links";
		document.getElementById("nav_dropdown").className = "";
		document.getElementById('barOne').className = "";
		document.getElementById('barTwo').className = "";
		document.getElementById('barThree').className = "";

		
	}
	
}

function weHaveTouchdown(){


	var doc_height = document.documentElement.scrollHeight;
	var already_scrolled = document.documentElement.scrollTop;
	var user_window_height = window.innerHeight;
	
	
	if ((doc_height - (already_scrolled + user_window_height)) == 0 || (doc_height - (document.body.scrollTop + user_window_height) == 0 )){
	
		document.getElementById('balloon_land').classList.add("balloon_animation");
		document.getElementById('contact_text').style.opacity = 1;
		document.getElementById('balloon_land').style.opacity = 1;
	}
	
	else{
		
		document.getElementById('ballon_land').classList.remove("balloon_animation");
	
	}
	
	

}
		
function balloonDecend() {


	var window_height = window.innerHeight - document.getElementById('scroll_balloon').offsetHeight + 65;
	var doc_height = document.documentElement.scrollHeight;
	var already_scrolled = document.documentElement.scrollTop;
	var far_down = window_height*(already_scrolled/doc_height) + 40;
	
	var test = document.getElementById('phillipMail').offsetTop;

	document.getElementById('scroll_balloon').style.top = far_down + 'px';
}




/***********************
	BUBBLE ANIMATION 
************************



function bubbleFade() {
	
			
 		if (document.body.scrollTop > 1550 || document.documentElement.scrollTop > 1550){
 			document.getElementById('javaCard').style.opacity = 1;
  		}
  		else{
  			document.getElementById('javaCard').style.opacity = 0;
  		}
  		
  		if(document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800){
  			
  			document.getElementById('pythonCard').style.opacity = 1;
  			document.getElementById('javaCard').style.opacity = 0;
  		}
  		else{
  			document.getElementById('pythonCard').style.opacity = 0;
  		}
  			
  		if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100){
  			
  			document.getElementById('htmlCard').style.opacity = 1;
			document.getElementById('pythonCard').style.opacity = 0;
  			
  		}
  			
  		else{
  			document.getElementById('htmlCard').style.opacity = 0;
  		}
  			
  		if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400){
  			
  			document.getElementById('javascriptCard').style.opacity = 1;
  			document.getElementById('htmlCard').style.opacity = 0;
  			
  		}
  			
  		else{
  			document.getElementById('javascriptCard').style.opacity = 0;
  		}
  			
			if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700){
  			
  			document.getElementById('cssCard').style.opacity = 1;
  			document.getElementById('javascriptCard').style.opacity = 0;
  			
  		}
  			
			else{
  			document.getElementById('cssCard').style.opacity = 0;
  		}
  			
  		if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000){
  			
  			document.getElementById('cCard').style.opacity = 1;
			document.getElementById('cssCard').style.opacity = 0;
  			
  		}
  			
  		else{
  			document.getElementById('cCard').style.opacity = 0;
  		}
  			
  		if (document.body.scrollTop > 3300 || document.documentElement.scrollTop > 3300){
  			
  			document.getElementById('illustratorCard').style.opacity = 1;
  			document.getElementById('cCard').style.opacity = 0;
  			
  		}
  			
  		else{
  			document.getElementById('illustratorCard').style.opacity = 0;
  		}
  			
  		if (document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600){
  			
  			document.getElementById('excelCard').style.opacity = 1;
  			document.getElementById('illustratorCard').style.opacity = 0;
  		
		}
  			
  		else{
  			document.getElementById('excelCard').style.opacity = 0;
  		}
  			
  			if (document.body.scrollTop > 3900 || document.documentElement.scrollTop > 3900){
  			document.getElementById('excelCard').style.opacity = 0;
  			document.getElementById('skillzHeading').style.opacity = 0;
  			
  		}
  			
  		else {
  			document.getElementById('skillzHeading').style.opacity = 1;
  				
  		}			
}

*/

function open_curtain(){

	document.getElementById('curtain').className = "curtain";
	document.getElementById('curtain').style.display = "inherit";
	document.getElementById('close_curtain_button').style.display = "inline";
	
	
}

function close_curtain(){

	document.getElementById('curtain').className = "";
	document.getElementById('close_curtain_button').style.display = "none";
	document.getElementById('curtain').style.display = "none";

}
	
	
	
	
	
	
	
	
	
	
