import Episode from "../Episode/Episode";
import NewEpisodeForm from "../NewEpisodeForm/NewEpisodeForm";

export default function EpisodeList({ episodeList, addEpisode, user }) {
  let mappedEpisodes = episodeList.map((e) => (
    <Episode key={e.episodeTitle} info={e} user={user}/>
  ));
  return(
    <div>
     <ul>{mappedEpisodes}</ul>
     <div><NewEpisodeForm addEpisode= {addEpisode} user = {user} /></div>
     </div>
)}