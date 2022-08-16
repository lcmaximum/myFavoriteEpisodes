import { useParams } from "react-router-dom";
import EpisodeReviews from '../../components/EpisodeReviews/EpisodeReviews'
import EpisodeReviewForm from '../../components/EpisodeReviewForm/EpisodeReviewForm'

export default function EpisodeDetail({ episodes, user }) {
  let { epTitle } = useParams();
 
  let thisEp = episodes.find((ep) => ep.episodeTitle === epTitle);
console.log('thisEp added by ', thisEp.addedBy);
console.log('user ', user._id);
let fakeReviews = [{displayName:'fakeUserD', content:'love this ep'}, {displayName: 'fakeuserE', content: "it's ok"}]

  return (
    <div>
      {" "}
      <h1>{thisEp.episodeTitle}</h1>
      <h2> "{thisEp.seriesTitle}", season {thisEp.seriesSeasonNum}, episode {thisEp.seasonEpisodeNum}</h2>
     {user._id === thisEp.addedBy ? <h3>added by you</h3> 
     : 
     <h3>Added by {thisEp.addedBy.name}</h3> }
      <EpisodeReviews reviews={fakeReviews}/>
     <EpisodeReviewForm episode={thisEp}/>

    </div>
  );
}