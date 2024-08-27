import os
import sys
import re

import packaging.version

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))

def update_pyproject_version(pyproject_path: str, new_version: str) -> None:
    """Update the version in pyproject.toml."""
    filepath = os.path.join(BASE_DIR, pyproject_path)
    with open(filepath, 'r') as file:
        content = file.read()

    # Regex to match the version line under [tool.poetry]
    pattern = re.compile(r'(?<=^version = ")[^"]+(?=")', re.MULTILINE)

    if not pattern.search(content):
        raise Exception(f'Project version not found in "{filepath}"')

    content = pattern.sub(new_version, content)

    with open(filepath, 'w') as file:
        file.write(content)


def verify_pep440(version):
    """
    Verify if version is PEP440 compliant.

    https://github.com/pypa/packaging/blob/16.7/packaging/version.py#L191
    """

    try:
        return packaging.version.Version(version)
    except packaging.version.InvalidVersion as e:
        raise e

def main() -> None:
    if len(sys.argv) != 2:
        raise Exception('New version not specified')
    new_version = sys.argv[1]
    verify_pep440(new_version)
    update_pyproject_version("pyproject.toml", new_version)
    update_pyproject_version("src/backend/base/pyproject.toml", new_version)

if __name__ == "__main__":
    main()
