(() => {
  const username = 'kkontras';
  const excludedRepo = 'kkontras/kkontras.github.io';
  const websiteRepo = 'kkontras/kkontras.github.io';
  const featuredRepos = [
    'kkontras/SynIB',
    'kkontras/MCR',
    'kkontras/CoRe-Sleep',
    'kkontras/MLB'
  ];
  const activityList = document.getElementById('github-activity-list');
  const updatedEl = document.getElementById('website-last-updated');
  if (!activityList) return;

  const renderEmpty = (message) => {
    activityList.innerHTML = `<li class="activity-empty">${message}</li>`;
  };

  const renderItems = (items) => {
    if (!items.length) {
      renderEmpty('No repositories found.');
      return;
    }

    const rows = items.map((item) => {
      const repoUrl = `https://github.com/${item.repo}`;
      const stars = item.stars > 0 ? `★ ${item.stars}` : 'Public repo';
      const forks = item.forks > 0 ? ` • forks ${item.forks}` : '';
      const language = item.language ? ` • ${item.language}` : '';

      return `
        <li class="activity-item">
          <a class="activity-repo" href="${repoUrl}" target="_blank" rel="noopener">${item.repo}</a>
          <span class="activity-meta">${stars}${forks}${language}</span>
        </li>
      `;
    });

    activityList.innerHTML = rows.join('');
  };

  const buildFeaturedRepos = (repos) => {
    const byName = new Map(
      repos
        .filter((repo) => repo && !repo.fork && repo.full_name !== excludedRepo)
        .map((repo) => [repo.full_name.toLowerCase(), repo])
    );

    return featuredRepos.map((name) => {
      const repo = byName.get(name.toLowerCase());
      return {
        repo: name,
        stars: repo ? (repo.stargazers_count || 0) : 0,
        forks: repo ? (repo.forks_count || 0) : 0,
        language: repo ? (repo.language || '') : ''
      };
    });
  };

  const loadActivity = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`, {
        headers: { Accept: 'application/vnd.github+json' }
      });

      if (!response.ok) {
        if (response.status === 403) {
          renderEmpty('GitHub API rate limit reached. Please refresh later.');
          return;
        }
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const repos = await response.json();
      const items = buildFeaturedRepos(repos);
      renderItems(items);
    } catch (_error) {
      renderEmpty('Could not load repositories right now.');
    }
  };

  const loadWebsiteLastUpdated = async () => {
    if (!updatedEl) return;
    try {
      const response = await fetch(`https://api.github.com/repos/${websiteRepo}/commits?per_page=1`, {
        headers: { Accept: 'application/vnd.github+json' }
      });
      if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
      const commits = await response.json();
      const latest = commits && commits[0];
      const isoDate = latest && latest.commit && latest.commit.author && latest.commit.author.date;
      if (!isoDate) throw new Error('Missing commit date');
      const date = new Date(isoDate);
      const pretty = date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
      updatedEl.textContent = `Website last updated: ${pretty}`;
    } catch (_error) {
      updatedEl.textContent = 'Website last updated: unavailable';
    }
  };

  loadActivity();
  loadWebsiteLastUpdated();
})();
