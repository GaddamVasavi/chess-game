# Build script to generate comprehensive chess platform modules
import os
import textwrap

ROOT = r'c:\github projects\chess game'

def ensure_dir(path):
    os.makedirs(path, exist_ok=True)

def write_ts(rel_path, content):
    full_path = os.path.join(ROOT, rel_path)
    ensure_dir(os.path.dirname(full_path))
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')

print('Builder helper initialized')
