import { getProperties } from './data.js';

let propertiesData = [];
let filteredData = [];
let visibleCount = 6;
let gridElement = null;
let resultCountElement = null;

function createSvgIcon(name) {
  const paths = {
    location: 'M12 2a7 7 0 0 0-7 7c0 4.93 7 13 7 13s7-8.07 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5'
  };
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', paths[name]);
  svg.appendChild(path);
  return svg;
}

function getBadgeClass(color) {
  if (color === 'gold') return 'badge-featured';
  if (color === 'red') return 'badge-hot';
  return 'badge-available';
}

function createPropertyCard(property) {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-lg-4 reveal-on-scroll';

  const article = document.createElement('article');
  article.className = 'property-card h-100';
  article.setAttribute('role', 'article');
  article.setAttribute('aria-label', `Property: ${property.title}`);

  const imgWrap = document.createElement('div');
  imgWrap.className = 'property-img-wrap';

  const badge = document.createElement('span');
  badge.className = `property-badge ${getBadgeClass(property.badge_color)}`;
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

  const location = document.createElement('p');
  location.className = 'property-meta';
  location.appendChild(createSvgIcon('location'));
  location.append(document.createTextNode(property.location));

  const price = document.createElement('p');
  price.className = 'property-price';
  price.textContent = property.price_display;

  const compact = document.createElement('p');
  compact.className = 'property-compact';
  compact.textContent = `${property.bhk || 'Commercial/Plot'} | ${property.size}`;

  const actionWrap = document.createElement('div');
  actionWrap.className = 'd-flex flex-wrap gap-2';

  const detailsBtn = document.createElement('button');
  detailsBtn.type = 'button';
  detailsBtn.className = 'btn btn-gold btn-sm';
  detailsBtn.textContent = 'View Details';
  detailsBtn.setAttribute('data-property-id', property.id);
  detailsBtn.setAttribute('data-bs-toggle', 'modal');
  detailsBtn.setAttribute('data-bs-target', '#propertyDetailModal');
  detailsBtn.addEventListener('click', () => openPropertyModal(property.id));

  const waBtn = document.createElement('a');
  waBtn.className = 'btn btn-outline-gold btn-sm';
  waBtn.textContent = 'WhatsApp Enquiry';
  waBtn.target = '_blank';
  waBtn.rel = 'noopener noreferrer';
  waBtn.href = `https://wa.me/919067006700?text=${encodeURIComponent(`I am interested in ${property.title} (${property.id.toUpperCase()}). Please share more details.`)}`;

  actionWrap.appendChild(detailsBtn);
  actionWrap.appendChild(waBtn);

  body.appendChild(title);
  body.appendChild(location);
  body.appendChild(price);
  body.appendChild(compact);
  body.appendChild(actionWrap);

  article.appendChild(imgWrap);
  article.appendChild(body);
  col.appendChild(article);
  return col;
}

export function renderPropertyCards(data) {
  if (!gridElement) return;
  gridElement.innerHTML = '';

  data.forEach((property) => {
    const card = createPropertyCard(property);
    gridElement.appendChild(card);
  });

  document.dispatchEvent(new Event('propertiesRendered'));
}

function updateResultsCount(total, shown) {
  if (!resultCountElement) return;
  resultCountElement.textContent = `Showing ${shown} of ${total} properties`;
}

function updateLoadMoreButton() {
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (!loadMoreBtn) return;
  loadMoreBtn.classList.toggle('d-none', visibleCount >= filteredData.length);
}

function getBudgetRange(budget) {
  switch (budget) {
    case 'under50':
      return (price) => price < 5000000;
    case '50to75':
      return (price) => price >= 5000000 && price <= 7500000;
    case '75to1cr':
      return (price) => price > 7500000 && price <= 10000000;
    case 'above1cr':
      return (price) => price > 10000000;
    default:
      return () => true;
  }
}

export function filterProperties() {
  const type = (document.getElementById('filter-type') || {}).value || 'All';
  const bhk = (document.getElementById('filter-bhk') || {}).value || 'All';
  const location = (document.getElementById('filter-location') || {}).value || 'All';
  const budget = (document.getElementById('filter-budget') || {}).value || 'All';

  const budgetMatcher = getBudgetRange(budget);

  filteredData = propertiesData.filter((property) => {
    const typeMatch = type === 'All' || property.type === type;
    const bhkMatch = bhk === 'All' || property.bhk === bhk;
    const locationMatch = location === 'All' || property.area === location;
    const budgetMatch = budget === 'All' || budgetMatcher(property.price);

    return typeMatch && bhkMatch && locationMatch && budgetMatch;
  });

  visibleCount = Math.min(6, filteredData.length);
  const slice = filteredData.slice(0, visibleCount);
  renderPropertyCards(slice);
  updateResultsCount(filteredData.length, slice.length);
  updateLoadMoreButton();
}

export function openPropertyModal(propertyId) {
  const property = propertiesData.find((item) => item.id === propertyId);
  if (!property) return;

  const modalTitle = document.getElementById('modal-property-title');
  const modalImage = document.getElementById('modal-property-image');
  const modalType = document.getElementById('modal-property-type');
  const modalLocation = document.getElementById('modal-property-location');
  const modalPrice = document.getElementById('modal-property-price');
  const modalSize = document.getElementById('modal-property-size');
  const modalDescription = document.getElementById('modal-property-description');
  const modalFeatures = document.getElementById('modal-property-features');
  const modalWhatsapp = document.getElementById('modal-whatsapp-btn');

  if (!modalTitle || !modalImage || !modalType || !modalLocation || !modalPrice || !modalSize || !modalDescription || !modalFeatures || !modalWhatsapp) {
    return;
  }

  modalTitle.textContent = property.title;
  modalImage.src = property.image;
  modalImage.alt = `${property.type} ${property.location} Ahmedabad`;
  modalType.textContent = property.type;
  modalLocation.textContent = property.location;
  modalPrice.textContent = property.price_display;
  modalSize.textContent = `${property.bhk || 'Commercial/Plot'} | ${property.size}`;
  modalDescription.textContent = property.description;

  modalFeatures.innerHTML = '';
  property.features.forEach((feature) => {
    const span = document.createElement('span');
    span.className = 'modal-feature';
    span.textContent = feature;
    modalFeatures.appendChild(span);
  });

  modalWhatsapp.href = `https://wa.me/919067006700?text=${encodeURIComponent(`I am interested in ${property.title} (${property.id.toUpperCase()}). Please share more details.`)}`;
}

export function loadMoreProperties() {
  if (!filteredData.length) return;
  visibleCount = Math.min(visibleCount + 6, filteredData.length);
  const nextSet = filteredData.slice(0, visibleCount);
  renderPropertyCards(nextSet);
  updateResultsCount(filteredData.length, nextSet.length);
  updateLoadMoreButton();
}

export async function loadAndRenderProperties(containerId, limit = 6) {
  gridElement = document.getElementById(containerId);
  resultCountElement = document.getElementById('results-count');
  if (!gridElement) return;

  propertiesData = await getProperties();
  filteredData = [...propertiesData];
  visibleCount = Math.min(limit, filteredData.length);
  const initial = filteredData.slice(0, visibleCount);

  renderPropertyCards(initial);
  updateResultsCount(filteredData.length, initial.length);
  updateLoadMoreButton();
}

function bindFilterEvents() {
  const filterIds = ['filter-type', 'filter-bhk', 'filter-location', 'filter-budget'];
  filterIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('change', filterProperties);
  });

  const searchBtn = document.getElementById('filter-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', filterProperties);
  }

  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMoreProperties);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  if (!document.getElementById('properties-grid')) return;
  await loadAndRenderProperties('properties-grid', 6);
  bindFilterEvents();
});
