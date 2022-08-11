import Episode from "../Episode/Episode";
import NewEpisodeForm from "../NewEpisodeForm/NewEpisodeForm";

export default function EpisodeList({ episodeList, addEpisode }) {
  let mappedEpisodes = episodeList.map((e) => (
    <Episode key={e.episodeTitle} info={e} />
  ));
  return(
    <div>
     <ul>{mappedEpisodes}</ul>
     <div><NewEpisodeForm addEpisode= {addEpisode} /></div>
     </div>
)}