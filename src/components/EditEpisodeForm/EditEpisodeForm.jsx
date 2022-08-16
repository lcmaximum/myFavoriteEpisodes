import {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as episodesAPI from '../../utilities/episodes-api';

export default function EditEpisodeForm({episodes, setEpisodes}){
    const { _id } = useParams();
    console.log(_id)
    const navigate = useNavigate();

    
 
    let thisEp = episodes.find((ep) => ep._id === _id);
    
    const [formData, setFormData] = useState({
        seriesTitle: thisEp.seriesTitle,
        episodeTitle: thisEp.episodeTitle,
        seriesSeasonNum: thisEp.seriesSeasonNum,
        seasonEpisodeNum: thisEp.seasonEpisodeNum
    
      })

    async function updateEpisode(formData){
        const updatedEpisode = await episodesAPI.updateEpisode(formData, _id);
        const episodesCopy = [...episodes] //heyyyyy this is the copy
        const idx = episodesCopy.findIndex((ep) => ep._id === updatedEpisode._id )
        episodesCopy.splice(idx,1,updatedEpisode);
        setEpisodes(episodesCopy);
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        updateEpisode(formData);
        navigate(-1)
    }

    return (
        <>
            <h1>Edit Details</h1>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Episode Title:</label>
                    <input type="text" name="episodeTitle" value={formData.episodeTitle} placeholder={thisEp.episodeTitle} onChange={handleChange} required />
                    <label>Season </label>
                    <input type="text" name="seriesSeasonNum" value={formData.seriesSeasonNum} placeholder={thisEp.seriesSeasonNum} onChange={handleChange} required />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{formData.error}</p>
        </>
    )
}
