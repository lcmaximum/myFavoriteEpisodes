import Episode from "../Episode/Episode";
import NewEpisodeForm from "../NewEpisodeForm/NewEpisodeForm";
import "./EpisodeList.css"

export default function EpisodeList({ episodeList, addEpisode, user }) {
  let mappedEpisodes = episodeList.map((e) => (
    <Episode key={e.episodeTitle} info={e} user={user}/>
  ));
  return(
    <div>
      <div className="episodeListHeader"><h1>Your episodes</h1></div>
  
   <div className="ep-list-and-form">   
     <ul>{mappedEpisodes}</ul>

     <div><NewEpisodeForm addEpisode= {addEpisode} user = {user} /></div>
     </div>
     </div>
)}