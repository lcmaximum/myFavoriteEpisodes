import {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function DeleteEpisode({props, ep}) {
    const [episode, setEpisode] = useState({});
    const {_id} = useParams();
    const navigate = useNavigate();

    useEffect(
        function () {
            async function deleteEpisodeById() {
                try {
                    const response = await axios.get(`/api/episodes/${_id}`);
                    setEpisode(response.data);

                } catch (error) {
                    console.log('error: '+ error)
                }
            }
            deleteEpisodeById();
        }, 
        [props]
    );

    async function handleDelete() {
        try {
            await axios.delete(`/api/episodes/${_id}`);
            navigate("/");
        } catch (error) {
            console.log("error: ", error);
        }
    }
    return(
        <div className="deleteConfirm">
        <h2>Delete {episode.episodeTitle} from Episodes? </h2>
        
        <button onClick={handleDelete}>Delete</button>
        <Link to="/">Cancel</Link>
        
        </div>
    )
}