/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export const signInFn = (navigateTo) => {
  const signinForm = document.querySelector('#form-login');
  console.log(signinForm);

  const email = signinForm['email-input'].value;
  const password = signinForm['password-input'].value;
  console.log(email, password);

  signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
      navigateTo('/posts');
    })
    .catch((error) => {
      console.log(error);
      alert('Algo salió mal, verifica tus datos');
    });
};

// export const signInFn = async (navigateTo) => {
//   // const signinForm = document.getElementById('form-login');
//   const signinForm = document.querySelector('#form-login');
//   console.log(signinForm);

//   const email = signinForm['email-input'].value;
//   const password = signinForm['password-input'].value;
//   console.log(email, password);

//   try {
//     const credentials = await signInWithEmailAndPassword(auth, email, password);
//     // console.log(credentials);
//     navigateTo('/posts');
//   } catch (error) {
//     if (error) {
//       console.log(error);
//       alert('Algo salió mal, verifica tus datos');
//     }
//   }
// };
