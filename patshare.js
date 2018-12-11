//pat - encrypt & decrypt
var pat_enc_input,pat_dec_input,pat_enc_output,pat_dec_output,inputlinkdec;
	
	
	function pat_enc() {	
		pat_enc_input = document.getElementById("kotak_safelink_input_enc").value;
		var a,b;
		pat_enc_output = "";
		for (a = 0; a < pat_enc_input.length; a++) {
		if( pat_enc_input.charCodeAt(a) == '90' ){
			pat_enc_output += "A";
		}else if( pat_enc_input.charCodeAt(a) == '122' ){
			pat_enc_output += "a";
		}else if(( pat_enc_input.charCodeAt(a) >= '65') && (pat_enc_input.charCodeAt(a) <= '89')){
			b = pat_enc_input.charCodeAt(a)+1;
			pat_enc_output += String.fromCharCode(b);
		}else if(( pat_enc_input.charCodeAt(a) >= '97') && (pat_enc_input.charCodeAt(a) <= '121')){
			b = pat_enc_input.charCodeAt(a)+1;
			pat_enc_output += String.fromCharCode(b);
		}else{
			b = pat_enc_input.charCodeAt(a);
			pat_enc_output += String.fromCharCode(b);
		}
		}
	}

		function pat_dec() {	
		pat_dec_input = inputlinkdec;
		var a,b;
		pat_dec_output = "";
		for (a = 0; a < pat_dec_input.length; a++) {
		if( pat_dec_input.charCodeAt(a) == '65' ){
			pat_dec_output += "Z";
		}else if( pat_dec_input.charCodeAt(a) == '97' ){
			pat_dec_output += "z";
		}else if(( pat_dec_input.charCodeAt(a) >= '66') && (pat_dec_input.charCodeAt(a) <= '90')){
			b = pat_dec_input.charCodeAt(a)-1;
			pat_dec_output += String.fromCharCode(b);
		}else if(( pat_dec_input.charCodeAt(a) >= '98') && (pat_dec_input.charCodeAt(a) <= '122')){
			b = pat_dec_input.charCodeAt(a)-1;
			pat_dec_output += String.fromCharCode(b);
		}else{
			b = pat_dec_input.charCodeAt(a);
			pat_dec_output += String.fromCharCode(b);
		}
		}
	}
//end pat - encrypt & decrypt
	
	function pat_go(){
		pat_enc()
		document.getElementById("kotak_safelink_out_enc").value = "https://patshare.blogspot.com/p/sl.html" + pat_enc_output;
		document.getElementById("kotak_safelink_3").style.height = 200;
	}
	function pat_copylink() {	
		document.getElementById("kotak_safelink_3").style.height = 0;
		var copyText = document.getElementById("kotak_safelink_out_enc");
		copyText.select();
		document.execCommand("copy");
	}
	
	function pat_safelink_random(){
		var a = window.location.href;
		var b = a.indexOf("?enc=") + 5;
		var c = a.slice(b);
		var d = Math.floor(Math.random() * 3)
		if( d == "0"){
			location.replace("https://patshare.blogspot.com/p/sl.htmlenc=" + c );
		}else if( d == "1"){
			location.replace("https://patshare.blogspot.com/p/sl.html?enc=" + c );
		}else{
		location.replace("https://patshare.blogspot.com/p/sl.html?enc=" + c );
		}
	}
	//Timer Get Link
	var pat_timer=3;
	var pat_vartimer;

	function pat_timecount1()
	{
	document.getElementById('pat_getlink1').innerHTML="WAIT FOR " +pat_timer;
	pat_timer=pat_timer-1;
	pat_vartimer=setTimeout("pat_timecount1()",1000);
	if(pat_timer == -1){
	  clearTimeout(pat_vartimer);
	  pat_timer=3;
	  document.getElementById('pat_getlink1').innerHTML="<a onclick='pat_timecount2()'>CONTINUE DOWNLOAD</a>";
	  }
	}

	function pat_timecount2()
	{
	document.getElementById("pat_kotakgetlink2").scrollIntoView();
	document.getElementById('pat_getlink2').innerHTML="WAIT FOR " +pat_timer;
	pat_timer=pat_timer-1;
	pat_vartimer=setTimeout("pat_timecount2()",1000);
	if(pat_timer == -1){
	  clearTimeout(pat_vartimer);
	  pat_timer=3;
	  document.getElementById('pat_getlink2').innerHTML="<a href='"+ pat_dec_output +"'>CONTINUE DOWNLOAD</a>";
	  }
	}

	//end timer script
	
	function pat_safelink_dec(){
		document.getElementById("pat_kotakgetlink1").scrollIntoView();
		var a = window.location.href;
		var b = a.indexOf("?enc=") + 5;
		inputlinkdec = a.slice(b);
		pat_dec();
		pat_timecount1();
	}