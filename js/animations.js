function initRevealAnimations() {
  const items = document.querySelectorAll('.reveal-on-scroll');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const order = Number(el.dataset.revealOrder || '0');
        const nodeIndex = Number(el.dataset.revealIndex || '0');
        const delay = (order || nodeIndex) * 100;
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('revealed');
        obs.unobserve(el);
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item, index) => {
    item.dataset.revealIndex = String(index);
    observer.observe(item);
  });
}

document.addEventListener('DOMContentLoaded', initRevealAnimations);
