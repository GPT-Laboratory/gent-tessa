# TESSA website

Repository-ready React source for the TESSA promotional website. GitHub Actions builds the source and publishes the resulting static site to GitHub Pages.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Extract this package and upload all files and folders to the repository root, including the hidden `.github` folder.
3. Use `main` as the repository's default branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Push a change to `main`, or open **Actions → Build and deploy TESSA website → Run workflow**.

GitHub will install the dependencies, build the React source, and deploy the `dist` output. No Node.js environment is required on the published website.

## Custom domain

After the first deployment, open **Settings → Pages → Custom domain**, enter your domain or subdomain, and follow GitHub's DNS instructions. The build works both on a GitHub project URL and with a custom domain.

## Edit the website

- Main content: `src/App.jsx`
- Colours and layout: `src/styles.css`
- Page title and metadata: `index.html`
- Logos and images: `public/brand/`

Every push to `main` automatically rebuilds and republishes the website.

## Optional local editing

If a developer wants to preview the site locally:

```bash
npm install
npm run dev
```

To test the production build:

```bash
npm ci
npm run build
```
