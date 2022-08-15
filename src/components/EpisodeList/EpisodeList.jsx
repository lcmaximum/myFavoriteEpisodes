import Episode from "../Episode/Episode";
import NewEpisodeForm from "../NewEpisodeForm/NewEpisodeForm";

export default function EpisodeList({ episodeList, addEpisode, user }) {
  let mappedEpisodes = episodeList.map((e) => (
    <Episode key={e._id} info={e} user={user}/>
  ));
  return(
    <div>
      <h1>Your episodes</h1>
     <ul>{mappedEpisodes}</ul>
     <div><NewEpisodeForm addEpisode= {addEpisode} user = {user} /></div>
     </div>
)}