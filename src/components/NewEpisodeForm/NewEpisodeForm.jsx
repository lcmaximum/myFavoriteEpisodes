 import { useState } from "react";

export default function NewEpisodeForm({ addEpisode }) {
  const [newEpisode, setNewEpisode] = useState(
    { seriesTitle: "", 
    episodeTitle: "", 
    seriesSeasonNum: 1, 
    seasonEpisodeNum: 1 });



  function handleAddEpisode() {
    addEpisode(newEpisode);
    setNewEpisode({ seriesTitle: "", 
    episodeTitle: "", 
    seriesSeasonNum: 1, 
    seasonEpisodeNum: 1});
  }

  return (
    <div className="NewEpisodeForm">
      <input
        type="text"
        value={newEpisode.seriesTitle}
        placeholder="Series"
        onChange={(e) =>
          setNewEpisode({ seriesTitle: e.target.value, episodeTitle: newEpisode.episodeTitle, seriesSeasonNum: newEpisode.seriesSeasonNum,
        seasonEpisodeNum: newEpisode.seasonEpisodeNum })
        }
      />
    {/* seriesTitle: "Severance",
      seriesSeasonNum: 1,
      seasonEpisodeNum: 1,
    episodeTitle: "The Good News About Hell" */}
          <input
        type="text"
        value={newEpisode.episodeTitle}
        placeholder="Episode Title"
        onChange={(e) =>
          setNewEpisode({ seriesTitle: newEpisode.seriesTitle, episodeTitle: e.target.value, seriesSeasonNum: newEpisode.seriesSeasonNum,
        seasonEpisodeNum: newEpisode.seasonEpisodeNum })
        }  />
      <input type="text"
        value={newEpisode.seriesSeasonNum}
        placeholder="Season #"
        onChange={(e) =>
          setNewEpisode({ seriesTitle: newEpisode.seriesTitle, episodeTitle: newEpisode.episodeTitle, 
            seriesSeasonNum: e.target.value, seasonEpisodeNum: newEpisode.seasonEpisodeNum})
        }
      />
      <input
        type="text"
        value={newEpisode.seasonEpisodeNum}
        placeholder="Episode #"
        onChange={(e) =>
          setNewEpisode({ seriesTitle: newEpisode.seriesTitle, episodeTitle: newEpisode.episodeTitle, seriesSeasonNum: newEpisode.seriesSeasonNum,
        seasonEpisodeNum: e.target.value })
        } />
      <button onClick={handleAddEpisode}>ADD</button>
    </div>
  );
}
