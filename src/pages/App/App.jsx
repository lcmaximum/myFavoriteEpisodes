import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import {episodes} from "../../data.js"
import EpisodeList from "../EpisodeList/EpisodeList.jsx";
import EpisodeDetail from "../EpisodeDetail/EpisodeDetail";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>        <Route path="/" element={<EpisodeList episodeList={episodes} />} />
        <Route
          path="/episodes/:epID"
          element={<EpisodeDetail episodes={episodes} />}
        /></Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
