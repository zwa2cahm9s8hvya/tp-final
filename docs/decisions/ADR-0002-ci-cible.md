# ADR-0002 - Livraison automatisee a cadrer

Date : 2026-04-02

## Contexte

La livraison se fait encore a la main. La nouvelle equipe va devoir proposer une pipeline fiable, mais l'equipe historique n'a pas voulu basculer le deploiement sans rollback clair.

## Decision provisoire

Ne pas activer de deploiement automatique tant que le fonctionnement cible n'est pas valide par l'equipe.

## Points a trancher

- controles obligatoires avant merge ;
- difference entre verification applicative et verification infrastructure ;
- strategie d'image conteneur ;
- environnement de staging ;
- gestion des secrets ;
- approbation production ;
- verification de service apres deploiement ;
- lien avec monitoring et rollback.

## Dette

Le fichier `.github/workflows/deploy-prod.yml.disabled` est laisse comme trace d'une tentative abandonnee.
