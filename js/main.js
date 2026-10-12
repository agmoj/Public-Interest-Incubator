// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Until a real form endpoint is configured (see README), show a notice instead of submitting.
  var form = document.querySelector('form[data-apply-form]');
  if (form && form.action.indexOf('YOUR_FORM_ID') !== -1) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var notice = document.getElementById('form-notice');
      notice.hidden = false;
      notice.textContent = 'This form is not connected yet. Set up a form service (see README.md) to start receiving applications.';
    });
  }
});
