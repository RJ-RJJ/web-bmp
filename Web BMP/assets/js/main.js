(function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());

  // Basic client-side handler for contact form (no backend)
  // Note: Ini masih uji coba dan belum diterapkan
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      const name = data.get('name');
      const email = data.get('email');
      const subject = data.get('subject') || 'Pertanyaan';
      const message = data.get('message');
      alert('Terima kasih, ' + name + '!\n' +
            'Subjek: ' + subject + '\n' +
            'Pesan Anda telah diterima. Kami akan menghubungi ke ' + email + '.\n\n' +
            'Note: Ini masih uji coba dan belum diterapkan.');
      form.reset();
    });
  }

  // Generic "work-in-progress" handler
  function ensureUiElements() {
    if (!document.getElementById('global-modal')) {
      const backdrop = document.createElement('div');
      backdrop.id = 'global-modal';
      backdrop.className = 'modal-backdrop';
      backdrop.innerHTML = '<div class="modal"><h3>Fitur Dalam Pengembangan</h3><p>Terima kasih atas ketertarikan Anda. Fitur ini masih dalam proses pengembangan.</p><div class="actions"><button class="btn btn-outline" id="modal-close">Tutup</button></div></div>';
      document.body.appendChild(backdrop);
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop || e.target.id === 'modal-close') {
          backdrop.classList.remove('open');
        }
      });
    }
    if (!document.getElementById('global-toast')) {
      const toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'toast';
      toast.textContent = 'Fitur masih dikerjakan';
      document.body.appendChild(toast);
    }
  }

  ensureUiElements();

  function showModal() {
    document.getElementById('global-modal').classList.add('open');
  }
  function showToast() {
    const t = document.getElementById('global-toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
  }

  // Attach WIP handlers to any element with data-wip
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-wip]');
    if (target) {
      e.preventDefault();
      const type = target.getAttribute('data-wip');
      if (type === 'modal') showModal();
      else showToast();
    }
  });
})();


