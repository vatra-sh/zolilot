# Zolilöt AG

Corporate site for a fictional Swiss soldering company (class inside joke). Next.js 16, Tailwind v4, Motion.

- All copy lives in `app/src/content.ts`; edit jokes there.
- Dev: `cd app && npm run dev`. Prod: `docker compose up -d --build` (joins `edge`, Caddy vhost `xn--zolilt-0xa.{$DOMAIN}`).
- `app/scripts/prep-*.py` turned the source logo into `public/` assets and the social preview image.
- `noindex` is set on purpose: the team section names real classmates.
- Team avatars are DiceBear "Notionists" (CC0), rendered at build time, no external requests.
