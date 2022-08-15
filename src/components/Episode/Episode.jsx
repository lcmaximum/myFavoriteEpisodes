import { Link } from "react-router-dom";


export default function Episode({ info, user }) {
  return (
    <li>
      <Link to={`/episodes/${info.episodeTitle}`}>
        <span className="episodeDisplayTitle">{info.episodeTitle}</span> ({info.seriesTitle})
      </Link>
      {user.name === info.addedBy ? (
        <>
        <Link to={`/episodes/${info.episodeTitle}/edit`}>edit</Link>
         <Link to={`/episodes/${info._id}/delete`}>delete</Link>

        </>
      ) : (
        <p>added by {info.addedBy}</p>
      )} 
      </li>
  );
}
