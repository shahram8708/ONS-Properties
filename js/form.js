let lastSubmitTimestamp = 0;

export function sanitizeInput(input) {
  return String(input || '').replace(/[<>"'&]/g, '').trim();
}

export function validateName(name) {
  const clean = sanitizeInput(name);
  return clean.length >= 2 && !/\d/.test(clean);
}

export function validatePhone(phone) {
  const clean = sanitizeInput(phone);
  return /^[6-9]\d{9}$/.test(clean);
}

export function validateEmail(email) {
  const clean = sanitizeInput(email);
  if (!clean) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean);
}

export function validateMessage(msg) {
  const clean = sanitizeInput(msg);
  return clean.length >= 10;
}

export function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(`${inputId}-error`);
  if (!input || !error) return;
  input.classList.add('is-invalid');
  error.textContent = message;
}

export function clearError(inputId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(`${inputId}-error`);
  if (!input || !error) return;
  input.classList.remove('is-invalid');
  error.textContent = '';
}

function isRateLimited() {
  const now = Date.now();
  const elapsed = now - lastSubmitTimestamp;
  return elapsed < 30000;
}

function buildSuccessIcon() {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m5.2 7.6-5.8 6.5a1 1 0 0 1-1.45.05l-3.15-3.15 1.4-1.4 2.4 2.39 5.06-5.67Z');
  svg.appendChild(path);
  return svg;
}

function setSuccessState(form, successEl) {
  form.classList.add('d-none');
  successEl.classList.add('visible');
  successEl.innerHTML = '';
  successEl.appendChild(buildSuccessIcon());
  const textWrap = document.createElement('div');
  const strong = document.createElement('strong');
  strong.textContent = 'Enquiry sent successfully.';
  const p = document.createElement('p');
  p.className = 'mb-0';
  p.textContent = 'Our Ahmedabad advisory team will call you shortly.';
  textWrap.appendChild(strong);
  textWrap.appendChild(p);
  successEl.appendChild(textWrap);
}

function clearValidation(form) {
  const fields = form.querySelectorAll('input, textarea, select');
  fields.forEach((field) => {
    const id = field.id;
    if (id) {
      clearError(id);
    }
  });
}

function attachFormHandler(form) {
  const successEl = form.parentElement.querySelector('.success-message');
  if (!successEl) return;

  const submitButton = form.querySelector('button[type="submit"]');
  if (!submitButton) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    clearValidation(form);

    const honeypot = form.querySelector('#website_url');
    if (honeypot && sanitizeInput(honeypot.value)) {
      return;
    }

    if (isRateLimited()) {
      const rateLimitEl = form.querySelector('.rate-limit-message');
      if (rateLimitEl) {
        rateLimitEl.textContent = 'Please wait 30 seconds before submitting again.';
      }
      submitButton.disabled = false;
      return;
    }

    const nameField = form.querySelector('#full_name');
    const phoneField = form.querySelector('#phone');
    const emailField = form.querySelector('#email');
    const messageField = form.querySelector('#message');

    const name = sanitizeInput(nameField ? nameField.value : '');
    const phone = sanitizeInput(phoneField ? phoneField.value : '');
    const email = sanitizeInput(emailField ? emailField.value : '');
    const message = sanitizeInput(messageField ? messageField.value : '');

    let isValid = true;

    if (!validateName(name)) {
      showError('full_name', 'Please enter your full name with at least 2 letters and no digits.');
      isValid = false;
    }

    if (!validatePhone(phone)) {
      showError('phone', 'Please enter a valid 10 digit Indian phone number.');
      isValid = false;
    }

    if (!validateEmail(email)) {
      showError('email', 'Please enter a valid email address or keep it blank.');
      isValid = false;
    }

    if (!validateMessage(message)) {
      showError('message', 'Please describe your requirement in at least 10 characters.');
      isValid = false;
    }

    if (!isValid) {
      submitButton.disabled = false;
      return;
    }

    const sanitizedPayload = {
      fullName: name,
      phone,
      email,
      propertyType: sanitizeInput((form.querySelector('#property_type') || {}).value || ''),
      preferredLocation: sanitizeInput((form.querySelector('#preferred_location') || {}).value || ''),
      message
    };

    if (sanitizedPayload.fullName.length > 0) {
      lastSubmitTimestamp = Date.now();
      setTimeout(() => {
        setSuccessState(form, successEl);
      }, 500);
    } else {
      submitButton.disabled = false;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.js-enquiry-form');
  forms.forEach((form) => attachFormHandler(form));
});
