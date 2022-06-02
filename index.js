let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let error = document.getElementById('error');

function validateForm() {
  if (email == '') {
    // alert('Preencha o email');
    error.classList('true');
    return false;
  }
  if (password == '') {
    alert('Preencha a senha');
    return false;
  }

  alert('Login efetuado com sucesso');
}