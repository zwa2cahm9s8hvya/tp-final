# Utilisation d'un serveur web léger
FROM nginx:alpine

# Copie des fichiers du projet dans le dossier public du serveur
COPY . /usr/share/nginx/html

# Le port par défaut de Nginx
EXPOSE 80
