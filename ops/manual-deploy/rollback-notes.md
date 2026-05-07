# Rollback notes

Derniere mise a jour : 2026-03-20

## Theorie

1. SSH sur `prod-web-01`.
2. Verifier le dossier precedent dans `/var/www/loueunechevre/releases`.
3. Changer le symlink `current`.
4. Restart API.
5. Reload nginx.

## Commandes notees par Marc

```bash
cd /var/www/loueunechevre
ls -lah releases
ln -sfn releases/2026-02-10-2215 current
cd current
npm install --omit=dev
systemctl restart loueunechevre-api
systemctl reload nginx
```

## Problemes connus

- pas de convention fiable pour le nom des releases ;
- certains hotfixs ont ete faits directement dans `current` ;
- on ne sait pas si `npm install` modifie le lock en prod ;
- la base de donnees future devra avoir son propre rollback.

## Test de rollback

Jamais fait de bout en bout.
