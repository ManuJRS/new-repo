export default ({ env }) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {
                    folder: env("CLOUDINARY_FOLDER")
                },
                delete: {},
            },
            security: {
                allowedTypes: ['image/*', 'video/*', 'audio/*', 'application/pdf'],
                deniedTypes: ['application/x-sh', 'application/x-dosexec', 'application/x-executable'],
            },
        },
    },
});
