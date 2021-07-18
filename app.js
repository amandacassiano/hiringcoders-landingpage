function verifica() {
    if (document.forms[0].email.value.length == 0) {
      alert('Por favor, informe o seu EMAIL.');
      document.formEnvia.email.focus();
      return false;
    }
    return true;
  }
   
  function checarEmail(){
  if( document.forms[0].email.value=="" );
      {
         alert( "Por favor, informe um E-MAIL válido!" );
         return false;
      }
  }