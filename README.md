# The Sith Empire — Static Site

A self-contained multi-page static site. All HTML, CSS, JS, images and audio
are bundled at the repository root so it can be served as-is from any static
host, including **GitHub Pages**.

## Structure

```
.
├── index.html                     # Home
├── about.html                     # About / lore
├── academy.html                   # Academy
├── chain.html                     # Chain of Command
├── imperial-institutions.html     # Institutions overview
├── law.html                       # Imperial Law
├── map.html                       # Galaxy map
├── news.html                      # News
├── pathway-honor-guard.html       # Pathway: Honor Guard
├── pathway-inquisitors.html       # Pathway: Inquisitors
├── pathway-marauders.html         # Pathway: Marauders
├── rites.html                     # Rites
├── sith-curators.html             # Sith Curators
├── spheres.html                   # Spheres of influence
├── imperial-sfx.js                # UI sound-effect controller
├── mobile.css / mobile.js         # Mobile styles & behaviour
├── sfx/                           # UI sound effects (WAV + manifest.json)
└── *.png / *.webp                 # Emblems, logos, illustrations
```

`index2.html` is an alternate landing page kept for reference; delete it if
you don't need it.

## Deploy to GitHub Pages

1. Create a new GitHub repository (public or private with Pages enabled).
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`  •  **Folder:** `/ (root)`
5. Save. The site will be published at
   `https://<user>.github.io/<repo>/`.

`.nojekyll` is included so GitHub Pages serves every file verbatim (no Jekyll
processing, so files/folders that start with `_` will still be served).

## Local preview

Any static server works, e.g.:

```bash
# Python
python3 -m http.server 3000

# Node
npx serve .
```

Then open `http://localhost:3000/`.

## Notes on functionality

- **Navigation:** All internal links are relative (`about.html`, `news.html`,
  etc.), so the site works both at a domain root and under a subpath like
  `/<repo>/` on GitHub Pages.
- **Sound effects:** `imperial-sfx.js` loads clips from `sfx/` using
  `sfx/manifest.json`. Browsers require a user gesture before audio can play;
  the script already waits for a click/tap before enabling sound.
- **Mobile:** `mobile.css` and `mobile.js` are loaded from each page; no extra
  build step is required.
- **Fonts:** Google Fonts (`Cinzel`, `Cinzel Decorative`, `Rajdhani`,
  `Orbitron`) are loaded via CDN — an internet connection is required for
  correct typography.
