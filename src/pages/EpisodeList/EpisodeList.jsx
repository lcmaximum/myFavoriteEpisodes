import Episode from "../../components/Episode/Episode";

export default function EpisodeList({ episodeList }) {
  let mappedEpisodes = episodeList.map((e) => (
    <Episode key={e.episodeTitle} info={e} />
  ));
  return <ul>{mappedEpisodes}</ul>;
}