import sendRequest from './send-request'
const BASE_URL = '/api/episodes' 

export async function getEpisodes(user) {
    return sendRequest(BASE_URL, 'GET', user)
}

export async function createEpisode(episodeData) {
    return sendRequest(BASE_URL, 'POST', episodeData)
}

export async function updateEpisode(episodeData, id) {
    return sendRequest(`${BASE_URL}/${id}/edit`, 'PUT', episodeData) // add
}

export async function deleteEpisode(episode) {
    return sendRequest(BASE_URL, 'DELETE', episode)
}