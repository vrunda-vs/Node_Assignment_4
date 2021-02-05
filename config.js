module.exports = {
    dbConnection: {
        user: "postgres",
        password: "123456",
        host: "localhost",
        database: "demo",
        port: 5432
    },
    server: {
        PORT: 3000,
    },
    jwtConfig: {
        algorithm: "HS256",
        secretKey: "Test@12345",
    },

};