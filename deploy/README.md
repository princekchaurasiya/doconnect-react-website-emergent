# Doconnect production deploy (Venture / cPanel)

## Quick start

1. Read [HOSTING.md](./HOSTING.md) — confirm `~/doconnect.org` document root.
2. [BACKUP-AND-UPLOAD.md](./BACKUP-AND-UPLOAD.md) — zip backup old PHP, upload new site.
3. Upload **`frontend/deploy/doconnect-production.zip`** to cPanel → extract in `doconnect.org`.

## Regenerate zip (on your PC)

```powershell
cd frontend
npm install --legacy-peer-deps
npm run sitemap
npm run build
npm run deploy:zip
```

## After go-live

- [GSC-SITEMAP.md](./GSC-SITEMAP.md) — Search Console sitemap.
- [BACKEND-PRODUCTION.md](./BACKEND-PRODUCTION.md) — API later.

## SSH optional backup

[backup-server-ssh.sh](./backup-server-ssh.sh)
