# Lleva las PNG exportadas a 2x a su tamaño final con buen remuestreo.  Uso: python3 achicar.py
import glob
from PIL import Image, ImageFilter
for f in glob.glob('export/**/*.png', recursive=True):
    im = Image.open(f)
    if im.width in (2160,):
        im = im.convert('RGB').resize((im.width // 2, im.height // 2), Image.LANCZOS)
        im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
        im.save(f, optimize=True)
