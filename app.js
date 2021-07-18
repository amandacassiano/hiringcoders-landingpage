function verifica() {
  let email = document.querySelector('.digite').value;

    if (email == null || email == "") return
  
  if (localStorage.getItem(email)) {
    alert("E-mail já cadastrado!");
} else {
    localStorage.setItem(email, "gravado");
    alert("Cadastro realizado com sucesso!")
}
}