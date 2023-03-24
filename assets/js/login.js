const form = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === 'ska.milla@hotmail.com' && password.value === 'alucard12', 
  email.value === 'jose.escamilla@vantiva.net' && password.value === '1234') {
    alert('Acceso Correcto');
  } else {
    alert('Invalid email or password');
  }
});
