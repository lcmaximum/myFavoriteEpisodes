import { Link } from "react-router-dom";


export default function Episode({ info, user }) {
  console.log('user ', user);
  console.log('user name ', user.name)
  console.log('added by ', info.addedBy)
  return (
    <li>
      <Link to={`/episodes/${info.episodeTitle}`}>
        <span className="episodeDisplayTitle">{info.episodeTitle}</span> ({info.seriesTitle})
      </Link>
      {user._id === info.addedBy ? (
        <>
        <Link to={`/episodes/${info._id}/edit`}>edit</Link>
         <Link to={`/episodes/${info._id}/delete`}>delete</Link>

        </>
      ) : (
        <p>added by {info.addedBy}</p>
      )} 
      </li>
  );
}
