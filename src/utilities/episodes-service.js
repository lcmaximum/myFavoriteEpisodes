import * as episodesAPI from './episodes-api'

export async function getEpisodes() {
  return await episodesAPI.getEpisodes()
     } 

export async function createEpisode(episodeData) {
  return await episodesAPI.createEpisode(episodeData)
     } 