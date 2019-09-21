var pickOne = function(array) {
  return array[Math.round(Math.random() * (array.length - 1))]
};

var password = new function() {
  var chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  chars += chars.toUpperCase()
  chars += '0123456789';

  this.create = function() {
    var password = ''
    for (var i = 16; i; i--) password += pickOne(chars)
    return password
  }
};

var passwordsEl = document.querySelector('.passwords');
for (var i = 0; i < 500; i++) {
  passwordsEl.appendChild((function() {
    var el = document.createElement('div');
    el.textContent = ' ' + password.create() + ' ';
    el.classList.add('passwords__password');
    return el;
  })());
};
