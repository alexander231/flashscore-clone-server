const apiRouter = require('express').Router()
const config = require('../utils/config')
const axios = require('axios')
const method = 'GET'
const baseUrl = config.BASE_URL
const headers = {
    'x-rapidapi-host': config.X_RAPIDAPI_HOST,
    'x-rapidapi-key': config.X_RAPIDAPI_KEY
}

const optionsCountries = {
    method,
    url: `${baseUrl}/countries`,
    headers
}
const optionsLeague = {
    method,
    url: `${baseUrl}/leagues`,
    headers
}
const optionsStandings = {
    method,
    url: `${baseUrl}/standings`,
    headers
}
const optionsFixtures= {
    method,
    url: `${baseUrl}/fixtures`,
    headers
}
apiRouter.get('/countries', async (request, response, next) => {
    const apiResponse = await axios.request(optionsCountries)
    response.status(200).json(apiResponse.data.response)
})
apiRouter.get('/leagues/:id', async (request, response, next) => {
    const country = request.params.id
    optionsLeague.params = { country }
    const apiResponse = await axios.request(optionsLeague)
    response.status(200).json(apiResponse.data.response)
})
apiRouter.get('/standings', async (request, response, next) => {
    const { season, league } = request.query
    optionsStandings.params = { season, league }
    const apiResponse = await axios.request(optionsStandings)
    response.status(200).json(apiResponse.data.response)
})
apiRouter.get('/fixtures', async (request, response, next) => {
    const { season, league } = request.query
    optionsFixtures.params = { season, league }
    const apiResponse = await axios.request(optionsFixtures)
    response.status(200).json(apiResponse.data.response)
})
apiRouter.get('/', async (request, response, next) => {
    response.send('cox')
})
module.exports = apiRouter