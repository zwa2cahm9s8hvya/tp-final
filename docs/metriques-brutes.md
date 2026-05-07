# Metriques brutes de livraison

Ce fichier n'est pas un dashboard. C'est une compilation manuelle pour preparer la reunion d'exploitation mensuelle.

## Deployments notes

| Mois | Deploys notes | Hotfixs | Rollbacks | Commentaire |
| --- | ---: | ---: | ---: | --- |
| 2025-12 | 2 | 0 | 0 | site initial |
| 2026-01 | 5 | 1 | 0 | ajout devis API |
| 2026-02 | 6 | 3 | 1 | SMTP, pricing, mobile |
| 2026-03 | 4 | 1 | 0 | docs + scripts |

## Incidents retenus

| Date | Duree estimee | Impact | Detection | Correction |
| --- | --- | --- | --- | --- |
| 2026-02-12 | 2h | mails devis absents | client/support | variable SMTP remise |
| 2026-02-24 | 1j commercial | mauvais tarif | support | test + correctif |
| 2026-03-18 | 45min | API 502 | cron/local | systemd corrige prod |

## Lead time ressenti

- petite correction texte : quelques heures ;
- bug API simple : 1 a 3 jours ;
- besoin produit avec coordination terrain : 1 a 2 semaines ;
- mobile : impossible a estimer, depend de Nina et de son Mac.

## Limites connues

Ces nombres viennent de notes manuelles et de souvenirs d'exploitation. Ils doivent etre recoupes avec les commits, les tags, les incidents et le journal de deploiement avant d'en faire des indicateurs de pilotage.
