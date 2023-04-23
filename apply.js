// applied to apply.html
"use strict";

function validate(){
	var errMsg="";
	var result = true;
	//document.write("hi");
	
	var postcode = document.getElementById("post_code").value;
	var job_ref_number = document.getElementById("job_ref_number").value;
	var state = document.getElementById("state").value;
	
	if(!job_ref_number.match(/^[A-Za-z0-9]+{5,5}$/)){
		errMsg = errMsg + "boo.\n";
		result = false;
	}
	
	//document.write(errMsg);
	if(state == ""){
		errMsg = errMsg + "Please select your state.\n";
		result = false;
	}
	else {
		var tempMsg = checkStatePostcode(state, postcode);
		if(tempMsg !=""){
			errMsg = errMsg + tempMsg;
			result = false;
		}
	}
	
	//document.write(errMsg);
	
	if(errMsg != ""){
		alert(errMsg);
	}
	return result;
}

/*function getState(){
	var state = "Unknown";
	
	var stateArray = document.getElementById("state").getElementsByTagName("input");
	
	for(var i=0; i<stateArray.length ;i++){
		if(stateArray[i].checked){
			state = stateArray[i].value;
		}
	}
	
	return state;
}*/

function checkStatePostcode(state, postcode){
	var errMsg="";
	
	switch(state){
		case"VIC":
			if(!postcode.match(4+[0-9]+{4,4}))
			errMsg = "VIC postcode must start with 3";
		break;
	case"NSW":
		break;
    case"QLD":
		break;
	case"NT":
		break;
	case"WA":
		break;
	case"SA":
		break;
	case"TAS":
		break;
	case"ATC":
		break;
	default:
		errMsg = "please select state";
	}
	return errMsg;
}
function init(){
	var applyform = document.getElementById("applyform");
	applyform.onsubmit = validate;
}
window.onload = init();
