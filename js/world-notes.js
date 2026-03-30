(() => {
  const tagsRoot = document.getElementById('world-notes-tags');
  const notesRoot = document.getElementById('world-notes-list');
  const homeNotesRoot = document.getElementById('world-notes-home-list');

  let selectedTag = 'all';
  let notes = [];

  const toTitleCase = (value) => value.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const formatDate = (iso) => {
    if (!iso) return '';
    const parsed = new Date(iso);
    if (Number.isNaN(parsed.getTime())) return iso;
    return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const collectTags = (items) => {
    const values = new Set();
    items.forEach((item) => {
      (item.tags || []).forEach((tag) => values.add(tag.toLowerCase()));
    });
    return ['all', ...Array.from(values).sort()];
  };

  const appendMetaTag = (meta, value) => {
    const tag = document.createElement('span');
    tag.className = 'world-note-meta-tag';
    tag.textContent = toTitleCase(value);
    meta.appendChild(tag);
  };

  const appendMetaPublication = (meta, value) => {
    const publication = document.createElement('span');
    publication.className = 'world-note-publication';
    publication.append(document.createTextNode('— Published in '));
    const publicationName = document.createElement('span');
    publicationName.className = 'world-note-publication-name';
    publicationName.textContent = value;
    publication.appendChild(publicationName);
    publication.append(document.createTextNode(' —'));
    meta.appendChild(publication);
  };

  const appendMetaLanguages = (meta, values, links) => {
    if (!Array.isArray(values) || values.length === 0) return;
    const languages = document.createElement('span');
    languages.className = 'world-note-languages';

    if (Array.isArray(links) && links.length > 0) {
      values.forEach((value, index) => {
        const match = links.find((item) => item && item.label && item.url && item.label.toLowerCase() === value.toLowerCase());
        if (match) {
          const link = document.createElement('a');
          link.href = match.url;
          link.textContent = value;
          if (/^https?:\/\//i.test(match.url)) {
            link.target = '_blank';
            link.rel = 'noopener';
          }
          languages.appendChild(link);
        } else {
          languages.append(document.createTextNode(value));
        }
        if (index < values.length - 1) {
          languages.append(document.createTextNode(' · '));
        }
      });
    } else {
      languages.textContent = values.join(' · ');
    }
    meta.appendChild(languages);
  };

  const appendCommonMeta = (meta, item) => {
    if (item.date) {
      const date = document.createElement('span');
      date.textContent = formatDate(item.date);
      meta.appendChild(date);
    }

    if (item.publication) {
      appendMetaPublication(meta, item.publication);
    }

    (item.tags || []).forEach((tagValue) => appendMetaTag(meta, tagValue));

    appendMetaLanguages(meta, item.languages, item.language_links);

    if ((item.status || '').toLowerCase() === 'planned') {
      const badge = document.createElement('span');
      badge.className = 'world-note-badge';
      badge.textContent = 'Planned';
      meta.appendChild(badge);
    }
  };

  const buildMedia = (item) => {
    const media = document.createElement('div');
    media.className = 'world-note-media';

    if (item.image) {
      const image = document.createElement('img');
      image.src = item.image;
      image.alt = item.image_alt || `${item.title || 'World Note'} image`;
      image.loading = 'lazy';
      media.appendChild(image);
      return media;
    }

    const placeholder = document.createElement('div');
    placeholder.className = 'world-note-media-placeholder';
    placeholder.textContent = 'Photo coming soon';
    media.appendChild(placeholder);
    return media;
  };

  const buildNoteCard = (item, includeLink) => {
    const card = document.createElement('article');
    card.className = 'world-note-card world-note-card--with-media';

    const content = document.createElement('div');
    content.className = 'world-note-content';

    const title = document.createElement('h3');
    title.className = 'world-note-title';
    if ((item.title || '').length > 44) {
      title.classList.add('world-note-title--long');
    }
    if (item.path && (item.status || '').toLowerCase() !== 'planned') {
      const titleLink = document.createElement('a');
      titleLink.href = item.path;
      titleLink.textContent = item.title || 'Untitled note';
      title.appendChild(titleLink);
    } else {
      title.textContent = item.title || 'Untitled note';
    }
    content.appendChild(title);

    const meta = document.createElement('p');
    meta.className = 'world-note-meta';
    appendCommonMeta(meta, item);
    content.appendChild(meta);

    if (item.summary) {
      const summary = document.createElement('p');
      summary.className = 'world-note-summary';
      summary.textContent = item.summary;
      content.appendChild(summary);
    }

    if (includeLink && item.path && (item.status || '').toLowerCase() !== 'planned') {
      const link = document.createElement('a');
      link.className = 'world-note-link';
      link.href = item.path;
      link.textContent = 'Read article';
      content.appendChild(link);
    }

    card.appendChild(content);
    card.appendChild(buildMedia(item));
    return card;
  };

  const renderTags = (tags) => {
    if (!tagsRoot) return;
    const fragment = document.createDocumentFragment();

    tags.forEach((tag) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'world-tag-chip';
      if (tag === selectedTag) button.classList.add('is-active');
      button.textContent = tag === 'all' ? 'All' : toTitleCase(tag);
      button.addEventListener('click', () => {
        selectedTag = tag;
        renderTags(tags);
        renderNotes();
      });
      fragment.appendChild(button);
    });

    tagsRoot.replaceChildren(fragment);
  };

  const renderNotes = () => {
    if (!notesRoot) return;
    const filtered = notes.filter((item) => {
      if (selectedTag === 'all') return true;
      return (item.tags || []).map((tag) => tag.toLowerCase()).includes(selectedTag);
    });

    if (filtered.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'world-notes-empty';
      empty.textContent = 'No notes found for this tag yet.';
      notesRoot.replaceChildren(empty);
      return;
    }

    const fragment = document.createDocumentFragment();

    filtered.forEach((item) => {
      fragment.appendChild(buildNoteCard(item, true));
    });

    notesRoot.replaceChildren(fragment);
  };

  const sortByDateDesc = (items) => {
    return [...items].sort((a, b) => {
      const aTime = Date.parse(a.date || '') || 0;
      const bTime = Date.parse(b.date || '') || 0;
      return bTime - aTime;
    });
  };

  const renderHomeNotes = () => {
    if (!homeNotesRoot) return;

    const latest = sortByDateDesc(notes).slice(0, 1);
    if (latest.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'world-notes-empty';
      empty.textContent = 'New essays will appear here soon.';
      homeNotesRoot.replaceChildren(empty);
      return;
    }

    const fragment = document.createDocumentFragment();
    latest.forEach((item) => {
      fragment.appendChild(buildNoteCard(item, false));
    });

    homeNotesRoot.replaceChildren(fragment);
  };

  const init = async () => {
    if (!tagsRoot && !notesRoot && !homeNotesRoot) return;
    try {
      const response = await fetch('./data/world-notes.json', { cache: 'no-store' });
      if (!response.ok) return;
      const data = await response.json();
      notes = Array.isArray(data.notes) ? data.notes : [];
      const tags = collectTags(notes);
      renderTags(tags);
      renderNotes();
      renderHomeNotes();
    } catch (error) {
      if (notesRoot) {
        const fallback = document.createElement('p');
        fallback.className = 'world-notes-empty';
        fallback.textContent = 'World Notes are temporarily unavailable.';
        notesRoot.replaceChildren(fallback);
      }
      if (homeNotesRoot) {
        const fallback = document.createElement('p');
        fallback.className = 'world-notes-empty';
        fallback.textContent = 'World Notes are temporarily unavailable.';
        homeNotesRoot.replaceChildren(fallback);
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
