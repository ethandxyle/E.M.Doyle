

const MovieCard=({data})=>{
    const {title,overview,vote_average,poster_path}=data
    return(
        <>
        <div style={{border:"red 3px solid"}}>
            <h1>{title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            <p>{overview}</p>
            <p>{vote_average}</p>
        </div>
        </>
    )
}
export default MovieCard