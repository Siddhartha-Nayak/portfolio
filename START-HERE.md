# Siddhartha's portfolio

Open the source folder `siddhartha-portfolio` in your editor. Node.js 20.19+ or 22.12+ is required.

```powershell
npm install
npm run dev -- --host 127.0.0.1
```

Open the local URL printed by Vite. To produce the static website:

```powershell
npm run build
npm run preview -- --host 127.0.0.1
```

The `dist` folder contains the built website. The source ZIP includes editable code and the production build, and excludes dependency folders and Git history. A Vercel configuration handles the portfolio's page routes.

Certifications and experience dates or durations are omitted. The Resume page follows the same exclusions. Education dates may remain because the requested exclusion applies to experience.

The profile uses initials until you provide a photo. Project illustrations can be replaced with your real screenshots. Project repository and live-demo links remain absent until you supply their exact URLs. Analytics needs a real data provider before it can display visitor statistics.

The source retains the template's required MIT license notice. The visible portfolio uses your identity and content.

## Updating your content

- `src/data/profile.ts`: identity, links, experience, education, and technical skills.
- `src/data/projects.ts`: project descriptions, technologies, and optional `github` / `live` URLs.
- `src/data/uses.ts`: software and tools.
- `public/images/projects/`: project illustrations and replacement screenshots.
- `src/components/PortfolioSections.tsx`: profile avatar and skill icons.

The Resume page includes a Print / Save as PDF button and a print layout. No unedited copy of the supplied PDF is distributed. Google Fonts and the public GitHub contribution API require network access; GitHub activity has an unavailable state if it cannot load.
