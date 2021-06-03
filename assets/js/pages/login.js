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
		alert("login success");
		window.location.href = "admin-edit.html";
	}
	else {
		alert("wrong password or username");
		console.log(usn);
		console.log(pwd);
	}
    
}