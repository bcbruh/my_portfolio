(function () {
  const internalNavigation = {
    isInternalLink(anchor) {
      if (!anchor || anchor.target || anchor.hasAttribute('download')) return false;
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
      const url = new URL(href, window.location.href);
      return url.origin === window.location.origin;
    },

    normalizePath(path) {
      return path.replace(/\/$/, '');
    },

    async loadPage(url, replaceState = false) {
      try {
        const html = await this.fetchPage(url);
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newMain = doc.querySelector('main');
        const newBody = doc.body;
        const newTitle = doc.querySelector('title')?.textContent;

        if (!newMain) throw new Error('Page content missing');

        document.body.className = newBody.className;
        document.querySelector('main').innerHTML = newMain.innerHTML;
        if (newTitle) document.title = newTitle;
        this.setActiveNav(url);
        window.scrollTo(0, 0);

        if (replaceState) {
          history.replaceState(null, newTitle || '', url);
        } else {
          history.pushState(null, newTitle || '', url);
        }

        if (typeof window.initProjectsPage === 'function') {
          window.initProjectsPage();
        }

        // Re-run the content reveal so the freshly loaded page animates in.
        if (typeof window.revealInit === 'function') {
          window.revealInit();
        }
      } catch (error) {
        console.error('Navigation failed', error);
        window.location.href = url;
      }
    },

    fetchPage(url) {
      if (window.location.protocol === 'file:') {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onload = () => {
            if (xhr.status === 200 || xhr.status === 0) {
              resolve(xhr.responseText);
            } else {
              reject(new Error(`XHR failed: ${xhr.status}`));
            }
          };
          xhr.onerror = () => reject(new Error('XHR network error'));
          xhr.send();
        });
      }

      return fetch(url, { cache: 'no-store' }).then(response => {
        if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
        return response.text();
      });
    },

    setActiveNav(url) {
      const targetUrl = new URL(url, window.location.href);
      const currentPath = this.normalizePath(targetUrl.pathname);
      document.querySelectorAll('nav a').forEach(anchor => {
        const anchorUrl = new URL(anchor.getAttribute('href'), window.location.href);
        const anchorPath = this.normalizePath(anchorUrl.pathname);
        const active = anchorPath === currentPath;
        anchor.classList.toggle('active', active);
        anchor.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    },

    attach() {
      document.addEventListener('click', event => {
        const anchor = event.target.closest('a');
        if (!this.isInternalLink(anchor)) return;
        const href = anchor.getAttribute('href');
        const url = new URL(href, window.location.href);
        if (this.normalizePath(url.pathname) === this.normalizePath(window.location.pathname)
            && url.search === window.location.search) return;
        event.preventDefault();
        this.loadPage(url.href);
      });

      window.addEventListener('popstate', () => {
        this.loadPage(window.location.href, true);
      });
    }
  };

  internalNavigation.attach();
})();
