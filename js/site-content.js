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

    const stripDatePrefix = (value) => {
      if (!value) return '';
      return value.replace(/^\s*[A-Za-z]{3,9}\s+\d{4}:\s*/i, '').trimStart();
    };

    let lastYear = null;

    items.forEach((item) => {
      const entry = document.createElement('div');
      entry.className = 'news-item';

      const rail = document.createElement('div');
      rail.className = 'news-rail';

      const yearLabel = document.createElement('span');
      yearLabel.className = 'news-year';
      const yearMatch = (item.text || '').match(/\b(19|20)\d{2}\b/);
      const currentYear = yearMatch ? yearMatch[0] : '';
      if (currentYear && currentYear === lastYear) {
        yearLabel.textContent = '';
        yearLabel.classList.add('news-year-continued');
        entry.classList.add('news-item-continued-year');
        rail.classList.add('news-rail-continued-year');
      } else {
        yearLabel.textContent = currentYear;
      }
      lastYear = currentYear || lastYear;

      rail.appendChild(yearLabel);

      const text = document.createElement('span');
      text.className = 'news-text';

      appendText(text, stripDatePrefix(item.text));

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

      entry.appendChild(rail);
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
      slide.className = 'carousel-item';
      if (index === 0) {
        slide.classList.add('active');
      }
      slide.style.backgroundImage = `url('${item.image}')`;

      const overlay = document.createElement('div');
      overlay.className = 'highlight-overlay position-absolute d-flex w-100 h-100 justify-content-center align-items-center';

      const hero = document.createElement('div');
      hero.className = 'wg-hero dark container highlight-hero highlight-content';

      const title = document.createElement('h1');
      title.className = 'hero-title';
      title.textContent = item.title;

      const meta = document.createElement('p');
      meta.className = 'hero-lead';
      meta.innerHTML = `${item.authors}<br>${item.venue}`;

      hero.appendChild(title);
      hero.appendChild(meta);

      const ctaGroup = document.createElement('div');
      ctaGroup.className = 'highlight-cta-group mt-3';

      const addButton = (label, url, iconClass) => {
        const button = document.createElement('a');
        button.className = 'btn btn-light btn-lg highlight-cta';
        button.href = url;
        button.target = '_blank';
        button.rel = 'noopener';

        const iconEl = document.createElement('i');
        iconEl.className = iconClass;
        iconEl.style.paddingRight = '10px';
        button.appendChild(iconEl);
        button.append(label);
        ctaGroup.appendChild(button);
      };

      if (item.code_url) {
        addButton('Code', item.code_url, 'fab fa-github');
      }

      if (item.paper_url) {
        addButton('Paper', item.paper_url, 'fas fa-file-alt');
      }

      if (ctaGroup.childNodes.length > 0) {
        hero.appendChild(ctaGroup);
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
