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
}

BOLD_RE = re.compile(r"\*\*([^*]+)\*\*")
CODE_RE = re.compile(r"`([^`]+)`")


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
    text = linkify(text)
    text = BOLD_RE.sub(r"<strong>\1</strong>", text)
    text = CODE_RE.sub(r"<code>\1</code>", text)
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
    source = (project / "PRD.md").read_text(encoding="utf-8")
    output = ROOT / "hhhprd-site" / f"prd-{slug}.html"
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
    blockquote{{margin:12px 0;padding:10px 14px;background:#fff8e8;border-left:3px solid #d4941e}}
    code{{background:#f1f4f8;padding:1px 5px;border-radius:4px}}pre code{{background:transparent;padding:0;border-radius:0;color:inherit}}pre{{overflow:auto;background:#101828;
    color:#eef2f7;padding:16px;border-radius:8px}}.mermaid{{background:#fff;border:1px solid var(--line);
    border-radius:8px;padding:16px;overflow:auto}}.top{{display:flex;gap:14px;margin-bottom:18px}}
    .top a{{text-decoration:none;font-weight:600}}
    @media(max-width:700px){{main{{padding:16px 10px}}article{{padding:20px 16px}}}}
  </style>
</head>
<body><main>
  <div class="top"><a href="index.html">← 返回项目入口</a><a href="../projects/{slug}/PRD.md">查看 Markdown 源文件</a></div>
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


if __name__ == "__main__":
    main()

