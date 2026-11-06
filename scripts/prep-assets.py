"""One-off: turn the source PNGs into web assets."""
import sys
from PIL import Image, ImageChops

logo_src, hero_src, out = sys.argv[1], sys.argv[2], sys.argv[3]

# Logo: key white to alpha (soft, keeps antialiased edges and the orange glow)
im = Image.open(logo_src).convert("RGB")
px = im.load()
w, h = im.size
rgba = Image.new("RGBA", im.size)
op = rgba.load()
for y in range(h):
    for x in range(w):
        r, g, b = px[x, y]
        m = min(r, g, b)
        a = 255 - m  # whiteness -> transparency
        if a <= 6:
            op[x, y] = (0, 0, 0, 0)
            continue
        # un-premultiply against white
        f = 255.0 / a
        nr = max(0, min(255, round(255 - (255 - r) * f)))
        ng = max(0, min(255, round(255 - (255 - g) * f)))
        nb = max(0, min(255, round(255 - (255 - b) * f)))
        op[x, y] = (nr, ng, nb, a)
bbox = rgba.getchannel("A").point(lambda v: 255 if v > 20 else 0).getbbox()
logo = rgba.crop(bbox)
logo.save(f"{out}/logo.png", optimize=True)
print("logo", logo.size, "bbox", bbox)

# Mark only (the Z + iron + ellipse): left part up to the start of the wordmark
mark_w = int(logo.size[0] * 0.27)
mark = logo.crop((0, 0, mark_w, logo.size[1]))
mb = mark.getchannel("A").point(lambda v: 255 if v > 20 else 0).getbbox()
mark = mark.crop(mb)
mark.save(f"{out}/mark.png", optimize=True)
print("mark", mark.size)

# Favicon/icon: mark centred on a square
s = max(mark.size) + 40
sq = Image.new("RGBA", (s, s), (0, 0, 0, 0))
sq.paste(mark, ((s - mark.size[0]) // 2, (s - mark.size[1]) // 2), mark)
sq.resize((512, 512), Image.LANCZOS).save(f"{out}/icon.png")

# Hero
hero = Image.open(hero_src).convert("RGB")
hero.save(f"{out}/hero.jpg", quality=90, optimize=True, progressive=True)
print("hero", hero.size)
