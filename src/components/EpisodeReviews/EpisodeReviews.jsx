

export default function EpisodeReviews({reviews}){
   
    const reviewMap = reviews.map((r) => (
        <>
        <h5>{r.displayName}</h5>
        {r.content}
        </>
    ))

    return <>
    <h2>REVIEWS OF THIS EPISODE (HARD-CODED)</h2>
    <ul>{reviewMap}</ul>
    </>
}