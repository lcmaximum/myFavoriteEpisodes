 import { useState } from "react";

export default function NewEpisodeForm({ addEpisode }) {
  const [newEpisode, setNewEpisode] = useState({ seriesTitle: "", episodeTitle: "", seriesSeasonNum: 1, seasonEpisodeNum: 1 });



  function handleAddEpisode() {
    addEpisode(newEpisode);
    setNewEpisode({ seriesTitle: "", episodeTitle: "", seriesSeasonNum: 1, seasonEpisodeNum: 1});
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

      <select
        value={newEpisode.seriesSeasonNum}
        onChange={(e) =>
          setNewEpisode({ seriesTitle: newEpisode.seriesTitle, episodeTitle: newEpisode.episodeTitle, 
            seriesSeasonNum: e.target.value, seasonEpisodeNum: newEpisode.seasonEpisodeNum})
        }
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>

      <button onClick={handleAddEpisode}>ADD</button>
    </div>
  );
}
