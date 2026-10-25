# DevOps Portfolio — GitHub Pages

A responsive, static portfolio site built with HTML, CSS, and vanilla JavaScript. No build tools or package installation required.

## 1. Personalize before publishing

Edit `index.html` and replace:
- `https://github.com/` with your GitHub profile URL
- `https://www.linkedin.com/` with your LinkedIn profile URL
- `YOUR_EMAIL@example.com` with your email address
- Project summaries with the exact scope and outcomes you can confidently discuss in interviews

Consider adding verified impact metrics, public repository links, architecture diagrams, and screenshots. Do not publish internal company details, credentials, private IPs, customer data, or confidential architecture.

## 2. Run locally

Open `index.html` in a browser, or run a local static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## 3. Publish with GitHub Pages

1. Create a GitHub repository, for example `devops-portfolio`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for the deployment to finish. GitHub will show the published URL in the Pages section, usually `https://YOUR-USERNAME.github.io/devops-portfolio/`.

For a user site using the repository name `YOUR-USERNAME.github.io`, the URL is usually `https://YOUR-USERNAME.github.io/`.

## 4. Suggested next improvements

- Add links to sanitized public project repositories.
- Add a downloadable resume PDF.
- Add a project architecture diagram for observability or hybrid deployment.
- Replace generic project descriptions with measurable, verified outcomes.
- Test the site on mobile and check every link before sharing it with recruiters.
