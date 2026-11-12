#!/usr/bin/env python3
"""Validate the shared workspace and project artifact structure."""

from __future__ import annotations

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[4]
SHARED_REQUIRED = [
    "shared/workflows/prd-2.0.md",
    "shared/workflows/document-change.md",
    "shared/skills/crm-prd-authoring/SKILL.md",
    "shared/skills/crm-prototype-authoring/SKILL.md",
    "shared/skills/crm-artifact-validation/SKILL.md",
    "shared/rag/sources.yaml",
    "shared/memory/README.md",
]
PROJECT_REQUIRED = [
    "README.md",
    "project.yaml",
    "workflow/overrides.md",
    "skills/README.md",
    "rag/sources.yaml",
    "memory/project-memory.md",
    "prd/PRD.md",
]
PROTOTYPE_LINK = re.compile(r"\[打开完整交互原型\]\((https://[^)]+)\)")
BANNED_HEADINGS = [
    "## 待确认",
    "## 已确认",
    "## 验收标准",
    "## 测试用例",
    "## 测试计划",
]


def fail(errors: list[str]) -> int:
    if not errors:
        print("Validation passed.")
        return 0
    print("Validation failed:")
    for error in errors:
        print(f"- {error}")
    return 1


def main() -> int:
    errors: list[str] = []

    for relative in SHARED_REQUIRED:
        if not (ROOT / relative).is_file():
            errors.append(f"Missing shared file: {relative}")

    skills_root = ROOT / "shared" / "skills"
    for skill in sorted(path for path in skills_root.iterdir() if path.is_dir()):
        skill_file = skill / "SKILL.md"
        if not skill_file.is_file():
            errors.append(f"{skill.relative_to(ROOT)}: missing SKILL.md")
            continue
        frontmatter = skill_file.read_text(encoding="utf-8").split("---", 2)
        if len(frontmatter) < 3 or "name:" not in frontmatter[1] or "description:" not in frontmatter[1]:
            errors.append(f"{skill_file.relative_to(ROOT)}: invalid frontmatter")

    projects_root = ROOT / "projects"
    for project in sorted(path for path in projects_root.iterdir() if path.is_dir()):
        for relative in PROJECT_REQUIRED:
            if not (project / relative).is_file():
                errors.append(f"{project.relative_to(ROOT)}: missing {relative}")

        prd = project / "prd" / "PRD.md"
        if prd.is_file():
            text = prd.read_text(encoding="utf-8")
            if len(PROTOTYPE_LINK.findall(text)) != 1:
                errors.append(f"{prd.relative_to(ROOT)}: expected exactly one prototype URL")
            for heading in BANNED_HEADINGS:
                if heading in text:
                    errors.append(f"{prd.relative_to(ROOT)}: forbidden heading {heading}")

        if (project / "PRD.md").exists():
            errors.append(f"{project.relative_to(ROOT)}: legacy root PRD.md still exists")

        prototype = project / "prototype" / "index.html"
        if not prototype.is_file():
            errors.append(f"{project.relative_to(ROOT)}: missing prototype/index.html")

    return fail(errors)


if __name__ == "__main__":
    sys.exit(main())
