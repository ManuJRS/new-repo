FROM node:18-alpine

# Instalar dependencias del sistema necesarias para compilar módulos nativos
RUN apk add --no-cache build-base gcc autoconf automake libtool zlib-dev libpng-dev vips-dev > /dev/null 2>&1

WORKDIR /opt/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código del proyecto
COPY . .

# Entorno de desarrollo para compilar
ENV NODE_ENV=development

# Compilar el panel de administración
RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "develop"]