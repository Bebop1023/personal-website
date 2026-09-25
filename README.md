# Miles Johnson: Personal Website

Built with Next.js. Hosted on Vercel. Every push to `main` goes live automatically.

## How to update the site

**Almost everything lives in `content.ts`.** Open it, change the text, save, push.

| Want to change... | Edit this in `content.ts` |
| --- | --- |
| Headline, status line, intro | `hero` |
| The 4 big numbers | `stats` |
| Email, LinkedIn, GitHub, booking link | `links` |
| About text + focus chips | `about` |
| Skills | `skills` |
| Jobs / internships | `experience` |
| Projects | `projects` |
| AutonomIQ / Operating System | `ventures` |
| Clubs, roles | `leadership` |
| Honors | `honors` |

**To add a new item** (job, project, etc.): copy an existing `{ ... }` block, paste it right after, keep the comma between blocks, and change the text. Items show up in the order they're listed, so put the newest first.

**Resume:** replace `public/Miles-Johnson-Resume.pdf` with the new file (same name).

**Photo:** drop a photo in `public/` (e.g. `me.jpg`) and set `photo: "/me.jpg"` in `site`.

**Colors:** the theme lives at the top of `app/globals.css` (`--accent` is the gold).

## Run it on your Mac

```bash
npm install
npm run dev     # then open http://localhost:3000
```

## Project layout

```
content.ts            <- all the words on the site
app/page.tsx          <- page layout (sections)
app/globals.css       <- all styling
app/layout.tsx        <- fonts, page title, link previews
components/           <- scroll animations + typing effect
public/               <- resume, photos
```
