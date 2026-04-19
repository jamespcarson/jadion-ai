/* ============================================================
   Jadion.AI — main.js
   ============================================================ */

async function handleSubmit() {
  var input = document.getElementById('email-input');
  var btn = document.querySelector('.waitlist-btn');
  var val = input ? input.value.trim() : '';

  if (!val || !val.includes('@')) {
    input.style.borderColor = 'rgba(255,255,255,0.7)';
    setTimeout(function () {
      input.style.borderColor = 'rgba(255,255,255,0.25)';
    }, 800);
    return;
  }

  if (btn) {
    btn.textContent = 'Submitting...';
    btn.disabled = true;
  }

  try {
    var response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: val }),
    });

    if (response.ok) {
      document.getElementById('form-wrap').style.display = 'none';
      document.getElementById('success-msg').style.display = 'block';
    } else {
      throw new Error('Submission failed');
    }
  } catch (err) {
    if (btn) {
      btn.textContent = 'Request Access';
      btn.disabled = false;
    }
    input.style.borderColor = 'rgba(255,255,255,0.7)';
    setTimeout(function () {
      input.style.borderColor = 'rgba(255,255,255,0.25)';
    }, 800);
  }
}

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
