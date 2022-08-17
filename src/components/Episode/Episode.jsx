import { Link } from "react-router-dom";


export default function Episode({ info, user }) {
  console.log('user ', user);
  console.log('user name ', user.name)
  console.log('added by ', info.addedBy)
  return (
    <li><div className="episodeCard">
      <Link to={`/episodes/${info.episodeTitle}`}>
        <div className="episodeDisplayTitle">{info.episodeTitle}</div> 
        <div className="seriesDisplayTitle">{info.seriesTitle}</div>
        <div className="seasonNumDisplay">season {info.seriesSeasonNum}</div>
        <div className="episodeNumDisplay">episode {info.seasonEpisodeNum}</div></Link>
      </div>
      {user._id === info.addedBy ? (
        <>
        <span className="editButton"><Link to={`/episodes/${info._id}/edit`}>edit details</Link></span>
         <span className="deleteButton"><Link to={`/episodes/${info._id}/delete`}>delete episode</Link></span>

        </>
      ) : (
        <p>added by {info.addedBy}</p>
      )} 
      </li>
  );
}
