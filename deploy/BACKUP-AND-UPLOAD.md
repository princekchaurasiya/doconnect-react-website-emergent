# Production cutover — backup, upload, test

## Phase 1 — Backup old PHP site (cPanel File Manager)

1. Open **File Manager** → go to **`doconnect.org`** (document root).
2. Select **all files and folders** inside (not the parent home folder).
3. Click **Compress** → **Zip Archive** → name: `doconnect-php-backup-2026-03-23.zip`.
4. Move the zip to **`/home/smbrckdy/`** (one level above `doconnect.org`) so it is **not** public on the web.
5. Download a copy to your PC if possible.

## Phase 3 — Publish new React site

### Option A — Upload zip (easiest)

1. On your PC, use the file: **`frontend/deploy/doconnect-production.zip`** (generated after `npm run build`).
2. In File Manager, open **`doconnect.org`**.
3. Delete **all contents** inside (backup zip is already safe outside this folder).
4. **Upload** `doconnect-production.zip` → **Extract** into `doconnect.org`.
5. Confirm these exist in the document root:
   - `index.html`
   - `.htaccess`
   - `static/` folder
   - `sitemap.xml`, `robots.txt`, `llms.txt`

### Option B — FTP

Upload everything inside **`frontend/build/`** to the document root (include hidden `.htaccess`).

### Permissions

Folders `755`, files `644` (cPanel defaults are usually fine).

## Smoke test (incognito browser)

- https://www.doconnect.org/
- https://www.doconnect.org/doctor-home-visit-mumbai
- https://www.doconnect.org/contact
- https://www.doconnect.org/sitemap.xml

Deep links must **not** return 404 (`.htaccess` rewrites to `index.html`).

## Phase 4 — SEO

1. [Google Search Console](https://search.google.com/search-console) → property `doconnect.org` → **Sitemaps** → submit: `https://www.doconnect.org/sitemap.xml`
2. Old URLs: `.htaccess` includes 301s from common `.php` paths to new routes.

## Booking form

Until API is hosted, failed submit shows **call/WhatsApp** — expected on shared hosting without FastAPI.

See [BACKEND-PRODUCTION.md](./BACKEND-PRODUCTION.md) for API later.
