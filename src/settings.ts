import dotenv from 'dotenv';
dotenv.config();

export default  {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017',
    MONGO_DBName: process.env.MONGO_DBName,
    JWT_SECRET_ACCESS: process.env.JWT_SECRET,
    JWT_SECRET_REFRESH: process.env.JWT_SECRET,
}

