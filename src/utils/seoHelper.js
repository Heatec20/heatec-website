export function setMetaTags(title, description, canonical) {
  document.querySelector('title').textContent = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  if (canonical) {
    const link = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    link.rel = 'canonical';
    link.href = canonical;
    document.head.appendChild(link);
  }
}