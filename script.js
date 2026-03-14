const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}

const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuButton && mainNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  const feedback = contactForm.querySelector('.form-feedback');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!(contactForm instanceof HTMLFormElement)) {
      return;
    }

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !phone || !message) {
      if (feedback) {
        feedback.textContent = 'Por favor completá todos los campos.';
      }
      return;
    }

    if (feedback) {
      feedback.textContent = '¡Gracias! Te responderemos a la brevedad.';
    }

    contactForm.reset();
  });
}
