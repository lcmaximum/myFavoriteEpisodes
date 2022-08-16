import * as episodesAPI from './episodes-api'

export async function getEpisodes() {
  return await episodesAPI.getEpisodes()
     } 

export async function createEpisode(episodeData) {
  return await episodesAPI.createEpisode(episodeData)
     } 

export async function updateEpisode(episodeData) {
      return await episodesAPI.updateEpisode(episodeData)
    }

export async function deleteEpisode(episode) {
  return await episodesAPI.deleteEpisode(episode)
         } 