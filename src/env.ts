function requiredEnv(name : string){
    const value = process.env[name] 
    if(!value) {
        throw new Error(`Missing Environment Variable : ${name}`)
    }
    return value
}


export const env = {
    SMTP_USER : requiredEnv("SMTP_USER"),
    SMTP_HOST : requiredEnv("SMTP_HOST"),
    SMTP_PASS : requiredEnv("SMTP_PASS"),
    MONGODB_URI : requiredEnv("MONGODB_URI"),
    SMTP_PORT : Number(requiredEnv("SMTP_PORT")),
    GOOGLE_CLIENT_ID : requiredEnv("GOOGLE_CLIENT_ID"),
    GOOGLE_CLIENT_SECRET : requiredEnv("GOOGLE_CLIENT_SECRET"),
    MONGODB_AUTH_DATABASE : requiredEnv("MONGODB_AUTH_DATABASE"),
    MONGODB_LIBRARY_URI : requiredEnv("MONGODB_LIBRARY_URI"),
}
