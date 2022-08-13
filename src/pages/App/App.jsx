import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import { getEpisodes, createEpisode } from "../../utilities/episodes-service";
import EpisodeList from "../../components/EpisodeList/EpisodeList.jsx";
import EpisodeDetail from "../EpisodeDetail/EpisodeDetail";
import NavBar from "../../components/NavBar/NavBar";


export default function App() {
  const [user, setUser] = useState(getUser());

  const [episodes, setEpisodes] = useState([]);
  
  function addEpisode(episode) {
  createEpisode(episode); 
 setEpisodes([...episodes, episode]);
  //HEYY-ERRHANDLING
  }
    
useEffect(function() {
  async function fetchData() {

    const episodes = await getEpisodes() //getting array from server
  setEpisodes(episodes);
  }
  //calling api is  a side effect (ext service)
  fetchData()
}, []) // 2nd argument calls useEffect again when [episodes] changes

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>        
            <Route path="/" element={<EpisodeList episodeList={episodes} addEpisode= {addEpisode} />} />
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
