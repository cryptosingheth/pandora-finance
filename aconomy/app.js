'use strict';

const menu_btn = document.getElementById('menu-btn');
const navigation = document.getElementById('navigation');

menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('active');
  navigation.classList.toggle('active');
});

const join_now_mobile = document.getElementById('join-now-mobile');
const join_now_desktop = document.getElementById('join-now-desktop');
const join_now_loading = document.getElementById('join-now-loading');
const join_now_success = document.getElementById('join-now-success');
const join_now_error = document.getElementById('join-now-error');
const email = document.getElementById('email');
const success_message = document.getElementById('form-success-message');

function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const formHandler = async () => {
  join_now_error.classList.remove('active');
  join_now_loading.classList.add('active');

  const email_value = email.value;
  if (!email_value) {
    join_now_loading.classList.remove('active');
    join_now_error.classList.add('active');
    success_message.classList.add('active');
    success_message.textContent = 'Please enter an email address!';
  } else if (!validateEmail(email_value)) {
    join_now_loading.classList.remove('active');
    join_now_error.classList.add('active');
    success_message.classList.add('active');
    success_message.textContent = 'Please enter an valid email address!';
  } else {
    console.log(email_value);
    try {
      await fwcrm.identify(email_value);

      join_now_loading.classList.remove('active');
      join_now_success.classList.add('active');
      success_message.classList.add('active');
      success_message.textContent =
        '🎉 You have subscribed to our Newsletter 🎉';
    } catch (error) {
      join_now_loading.classList.remove('active');
      join_now_error.classList.add('active');
      success_message.classList.add('active');
      success_message.textContent = 'Please try again!';
    }
  }
};

join_now_mobile.addEventListener('click', (event) => {
  event.preventDefault();

  join_now_mobile.classList.remove('active');
  formHandler();
});

join_now_desktop.addEventListener('click', (event) => {
  event.preventDefault();

  join_now_desktop.classList.remove('active');
  formHandler();
});

join_now_error.addEventListener('click', (event) => {
  event.preventDefault();

  formHandler();
});

join_now_success.addEventListener('click', (event) => {
  event.preventDefault();
});
