import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";

import EpisodeList from "../../components/EpisodeList/EpisodeList.jsx";
import EpisodeDetail from "../EpisodeDetail/EpisodeDetail";
import NavBar from "../../components/NavBar/NavBar";


export default function App() {
  const [user, setUser] = useState(getUser());

  const [episodes, setEpisodes] = useState([
    {
      seriesTitle: "Severance",
      seriesSeasonNum: 1,
      seasonEpisodeNum: 1,
      episodeTitle: "The Good News About Hell"
    },
    {
      seriesTitle: "Friends",
      seriesSeasonNum: 6,
      seasonEpisodeNum: 9,
      episodeTitle: "The One Where Ross Got High"
    },
    {
      seriesTitle: "The Rehearsal",
      seriesSeasonNum: 1,
      seasonEpisodeNum: 2,
      episodeTitle: "Scion"
    }
  ]);
  
  function addEpisode(episode) {
    setEpisodes([...episodes, episode]);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>        <Route path="/" element={<EpisodeList episodeList={episodes} addEpisode= {addEpisode} />} />
        <Route
          path="/episodes/:epTitle"
          element={<EpisodeDetail episodes={episodes}  />}
        /></Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
