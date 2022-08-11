import { useParams } from "react-router-dom";

export default function EpisodeDetail({ episodes }) {
  let { epID } = useParams();
  let thisEp = episodes.find((ep) => ep.id == epID);

  return (
    <div>
      {" "}
      <h1>{thisEp.episodeTitle}</h1>
      <h2> {thisEp.seriesTitle}</h2>
    </div>
  );
}