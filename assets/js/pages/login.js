function OnClickLogin() {
	var loginSuccess = 0;
	var usn = document.getElementById("usn").value;
	var pwd = document.getElementById("pwd").value;
	for(var i = 0 ; i < accounts.length; i++){
		if(accounts[i].usn == usn && accounts[i].pwd == pwd){
			loginSuccess = 1;
		}
	}
	if(loginSuccess){
		window.location.href = "admin.php";
	}
	else {
		alert("Wrong password or username");
		console.log(usn);
		console.log(pwd);
	}
	localStorage.setItem("test",loginSuccess);
	console.log(localStorage.getItem("test"));
    
}