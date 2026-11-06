"""Social preview: the real logo centred on the page colour."""
import sys
from PIL import Image
logo = Image.open(sys.argv[1]).convert("RGBA")
og = Image.new("RGBA", (1200, 630), (246, 245, 242, 255))
w = 860
logo = logo.resize((w, round(logo.height * w / logo.width)), Image.LANCZOS)
og.alpha_composite(logo, ((1200 - w) // 2, (630 - logo.height) // 2))
og.convert("RGB").save(sys.argv[2], optimize=True)
