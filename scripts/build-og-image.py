"""Builds app/opengraph-image.png (1200x630), the link-preview card.

Sakokhule's own Clay world only: putty ground, clay ink, the softened logo
blue and terracotta from `.clay` in app/globals.css, Fredoka and Quicksand,
and the client's logo mark. The words are the homepage's own. No fleet
photographs and no contract values (brand.md).

Fonts: static 600-weight TTFs cut from fonts/*-variable.woff2 with fontTools
(pass their folder as argv[1]). Run from the repo root:
    python3 scripts/build-og-image.py /path/to/ttf-folder
"""
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

FONT_DIR = sys.argv[1]
W, H = 1200, 630
PUTTY, RAISE = (243, 236, 224), (234, 224, 206)
INK, MUTE = (59, 50, 42), (116, 106, 95)
BLUE, TERRACOTTA = (81, 112, 124), (165, 85, 55)

fredoka = lambda s: ImageFont.truetype(f"{FONT_DIR}/fredoka-600.ttf", s)
quicksand = lambda s: ImageFont.truetype(f"{FONT_DIR}/quicksand-600.ttf", s)

img = Image.new("RGB", (W, H), PUTTY)


def clay(box, radius, fill):
    """A pressed clay surface: soft dark shadow below-right, light above-left."""
    x0, y0, x1, y1 = box
    for dx, dy, colour, alpha in ((8, 10, INK, 38), (-8, -8, (255, 255, 255), 200)):
        layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ImageDraw.Draw(layer).rounded_rectangle(
            (x0 + dx, y0 + dy, x1 + dx, y1 + dy), radius, fill=colour + (alpha,)
        )
        img.paste(layer.filter(ImageFilter.GaussianBlur(14)), (0, 0), layer.filter(ImageFilter.GaussianBlur(14)))
    ImageDraw.Draw(img).rounded_rectangle(box, radius, fill=fill)


def spaced(draw, xy, text, font, fill, tracking):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking
    return x


d = ImageDraw.Draw(img)

# A clay-blue block (the logo's steel ring, softened) carries the mark on a
# raised putty tile, so the card reads as Sakokhule's even at thumbnail size.
ImageDraw.Draw(img).rounded_rectangle((760, 40, 1160, 590), 72, fill=BLUE)
ImageDraw.Draw(img).rounded_rectangle((812, 165, 1108, 461), 56, fill=PUTTY)
mark = Image.open("public/images/brand/mark.png").convert("RGBA")
mark.thumbnail((216, 216), Image.LANCZOS)
img.paste(mark, (812 + (296 - mark.width) // 2, 165 + (296 - mark.height) // 2), mark)

d = ImageDraw.Draw(img)
spaced(d, (88, 96), "SAKOKHULE TRADING", quicksand(26), BLUE, 5)
y = 140
for line in ("Earth moving", "& plant hire."):
    d.text((84, y), line, font=fredoka(104), fill=INK)
    y += 112
d.text((88, y + 22), "Our own machines and operators,", font=quicksand(30), fill=MUTE)
d.text((88, y + 62), "out of Malelane, Mpumalanga.", font=quicksand(30), fill=MUTE)

# Three record tiles, as on the homepage.
x = 88
for label, value, colour in (("EST", "2016", INK), ("CIDB", "5CE · 3GB", TERRACOTTA), ("BASE", "Malelane", INK)):
    vw = d.textlength(value, font=fredoka(30))
    lw = sum(d.textlength(c, font=quicksand(17)) + 3 for c in label)
    w = int(max(vw, lw)) + 56
    clay((x, 508, x + w, 588), 26, PUTTY)
    d = ImageDraw.Draw(img)
    spaced(d, (x + 28, 519), label, quicksand(17), MUTE, 3)
    d.text((x + 28, 540), value, font=fredoka(30), fill=colour)
    x += w + 26

img.save("app/opengraph-image.png", optimize=True)
