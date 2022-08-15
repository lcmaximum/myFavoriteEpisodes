import { useParams } from "react-router-dom";

export default function EpisodeDetail({ episodes, user }) {
  let { epTitle } = useParams();
 
  let thisEp = episodes.find((ep) => ep.episodeTitle === epTitle);
console.log('thisEp added by ', thisEp.addedBy);
console.log('user ', user._id);

  return (
    <div>
      {" "}
      <h1>{thisEp.episodeTitle}</h1>
      <h2> {thisEp.seriesTitle}</h2>
     {user._id === thisEp.addedBy ? <h3>added by you</h3> 
     : 
     <h3>Added by {thisEp.addedBy.name}</h3> }
    </div>
  );
}