function func(s) {
	document.getElementById("chooseHome").style.backgroundColor = "black";
    document.getElementById("homeContent").style.display = "none";
    
    document.getElementById("chooseInterests").style.backgroundColor = "black";
    document.getElementById("interestsContent").style.display = "none";
    
    document.getElementById("chooseMore").style.backgroundColor = "black";
    document.getElementById("moreContent").style.display = "none";
    
	if(s == "chooseHome"){
		document.getElementById("chooseHome").style.backgroundColor = "green";
        document.getElementById("homeContent").style.display = "block";
    }
    else if(s == "chooseInterests"){
    	document.getElementById("chooseInterests").style.backgroundColor = "green";
        document.getElementById("interestsContent").style.display = "block";
    }
    else if(s == "chooseMore"){
    	document.getElementById("chooseMore").style.backgroundColor = "green";
        document.getElementById("moreContent").style.display = "block";
    }
}