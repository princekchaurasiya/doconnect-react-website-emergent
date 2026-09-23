#!/bin/bash
# Run ON Venture server via SSH (optional). Creates backup outside document root.
set -euo pipefail
HOME_DIR="${HOME:-/home/smbrckdy}"
DOCROOT="${HOME_DIR}/doconnect.org"
STAMP=$(date +%Y-%m-%d)
BACKUP="${HOME_DIR}/doconnect-php-backup-${STAMP}.zip"

if [[ ! -d "$DOCROOT" ]]; then
  echo "Document root not found: $DOCROOT"
  exit 1
fi

cd "$DOCROOT"
zip -r "$BACKUP" . -x "*.zip"
echo "Backup written: $BACKUP"
echo "Next: empty $DOCROOT and upload frontend/deploy/doconnect-production.zip contents"
