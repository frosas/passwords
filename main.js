const AVAILABLE_CHARS = (() => {
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  return lowerCaseChars + lowerCaseChars.toUpperCase() + '0123456789';
})();

const pickOne = array => array[Math.round(Math.random() * (array.length - 1))];

const createPassword = () => [...Array(16)].map(() => pickOne(AVAILABLE_CHARS)).join('');

var passwordsEl = document.querySelector('.passwords');
[...Array(500)].forEach(() => {
  passwordsEl.appendChild(
    Object.assign(document.createElement('div'), {
      textContent: createPassword(),
      className: 'passwords__password'
    })
  )
});