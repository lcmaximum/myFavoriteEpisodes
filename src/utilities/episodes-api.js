import sendRequest from './send-request'
const BASE_URL = '/api/episodes' 

export async function getEpisodes() {
    return sendRequest(BASE_URL, 'GET')
}

export async function createEpisode(episodeData) {
    return sendRequest(BASE_URL, 'POST', episodeData)
}

/*export async function createEpisode(episodeData) {
    const token = await episodesAPI.HEYCHRIS(episodeData)
    //localStorage.setItem('token', token)
    return } */