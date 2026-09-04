# Self-hosted fonts

These are the exact files Google Fonts serves for this site's type — fetched
once by hand and committed, rather than fetched by `next/font/google` on every
`next dev` / `next build`.

**Why:** in this dev environment, `fonts.googleapis.com` / `fonts.gstatic.com`
were reachable but slow and often unresponsive per-request. `next/font/google`
retries on failure, so a flaky CDN turned every fresh compile into a
multi-minute stall — the direct cause of "localhost not loading" on
2026-08-17. Self-hosting removes the network dependency entirely.

| File | Covers | Notes |
| --- | --- | --- |
| `archivo-variable.woff2` | weights 600–800 | Variable font — Google serves the same physical file for every static weight in that range, confirmed by byte-identical downloads at 600/700/800. |
| `inter-variable.woff2` | weights 400–700 | Same story — one file, confirmed byte-identical across 400/500/600/700. |
| `ibm-plex-mono-400.woff2` | weight 400 | Genuinely distinct static file. |
| `ibm-plex-mono-500.woff2` | weight 500 | Genuinely distinct static file. |

Wired up in `app/layout.tsx` via `next/font/local`.

If the type needs a new weight or a new family later, fetch it from
`fonts.google.com` (or the CDN, network permitting) and drop the `.woff2`
here — no need to keep this workaround forever if the network issue was
specific to this environment.
