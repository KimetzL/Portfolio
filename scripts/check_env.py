import os

possible_locations = [
    r"C:\Program Files\nodejs",
    r"C:\Program Files (x86)\nodejs",
    r"C:\Users\KIMETZ\AppData\Roaming\nvm",
    r"C:\Users\KIMETZ\AppData\Local\fnm_data",
    r"C:\Users\KIMETZ\.fnm",
    r"C:\Users\KIMETZ\.nvm",
    r"C:\Users\KIMETZ\.volta\bin",
    r"C:\ProgramData\chocolatey\bin",
    r"C:\ProgramData\chocolatey\lib\nodejs",
    r"C:\ProgramData\nvm",
    r"C:\Users\KIMETZ\AppData\Local\Programs\node",
]

print("--- SCANNING NODE LOCATIONS ---")
found_any = False
for loc in possible_locations:
    if os.path.exists(loc):
        print(f"Directory EXISTS: {loc}")
        files = os.listdir(loc)
        print(f"   Contents: {files[:10]}")
        found_any = True

if not found_any:
    print("NO standard Node.js directory exists on this system!")
