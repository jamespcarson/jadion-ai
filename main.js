/* ============================================================
   Jadion.AI — main.js
   ============================================================ */

/**
 * Waitlist form submission.
 * TODO: Replace the client-side success state with a real
 * form backend (Formspree, Airtable, etc.) before going live.
 */
function handleSubmit() {
  var input = document.getElementById('email-input');
  var val = input ? input.value : '';

  if (!val || !val.includes('@')) {
    input.style.borderColor = 'rgba(255,255,255,0.7)';
    setTimeout(function () {
      input.style.borderColor = 'rgba(255,255,255,0.25)';
    }, 800);
    return;
  }

  document.getElementById('form-wrap').style.display = 'none';
  document.getElementById('success-msg').style.display = 'block';
}


/**
 * Scroll-reveal observer.
 * Adds .visible to any element with .reveal once it enters the viewport.
 */
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();
