# Siddhartha Nayak — Portfolio

Personal portfolio with projects, experience, technical skills, GitHub activity, and a printable resume. Built with React, TypeScript, and Vite.

## Development

Requires Node.js 20.19+ or 22.12+ and pnpm.

```sh
pnpm install
pnpm dev
```

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm preview
```

The production build is written to `dist/`. `vercel.json` enables direct navigation to page routes on Vercel.

## Structure

```text
public/                 Static images, favicon, and license notices
src/
  components/           Layout, reusable UI, and portfolio sections
  data/                 Profile, projects, and tools
  hooks/                Shared React hooks
  pages/                Route components
  App.tsx               Routes and navigation behavior
  main.tsx              Application entry point
  theme.css             Base theme
  styles.css            Portfolio and print styles
```

## Content

Edit `src/data/profile.ts` for profile details, experience, education, and resume skills. Project descriptions and optional demo links live in `src/data/projects.ts`; tools live in `src/data/uses.ts`. Skill icons are defined in `src/components/skills/SkillSection.tsx`. Project images are in `public/images/projects/`.

The resume supports printing and saving as PDF. GitHub activity loads from the public contribution API and includes an unavailable state. Visitor analytics displays an empty state until a data provider is connected.

## License

MIT. Third-party notices are included in `THIRD-PARTY-NOTICES.md` and `public/licenses/`.
