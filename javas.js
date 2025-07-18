document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  // Email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '' || email === '' || message === '') {
    formMessage.textContent = 'All fields are required!';
    formMessage.style.color = 'red';
  } else if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address!';
    formMessage.style.color = 'red';
  } else {
    formMessage.textContent = 'Form submitted successfully!';
    formMessage.style.color = 'green';
    document.getElementById('contactForm').reset();
  }
});