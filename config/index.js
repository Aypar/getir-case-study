module.exports = {
    server: {
        host: process.env.HOST || '127.0.0.1',
        port: process.env.PORT || 3000
    },
    database: {
        uri: process.env.DATABASE_URI || 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true'
    }
}
