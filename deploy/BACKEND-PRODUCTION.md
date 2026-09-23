# Backend (Phase 5 — optional, after launch)

The React app calls `POST /api/appointments` when `REACT_APP_BACKEND_URL` is set at build time.

## Recommended later stack

1. **MongoDB Atlas** (free tier) for appointments collection.
2. **API host**: Railway, Render, or a small VPS — run `uvicorn server:app` from [`backend/`](../backend/).
3. Rebuild frontend:

```powershell
cd frontend
$env:REACT_APP_BACKEND_URL="https://YOUR-API-URL"
npm run build
```

4. Re-upload `frontend/build/` to `doconnect.org`.

## cPanel shared hosting

Running FastAPI + MongoDB on Venture/cPanel is usually **not** supported. Keep API off shared hosting.

## Launch without API

Current build works: website, SEO, Call/WhatsApp CTAs; form shows error toast with phone number if API is unreachable.
