#!/usr/bin/env bash
# Idempotent production deploy for ca-serv.
# Called by GitHub Actions self-hosted runner or manually.
set -euo pipefail

APP_DIR="${WESAN_APP_DIR:-/var/www/wesan}"
BUN="${BUN_BIN:-/home/canakyuz/.bun/bin/bun}"
PORT="${PORT:-3002}"

cd "$APP_DIR"

if [[ -d .git ]]; then
  git fetch origin main
  git reset --hard origin/main
fi

"$BUN" install --frozen-lockfile 2>/dev/null || "$BUN" install
"$BUN" run build

sudo systemctl restart wesan

# Wait for Next.js to bind
for i in $(seq 1 15); do
  if curl -sf "http://127.0.0.1:${PORT}/" >/dev/null 2>&1; then
    echo "Deploy OK — http://127.0.0.1:${PORT}"
    exit 0
  fi
  sleep 1
done

echo "Deploy failed — service did not respond on port ${PORT}" >&2
journalctl -u wesan -n 20 --no-pager >&2 || true
exit 1
