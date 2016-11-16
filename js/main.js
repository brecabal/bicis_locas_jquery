function validateForm(){
	
	// form
	var ingresoName = $('#name').val();
	var ingresoLastname = $('#lastname').val();
	var correctEmail = $('#input-email').val();
	var passCorrect = $('#input-password').val();
	var selectBike = $('select').val();

	//valida name
	function name(){
		if (ingresoName==null || ingresoName.length==0) {
			$('.name-container').append('<span>Debes llenar el campo</span>');
			return false;
		}
		if (/[0-9]/.test(ingresoName)) {
			$('.name-container').append('<span>Completa el recuadro solo con letras</span>');
			return false;
		}
		if (!(/[A-Z]/.test(ingresoName.charAt(0)))){
			$('.name-container').append('<span>La primera letra debe ser mayuscula</span>');
			return false;
		}
	}

	//apellidos
	function apellido(){
		if (ingresoLastname==null || ingresoLastname.length==0) {
			$('.lastname-container').append('<span>Debes llenar el campo</span>');
			return false;
		}
		if (/[0-9]/.test(ingresoLastname)) {
			$('.lastname-container').append('<span>Completa el recuadro solo con letras</span>');
			return false;
		}
		if (!(/[A-Z]/.test(ingresoLastname.charAt(0)))){
			$('.lastname-container').append('<span>La primera letra debe ser mayuscula</span>');
			return false;
		}
	}

	//mail
	function mail(){
		if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correctEmail))) {
			$('.email-container').append('<span>Verifique su email</span>');
			return false;
		}
	}

	//password
	function password(){
		if (passCorrect.length<6 || passCorrect=="password" || passCorrect=='123456' || passCorrect=='098754'){
			$('.form-group:first').append('<span>La contraseña debe tener al menos 6 caracteres</span>');
			return false;
		}
	}

	//bike
	function bike(){
		if (selectBike==0){
			$('.form-group:eq(1)').append('<span>Debes elegir un tipo de bicicleta</span>');
			return false;
		}
	}

	name();
	apellido();
	mail();
	password();
	bike();

}