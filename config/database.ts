// ./config/database.ts
export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  const connections: Record<string, any> = {
    sqlite: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },

    postgres: {
      client: 'postgres',
      connection: env('DATABASE_URL')
        ? {
            connectionString: env('DATABASE_URL'),
            ssl: env.bool('DATABASE_SSL', false)
              ? { ca: env('DATABASE_CA', undefined) }
              : false,
          }
        : {
            host: env('DATABASE_HOST', 'postgres'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'strapi_db'),
            user: env('DATABASE_USERNAME', 'strapi'),
            password: env('DATABASE_PASSWORD', 'strapipassword'),
            ssl: env.bool('DATABASE_SSL', false),
          },
    },
  };

  return {
    connection: connections[client],
  };
};
