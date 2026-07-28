import os
from PIL import Image

image_path = "c:/Portfolio/public/images/Chatbot.jpg"
backup_path = "c:/Portfolio/public/images/Chatbot_backup.jpg"

if os.path.exists(backup_path):
    img = Image.open(backup_path)
else:
    img = Image.open(image_path)
    img.save(backup_path)

width, height = img.size
print(f"Original image size: {width}x{height}", flush=True)

# Sample background color near top-left corner
bg_color = img.getpixel((10, 10))
print(f"Sampled background color: {bg_color}", flush=True)

# Create a 16:9 canvas where top margin is increased by 35% so the robot head has plenty of space at top
new_width = max(width, 1600)
new_height = int(new_width * (9 / 16))

# If original height is tall, scale original image proportionally so it fits with headroom
scale_factor = min((new_height * 0.8) / height, (new_width * 0.8) / width)
scaled_width = int(width * scale_factor)
scaled_height = int(height * scale_factor)

img_resized = img.resize((scaled_width, scaled_height), Image.Resampling.LANCZOS)

# Create new background canvas
new_img = Image.new(img.mode, (new_width, new_height), bg_color)

# Offset down so robot head is completely visible with generous top margin
offset_x = (new_width - scaled_width) // 2
offset_y = (new_height - scaled_height) // 2 + 30 # Push graphic DOWN to reveal robot head

new_img.paste(img_resized, (offset_x, offset_y))
new_img.save(image_path, quality=95)
print(f"New reframed Chatbot.jpg saved: {new_width}x{new_height}", flush=True)
