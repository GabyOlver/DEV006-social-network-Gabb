function login(navigateTo) {
  const section = document.createElement('section');
  const containerLogin = document.createElement('div');
  const containerTitle = document.createElement('div');
  const containerbtnsLogin = document.createElement('div');
  const title = document.createElement('h2');
  const imgLogin = document.createElement('img');
  const buttonReturn = document.createElement('img');
  const form = document.createElement('form');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const btnSignIn = document.createElement('button');
  const forgotPassword = document.createElement('button');
  const loginWith = document.createElement('p');
  const loginGoogle = document.createElement('img');
  const loginFb = document.createElement('img');
  const loginGit = document.createElement('img');
  const viewPassword = document.createElement('img');
  const viewAndPassword = document.createElement('span');

  form.id = 'form-login';
  emailInput.id = 'email-input';
  passwordInput.id = 'password-input';
  btnSignIn.id = 'btn-signin';

  viewAndPassword.classList.add('span-password');
  containerLogin.classList.add('container-login');
  containerTitle.classList.add('container-title');
  containerbtnsLogin.classList.add('container-btns-login');
  form.classList.add('form-login');
  title.classList.add('title-login');
  imgLogin.classList.add('img-login');
  emailInput.classList.add('email-input');
  passwordInput.classList.add('password-input');
  btnSignIn.classList.add('btn-signin');
  forgotPassword.classList.add('forgot-password');
  loginWith.classList.add('login-with');
  loginGoogle.classList.add('login-google');
  loginFb.classList.add('login-fb');
  loginGit.classList.add('login-git');
  buttonReturn.classList.add('button-return');
  // viewPassword.classList.add('view-password');

  title.textContent = 'Estamos Perdid@s!!!!';
  btnSignIn.textContent = 'Ingresar';
  forgotPassword.textContent = 'Olvidé mi contraseña';
  loginWith.textContent = 'O ingresa con:';

  forgotPassword.classList.add('btn-forgot');
  forgotPassword.addEventListener('click', () => {
    navigateTo('/forgotPassword');
  });

  // btnSignIn.addEventListener('click', () => {
  //   navigateTo('/posts');
  // });

  imgLogin.src = ('img/huellaIcono.png');
  imgLogin.alt = 'Imagen huella';

  loginGoogle.src = ('img/google.webp');
  loginGoogle.alt = 'Imagen google';
  loginGoogle.addEventListener('click', () => {
    navigateTo('/posts');
  });

  loginFb.src = ('img/fb.png');
  loginFb.alt = 'Imagen fb';
  loginFb.addEventListener('click', () => {
    navigateTo('/posts');
  });

  loginGit.src = ('img/github.png');
  loginGit.alt = 'Imagen github';
  loginGit.addEventListener('click', () => {
    navigateTo('/posts');
  });

  buttonReturn.src = ('img/back.png');
  buttonReturn.alt = 'Imagen regresar';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  viewPassword.src = ('img/ver.png');
  viewPassword.alt = 'Imagen ver password';

  emailInput.placeholder = 'Email:';
  emailInput.setAttribute('required', 'true');
  passwordInput.placeholder = 'Contraseña:';
  passwordInput.type = 'password';
  passwordInput.setAttribute('required', 'true');

  // viewAndPassword.appendChild(passwordInput);
  // viewAndPassword.appendChild(viewPassword);
  containerTitle.append(title, imgLogin);
  form.append(emailInput, passwordInput, forgotPassword, btnSignIn);
  containerbtnsLogin.append(loginGoogle, loginFb, loginGit);
  containerLogin.append(buttonReturn, containerTitle, form, loginWith, containerbtnsLogin);
  section.appendChild(containerLogin);

  return section;
}

export default login;
