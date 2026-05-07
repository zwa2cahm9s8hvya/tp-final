# Utilisation d'un serveur web léger
FROM nginx:alpine

# Copie des fichiers du projet dans le dossier public du serveur

COPY ./apps/web/* /usr/share/nginx/html

RUN npm npm install
RUN npm run dev:api
RUN npm run dev:web

COPY . /usr/share/nginx/html


# Le port par défaut de Nginx
EXPOSE 80
