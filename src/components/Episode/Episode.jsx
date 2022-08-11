import { Link } from "react-router-dom";

export default function Episode({ info }) {
  return (
    <li>
      <Link to={`/episodes/${info.id}`}>
        {info.episodeTitle} ({info.seriesTitle})
      </Link>
    </li>
  );
}
