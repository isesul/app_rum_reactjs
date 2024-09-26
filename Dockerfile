# Usa una imagen base de Node.js
FROM node:20-alpine as build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm ci

# Copia los archivos del proyecto al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine

# Copia los archivos de construcción desde la etapa anterior
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]