require('dotenv').config()

const PORT = process.env.PORT
const BASE_URL = process.env.BASE_URL
const X_RAPIDAPI_HOST = process.env.X_RAPIDAPI_HOST
const X_RAPIDAPI_KEY = process.env.X_RAPIDAPI_KEY

module.exports = {
    BASE_URL,
    PORT,
    X_RAPIDAPI_HOST,
    X_RAPIDAPI_KEY
}