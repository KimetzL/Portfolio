import os

target_files = {"node.exe", "npm.cmd", "npm.ps1"}
found = {}

search_roots = [
    "C:\\Program Files",
    "C:\\Program Files (x86)",
    "C:\\Users\\KIMETZ\\AppData",
    "C:\\nvm",
    "C:\\fnm",
    "C:\\ProgramData",
]

for root_dir in search_roots:
    if not os.path.exists(root_dir):
        continue
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.lower() in target_files:
                full_path = os.path.join(root, file)
                print(f"FOUND: {file} -> {full_path}")
                found[file] = full_path

if not found:
    print("No direct Node/npm found in standard roots, scanning root C:\\...")
    for root, dirs, files in os.walk("C:\\"):
        # Skip Windows system files
        if any(skip in root.lower() for skip in ["c:\\windows", "c:\\$recycle.bin", "c:\\system volume information"]):
            continue
        for file in files:
            if file.lower() in target_files:
                full_path = os.path.join(root, file)
                print(f"FOUND: {file} -> {full_path}")
