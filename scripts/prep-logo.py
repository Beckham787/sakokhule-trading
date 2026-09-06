"""
Logo preparation.

Lindokuhle supplied the logo on 2026-09-06 as a JPEG on a flat blue-grey
background (#BAC5CB), with a few pixels of dark edge along two sides — a
screenshot of a screenshot, in other words, and the only form of the mark
that exists. This lifts it off that background into a transparent PNG:

    python3 scripts/prep-logo.py

Outputs, from `_source/supplied-2026-09-06/logo-supplied.jpeg`:
  · public/images/brand/logo.png  — the whole lockup, mark over lettering
  · public/images/brand/mark.png  — the emblem alone, 512px, used in the site
                                    header, the footer, and as the favicon
                                    (copied to app/icon.png)

The alpha ramp is deliberately soft (26 → 60 in RGB distance) so the ring and
the rising arrow keep their anti-aliased edges instead of going crunchy at
header size.

This is still a raster lift of a low-resolution original. A proper vector
redraw — a ring, three bars, a zigzag and an arrow, all simple geometry — is
worth doing the moment the client can supply or approve one.
"""

from PIL import Image
import numpy as np
import os

ROOT = os.path.join(os.path.dirname(__file__), "..")
SRC = os.path.join(ROOT, "_source", "supplied-2026-09-06", "logo-supplied.jpeg")
OUT = os.path.join(ROOT, "public", "images", "brand")

BG = np.array([186.0, 197.0, 203.0])   # sampled: the flat supplied ground
EDGE_CROP = (9, 9, 3, 3)               # the dark border on the supplied file
WORDMARK_TOP = 819                     # first empty row under the emblem


def keyed(im):
    a = np.asarray(im).astype(np.float32)
    d = np.sqrt(((a - BG) ** 2).sum(axis=2))
    alpha = np.clip((d - 26.0) / 34.0, 0, 1)
    return Image.fromarray(np.dstack([a, alpha * 255.0]).astype(np.uint8), "RGBA")


def tight(rgba, box=None):
    if box:
        rgba = rgba.crop(box)
    al = np.asarray(rgba)[:, :, 3]
    ys = np.where((al > 40).sum(axis=1) > 3)[0]
    xs = np.where((al > 40).sum(axis=0) > 3)[0]
    return rgba.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))


def main():
    os.makedirs(OUT, exist_ok=True)
    im = Image.open(SRC).convert("RGB")
    left, top, right, bottom = EDGE_CROP
    im = im.crop((left, top, im.width - right, im.height - bottom))
    rgba = keyed(im)

    tight(rgba).save(os.path.join(OUT, "logo.png"))

    mark = tight(rgba, (0, 0, rgba.width, WORDMARK_TOP))
    mark = mark.resize((512, round(512 * mark.height / mark.width)), Image.LANCZOS)
    mark.save(os.path.join(OUT, "mark.png"))

    print("wrote logo.png and mark.png")


if __name__ == "__main__":
    main()
