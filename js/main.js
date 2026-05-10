import { getFaqs, getProperties, getServices, getTestimonials } from './data.js';

function createSvgIcon(name) {
  const paths = {
    location: 'M12 2a7 7 0 0 0-7 7c0 4.93 7 13 7 13s7-8.07 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5',
    star: 'm12 1.8 3.18 6.44 7.1 1.03-5.14 5.01 1.21 7.08L12 17.98l-6.35 3.34 1.21-7.08L1.72 9.27l7.1-1.03L12 1.8',
    home: 'M12 3 3 10h2v10h5v-6h4v6h5V10h2L12 3',
    tag: 'M20 10 10 20 3 13 13 3h7v7m-4-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3',
    key: 'M7 14a5 5 0 1 1 4.9 6H10v2H8v-2H6v-2h2.1A5 5 0 0 1 7 14m10-1h5v2h-1v2h-2v-2h-2v-2',
    chart: 'M4 20h16v2H2V4h2v16m3-2V9h3v9H7m5 0V5h3v13h-3m5 0v-7h3v7h-3',
    building: 'M3 21V3h8v4h10v14H3m4-2h2v-2H7v2m0-4h2v-2H7v2m0-4h2V9H7v2m6 8h2v-2h-2v2m0-4h2v-2h-2v2m0-4h2V9h-2v2',
    family: 'M10 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6m7 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M2 20a6 6 0 0 1 12 0H2m11 0a5 5 0 0 1 10 0h-2a3 3 0 0 0-6 0h-2'
  };

  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', paths[name] || paths.home);
  svg.appendChild(path);
  return svg;
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function setupNavScrollListener() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;
  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

function animateCounter(counterEl) {
  const target = Number(counterEl.dataset.target || '0');
  const suffix = counterEl.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    counterEl.textContent = `${value}${suffix}`;
    counterEl.style.animation = 'countUp 0.5s ease';
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function createPropertyCard(property) {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-lg-4 reveal-on-scroll';

  const card = document.createElement('article');
  card.className = 'property-card h-100';
  card.setAttribute('role', 'article');
  card.setAttribute('aria-label', `Property: ${property.title}`);

  const badgeClass = property.badge_color === 'gold' ? 'badge-featured' : property.badge_color === 'red' ? 'badge-hot' : 'badge-available';

  const imgWrap = document.createElement('div');
  imgWrap.className = 'property-img-wrap';

  const badge = document.createElement('span');
  badge.className = `property-badge ${badgeClass}`;
  badge.textContent = property.badge;

  const typeBadge = document.createElement('span');
  typeBadge.className = 'type-badge';
  typeBadge.textContent = property.type;

  const image = document.createElement('img');
  image.src = property.image;
  image.alt = `${property.type} ${property.location} Ahmedabad`;
  image.loading = 'lazy';

  imgWrap.appendChild(badge);
  imgWrap.appendChild(typeBadge);
  imgWrap.appendChild(image);

  const body = document.createElement('div');
  body.className = 'p-3';

  const title = document.createElement('h3');
  title.className = 'h5 property-title';
  title.textContent = property.title;

  const loc = document.createElement('p');
  loc.className = 'property-meta';
  loc.appendChild(createSvgIcon('location'));
  loc.append(document.createTextNode(property.location));

  const price = document.createElement('p');
  price.className = 'property-price';
  price.textContent = property.price_display;

  const compact = document.createElement('p');
  compact.className = 'property-compact';
  const bhkText = property.bhk || 'Commercial/Plot';
  compact.textContent = `${bhkText} | ${property.size}`;

  const actions = document.createElement('div');
  actions.className = 'd-flex gap-2 flex-wrap';

  const details = document.createElement('a');
  details.className = 'btn btn-gold btn-sm';
  details.href = 'properties.html';
  details.textContent = 'View Details';

  const wa = document.createElement('a');
  wa.className = 'btn btn-outline-gold btn-sm';
  wa.href = `https://wa.me/919067006700?text=${encodeURIComponent(property.whatsapp_text)}`;
  wa.target = '_blank';
  wa.rel = 'noopener noreferrer';
  wa.textContent = 'WhatsApp Enquiry';

  actions.appendChild(details);
  actions.appendChild(wa);

  body.appendChild(title);
  body.appendChild(loc);
  body.appendChild(price);
  body.appendChild(compact);
  body.appendChild(actions);

  card.appendChild(imgWrap);
  card.appendChild(body);
  col.appendChild(card);
  return col;
}

async function renderFeaturedProperties() {
  const container = document.getElementById('featured-properties-grid');
  if (!container) return;

  const properties = await getProperties();
  const featured = properties.slice(0, 6);
  container.innerHTML = '';
  featured.forEach((property) => container.appendChild(createPropertyCard(property)));
}

function createServiceCard(service, withLongDescription = false) {
  const col = document.createElement('div');
  col.className = withLongDescription ? 'col-12 col-md-6 col-lg-4 reveal-on-scroll' : 'col-12 col-md-6 col-lg-4 reveal-on-scroll';

  const card = document.createElement('article');
  card.className = 'service-card hover-lift';

  const iconWrap = document.createElement('div');
  iconWrap.className = 'icon-badge';
  iconWrap.appendChild(createSvgIcon(service.icon));

  const title = document.createElement('h3');
  title.className = 'h5';
  title.textContent = service.title;

  const desc = document.createElement('p');
  desc.textContent = withLongDescription ? service.full_desc : service.short_desc;

  card.appendChild(iconWrap);
  card.appendChild(title);
  card.appendChild(desc);

  if (withLongDescription) {
    const btn = document.createElement('a');
    btn.className = 'btn btn-gold btn-sm';
    btn.textContent = service.cta_text;
    btn.href = `https://wa.me/919067006700?text=${encodeURIComponent(`I need help with ${service.title}. Please get in touch.`)}`;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    card.appendChild(btn);
  }

  col.appendChild(card);
  return col;
}

async function renderServices() {
  const homeContainer = document.getElementById('home-services-grid');
  const servicesContainer = document.getElementById('services-grid');
  if (!homeContainer && !servicesContainer) return;

  const services = await getServices();
  if (homeContainer) {
    homeContainer.innerHTML = '';
    services.forEach((service) => homeContainer.appendChild(createServiceCard(service)));
  }

  if (servicesContainer) {
    servicesContainer.innerHTML = '';
    services.forEach((service) => servicesContainer.appendChild(createServiceCard(service, true)));
  }
}

function createTestimonialSlide(testimonial, isActive) {
  const item = document.createElement('div');
  item.className = `carousel-item ${isActive ? 'active' : ''}`;

  const box = document.createElement('article');
  box.className = 'testimonial-box reveal-on-scroll';

  const avatar = document.createElement('div');
  avatar.className = 'testimonial-avatar';
  avatar.textContent = testimonial.initials;

  const stars = document.createElement('div');
  stars.className = 'stars d-flex justify-content-center gap-1';
  for (let i = 0; i < testimonial.rating; i += 1) {
    stars.appendChild(createSvgIcon('star'));
  }

  const quote = document.createElement('p');
  quote.className = 'quote';
  quote.textContent = `“${testimonial.quote}”`;

  const name = document.createElement('h3');
  name.className = 'h5 mb-1';
  name.textContent = testimonial.name;

  const meta = document.createElement('p');
  meta.className = 'text-muted mb-0';
  meta.textContent = `${testimonial.location} | ${testimonial.date}`;

  box.appendChild(avatar);
  box.appendChild(stars);
  box.appendChild(quote);
  box.appendChild(name);
  box.appendChild(meta);
  item.appendChild(box);
  return item;
}

async function renderTestimonials() {
  const container = document.getElementById('testimonial-carousel-inner');
  if (!container) return;

  const testimonials = await getTestimonials();
  container.innerHTML = '';
  testimonials.forEach((t, index) => container.appendChild(createTestimonialSlide(t, index === 0)));

  const carouselEl = document.getElementById('testimonialsCarousel');
  if (carouselEl) {
    bootstrap.Carousel.getOrCreateInstance(carouselEl, {
      interval: 5000,
      ride: 'carousel'
    });
  }
}

async function renderFaqs() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  const faqs = await getFaqs();
  container.innerHTML = '';

  faqs.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';

    const h2 = document.createElement('h3');
    h2.className = 'accordion-header';
    h2.id = `faq-heading-${faq.id}`;

    const button = document.createElement('button');
    button.className = `accordion-button ${index !== 0 ? 'collapsed' : ''}`;
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', `#faq-collapse-${faq.id}`);
    button.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');
    button.setAttribute('aria-controls', `faq-collapse-${faq.id}`);
    button.textContent = faq.question;

    const collapse = document.createElement('div');
    collapse.id = `faq-collapse-${faq.id}`;
    collapse.className = `accordion-collapse collapse ${index === 0 ? 'show' : ''}`;
    collapse.setAttribute('aria-labelledby', `faq-heading-${faq.id}`);
    collapse.setAttribute('data-bs-parent', '#faq-accordion');

    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.textContent = faq.answer;

    h2.appendChild(button);
    collapse.appendChild(body);
    item.appendChild(h2);
    item.appendChild(collapse);
    container.appendChild(item);
  });
}

async function initPageData() {
  await Promise.all([renderFeaturedProperties(), renderServices(), renderTestimonials(), renderFaqs()]);
}

document.addEventListener('DOMContentLoaded', () => {
  setupSmoothScroll();
  setupNavScrollListener();
  initStatsCounter();
  initPageData();
});

document.addEventListener('componentsLoaded', () => {
  setupNavScrollListener();
});
