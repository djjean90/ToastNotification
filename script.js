const button = document.querySelector('#button');
const toasts = document.querySelector('#toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

const types = ['info', 'success', 'error'];

const pushup = (message = null, type = null) => {
  console.log(messages[Math.floor(Math.random() * messages.length)]);
  const msg = document.createElement('div');
  msg.classList.add('toast');
  msg.classList.add(
    type ? type : types[Math.floor(Math.random() * types.length)]
  );
  msg.innerText = message
    ? message
    : messages[Math.floor(Math.random() * messages.length)];
  toasts.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 3000);

  const msg2 = 1 == 2 ? 'yes' : 'no';
  console.log(msg2);
};

button.addEventListener('click', () => pushup());
