import * as episodesAPI from './episodes-api'



export async function createEpisode(episodeData) {
  return await episodesAPI.createEpisode(episodeData)
     } 