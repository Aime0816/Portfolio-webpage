Original visual design restored: hero, avatar card, navigation, section layouts, skill cards, project modals, experience timeline, contact cards, and assistant drawer. Profile and project updates remain; education is excluded.

# Aime Nsengiyumva portfolio

React + TypeScript + Vite portfolio, with Vercel API functions and an optional Express server. Education is intentionally omitted from the website and CV.

## Run locally (Node 22 or newer)

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Validate with `npm run typecheck`, `npm test`, and `npm run build`.

## Update the existing Vercel site

Commit these changes to the repository connected to your existing Vercel project. `vercel.json` sets the build command to `npm run build:web` and the output to `dist`; Vercel deploys `api/chat.ts` and `api/contact.ts` as functions. Test on a preview deployment before merging to the production branch.

Optional server-only variables:
- `GEMINI_API_KEY`: enables generated assistant answers. Without it, the assistant answers from local portfolio facts.
- `GEMINI_MODEL`: optional model override; defaults to `gemini-2.5-flash`.

Do not use VITE-prefixed variables for secrets. Gemini responses have not been tested with a live key in this update. Before enabling public paid AI traffic, configure provider spending limits and platform rate limiting.

For a conventional Node host, use `npm run build`, then set `NODE_ENV=production` and run `node dist/server.mjs`. `PORT` is supported.

## Contact behavior

The form prepares a mailto draft in the visitor's email application. It does not transmit, store, or claim to deliver messages. The legacy `/api/contact` endpoint responds with an explicit unavailable status rather than a false success. If a visitor has no email app configured, they can copy the displayed email address. Direct website email delivery requires an email provider integration.

## Content and images

Edit `src/data/portfolioData.ts` to update profile, projects, experience, and links. Retained LinkedIn link comes from the original repository and still needs owner confirmation. GitHub repository links were checked against the public GitHub API.

Featured work: IDBK Chat, The Quiz, CivicLens AI, MaternalHub. Unsupported metrics, awards, and skill percentages have been removed. The old CivicLens repository returned 404; its button was removed. The IDBK Chat demo returned DEPLOYMENT_NOT_FOUND; only its repository is linked. MaternalHub's live site and public repository are linked. MaternalHub's cover is an actual homepage capture; other covers are clearly labeled artwork, not screenshots. Replace with verified screenshots when live deployments become available. Individual contributions and project statuses can be further refined by the owner.

The downloadable CV is `public/Aime-Nsengiyumva-CV.pdf`. To regenerate it, install Python reportlab and Pillow and run `python scripts/create_cv.py` (uses DejaVu fonts on Linux). Update CV text in that script when changing the profile. It also generates the social sharing image and optimized portrait.

## Verification completed

- TypeScript check and production build.
- Five API tests covering missing credentials, bad input, methods, and honest contact behavior.
- Browser check of desktop layout, project filter, assistant answer and closing behavior.
- The previous layout was mobile-tested; this restored design retains the original responsive breakpoints with contact and drawer width fixes.
- One-page CV rendered and visually reviewed.

External email delivery and live Gemini generation require credentials/user email software and were not tested. No external messages were sent.
