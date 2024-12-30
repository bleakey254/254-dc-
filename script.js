// Function to show the payment form and prefill the event name
function showPaymentForm(eventName) {
  const paymentSection = document.getElementById('payment');
  const eventInput = document.getElementById('event');
  
  paymentSection.classList.remove('hidden');
  eventInput.value = eventName;

  // Smooth scroll to the payment section
  paymentSection.scrollIntoView({ behavior: 'smooth' });
}

// Add validation to the payment form
document.getElementById('payment-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const amount = document.getElementById('amount').value.trim();

  if (!name || !phone || !amount || amount <= 0) {
      alert('Please fill out all fields with valid information.');
      return;
  }

  alert(`Payment of KES ${amount} for ${document.getElementById('event').value} is being processed. Thank you, ${name}!`);
  this.reset();
  document.getElementById('payment').classList.add('hidden');
});

// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form submission handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!email || !message) {
      alert('Please fill out all fields.');
      return;
  }

  alert('Thank you for reaching out! We will get back to you soon.');
  this.reset();
});

// Payment form script
function showPaymentForm(eventName) {
  document.getElementById('payment').classList.remove('hidden');
  document.getElementById('event').value = eventName;
}

document.getElementById('payment-form').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form from reloading the page
  const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      event: document.getElementById('event').value,
      amount: document.getElementById('amount').value,
  };

  try {
      const response = await fetch('http://localhost:5000/api/payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
          alert('Payment successful! Thank you.');
          document.getElementById('payment-form').reset();
          document.getElementById('payment').classList.add('hidden');
      } else {
          alert(`Error: ${result.message}`);
      }
  } catch (error) {
      alert('An error occurred. Please try again.');
      console.error(error);
  }
});
document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('message').value.trim(),
  };

  try {
      const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);

      if (response.ok) this.reset();
  } catch (error) {
      alert('An error occurred. Please try again.');
  }
});
