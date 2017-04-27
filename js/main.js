function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];


	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "correo Electrónico";
	password.placeholder = "contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML =  "Iinicar Sesión"; 

}

translate();

function datos(){
	var infoMail = document.getElementById('inputEmail').value;
	var infoPass = document.getElementById('inputPassword').value;

	document.getElementById('mail').innerHTML = "<h3> Datos Correo </h3>" + infoMail + "<br>";
	document.getElementById('pass').innerHTML = "<h3> Datos Contraseña </h3>" + infoPass;


	
}


