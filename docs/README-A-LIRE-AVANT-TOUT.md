# README a lire avant tout

Ce document est l'ancien point d'entree projet. Il a ete ecrit vite, avant la levee de fonds.

## Qui fait quoi

- Nina gere le code web, l'API et les demandes produit urgentes.
- Marc gere le serveur, les backups et les deploiements.
- Si Marc n'est pas la, ne pas deployer en prod sauf urgence client.

## Lancer en local

Normalement :

```bash
npm install
npm run dev:web
npm run dev:api
```

Si ca ne marche pas, demander a Nina. Elle a peut-etre oublie de pousser son `.env`.

## Prod

Voir `ops/manual-deploy/PROCESS_DEPLOIEMENT_MAIN.md`.

Attention : ce fichier n'est peut-etre plus a jour depuis le changement de VPS en fevrier.

## TODO un jour

- vraie CI ;
- tests web ;
- staging stable ;
- monitoring ;
- docs propres ;
- ne plus deployer depuis le laptop de Marc.
