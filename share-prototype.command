#!/bin/zsh
set -euo pipefail

project_root="${0:A:h}"
local_url="http://127.0.0.1:4175/hhhprd-site/"
server_pid=""

cleanup() {
  if [[ -n "$server_pid" ]]; then
    kill "$server_pid" 2>/dev/null || true
  fi
}
trap cleanup EXIT INT TERM

if ! curl --silent --show-error --fail --max-time 2 "$local_url" >/dev/null 2>&1; then
  python3 -m http.server 4175 --bind 127.0.0.1 --directory "$project_root" &
  server_pid=$!
  sleep 1
fi

echo "本地原型：$local_url"
echo "正在创建临时公网链接；终端出现 trycloudflare.com 地址后即可分享。"
echo "请保持此窗口和电脑运行。按 Control+C 停止分享。"

cloudflared tunnel --no-autoupdate --url "$local_url"
