function contactarJardin (numero,nombre,contacto){
	var texto = 'Para Contactar a: ' + nombre + ' - Llame a: ' + contacto + ' - Hackathon';
	var texto_formateado = texto.replace(" ", "_");
	//var urlSMS = 'http://fabianportatil/DotNet/proxy.ashx?http://200.31.80.34/Bolsa_Mensajes/AgroNet/CGI/ReceiverSMSFormulario.php?to=85050&operador=3&mensaje=' + texto_formateado + '&movil=' + numero + '&idmessage=11111111&concat=0';
	//var urlSMS = 'http://twimlets.com/echo?Twiml=%3CResponse%3E%3CSms%3EHello+Diego%2C+thanks+for+the+message%21%3C%2FSms%3E%3C%2FResponse%3E';
	var urlSMS = 'http://172.18.2.204:8084/JServices/sms';
	var respuesta = $.get(urlSMS,function(data,status){
		alert("Mensaje enviado!");
	});

	return respuesta;
}