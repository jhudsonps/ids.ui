# UI Kit Design System

A comprehensive design system with reusable components and design tokens.

## Structure

```
ui-kit/
├── index.html           # Home page
├── css/
│   ├── design-system.css # Design tokens and components
│   └── site.css         # Site-specific styles
├── pages/
│   ├── colors.html      # Color documentation
│   ├── typography.html  # Typography documentation
│   └── buttons.html     # Button component documentation
└── vercel.json          # Vercel configuration
```

## Local Development

Simply open `index.html` in your browser to view the site locally.

## Deploy to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to the ui-kit directory:
   ```bash
   cd ui-kit
   ```

3. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy with GitHub

1. Create a new repository on GitHub

2. Initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it as a static site
   - Click "Deploy"

### Option 3: Drag and Drop

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop the `ui-kit` folder onto the Vercel dashboard
3. Vercel will deploy it instantly

## Alternative Hosting Options

### Netlify
1. Drag and drop the `ui-kit` folder on [netlify.com/drop](https://app.netlify.com/drop)

### GitHub Pages
1. Push to GitHub
2. Go to repository Settings → Pages
3. Select the branch and folder
4. Your site will be live at `https://username.github.io/repo-name`

### Cloudflare Pages
1. Push to GitHub
2. Connect your repository at [pages.cloudflare.com](https://pages.cloudflare.com)
3. Deploy

## Features

- ✅ Clean sidebar navigation
- ✅ Color token documentation
- ✅ Typography scale
- ✅ Button component with variants
- ✅ Responsive design
- ✅ Ready for Vercel deployment

## Next Steps

When working with Claude Code, you can:
- Add more components (inputs, cards, modals, etc.)
- Expand the color system
- Add dark mode toggle
- Create more documentation pages
- Build interactive examples
