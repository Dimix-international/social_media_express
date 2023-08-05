import dotenv from 'dotenv';
dotenv.config();

export default  {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET_ACCESS: process.env.JWT_SECRET,
    JWT_SECRET_REFRESH: process.env.JWT_SECRET,
}

