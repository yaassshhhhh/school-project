import os
from PIL import Image
from pathlib import Path

# Paths
OUTPUT_DIR = Path(r"d:\SCHOOL WEBSITE\oxford-school\public\Todays work\home gallery\Converted_WebP")

def optimize_images():
    if not OUTPUT_DIR.exists():
        print(f"Directory not found: {OUTPUT_DIR}")
        return

    # Supported extensions
    extensions = ['*.webp']
    
    files = []
    for ext in extensions:
        files.extend(OUTPUT_DIR.glob(ext))
        
    if not files:
        print(f"No WebP images found in {OUTPUT_DIR}")
        return

    MAX_SIZE = (1920, 1920)
    QUALITY = 75

    print(f"Found {len(files)} WebP images. Starting optimization...")

    for file_path in files:
        try:
            original_size = file_path.stat().st_size / 1024 # KB
            
            with Image.open(file_path) as img:
                # Resize if needed
                if img.width > MAX_SIZE[0] or img.height > MAX_SIZE[1]:
                    img.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
                
                # Save it back (overwrite with optimized version)
                # method=6 for best compression
                img.save(file_path, "WEBP", quality=QUALITY, method=6)
                
            new_size = file_path.stat().st_size / 1024 # KB
            
            print(f"Optimized: {file_path.name}")
            print(f"  Size: {original_size:.2f}KB -> {new_size:.2f}KB ({100 - (new_size/original_size*100):.1f}% reduction)")
                
        except Exception as e:
            print(f"Error optimizing {file_path.name}: {e}")

    print("\nOptimization completed!")

if __name__ == "__main__":
    optimize_images()
