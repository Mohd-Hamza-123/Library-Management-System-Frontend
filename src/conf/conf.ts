const conf = {
    BASE_URL: String(process.env.BASE_URL),
    SMTP_PASS: String(process.env.SMTP_PASS),
    SMTP_HOST: String(process.env.SMTP_HOST),
    SMTP_PORT: Number(process.env.SMTP_PORT),
    SMTP_USER: String(process.env.SMTP_USER),
    MONGO_DB_URI: String(process.env.MONGO_DB_URI),
    NEXT_PUBLIC_BETTER_AUTH_URL: String(process.env.NEXT_PUBLIC_BETTER_AUTH_URL),
    BETTER_AUTH_SECRET: String(process.env.BETTER_AUTH_SECRET),
    MONGO_DB_DATABASE_1: String(process.env.MONGO_DB_DATABASE_1),
    MONGO_DB_LIBRARY_URI : String(process.env.MONGO_DB_LIBRARY_URI),
    GOOGLE_CLIENT_ID: String(process.env.GOOGLE_CLIENT_ID),
    GOOGLE_CLIENT_SECRET: String(process.env.GOOGLE_CLIENT_SECRET),
}

export default conf