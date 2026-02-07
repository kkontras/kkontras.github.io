(() => {
  const appendText = (container, value) => {
    if (!value) {
      return;
    }
    const needsSpace = container.childNodes.length > 0 && !container.textContent.endsWith(' ');
    container.append(document.createTextNode(`${needsSpace ? ' ' : ''}${value}`));
  };

  const buildNews = (items) => {
    const list = document.getElementById('news-list');
    if (!list || !Array.isArray(items)) {
      return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
      const entry = document.createElement('div');
      entry.className = 'news-item';

      const icon = document.createElement('i');
      icon.className = item.icon || 'far';
      icon.setAttribute('aria-hidden', 'true');

      const text = document.createElement('span');
      text.className = 'news-text';

      appendText(text, item.text);

      if (item.link && item.link.url) {
        const needsSpace = text.childNodes.length > 0 && !text.textContent.endsWith(' ');
        if (needsSpace) {
          text.append(document.createTextNode(' '));
        }

        const link = document.createElement('a');
        link.href = item.link.url;
        link.target = '_blank';
        link.rel = 'noopener';

        if (item.link.em) {
          const emphasis = document.createElement('em');
          emphasis.textContent = item.link.label;
          link.appendChild(emphasis);
        } else {
          link.textContent = item.link.label;
        }

        text.appendChild(link);
      }

      appendText(text, item.suffix);

      entry.appendChild(icon);
      entry.appendChild(text);
      fragment.appendChild(entry);
    });

    list.replaceChildren(fragment);
  };

  const buildHighlights = (items) => {
    const indicators = document.getElementById('highlights-indicators');
    const container = document.getElementById('highlights-items');

    if (!indicators || !container || !Array.isArray(items)) {
      return;
    }

    const indicatorFragment = document.createDocumentFragment();
    const itemFragment = document.createDocumentFragment();

    items.forEach((item, index) => {
      const indicator = document.createElement('li');
      indicator.setAttribute('data-target', '#highlights');
      indicator.setAttribute('data-slide-to', String(index));
      if (index === 0) {
        indicator.classList.add('active');
      }
      indicatorFragment.appendChild(indicator);

      const slide = document.createElement('div');
      slide.className = 'carousel-item fullscreen';
      if (index === 0) {
        slide.classList.add('active');
      }
      slide.style.backgroundImage = `url('${item.image}')`;

      const overlay = document.createElement('div');
      overlay.className = 'highlight-overlay position-absolute d-flex w-100 h-100 justify-content-center align-items-center';

      const hero = document.createElement('div');
      hero.className = 'wg-hero dark container highlight-hero';

      const title = document.createElement('h1');
      title.className = 'hero-title';
      title.textContent = item.title;

      const meta = document.createElement('p');
      meta.className = 'hero-lead';
      meta.innerHTML = `${item.authors}<br>${item.venue}`;

      hero.appendChild(title);
      hero.appendChild(meta);

      if (item.cta && item.cta.url) {
        const cta = document.createElement('a');
        cta.className = 'btn btn-light btn-lg mt-3 highlight-cta';
        cta.href = item.cta.url;
        cta.target = '_blank';
        cta.rel = 'noopener';

        if (item.cta.icon) {
          const iconEl = document.createElement('i');
          iconEl.className = item.cta.icon;
          iconEl.style.paddingRight = '10px';
          cta.appendChild(iconEl);
        }

        cta.append(item.cta.label || 'Learn more');
        hero.appendChild(cta);
      }

      overlay.appendChild(hero);
      slide.appendChild(overlay);
      itemFragment.appendChild(slide);
    });

    indicators.replaceChildren(indicatorFragment);
    container.replaceChildren(itemFragment);
  };

  const init = async () => {
    try {
      const response = await fetch('./data/site-content.json', { cache: 'no-store' });
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      buildNews(data.news);
      buildHighlights(data.highlights);
    } catch (error) {
      // Keep the static layout if data loading fails.
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
