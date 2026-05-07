#!/usr/bin/env sh
set -eu

# Ancien script prod. La base relationnelle devait arriver avec le futur CRM,
# mais le serveur prod avait deja ce script prepare.

BACKUP_DIR="${BACKUP_DIR:-/var/backups/loueunechevre}"
STAMP="$(date +%Y%m%d-%H%M%S)"

mkdir -p "$BACKUP_DIR"

if [ -z "${DATABASE_URL:-}" ]; then
  echo "DATABASE_URL manquant, backup saute"
  exit 0
fi

pg_dump "$DATABASE_URL" > "$BACKUP_DIR/loueunechevre-$STAMP.sql"
find "$BACKUP_DIR" -type f -name "loueunechevre-*.sql" -mtime +14 -delete

echo "Backup termine: $BACKUP_DIR/loueunechevre-$STAMP.sql"
