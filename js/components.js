const fallbackComponents = {
  'components/navbar.html': `
<a href="#main-content" class="skip-link">Skip to main content</a>
<nav id="main-navbar" class="navbar navbar-expand-lg navbar-dark sticky-top py-3" role="navigation" aria-label="Main Navigation">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-2" href="index.html" aria-label="ONS Properties Home">
      <img src="img/logo.png" alt="ONS Properties logo" class="brand-logo-square" width="44" height="44" loading="eager" />
      <span class="brand-properties">ONS PROPERTIES</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#onsNavbar"
      aria-controls="onsNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="onsNavbar">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="properties.html">Properties</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
      </ul>
      <a href="tel:+919067006700" class="btn btn-gold d-none d-lg-inline-flex align-items-center">📞 Call: 9067006700</a>
    </div>
  </div>
</nav>`,
  'components/footer.html': `
<footer class="footer-main pt-5 pb-3" role="contentinfo">
  <div class="container">
    <div class="row g-4">
      <div class="col-12 col-sm-6 col-lg-3">
        <a href="index.html" class="d-inline-block mb-3" aria-label="ONS Properties Home"><img src="img/logo.png" alt="ONS Properties logo" class="footer-logo" width="220" height="88" loading="lazy" /></a>
        <p class="text-muted-soft mb-3">Your property search ends here.</p>
        <a href="https://wa.me/919067006700?text=Hello%2C%20I%20am%20interested%20in%20a%20property%20inquiry" target="_blank" rel="noopener noreferrer" class="d-inline-block mb-2">💬 WhatsApp Us</a><br />
        <a href="tel:+919067006700" class="d-inline-block">📞 +91 9067006700</a>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <h3 class="h6 text-white mb-3">Quick Links</h3>
        <ul class="list-unstyled text-muted-soft m-0">
          <li class="mb-2"><a href="index.html">Home</a></li><li class="mb-2"><a href="about.html">About</a></li><li class="mb-2"><a href="services.html">Services</a></li><li class="mb-2"><a href="properties.html">Properties</a></li><li class="mb-2"><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <h3 class="h6 text-white mb-3">Our Services</h3>
        <ul class="list-unstyled text-muted-soft m-0">
          <li class="mb-2"><a href="services.html">Property Buying</a></li><li class="mb-2"><a href="services.html">Property Selling</a></li><li class="mb-2"><a href="services.html">Rental Services</a></li><li class="mb-2"><a href="services.html">Investment Consultancy</a></li><li class="mb-2"><a href="services.html">Commercial Properties</a></li><li class="mb-2"><a href="services.html">Residential Properties</a></li>
        </ul>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <h3 class="h6 text-white mb-3">Contact</h3>
        <p class="text-muted-soft mb-2">ONS Properties<br />Ahmedabad, Gujarat, India</p>
        <p class="text-muted-soft mb-2"><a href="tel:+919067006700">+91 9067006700</a></p>
        <p class="text-muted-soft mb-2"><a href="https://wa.me/919067006700?text=Hello%2C%20I%20am%20interested%20in%20a%20property%20inquiry" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
        <p class="text-muted-soft mb-0">Mon to Sat 9AM to 7PM<br />Sun 10AM to 4PM</p>
      </div>
    </div>
    <hr class="my-4 border-light opacity-25" />
    <div class="d-flex justify-content-between gap-2 flex-wrap"><p class="text-muted-soft m-0">© 2026 ONS Properties. All rights reserved.</p></div>
  </div>
</footer>`,
  'components/whatsapp-btn.html': `
<a class="whatsapp-float" href="https://wa.me/919067006700?text=Hello%2C%20I%20am%20interested%20in%20a%20property%20inquiry" target="_blank" rel="noopener noreferrer" role="button" aria-label="Chat on WhatsApp" tabindex="0">
  <span class="whatsapp-tooltip">Chat with us on WhatsApp</span>
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M19.11 17.03c-.27-.14-1.58-.78-1.83-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.33-1.57-1.49-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.45-.6-.45h-.52c-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.25 0 1.33.96 2.61 1.1 2.79.13.18 1.88 2.87 4.55 4.03.64.28 1.14.45 1.53.57.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.81-1.28.22-.63.22-1.17.16-1.28-.07-.11-.24-.18-.51-.32"></path></svg>
</a>`
};

export async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res = await fetch(path);
    if (!res.ok) {
      throw new Error(`Unable to load ${path}`);
    }
    const html = await res.text();
    el.innerHTML = html;
  } catch (error) {
    console.error(error);
    if (fallbackComponents[path]) {
      el.innerHTML = fallbackComponents[path];
    }
  }
}

function getCurrentPage() {
  const pathname = window.location.pathname;
  const lastSegment = pathname.split('/').pop();
  return lastSegment || 'index.html';
}

export function setActiveNavLink() {
  const currentPage = getCurrentPage();
  const links = document.querySelectorAll('#main-navbar .nav-link');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    const isActive = href === currentPage || (currentPage === '' && href === 'index.html');
    if (isActive) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

function bindMobileClose() {
  const navCollapse = document.getElementById('onsNavbar');
  if (!navCollapse) return;

  const collapse = bootstrap.Collapse.getOrCreateInstance(navCollapse, { toggle: false });
  navCollapse.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        collapse.hide();
      }
    });
  });
}

function bindNavbarScrollShadow() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll);
}

async function initComponents() {
  await Promise.all([
    loadComponent('navbar-placeholder', 'components/navbar.html'),
    loadComponent('footer-placeholder', 'components/footer.html'),
    loadComponent('whatsapp-placeholder', 'components/whatsapp-btn.html')
  ]);

  setActiveNavLink();
  bindMobileClose();
  bindNavbarScrollShadow();
  document.dispatchEvent(new Event('componentsLoaded'));
}

document.addEventListener('DOMContentLoaded', initComponents);
