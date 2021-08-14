function OnClickLogin() {
	var loginRole = -1;
	var account;

	var usn = document.getElementById("usn").value;
	var pwd = document.getElementById("pwd").value;
	
	for(var i = 0 ; i < accounts.length; i++){
		if(accounts[i].usn == usn && accounts[i].pwd == pwd){
			loginRole = accounts[i].role;
			account = accounts[i];
		}
	}
	sessionStorage.setItem("account", account);

	if(loginRole == 0){
		window.location.href = "admin.php";
	}
	else if (loginRole == 1) {
		window.location.href = "index.php";
	} else {
		alert("Wrong password or username");
	}

	
}