# PROCESS DEPLOIEMENT PROD - recopie du carnet de Marc

> Ancienne procedure conservee pour comprendre les deploiements realises avant la standardisation du process.

## Quand deployer

- plutot apres 20h ;
- prevenir Nina ;
- verifier que personne n'est en train de faire une demo client ;
- eviter le vendredi sauf si paiement casse.

## Etapes Marc

```bash
ssh marc@prod-web-01
cd /srv/loueunechevre
git pull origin main
npm install
npm --prefix services/api test
npm --prefix apps/web run build
cp -R apps/web/dist/* /var/www/loueunechevre/
sudo systemctl restart loue-api
curl http://localhost:3001/health
```

## Si ca casse

```bash
git log --oneline -5
git checkout HEAD~1
npm install
npm --prefix apps/web run build
sudo systemctl restart loue-api
```

Ne pas oublier de revenir sur `main` apres. On l'a deja oublie une fois.

## Verifications manuelles

- ouvrir la home ;
- faire un faux devis avec 3000 m2 ;
- verifier que le mail support arrive ;
- regarder vite fait `journalctl -u loue-api -n 100`.

## Mots de passe

Dans le coffre partage. Si le coffre ne marche pas, demander a Marc. Ne pas mettre dans Git.
