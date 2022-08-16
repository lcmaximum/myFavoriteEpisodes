

export default function EpisodeReviews(){
    let fakeReviews = [{displayName:'fakeUserD', content:'love this ep'}, {displayName: 'fakeuserE', content: "it's ok"}]
    const reviewMap = fakeReviews.map((r) => (
        <>
        <h5>{r.displayName}</h5>
        {r.content}
        </>
    ))

    return <>
    <h2>REVIEWS OF THIS EPISODE (HARD-CODED IN REVIEW COMPONENT)</h2>
    <ul>{reviewMap}</ul>
    </>
}