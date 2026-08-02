# Portafolio Manu Dev — CMS (Strapi)

Backend/CMS del portafolio basado en **Strapi 5**. Expone una API REST (y el panel de administración) para gestionar contenidos como home, proyectos, blog, about, layout y más.

## Cómo funciona

- **Strapi** es el CMS headless: defines content-types, cargas contenido desde el admin y el frontend consume la API.
- Los content-types viven en `src/api/` (por ejemplo `home`, `project`, `blog`, `about`, `layout`, `footer`).
- Los componentes reutilizables están en `src/components/`.
- La configuración está en `config/` (servidor, base de datos, plugins, middlewares).
- Las subidas de media usan **Cloudinary** (`@strapi/provider-upload-cloudinary`).
- Por defecto la base de datos es **PostgreSQL**. También se puede usar SQLite cambiando `DATABASE_CLIENT`.

Flujo típico:

1. Arrancas Strapi (local o con Docker).
2. Entras al admin en `http://localhost:1337/admin`.
3. Creas/editas contenido.
4. El frontend consume los endpoints públicos de la API.

## Requisitos

- **Node.js** `>= 20` y `<= 24`
- **npm** `>= 6`
- **PostgreSQL** (local o vía Docker)
- Cuenta de **Cloudinary** (opcional para desarrollo sin imágenes, necesaria para uploads)

## Instalación

```bash
# 1. Clonar e entrar al proyecto
git clone <url-del-repo>
cd new-repo

# 2. Instalar dependencias
npm install

# 3. Crear variables de entorno
cp .env.example .env
```

Edita `.env` con valores reales. Ejemplo mínimo para desarrollo:

```env
HOST=0.0.0.0
PORT=1337

APP_KEYS="key1,key2,key3,key4"
API_TOKEN_SALT="cambia_este_valor"
ADMIN_JWT_SECRET="cambia_este_valor"
TRANSFER_TOKEN_SALT="cambia_este_valor"
JWT_SECRET="cambia_este_valor"
ENCRYPTION_KEY="cambia_este_valor"

DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi_db
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapipassword
DATABASE_SSL=false

CLOUDINARY_NAME=tu_cloud_name
CLOUDINARY_KEY=tu_api_key
CLOUDINARY_SECRET=tu_api_secret
CLOUDINARY_FOLDER=portfolio_dev
```

> Si usas Docker Compose, `DATABASE_HOST` debe ser `postgres` (nombre del servicio), no `localhost`.

## Encender el proyecto

### Opción A — Solo con Docker (recomendado)

Levanta PostgreSQL + Strapi juntos:

```bash
docker compose up --build
```

- Admin: [http://localhost:1337/admin](http://localhost:1337/admin)
- API: [http://localhost:1337/api](http://localhost:1337/api)

Para detener:

```bash
docker compose down
```

### Opción B — Local (Node + Postgres)

1. Asegúrate de tener PostgreSQL corriendo y la base creada (`strapi_db`).
2. En `.env`, usa `DATABASE_HOST=localhost`.
3. Arranca en modo desarrollo:

```bash
npm run develop
```

La primera vez Strapi pedirá crear el usuario administrador.

Solo Postgres con Docker (y Strapi en local):

```bash
docker compose up postgres -d
npm run develop
```

### Producción (sin auto-reload)

```bash
npm run build
npm run start
```

## Scripts útiles

| Comando | Descripción |
| --- | --- |
| `npm run develop` | Desarrollo con auto-reload |
| `npm run build` | Compila el panel de administración |
| `npm run start` | Arranca en modo producción |
| `npm run seed:example` | Carga datos de ejemplo |

## Estructura relevante

```text
config/          # server, database, plugins, middlewares
src/api/         # content-types y controladores
src/components/  # componentes reutilizables del CMS
public/          # archivos estáticos
scripts/         # seed y utilidades
docker-compose.yml
Dockerfile
```

## Notas

- En producción se usa la config de `config/env/production/` (incluye Postgres vía `DATABASE_URL`).
- No subas el archivo `.env` al repositorio; contiene secretos.
- Documentación oficial de Strapi: [https://docs.strapi.io](https://docs.strapi.io)
