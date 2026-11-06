"""Cut the Z + iron mark out of the keyed logo (wordmark overlaps the iron's x range)."""
import sys
from PIL import Image, ImageDraw
logo = Image.open(sys.argv[1]).convert("RGBA")
w, h = logo.size
mask = Image.new("L", logo.size, 0)
d = ImageDraw.Draw(mask)
d.rectangle((0, 0, 405, h), fill=255)
d.rectangle((405, 0, 478, 172), fill=255)
d.rectangle((405, 270, 478, h), fill=255)  # orange line under wordmark
out = Image.new("RGBA", logo.size, (0, 0, 0, 0))
out.paste(logo, (0, 0), mask)
out = out.crop(out.getchannel("A").point(lambda v: 255 if v > 20 else 0).getbbox())
out.save(sys.argv[2] + "/mark.png", optimize=True)
s = max(out.size) + 24
sq = Image.new("RGBA", (s, s), (0, 0, 0, 0))
sq.paste(out, ((s - out.size[0]) // 2, (s - out.size[1]) // 2), out)
sq.resize((512, 512), Image.LANCZOS).save(sys.argv[2] + "/icon.png")
print(out.size)
