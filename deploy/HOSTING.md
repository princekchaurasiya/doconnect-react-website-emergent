# Venture hosting — doconnect.org (Phase 0)

## Confirmed from your server

| Item | Value |
|------|--------|
| cPanel user | `smbrckdy` |
| Server hostname (SSH prompt) | `venture` |
| Domain folder | `~/doconnect.org/` (addon domain document root) |
| Live site (before cutover) | PHP (`index.php`, `blog.php`, …) |

## Verify in cPanel (5 minutes)

1. Log in to **cPanel** (link from hosting welcome email, often `https://venture:2083` or your host’s URL).
2. **Domains** → **Domains** or **Addon Domains** → `doconnect.org` → note **Document Root** (expect `doconnect.org` or `/home/smbrckdy/doconnect.org`).
3. **File Manager** → open that folder → you should see old `index.php`.
4. **SSL/TLS Status** → `doconnect.org` should be **AutoSSL / Active**.

## Access methods

| Method | Use for |
|--------|---------|
| **File Manager** | Backup zip, delete old files, upload new build (recommended) |
| **FTP** | Same as File Manager (FileZilla + FTP user from cPanel) |
| **SSH** | Optional: `ssh smbrckdy@venture` — if login works, backup/deploy is faster |

If SSH is disabled, **File Manager + upload of `doconnect-production.zip`** is enough.

## DNS

Do **not** change DNS if `doconnect.org` already opens the PHP site — only replace files inside the document root.
