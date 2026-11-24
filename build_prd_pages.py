#!/usr/bin/env python3
"""Build local HTML pages from project Markdown files."""

import html
import re
from pathlib import Path

ROOT = Path(__file__).parent
PROJECTS = {
    "referrals-rewards": "Referrals & Rewards",
    "first-contact": "引入首跟节点&首跟看板",
    "first-contact-concise": "引入首跟节点&首跟看板-2",
    "follow-up-funnel": "管理看板新增跟进漏斗",
    "crm-org-data-permissions": "CRM组织架构&数据权限",
    "crm-org-data-permissions-phase2": "CRM组织数据权限二期",
    "referral-growth-mvp": "拉新裂变mvp",
    "crm-line-messaging": "CRM 多渠道消息发送（LINE 首发）",
    "user-consultation-lead": "用户咨询预约时间",
    "outbound-capability": "外呼能力一期",
    "crm-lead-quality-analysis": "CRM 线索质量分析",
    "crm-learning-plan-progress": "CRM学习计划与课程进度",
    "crm-consultation-meeting": "Lark咨询会议与用户详情回写",
    "paused-follow-up-direct-outcome": "移除冗余跟进流程",
    "crm-operating-closure": "CC 快捷工作队列",
    "formal-course-level": "已付费列表调整正式课等级",
    "cc-activity-dashboard": "CC活跃度看板",
}
STATIC_ARCHITECTURE_PAGES = {
    "call-center-self-built-roadmap.html",
    "crm-operating-closure.html",
}

BOLD_RE = re.compile(r"\*\*([^*]+)\*\*")
CODE_RE = re.compile(r"`([^`]+)`")
IMAGE_RE = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")
CHANGE_TAGS = {
    "<ins>": "\ue000",
    "</ins>": "\ue001",
    "<del>": "\ue002",
    "</del>": "\ue003",
}


def linkify(text):
    """Replace Markdown links without a backtracking-prone regular expression."""
    output = []
    cursor = 0
    while True:
        start = text.find("[", cursor)
        if start == -1:
            output.append(html.escape(text[cursor:], quote=False))
            break
        label_end = text.find("](", start + 1)
        url_end = text.find(")", label_end + 2) if label_end != -1 else -1
        if label_end == -1 or url_end == -1:
            output.append(html.escape(text[cursor:], quote=False))
            break
        output.append(html.escape(text[cursor:start], quote=False))
        label = text[start + 1:label_end]
        url = text[label_end + 2:url_end]
        output.append(
            f'<a href="{html.escape(url, quote=True)}" target="_blank" rel="noopener">'
            f"{html.escape(label, quote=False)}</a>"
        )
        cursor = url_end + 1
    return "".join(output)


def inline(text):
    images = []

    def stash_image(match):
        images.append((match.group(1), match.group(2)))
        return f"\ue100{len(images) - 1}\ue101"

    text = IMAGE_RE.sub(stash_image, text)
    for source, placeholder in CHANGE_TAGS.items():
        text = text.replace(source, placeholder)
    text = linkify(text)
    text = BOLD_RE.sub(r"<strong>\1</strong>", text)
    text = CODE_RE.sub(r"<code>\1</code>", text)
    replacements = {"\ue000": "<ins>", "\ue001": "</ins>", "\ue002": "<del>", "\ue003": "</del>"}
    for placeholder, rendered in replacements.items():
        text = text.replace(placeholder, rendered)
    for index, (alt, source) in enumerate(images):
        text = text.replace(
            f"\ue100{index}\ue101",
            f'<img class="document-image" src="{html.escape(source, quote=True)}" '
            f'alt="{html.escape(alt, quote=True)}">',
        )
    return text


def markdown_to_html(markdown):
    lines = markdown.splitlines()
    output = []
    index = 0
    while index < len(lines):
        stripped = lines[index].strip()
        if not stripped:
            index += 1
            continue
        if stripped.startswith("```"):
            language = stripped[3:].strip()
            index += 1
            block = []
            while index < len(lines) and not lines[index].strip().startswith("```"):
                block.append(lines[index])
                index += 1
            index += 1
            body = html.escape("\n".join(block))
            if language == "mermaid":
                output.append(f'<div class="mermaid">{body}</div>')
            else:
                output.append(f'<pre><code class="{html.escape(language)}">{body}</code></pre>')
        elif stripped.startswith("#### "):
            output.append(f"<h5>{inline(stripped[5:])}</h5>")
            index += 1
        elif stripped.startswith("### "):
            output.append(f"<h4>{inline(stripped[4:])}</h4>")
            index += 1
        elif stripped.startswith("## "):
            output.append(f"<h3>{inline(stripped[3:])}</h3>")
            index += 1
        elif stripped.startswith("# "):
            output.append(f"<h2>{inline(stripped[2:])}</h2>")
            index += 1
        elif stripped.startswith("|"):
            rows = []
            while index < len(lines) and lines[index].strip().startswith("|"):
                cells = [cell.strip() for cell in lines[index].strip().strip("|").split("|")]
                if not all(re.fullmatch(r":?-{3,}:?", cell) for cell in cells):
                    rows.append(cells)
                index += 1
            if rows:
                table = ["<table><thead><tr>"]
                table.extend(f"<th>{inline(cell)}</th>" for cell in rows[0])
                table.append("</tr></thead><tbody>")
                for row in rows[1:]:
                    table.append("<tr>" + "".join(f"<td>{inline(cell)}</td>" for cell in row) + "</tr>")
                table.append("</tbody></table>")
                output.append("".join(table))
        elif stripped.startswith("> "):
            quote = []
            while index < len(lines) and lines[index].strip().startswith(">"):
                quote.append(lines[index].strip().lstrip(">").strip())
                index += 1
            output.append("<blockquote>" + "<br>".join(inline(line) for line in quote) + "</blockquote>")
        elif re.match(r"^\d+\.\s", stripped):
            items = []
            while index < len(lines) and re.match(r"^\d+\.\s", lines[index].strip()):
                items.append(re.sub(r"^\d+\.\s+", "", lines[index].strip()))
                index += 1
            output.append("<ol>" + "".join(f"<li>{inline(item)}</li>" for item in items) + "</ol>")
        elif stripped.startswith("- "):
            items = []
            while index < len(lines) and lines[index].strip().startswith("- "):
                items.append(lines[index].strip()[2:])
                index += 1
            output.append("<ul>" + "".join(f"<li>{inline(item)}</li>" for item in items) + "</ul>")
        else:
            paragraph = []
            while index < len(lines):
                current = lines[index].strip()
                if not current or re.match(r"^(#{1,4}\s|\d+\.\s|-\s|\||>\s|```)", current):
                    break
                paragraph.append(current)
                index += 1
            if not paragraph:
                index += 1
                continue
            output.append("<p>" + inline(" ".join(paragraph)) + "</p>")
    return "\n".join(output)


def build_project(slug, title):
    project = ROOT / "projects" / slug
    source = (project / "prd" / "PRD.md").read_text(encoding="utf-8")
    output = ROOT / "hhhprd-site" / f"prd-{slug}.html"
    change_css = (
        "\n    ins{color:#d93025;text-decoration:none;font-weight:600}"
        "\n    del{color:#6b7280;text-decoration-thickness:1.5px}"
        if "<ins>" in source or "<del>" in source
        else ""
    )
    source = re.sub(r"\A---\s*\n.*?\n---\s*\n?", "", source, count=1, flags=re.S)
    content = markdown_to_html(source)
    page = f"""<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{html.escape(title)} · PRD</title>
  <style>
    :root{{--bg:#f4f6f9;--card:#fff;--ink:#17202a;--muted:#667085;--line:#dfe5ec;--blue:#2563eb}}
    *{{box-sizing:border-box}}body{{margin:0;background:var(--bg);color:var(--ink);
    font:15px/1.75 -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif}}
    main{{max-width:1040px;margin:0 auto;padding:42px 24px 80px}}article{{background:var(--card);
    border:1px solid var(--line);border-radius:14px;padding:34px}}h2,h3,h4{{line-height:1.35}}
    h2{{font-size:28px;margin:0 0 20px}}h3{{font-size:21px;margin:30px 0 10px}}h4{{font-size:17px;margin:22px 0 8px}}
    p{{margin:10px 0}}a{{color:var(--blue)}}table{{width:100%;border-collapse:collapse;margin:14px 0;font-size:14px}}
    th,td{{border:1px solid var(--line);padding:8px 10px;text-align:left;vertical-align:top}}th{{background:#f7f9fc}}
    blockquote{{margin:12px 0;padding:10px 14px;background:#fff8e8;border-left:3px solid #d4941e}}{change_css}
    code{{background:#f1f4f8;padding:1px 5px;border-radius:4px}}pre code{{background:transparent;padding:0;border-radius:0;color:inherit}}pre{{overflow:auto;background:#101828;
    color:#eef2f7;padding:16px;border-radius:8px}}.mermaid{{background:#fff;border:1px solid var(--line);
    border-radius:8px;padding:16px;overflow:auto}}.top{{display:flex;gap:14px;margin-bottom:18px}}
    .top a{{text-decoration:none;font-weight:600}}
    @media(max-width:700px){{main{{padding:16px 10px}}article{{padding:20px 16px}}}}
  </style>
</head>
<body><main>
  <div class="top"><a href="index.html">← 返回项目入口</a><a href="../projects/{slug}/prd/PRD.md">查看 Markdown 源文件</a></div>
  <article>{content}</article>
</main>
<script type="module">
  import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
  mermaid.initialize({{ startOnLoad: true, theme: "neutral" }});
</script>
</body></html>"""
    output.write_text(page, encoding="utf-8")
    print(f"Generated {output}")


def main():
    for slug, title in PROJECTS.items():
        build_project(slug, title)
    build_static_architecture_pages()
    build_architecture()


def build_static_architecture_pages():
    source_dir = ROOT / "shared" / "architecture"
    output_dir = ROOT / "hhhprd-site"
    for filename in STATIC_ARCHITECTURE_PAGES:
        source = source_dir / filename
        output = output_dir / filename
        output.write_bytes(source.read_bytes())
        print(f"Copied {output}")


def build_architecture():
    source_path = ROOT / "shared" / "architecture" / "target-system-architecture.md"
    output = ROOT / "hhhprd-site" / "system-architecture.html"
    source = source_path.read_text(encoding="utf-8")
    content = markdown_to_html(source)
    page = f"""<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Dino 业务系统整体架构</title>
  <style>
    :root{{--bg:#f4f6f9;--card:#fff;--ink:#17202a;--muted:#667085;--line:#dfe5ec;--blue:#2563eb}}
    *{{box-sizing:border-box}}body{{margin:0;background:var(--bg);color:var(--ink);
    font:15px/1.75 -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif}}
    main{{max-width:1400px;margin:0 auto;padding:42px 24px 80px}}article{{background:var(--card);
    border:1px solid var(--line);border-radius:14px;padding:34px}}h2,h3,h4{{line-height:1.35}}
    h2{{font-size:30px;margin:0 0 20px}}h3{{font-size:22px;margin:34px 0 12px}}h4{{font-size:17px;margin:22px 0 8px}}
    p{{margin:10px 0}}a{{color:var(--blue)}}blockquote{{margin:12px 0;padding:10px 14px;
    background:#fff8e8;border-left:3px solid #d4941e;color:#5c4a24}}table{{width:100%;
    border-collapse:collapse;margin:14px 0;font-size:14px}}th,td{{border:1px solid var(--line);
    padding:9px 11px;text-align:left;vertical-align:top}}th{{background:#f7f9fc}}
    code{{background:#f1f4f8;padding:1px 5px;border-radius:4px}}.document-image{{display:block;
    width:100%;height:auto;margin:18px 0;border-radius:12px}}.top{{display:flex;gap:14px;
    margin-bottom:18px}}.top a{{text-decoration:none;font-weight:600}}
    @media(max-width:700px){{main{{padding:16px 10px}}article{{padding:20px 16px}}}}
  </style>
</head>
<body><main>
  <div class="top"><a href="index.html">← 返回项目入口</a>
  <a href="https://github.com/h3-ai-lab/hhhprd/blob/main/shared/architecture/target-system-architecture.md">查看 Markdown 源文件</a></div>
  <article>{content}</article>
</main></body></html>"""
    output.write_text(page, encoding="utf-8")
    print(f"Generated {output}")


if __name__ == "__main__":
    main()

