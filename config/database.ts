// ./config/database.ts
export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

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
      connection: {
        connectionString: env('DATABASE_URL'),
        ssl: env.bool('DATABASE_SSL', false)
          ? {
            ca: env('DATABASE_CA', undefined),
          }
          : false,
      },
    },
  };

  return {
    connection: connections[client],
  };
};
