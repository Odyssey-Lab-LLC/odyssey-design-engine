#!/usr/bin/env python3
"""Check system file version synchronization.

This script verifies that all system files have consistent version
expectations and flags any mismatches between actual versions and
expected versions.

Usage:
    python scripts/check-system-file-sync.py

Exit codes:
    0 - All files in sync
    1 - Sync errors detected
    2 - File errors (missing files, no metadata)

Part of: Multi-Agent Governance Standard v1.1
"""

import yaml
import sys
from pathlib import Path
from typing import Dict, List, Optional

# System files to check
SYSTEM_FILES = [
    'AGENTS.md',
    'CLAUDE.md',
    'KILO.md',
    'README.md',
    'ARCHITECTURE.md'
]


def read_frontmatter(filepath: str) -> Optional[Dict]:
    """Extract YAML front matter from markdown file.
    
    Args:
        filepath: Path to markdown file
        
    Returns:
        Dictionary of front matter metadata, or None if file not found
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Check for YAML front matter
            if content.startswith('---'):
                # Find end of front matter
                yaml_end = content.find('---', 3)
                if yaml_end > 0:
                    yaml_content = content[3:yaml_end].strip()
                    return yaml.safe_load(yaml_content)
                    
    except FileNotFoundError:
        return None
    except yaml.YAMLError as e:
        print(f"⚠️  Error parsing YAML in {filepath}: {e}")
        return None
    
    return {}


def check_sync() -> int:
    """Check version synchronization across system files.
    
    Returns:
        Exit code (0 = success, 1 = sync errors, 2 = file errors)
    """
    versions = {}
    sync_errors = []
    file_errors = []
    
    print("🔍 Checking system file version synchronization...\n")
    
    # Read all versions
    for file in SYSTEM_FILES:
        meta = read_frontmatter(file)
        
        if meta is None:
            file_errors.append(f"{file} not found")
        elif not meta:
            file_errors.append(f"{file} has no YAML front matter")
        elif 'version' not in meta:
            file_errors.append(f"{file} has no version field")
        else:
            versions[file] = meta
            print(f"✓ {file}: v{meta['version']}")
    
    print()
    
    # Report file errors
    if file_errors:
        print("🚨 File Errors:\n")
        for error in file_errors:
            print(f"  ⚠️  {error}")
        print()
        print("Fix these issues before checking synchronization.")
        return 2
    
    # Check sync expectations
    for file, meta in versions.items():
        if 'synced_with' in meta:
            for dep, expected in meta['synced_with'].items():
                actual_meta = versions.get(dep, {})
                actual = actual_meta.get('version', 'MISSING')
                
                if actual != expected:
                    sync_errors.append({
                        'file': file,
                        'depends_on': dep,
                        'expected': expected,
                        'actual': actual,
                        'file_version': meta['version']
                    })
    
    # Report sync results
    if sync_errors:
        print("🚨 Version Sync Errors Detected:\n")
        
        for err in sync_errors:
            print(f"  ❌ {err['file']} (v{err['file_version']})")
            print(f"     expects {err['depends_on']} v{err['expected']}")
            print(f"     but found {err['depends_on']} v{err['actual']}")
            print()
        
        print(f"Total sync errors: {len(sync_errors)}")
        print()
        print("Action required:")
        print("  1. Review the version mismatches above")
        print("  2. Update the 'synced_with' field in affected files")
        print("  3. Or update the dependency files to expected versions")
        print("  4. Run this script again to verify")
        
        return 1
    else:
        print("✅ All system files are synchronized!\n")
        print("File versions:")
        for file, meta in sorted(versions.items()):
            version = meta.get('version', 'N/A')
            last_updated = meta.get('last_updated', 'unknown')
            print(f"  {file:20} v{version:10} (updated: {last_updated})")
        
        return 0


def main():
    """Main entry point."""
    try:
        exit_code = check_sync()
        sys.exit(exit_code)
    except KeyboardInterrupt:
        print("\n\n⚠️  Check interrupted by user")
        sys.exit(130)
    except Exception as e:
        print(f"\n\n🚨 Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(2)


if __name__ == '__main__':
    main()

