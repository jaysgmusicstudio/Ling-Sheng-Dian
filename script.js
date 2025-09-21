document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.menu-toggle');
  if(toggle){
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
  const form = document.querySelector('#enquiry-form');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = encodeURIComponent(form.querySelector('[name=name]').value.trim());
      const email = encodeURIComponent(form.querySelector('[name=email]').value.trim());
      const phone = encodeURIComponent(form.querySelector('[name=phone]').value.trim());
      const msg = encodeURIComponent(form.querySelector('[name=message]').value.trim());
      const subject = `Enquiry from Website - ${name || "No Name"}`;
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${msg}`;
      const mailto = `mailto:lingshengdian@hotmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.location.href = mailto;
    });
  }
});
